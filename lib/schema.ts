import { SITE_URL, SITE_NAME } from './site-config';

const abs = (path: string) => `${SITE_URL}${path}`;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function organizationSchema(opts: { sameAs?: string[]; email?: string; telephone?: string } = {}) {
  const { sameAs = [], email, telephone } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs('/favicon-logo.png'),
    ...(sameAs.length ? { sameAs } : {}),
    ...(email || telephone
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            ...(email ? { email } : {}),
            ...(telephone ? { telephone } : {}),
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  categoryName: string;
}) {
  const { name, description, path, categoryName } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: abs(path),
    serviceType: name,
    category: categoryName,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  authorName?: string;
  image?: string;
}) {
  const { title, description, path, datePublished, authorName, image } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    ...(datePublished ? { datePublished } : {}),
    ...(authorName ? { author: { '@type': 'Person', name: authorName } } : {}),
    ...(image ? { image: abs(image) } : {}),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: abs('/favicon-logo.png') },
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
