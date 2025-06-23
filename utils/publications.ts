import publicationsData from '../data/publications.json';

export interface Publication {
  id: number;
  title: string;
  authors: string;
  year: string;
  journal: string;
  link: string;
  abstract?: string;
  type: 'journal' | 'conference' | 'preprint' | 'thesis';
  cites?: string;
}

interface PublicationsData {
  publications: Array<{
    id: number;
    title: string;
    authors: string;
    year: string;
    journal: string;
    link: string;
    abstract: string;
    type: 'journal' | 'conference' | 'preprint' | 'thesis';
    cites?: string;
  }>;
}

export function getPublications(): Publication[] {
  return (publicationsData as PublicationsData).publications;
}

export function getPublicationsByYear(): Record<string, Publication[]> {
  return (publicationsData as PublicationsData).publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);
}

export function getYearsSorted(): string[] {
  const years = [...new Set((publicationsData as PublicationsData).publications.map(pub => pub.year))];
  return years.sort((a, b) => parseInt(b) - parseInt(a));
} 