import type { Metadata } from 'next';
import { SITE } from './site';
import type { Project } from './types';

export const SITE_TITLE = `${SITE.name} — Independent Mobile Apps`;
export const SITE_DESCRIPTION = SITE.description;

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized === '/' ? '' : normalized}`;
}

export function buildRootMetadata(): Metadata {
  const ogImage = absoluteUrl('/opengraph-image');

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE_TITLE,
      template: `%s · ${SITE.name}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE.name,
    authors: [{ name: SITE.founder, url: SITE.url }],
    creator: SITE.founder,
    publisher: SITE.name,
    keywords: [...SITE.keywords],
    category: 'technology',
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: [{ url: '/images/logo.png', type: 'image/png' }],
      shortcut: '/images/logo.png',
      apple: '/images/logo.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url: SITE.url,
      siteName: SITE.name,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export function buildHomeJsonLd(projects: Project[]): Record<string, unknown>[] {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    logo: absoluteUrl('/images/logo.png'),
    description: SITE_DESCRIPTION,
    founder: {
      '@type': 'Person',
      name: SITE.founder,
      url: SITE.url,
      email: SITE.email,
      jobTitle: 'Independent Mobile App Developer',
    },
    sameAs: [SITE.appStoreUrl, SITE.playStoreUrl],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en',
  };

  const person = {
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.founder,
    url: SITE.url,
    email: SITE.email,
    jobTitle: 'Independent Mobile App Developer',
    worksFor: { '@id': `${SITE.url}/#organization` },
    sameAs: [SITE.appStoreUrl, SITE.playStoreUrl],
  };

  const itemList =
    projects.length > 0
      ? {
          '@type': 'ItemList',
          '@id': `${SITE.url}/#apps`,
          name: `${SITE.name} apps`,
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: projects.length,
          itemListElement: projects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: project.name,
              description: project.tagline || project.description,
              url: project.landingPageUrl,
              image: project.imageUrl.startsWith('http')
                ? project.imageUrl
                : absoluteUrl(project.imageUrl),
              applicationCategory: 'MobileApplication',
              operatingSystem: 'iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            },
          })),
        }
      : null;

  return [
    {
      '@context': 'https://schema.org',
      '@graph': [organization, website, person, ...(itemList ? [itemList] : [])],
    },
  ];
}
