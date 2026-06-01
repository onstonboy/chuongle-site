import { Suspense } from 'react';
import Hero from '@/app/components/sections/Hero';
import ProjectsShowcase from '@/app/components/sections/ProjectsShowcase';
import About from '@/app/components/sections/About';
import StatsCounter from '@/app/components/features/StatsCounter';
import StatsBoundary from '@/app/components/ui/StatsBoundary';
import { getProjects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

export const revalidate = 3600;

export default async function HomePage() {
  let projects: Project[] = [];
  try {
    projects = await getProjects();
  } catch (error) {
    console.error('[HomePage] Failed to load projects:', error);
    projects = [];
  }

  return (
    <>
      <Hero />
      <StatsBoundary>
        <Suspense fallback={null}>
          <StatsCounter />
        </Suspense>
      </StatsBoundary>
      <ProjectsShowcase projects={projects} />
      <About />
    </>
  );
}

