import { Suspense } from 'react';
import type { Metadata } from 'next';
import Hero from '@/app/components/sections/Hero';
import ProjectsShowcase from '@/app/components/sections/ProjectsShowcase';
import Reviews from '@/app/components/sections/Reviews';
import About from '@/app/components/sections/About';
import StatsCounter from '@/app/components/features/StatsCounter';
import StatsBoundary from '@/app/components/ui/StatsBoundary';
import JsonLd from '@/app/components/seo/JsonLd';
import { getProjects } from '@/app/lib/projects';
import { getAppReviews } from '@/app/lib/reviews';
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  absoluteUrl,
  buildHomeJsonLd,
} from '@/app/lib/seo';
import { Project } from '@/app/lib/types';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/'),
    type: 'website',
  },
};

export default async function HomePage() {
  let projects: Project[] = [];
  try {
    projects = await getProjects();
  } catch (error) {
    console.error('[HomePage] Failed to load projects:', error);
    projects = [];
  }

  const reviews = await getAppReviews(projects);

  return (
    <>
      <JsonLd data={buildHomeJsonLd(projects)} />
      <Hero
        projectIcons={projects.map((project) => ({
          id: project.id,
          name: project.name,
          imageUrl: project.imageUrl,
        }))}
      />
      <StatsBoundary>
        <Suspense fallback={null}>
          <StatsCounter />
        </Suspense>
      </StatsBoundary>
      <ProjectsShowcase projects={projects} />
      <Reviews reviews={reviews} />
      <About />
    </>
  );
}
