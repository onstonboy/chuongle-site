import type { MetadataRoute } from 'next';
import { SITE } from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const legalUpdated = new Date('2026-10-05');

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy.html`,
      lastModified: legalUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms.html`,
      lastModified: legalUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
