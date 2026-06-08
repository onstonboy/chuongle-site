import { Project } from '@/app/lib/types';
import ProjectCard from '@/app/components/features/ProjectCard';
import StoreLinksCard from '@/app/components/features/StoreLinksCard';
import SectionHeader from '@/app/components/ui/SectionHeader';
import styles from './ProjectsShowcase.module.css';

interface ProjectsShowcaseProps {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section id="projects" className={styles.showcase}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Products"
          title="Our apps"
          description="Independent mobile apps for iOS and Android — from privacy tools and AI-powered social content to creative utilities and lifestyle apps."
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <StoreLinksCard />
      </div>
    </section>
  );
}
