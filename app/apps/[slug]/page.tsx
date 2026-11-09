import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import JsonLd from '@/app/components/seo/JsonLd';
import { formatDownloads, formatRating } from '@/app/lib/format-metrics';
import { getProjectBySlug, getProjects } from '@/app/lib/projects';
import { absoluteUrl, buildAppJsonLd } from '@/app/lib/seo';
import { SITE } from '@/app/lib/site';
import { getStoreLinks } from '@/app/lib/store-links';
import { Project } from '@/app/lib/types';
import styles from './page.module.css';

export const revalidate = 3600;

interface AppPageProps {
  params: { slug: string };
}

const CATEGORY_LABELS: Record<Project['category'], string> = {
  mobile: 'Mobile',
  web: 'Web',
  both: 'Mobile & Web',
  macos: 'macOS',
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: AppPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};

  const title = `${project.name} — ${SITE.name}`;
  const description = project.description || project.tagline;
  const image = project.imageUrl.startsWith('http')
    ? project.imageUrl
    : absoluteUrl(project.imageUrl);

  return {
    title,
    description,
    alternates: { canonical: `/apps/${project.id}` },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/apps/${project.id}`),
      type: 'website',
      images: [{ url: image }],
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const links = getStoreLinks(project);
  const screenshots = project.screenshots ?? [];
  const downloadsLabel = formatDownloads(project.downloads ?? 0);
  const ratingLabel = formatRating(project.rating ?? 0);
  const isMacos = project.category === 'macos';

  return (
    <>
      <JsonLd data={buildAppJsonLd(project)} />
      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/#projects" className={styles.back}>
            <FiArrowLeft aria-hidden="true" />
            <span>All apps</span>
          </Link>

          <header className={styles.header}>
            <div
              className={`${styles.iconWrap} ${isMacos ? styles.iconWrapMacos : ''}`}
            >
              {isMacos && (
                <div className={styles.macosBar} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              )}
              {project.imageUrl.startsWith('http') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.imageUrl}
                  alt={`${project.name} app icon`}
                  className={styles.icon}
                />
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={`${project.name} app icon`}
                  width={96}
                  height={96}
                  className={styles.icon}
                  priority
                />
              )}
            </div>

            <div className={styles.headerText}>
              <span className={styles.category}>
                {CATEGORY_LABELS[project.category]}
              </span>
              <h1 className={styles.name}>{project.name}</h1>
              {project.tagline && (
                <p className={styles.tagline}>{project.tagline}</p>
              )}

              {(downloadsLabel || ratingLabel) && (
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
                      <FaStar className={styles.star} aria-hidden="true" />
                      <span className={styles.statValue}>{ratingLabel}</span>
                      <span className={styles.statLabel}>rating</span>
                    </span>
                  )}
                </p>
              )}
            </div>
          </header>

          <div className={styles.actions}>
            {links.apple && (
              <a
                href={links.apple}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.storeBtn} ${styles.apple}`}
              >
                <FaApple className={styles.storeLogo} aria-hidden="true" />
                <span className={styles.storeBtnText}>
                  <span className={styles.storeBtnSmall}>Download on the</span>
                  <span className={styles.storeBtnBig}>App Store</span>
                </span>
              </a>
            )}
            {links.google && (
              <a
                href={links.google}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.storeBtn} ${styles.google}`}
              >
                <FaGooglePlay className={styles.storeLogo} aria-hidden="true" />
                <span className={styles.storeBtnText}>
                  <span className={styles.storeBtnSmall}>Get it on</span>
                  <span className={styles.storeBtnBig}>Google Play</span>
                </span>
              </a>
            )}
            <a
              href={project.landingPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.storeBtn} ${styles.website}`}
            >
              <FiExternalLink className={styles.storeLogo} aria-hidden="true" />
              <span className={styles.storeBtnText}>
                <span className={styles.storeBtnSmall}>Learn more on the</span>
                <span className={styles.storeBtnBig}>Website</span>
              </span>
            </a>
          </div>

          {project.description && (
            <p className={styles.description}>{project.description}</p>
          )}

          {screenshots.length > 0 && (
            <section
              className={styles.shotsSection}
              aria-label={`${project.name} screenshots`}
            >
              <div className={styles.shots}>
                {screenshots.map((src, i) => (
                  <div key={src} className={styles.shot}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className={styles.shotImage}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className={styles.columns}>
            {project.features.length > 0 && (
              <section className={styles.column}>
                <h2 className={styles.columnTitle}>Key features</h2>
                <ul className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.technologies.length > 0 && (
              <section className={styles.column}>
                <h2 className={styles.columnTitle}>Built with</h2>
                <ul className={styles.tech}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className={styles.techTag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
