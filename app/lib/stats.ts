import { unstable_cache } from 'next/cache';
import gplay from 'google-play-scraper';

export interface AppStats {
  totalApps: number;
  totalDownloads: number;
  totalRatings: number;
  yearsBuilding: number;
  isPartial: boolean;
}

const APPLE_DEV_ID = '1602451499';
const GOOGLE_DEV_ID = '6296625987520320887';

/**
 * Older apps registered under a different package prefix that don't appear
 * in the developer listing endpoint but are still live on Google Play.
 */
const SUPPLEMENTAL_PLAY_IDS = [
  'com.chuongdever.led_board',
  'com.chuongdever.score_counter',
  'com.chuongdever.luckycard',
];

const STARTED_YEAR = 2022;
const APPLE_TIMEOUT_MS = 10_000;
const GOOGLE_TIMEOUT_MS = 8_000;

interface ItunesApp {
  wrapperType?: string;
  userRatingCount?: number;
}

interface ItunesResponse {
  results: ItunesApp[];
}

async function fetchAppleStats(): Promise<{ apps: number; ratings: number }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APPLE_TIMEOUT_MS);

  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${APPLE_DEV_ID}&entity=software`,
      {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0' },
        next: { revalidate: 3600 },
      }
    );

    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`iTunes API ${res.status}`);

    const json: ItunesResponse = await res.json();
    const apps = json.results.filter((r) => r.wrapperType === 'software');
    const ratings = apps.reduce((sum, a) => sum + (a.userRatingCount ?? 0), 0);

    return { apps: apps.length, ratings };
  } catch {
    clearTimeout(timeoutId);
    return { apps: 0, ratings: 0 };
  }
}

async function fetchGoogleStatsInner(): Promise<{ ratings: number; downloads: number }> {
  const listedApps = await gplay.developer({
    devId: GOOGLE_DEV_ID,
    num: 100,
    lang: 'en',
    country: 'us',
  });

  const listedIds = listedApps.map((a) => a.appId);
  const allIds = Array.from(new Set([...listedIds, ...SUPPLEMENTAL_PLAY_IDS]));

  const results = await Promise.allSettled(
    allIds.map((appId) => gplay.app({ appId, lang: 'en', country: 'us' }))
  );

  let ratings = 0;
  let downloads = 0;

  for (const result of results) {
    if (result.status === 'fulfilled') {
      ratings += result.value.ratings ?? 0;
      downloads += result.value.minInstalls ?? 0;
    }
  }

  return { ratings, downloads };
}

const getCachedGoogleStats = unstable_cache(
  fetchGoogleStatsInner,
  ['google-play-stats'],
  { revalidate: 3600, tags: ['store-stats'] }
);

async function fetchGoogleStats(): Promise<{ ratings: number; downloads: number }> {
  const deadline = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Google Play timeout')), GOOGLE_TIMEOUT_MS)
  );
  try {
    return await Promise.race([getCachedGoogleStats(), deadline]);
  } catch {
    return { ratings: 0, downloads: 0 };
  }
}

export async function getAppStats(): Promise<AppStats> {
  const yearsBuilding = new Date().getFullYear() - STARTED_YEAR;

  const [apple, google] = await Promise.all([fetchAppleStats(), fetchGoogleStats()]);

  return {
    totalApps: apple.apps,
    totalDownloads: google.downloads,
    totalRatings: apple.ratings + google.ratings,
    yearsBuilding,
    isPartial: apple.apps === 0,
  };
}
