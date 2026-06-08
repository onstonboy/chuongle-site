'use client';

import { Project } from '@/app/lib/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CATEGORY_LABELS: Record<Project['category'], string> = {
  mobile: 'Mobile',
  web: 'Web',
  both: 'Mobile & Web',
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{
        animationDelay: `${index * 0.06}s`,
        '--tilt-x': `${tilt.x}deg`,
        '--tilt-y': `${tilt.y}deg`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          {!imageError ? (
            project.imageUrl.startsWith('http') ? (
              <img
                src={project.imageUrl}
                alt=""
                width={56}
                height={56}
                className={styles.icon}
                loading={index < 4 ? 'eager' : 'lazy'}
                onError={() => setImageError(true)}
              />
            ) : (
              <Image
                src={project.imageUrl}
                alt=""
                width={56}
                height={56}
                className={styles.icon}
                loading={index < 4 ? 'eager' : 'lazy'}
                onError={() => setImageError(true)}
              />
            )
          ) : (
            <div className={styles.iconPlaceholder}>
              {project.name.charAt(0)}
            </div>
          )}
        </div>

        <span className={styles.category}>
          {CATEGORY_LABELS[project.category]}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>

        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        {project.features.length > 0 && (
          <ul className={styles.features}>
            {project.features.slice(0, 2).map((feature, i) => (
              <li key={i} className={styles.feature}>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.technologies.length > 0 && (
          <ul className={styles.tech}>
            {project.technologies.slice(0, 3).map((tech) => (
              <li key={tech} className={styles.techTag}>
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>

      <a
        href={project.landingPageUrl}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
        <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </article>
  );
}
