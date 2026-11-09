import type { MetadataRoute } from 'next';
import { getProjects } from '@/app/lib/projects';
import { SITE } from '@/app/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const legalUpdated = new Date('2026-10-05');
  const projects = await getProjects();

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${SITE.url}/apps/${project.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
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
