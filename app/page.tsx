import Hero from '@/app/components/sections/Hero';
import ProjectsShowcase from '@/app/components/sections/ProjectsShowcase';
import About from '@/app/components/sections/About';
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
      <ProjectsShowcase projects={projects} />
      <About />
    </>
  );
}

