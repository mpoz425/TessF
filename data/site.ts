export const site = {
  name: 'Teresa (Tess) Flanagan',
  shortName: 'Tess Flanagan',
  pronouns: 'she/her',
  role: 'Postdoctoral Scholar',
  affiliation: 'Data Science Institute, University of Chicago',
  url: 'https://tessflanagan.com',
  email: 'tflanagan2@uchicago.edu',
  cvPath: '/cv',
  description:
    'Teresa (Tess) Flanagan is a developmental psychologist and postdoctoral scholar at the Data Science Institute at the University of Chicago, where she studies how children and adults think about and engage with interactive technologies, and whether we apply our social cognitive mechanisms with robots and artificial intelligence.',
} as const;

export const nav = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
] as const;

export type SocialLink = {
  name: string;
  href: string;
  handle: string;
  icon: 'email' | 'scholar' | 'orcid' | 'x' | 'linkedin';
};

export const socials: SocialLink[] = [
  { name: 'Email', href: `mailto:${site.email}`, handle: site.email, icon: 'email' },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=byhN9gIAAAAJ&hl=en',
    handle: 'Google Scholar',
    icon: 'scholar',
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0000-0002-6003-7089',
    handle: '0000-0002-6003-7089',
    icon: 'orcid',
  },
  { name: 'X', href: 'https://x.com/TMFlanagan1', handle: '@TMFlanagan1', icon: 'x' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/teresa-flanagan-18789129a/',
    handle: 'LinkedIn',
    icon: 'linkedin',
  },
];

/** Short facts rendered as the "currently" strip under the hero. */
export const currently = [
  {
    label: 'Position',
    value: 'Postdoctoral Scholar',
    detail: 'Data Science Institute, University of Chicago',
  },
  {
    label: 'Lab',
    value: 'SEBO Lab',
    detail: 'with Dr. Sarah Sebo',
    href: 'http://hri.cs.uchicago.edu/',
  },
  {
    label: 'Doctorate',
    value: 'Ph.D. Developmental Psychology',
    detail: 'Cornell University, 2023',
  },
];
