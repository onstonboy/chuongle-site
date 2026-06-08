export interface FocusArea {
  title: string;
  description: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export const SITE = {
  name: 'CDev',
  founder: 'Chuong Le',
  tagline: 'Independent mobile apps for iOS & Android',
  headline: 'Apps that solve real problems',
  description:
    'CDev builds privacy-first utilities, AI-powered tools, and creative apps ' +
    'published on the App Store and Google Play. Every product is designed, ' +
    'developed, and shipped independently.',
  email: 'chuongdev97@gmail.com',
  appStoreUrl: 'https://apps.apple.com/us/developer/chuong-le/id1602451499',
  playStoreUrl:
    'https://play.google.com/store/apps/dev?id=6296625987520320887',
  focusAreas: [
    {
      title: 'Privacy-first utilities',
      description:
        'On-device processing, no cloud uploads. Tools like MaskShot keep ' +
        'sensitive data on your phone.',
    },
    {
      title: 'AI-powered experiences',
      description:
        'Gemini and on-device ML for captions, image analysis, and smart ' +
        'recommendations across our apps.',
    },
    {
      title: 'Creative & lifestyle',
      description:
        'LED displays, daily inspiration, subscription tracking, and social ' +
        'content tools built for everyday use.',
    },
  ] satisfies FocusArea[],
  techGroups: [
    { label: 'Mobile', items: ['Flutter', 'Swift', 'Kotlin', 'Dart'] },
    { label: 'AI & Backend', items: ['Gemini AI', 'Firebase', 'Node.js'] },
    { label: 'Web', items: ['Next.js', 'React', 'TypeScript'] },
  ] satisfies TechGroup[],
  platforms: ['iOS', 'Android', 'Flutter'],
} as const;
