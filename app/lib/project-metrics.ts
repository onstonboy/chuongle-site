import { unstable_cache } from 'next/cache';
import gplay from 'google-play-scraper';
import { Project } from './types';

export interface ProjectMetrics {
  downloads: number;
  rating: number;
  ratingCount: number;
  screenshots: string[];
}

const APPLE_TIMEOUT_MS = 8_000;
const GOOGLE_TIMEOUT_MS = 12_000;
const GOOGLE_BATCH_SIZE = 5;
const MAX_SCREENSHOTS = 8;

interface ItunesApp {
  averageUserRating?: number;
  userRatingCount?: number;
  screenshotUrls?: string[];
}

interface ItunesResponse {
  results: ItunesApp[];
}

function normalizeScreenshotUrl(url: string): string {
  if (url.startsWith('http://')) {
    return `https://${url.slice('http://'.length)}`;
  }
  return url;
}

function takeScreenshots(urls: string[] | undefined): string[] {
  if (!urls?.length) return [];
  return urls.slice(0, MAX_SCREENSHOTS).map(normalizeScreenshotUrl);
}

async function fetchAppleMetrics(appStoreId: string): Promise<ProjectMetrics | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APPLE_TIMEOUT_MS);

  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${appStoreId}&country=us`,
      {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0' },
      }
    );

    if (!res.ok) return null;

    const json: ItunesResponse = await res.json();
    const app = json.results[0];
    if (!app) return null;

    return {
      downloads: 0,
      rating: app.averageUserRating ?? 0,
      ratingCount: app.userRatingCount ?? 0,
      screenshots: takeScreenshots(app.screenshotUrls),
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchGoogleMetrics(playStoreId: string): Promise<ProjectMetrics | null> {
  try {
    const app = await gplay.app({
      appId: playStoreId,
      lang: 'en',
      country: 'us',
    });

    return {
      downloads: app.minInstalls ?? 0,
      rating: app.score ?? 0,
      ratingCount: app.ratings ?? 0,
      screenshots: takeScreenshots(app.screenshots),
    };
  } catch {
    return null;
  }
}

function mergeMetrics(
  apple: ProjectMetrics | null,
  google: ProjectMetrics | null
): ProjectMetrics {
  const downloads = Math.max(apple?.downloads ?? 0, google?.downloads ?? 0);
  const ratingCount = (apple?.ratingCount ?? 0) + (google?.ratingCount ?? 0);

  let rating = 0;
  const appleWeight = apple?.ratingCount ?? 0;
  const googleWeight = google?.ratingCount ?? 0;
  const totalWeight = appleWeight + googleWeight;

  if (totalWeight > 0) {
    rating =
      ((apple?.rating ?? 0) * appleWeight + (google?.rating ?? 0) * googleWeight) /
      totalWeight;
  } else {
    rating = Math.max(apple?.rating ?? 0, google?.rating ?? 0);
  }

  const screenshots =
    apple?.screenshots.length
      ? apple.screenshots
      : google?.screenshots ?? [];

  return { downloads, rating, ratingCount, screenshots };
}

function popularityScore(metrics: ProjectMetrics): number {
  return metrics.downloads + metrics.ratingCount * 25;
}

async function fetchMetricsForProject(
  project: Project
): Promise<ProjectMetrics | null> {
  const [apple, google] = await Promise.all([
    project.appStoreId ? fetchAppleMetrics(project.appStoreId) : null,
    project.playStoreId ? fetchGoogleMetrics(project.playStoreId) : null,
  ]);

  if (!apple && !google) return null;
  return mergeMetrics(apple, google);
}

async function enrichProjectsInner(projects: Project[]): Promise<Project[]> {
  const enriched: Project[] = [];

  for (let i = 0; i < projects.length; i += GOOGLE_BATCH_SIZE) {
    const batch = projects.slice(i, i + GOOGLE_BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (project) => {
        const metrics = await fetchMetricsForProject(project);
        if (!metrics) return project;

        const screenshots =
          project.screenshots?.length
            ? project.screenshots.slice(0, MAX_SCREENSHOTS)
            : metrics.screenshots;

        return {
          ...project,
          downloads: metrics.downloads,
          rating: metrics.rating,
          ratingCount: metrics.ratingCount,
          ...(screenshots.length > 0 ? { screenshots } : {}),
        };
      })
    );
    enriched.push(...results);
  }

  let bestIndex = -1;
  let bestScore = 0;

  enriched.forEach((project, index) => {
    const score = popularityScore({
      downloads: project.downloads ?? 0,
      rating: project.rating ?? 0,
      ratingCount: project.ratingCount ?? 0,
      screenshots: project.screenshots ?? [],
    });

    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  if (bestIndex >= 0 && bestScore > 0) {
    enriched[bestIndex] = { ...enriched[bestIndex], isRecommended: true };
  }

  return enriched;
}

const getCachedEnrichedProjects = unstable_cache(
  async (serialized: string) => {
    const projects = JSON.parse(serialized) as Project[];
    return enrichProjectsInner(projects);
  },
  ['project-store-metrics-v3'],
  { revalidate: 3600, tags: ['store-stats', 'project-metrics'] }
);

export async function enrichProjectsWithMetrics(
  projects: Project[]
): Promise<Project[]> {
  const deadline = new Promise<Project[]>((resolve) =>
    setTimeout(() => resolve(projects), GOOGLE_TIMEOUT_MS)
  );

  return Promise.race([
    getCachedEnrichedProjects(JSON.stringify(projects)),
    deadline,
  ]);
}
