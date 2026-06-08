import { unstable_cache } from 'next/cache';
import gplay from 'google-play-scraper';

export interface StoreStats {
  apps: number;
  ratings: number;
  downloads: number;
}

export interface AppStats {
  apple: StoreStats;
  google: StoreStats;
  totalApps: number;
  totalDownloads: number;
  totalRatings: number;
  yearsBuilding: number;
  isPartial: boolean;
}

const APPLE_DEV_ID = '1602451499';
const GOOGLE_DEV_ID = '6296625987520320887';

const SUPPLEMENTAL_PLAY_IDS = [
  'com.chuongdever.led_board',
  'com.chuongdever.score_counter',
  'com.chuongdever.luckycard',
  'com.cdev.ai_caption',
];

const STARTED_YEAR = 2022;
const APPLE_TIMEOUT_MS = 12_000;
const GOOGLE_TIMEOUT_MS = 20_000;
const GOOGLE_BATCH_SIZE = 5;

interface ItunesApp {
  wrapperType?: string;
  userRatingCount?: number;
}

interface ItunesResponse {
  results: ItunesApp[];
}

async function fetchAppleStatsInner(): Promise<StoreStats> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APPLE_TIMEOUT_MS);

  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${APPLE_DEV_ID}&entity=software`,
      {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0' },
      }
    );

    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`iTunes API ${res.status}`);

    const json: ItunesResponse = await res.json();
    const apps = json.results.filter((r) => r.wrapperType === 'software');
    const ratings = apps.reduce((sum, a) => sum + (a.userRatingCount ?? 0), 0);

    return { apps: apps.length, ratings, downloads: 0 };
  } catch {
    clearTimeout(timeoutId);
    return { apps: 0, ratings: 0, downloads: 0 };
  }
}

const getCachedAppleStats = unstable_cache(
  fetchAppleStatsInner,
  ['apple-store-stats'],
  { revalidate: 3600, tags: ['store-stats'] }
);

async function fetchAppleStats(): Promise<StoreStats> {
  const deadline = new Promise<StoreStats>((resolve) =>
    setTimeout(() => resolve({ apps: 0, ratings: 0, downloads: 0 }), APPLE_TIMEOUT_MS)
  );
  return Promise.race([getCachedAppleStats(), deadline]);
}

async function fetchPlayAppDetails(
  appIds: string[]
): Promise<{ ratings: number; downloads: number }> {
  let ratings = 0;
  let downloads = 0;

  for (let i = 0; i < appIds.length; i += GOOGLE_BATCH_SIZE) {
    const batch = appIds.slice(i, i + GOOGLE_BATCH_SIZE);
    const results = await Promise.allSettled(
      batch.map((appId) => gplay.app({ appId, lang: 'en', country: 'us' }))
    );

    for (const result of results) {
      if (result.status === 'fulfilled') {
        ratings += result.value.ratings ?? 0;
        downloads += result.value.minInstalls ?? 0;
      }
    }
  }

  return { ratings, downloads };
}

async function fetchGoogleStatsInner(): Promise<StoreStats> {
  const listedApps = await gplay.developer({
    devId: GOOGLE_DEV_ID,
    num: 100,
    lang: 'en',
    country: 'us',
  });

  const listedIds = listedApps.map((a) => a.appId);
  const allIds = Array.from(new Set([...listedIds, ...SUPPLEMENTAL_PLAY_IDS]));
  const { ratings, downloads } = await fetchPlayAppDetails(allIds);

  return {
    apps: allIds.length,
    ratings,
    downloads,
  };
}

const getCachedGoogleStats = unstable_cache(
  fetchGoogleStatsInner,
  ['google-play-stats'],
  { revalidate: 3600, tags: ['store-stats'] }
);

async function fetchGoogleStats(): Promise<StoreStats> {
  const deadline = new Promise<StoreStats>((resolve) =>
    setTimeout(
      () => resolve({ apps: 0, ratings: 0, downloads: 0 }),
      GOOGLE_TIMEOUT_MS
    )
  );
  return Promise.race([getCachedGoogleStats(), deadline]);
}

export async function getAppStats(): Promise<AppStats> {
  const yearsBuilding = new Date().getFullYear() - STARTED_YEAR;

  const [apple, google] = await Promise.all([
    fetchAppleStats(),
    fetchGoogleStats(),
  ]);

  const hasAppleData = apple.apps > 0 || apple.ratings > 0;
  const hasGoogleData =
    google.apps > 0 || google.downloads > 0 || google.ratings > 0;

  return {
    apple,
    google,
    totalApps: Math.max(apple.apps, google.apps),
    totalDownloads: google.downloads,
    totalRatings: apple.ratings + google.ratings,
    yearsBuilding,
    isPartial: !hasAppleData && !hasGoogleData,
  };
}
