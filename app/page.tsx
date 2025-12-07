import Hero from '@/app/components/sections/Hero';
import ProjectsShowcase from '@/app/components/sections/ProjectsShowcase';
import About from '@/app/components/sections/About';
import { getProjects } from '@/app/lib/projects';

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <ProjectsShowcase projects={projects} />
      <About />
    </>
  );
}

