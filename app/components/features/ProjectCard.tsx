'use client';

import { Project } from '@/app/lib/types';
import { formatDownloads, formatRating } from '@/app/lib/format-metrics';
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

  const downloadsLabel = formatDownloads(project.downloads ?? 0);
  const ratingLabel = formatRating(project.rating ?? 0);
  const hasStats = Boolean(downloadsLabel || ratingLabel);
  const isHighlighted = project.isRecommended || project.isSpotlight;
  const bannerLabel = project.isRecommended
    ? 'Recommended'
    : project.isSpotlight
      ? 'Also try'
      : null;
  const ctaLabel = isHighlighted ? 'Try this app' : 'Learn more';
  const screenshots = project.screenshots ?? [];
  const previewDuration = `${Math.max(14, screenshots.length * 2.8)}s`;

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.visible : ''} ${
        project.isRecommended ? styles.recommended : ''
      } ${project.isSpotlight ? styles.spotlight : ''}`}
      style={{
        animationDelay: `${index * 0.06}s`,
        '--tilt-x': `${tilt.x}deg`,
        '--tilt-y': `${tilt.y}deg`,
        '--preview-duration': previewDuration,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {bannerLabel && (
        <div
          className={
            project.isRecommended
              ? styles.recommendedBanner
              : styles.spotlightBanner
          }
        >
          {bannerLabel}
        </div>
      )}

      <div className={styles.header}>
        <div className={styles.iconWrap}>
          {!imageError ? (
            project.imageUrl.startsWith('http') ? (
              <img
                src={project.imageUrl}
                alt={`${project.name} app icon`}
                width={56}
                height={56}
                className={styles.icon}
                loading={index < 4 ? 'eager' : 'lazy'}
                onError={() => setImageError(true)}
              />
            ) : (
              <Image
                src={project.imageUrl}
                alt={`${project.name} app icon`}
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

        {hasStats && (
          <p className={styles.stats} aria-label="Store performance">
            {downloadsLabel && (
              <span className={styles.stat}>
                <span className={styles.statValue}>{downloadsLabel}</span>
                <span className={styles.statLabel}>downloads</span>
              </span>
            )}
            {downloadsLabel && ratingLabel && (
              <span className={styles.statDivider} aria-hidden="true" />
            )}
            {ratingLabel && (
              <span className={styles.stat}>
                <span className={styles.statValue}>{ratingLabel}</span>
                <span className={styles.statLabel}>rating</span>
              </span>
            )}
          </p>
        )}

        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        {screenshots.length > 0 && (
          <div className={styles.preview} aria-label={`${project.name} preview`}>
            <div className={styles.previewTrack}>
              {[...screenshots, ...screenshots].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className={styles.previewFrame}
                  aria-hidden={i >= screenshots.length}
                >
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${(i % screenshots.length) + 1}`}
                    className={styles.previewImage}
                    loading={index < 3 && i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
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
        {ctaLabel}
        <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </article>
  );
}
