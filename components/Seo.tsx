import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { site, socials } from '../data/site';

type SeoProps = {
  /** Page-specific title. Omit on the home page to use the full branded title. */
  title?: string;
  description?: string;
  /** Emit Person structured data. Home page only, so it is not duplicated. */
  structuredData?: boolean;
};

const OG_IMAGE = `${site.url}/images/tess-portrait.jpg`;

export default function Seo({ title, description = site.description, structuredData = false }: SeoProps) {
  const { asPath } = useRouter();
  const canonical = `${site.url}${asPath === '/' ? '' : asPath.split('?')[0]}`;
  const fullTitle = title ? `${title} · ${site.shortName}` : `${site.name} — ${site.role}, University of Chicago`;

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    image: OG_IMAGE,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.description,
    identifier: 'https://orcid.org/0000-0002-6003-7089',
    affiliation: {
      '@type': 'Organization',
      name: 'Data Science Institute, University of Chicago',
      url: 'https://datascience.uchicago.edu/',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Cornell University' },
      { '@type': 'CollegeOrUniversity', name: 'Franklin & Marshall College' },
    ],
    knowsAbout: [
      'Developmental psychology',
      'Human-robot interaction',
      'Cognitive development',
      'Children and artificial intelligence',
      'Moral judgment',
    ],
    sameAs: socials.filter((s) => s.icon !== 'email').map((s) => s.href),
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@TMFlanagan1" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      )}
    </Head>
  );
}
