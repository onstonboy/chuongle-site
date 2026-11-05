import { Project } from '@/app/lib/types';
import ProjectCard from '@/app/components/features/ProjectCard';
import StoreLinksCard from '@/app/components/features/StoreLinksCard';
import SectionHeader from '@/app/components/ui/SectionHeader';
import styles from './ProjectsShowcase.module.css';

interface ProjectsShowcaseProps {
  projects: Project[];
}

interface ProjectGroupProps {
  title: string;
  projects: Project[];
}

function ProjectGroup({ title, projects }: ProjectGroupProps) {
  if (projects.length === 0) return null;

  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const mobileProjects = projects.filter((p) => p.category !== 'macos');
  const macosProjects = projects.filter((p) => p.category === 'macos');

  return (
    <section id="projects" className={styles.showcase}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Products"
          title="Our apps"
          description="Independent apps for iOS, Android and macOS — from privacy tools and AI-powered social content to creative utilities and developer tools."
        />

        <ProjectGroup title="Mobile apps" projects={mobileProjects} />
        <ProjectGroup title="macOS" projects={macosProjects} />

        <StoreLinksCard />
      </div>
    </section>
  );
}
