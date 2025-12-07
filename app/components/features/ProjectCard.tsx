'use client';

import { Project } from '@/app/lib/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  variant?: 'large' | 'medium' | 'small';
  index: number;
}

export default function ProjectCard({ project, variant = 'medium', index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${styles[variant]} ${isVisible ? styles.visible : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        {!imageError ? (
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={400}
            height={200}
            className={styles.image}
            loading={index < 3 ? 'eager' : 'lazy'}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>{project.name}</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        {project.features.length > 0 && (
          <ul className={styles.features}>
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className={styles.feature}>{feature}</li>
            ))}
          </ul>
        )}
        <a
          href={project.landingPageUrl}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </article>
  );
}

