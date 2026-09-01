import React, { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactCta from '../components/ui/ContactCta';
import PublicationEntry from '../components/ui/PublicationEntry';
import Icon from '../components/ui/Icon';
import { groupByYear, publications, type PublicationType } from '../data/publications';
import { socials } from '../data/site';

type Filter = 'all' | PublicationType;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'journal', label: 'Journal' },
  { value: 'conference', label: 'Conference' },
  { value: 'dissertation', label: 'Theses' },
];

const scholarUrl = socials.find((s) => s.icon === 'scholar')?.href ?? '#';

const Publications: NextPage = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const grouped = useMemo(() => {
    const list =
      filter === 'all'
        ? publications
        : publications.filter((p) =>
            filter === 'dissertation' ? p.type === 'dissertation' || p.type === 'thesis' : p.type === filter
          );
    return groupByYear(list);
  }, [filter]);

  const total = publications.length;
  const citations = publications.reduce((sum, p) => sum + (p.citations ?? 0), 0);

  return (
    <Layout
      title="Publications"
      description="Peer-reviewed journal articles and conference papers by Tess Flanagan on child–robot interaction, cognitive development, agency, and moral judgment."
    >
      <PageHeader
        eyebrow="Publications"
        title="Papers, proceedings, and preprints"
        lede="Peer-reviewed work in developmental psychology, cognitive science, and human–robot interaction. Where data, code, or preprints are public, they are linked alongside each entry."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <dl className="flex gap-8">
            <div>
              <dt className="eyebrow-mute">Publications</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-ink">{total}</dd>
            </div>
            <div>
              <dt className="eyebrow-mute">Citations</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-ink">{citations}+</dd>
            </div>
          </dl>
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-clay"
          >
            <Icon name="scholar" className="h-4 w-4" />
            Google Scholar profile
            <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-ink-faint" />
          </a>
        </div>
      </PageHeader>

      <section className="section">
        <div className="shell">
          <div
            role="group"
            aria-label="Filter publications by type"
            className="mb-12 flex flex-wrap gap-2 border-b border-rule pb-6"
          >
            {filters.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                    active
                      ? 'bg-ink text-paper'
                      : 'border border-rule text-ink-soft hover:border-ink hover:text-ink'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-14">
            {grouped.map(([year, items]) => (
              <div key={year} className="grid gap-4 lg:grid-cols-12 lg:gap-10">
                <h2 className="font-mono text-sm text-clay lg:col-span-2 lg:pt-7">{year}</h2>
                <div className="lg:col-span-10">
                  {items.map((pub) => (
                    <PublicationEntry key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {grouped.length === 0 && (
            <p className="py-16 text-center text-ink-mute">No publications in this category yet.</p>
          )}

          <p className="mt-16 border-t border-rule pt-6 text-sm text-ink-mute">
            Cannot access a paper? Email me and I will send a copy.
          </p>
        </div>
      </section>

      <ContactCta />
    </Layout>
  );
};

export default Publications;
