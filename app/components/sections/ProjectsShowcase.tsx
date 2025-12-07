import { Project } from '@/app/lib/types';
import ProjectCard from '@/app/components/features/ProjectCard';
import styles from './ProjectsShowcase.module.css';

interface ProjectsShowcaseProps {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section id="projects" className={styles.showcase}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={index === 0 ? 'large' : index < 3 ? 'medium' : 'small'}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

