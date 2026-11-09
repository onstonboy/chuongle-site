import { unstable_cache } from 'next/cache';
import gplay from 'google-play-scraper';
import { Project } from './types';

export interface AppReview {
  appId: string;
  appName: string;
  rating: number;
  content: string;
  author: string;
}

interface GplayReview {
  score?: number;
  text?: string;
  userName?: string;
}

interface ReviewSource {
  id: string;
  name: string;
  playStoreId: string;
}

const REVIEWS_PER_APP = 2;
const TOTAL_REVIEWS = 9;
const SORT_NEWEST = 2;
const FETCH_BATCH_SIZE = 4;

async function fetchAppReviews(playStoreId: string): Promise<GplayReview[]> {
  try {
    const res = await gplay.reviews({
      appId: playStoreId,
      sort: SORT_NEWEST,
      num: 15,
      lang: 'en',
      country: 'us',
    });
    return res.data ?? [];
  } catch {
    return [];
  }
}

function parseReview(review: GplayReview, app: ReviewSource): AppReview | null {
  const rating = review.score ?? 0;
  const content = review.text?.trim() ?? '';
  const author = review.userName?.trim() ?? '';

  if (rating < 4 || content.length < 40 || content.length > 400) return null;

  return { appId: app.id, appName: app.name, rating, content, author };
}

function reviewScore(review: AppReview): number {
  const lengthScore = Math.max(0, 1 - Math.abs(160 - review.content.length) / 200);
  return review.rating * 10 + lengthScore * 5;
}

const getCachedReviews = unstable_cache(
  async (serialized: string): Promise<AppReview[]> => {
    const sources = JSON.parse(serialized) as ReviewSource[];
    const perApp: AppReview[][] = [];

    for (let i = 0; i < sources.length; i += FETCH_BATCH_SIZE) {
      const batch = await Promise.all(
        sources.slice(i, i + FETCH_BATCH_SIZE).map(async (app) => {
          const entries = await fetchAppReviews(app.playStoreId);
          return entries
            .map((entry) => parseReview(entry, app))
            .filter((review): review is AppReview => review !== null)
            .sort((a, b) => reviewScore(b) - reviewScore(a))
            .slice(0, REVIEWS_PER_APP);
        })
      );
      perApp.push(...batch);
    }

    return perApp
      .flat()
      .sort((a, b) => reviewScore(b) - reviewScore(a))
      .slice(0, TOTAL_REVIEWS);
  },
  ['app-reviews-v1'],
  { revalidate: 86400, tags: ['app-reviews'] }
);

export async function getAppReviews(projects: Project[]): Promise<AppReview[]> {
  const sources = projects.flatMap((project) =>
    project.playStoreId
      ? [
          {
            id: project.id,
            name: project.name,
            playStoreId: project.playStoreId,
          },
        ]
      : []
  );

  if (sources.length === 0) return [];

  try {
    return await getCachedReviews(JSON.stringify(sources));
  } catch {
    return [];
  }
}
