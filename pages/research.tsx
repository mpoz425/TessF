import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import PublicationEntry, { Authors } from '../components/ui/PublicationEntry';
import { researchThemes } from '../data/content';
import { inProgress, publications, type Publication } from '../data/publications';

const byId = new Map(publications.map((p) => [p.id, p]));

const relatedTo = (ids: string[]): Publication[] =>
  ids.reduce<Publication[]>((acc, id) => {
    const pub = byId.get(id);
    if (pub) acc.push(pub);
    return acc;
  }, []);

const Research: NextPage = () => (
  <Layout
    title="Research"
    description="Research on how children and adults think of interactive technologies as agents, how they come to trust and connect with robots, and the social cognitive development that underlies both."
  >
    <PageHeader
      eyebrow="Research"
      title="What we think of machines and how we engage with them"
      lede="We are surrounded by interactive technologies that look, move, and act like agents. My work looks at how we think of and engage with these technologies as agents."
      figure={{
        src: '/images/tess-museum-aibo.jpg',
        alt: 'Tess running a study with a child and a robot dog at a science museum',
        width: 185,
        height: 123,
        caption: 'Collecting data in the field',
      }}
    >
      <nav aria-label="Research areas" className="flex flex-wrap gap-2">
        {researchThemes.map((theme) => (
          <a
            key={theme.id}
            href={`#${theme.id}`}
            className="rounded-full border border-rule bg-paper px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-clay-200 hover:text-clay"
          >
            <span className="font-mono text-xs text-ink-faint">{theme.index}</span>{' '}
            {theme.title}
          </a>
        ))}
      </nav>
    </PageHeader>

    {researchThemes.map((theme, index) => {
      const related = relatedTo(theme.related);
      const shaded = index % 2 === 1;

      return (
        <section
          key={theme.id}
          id={theme.id}
          className={`section scroll-mt-24 border-b border-rule ${shaded ? 'bg-paper-alt' : ''}`}
        >
          <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-sm text-clay" data-reveal>
                {theme.index}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" data-reveal data-reveal-delay="60">
                {theme.title}
              </h2>
              <p
                className="mt-5 font-display text-xl italic leading-snug text-ink-mute"
                data-reveal
                data-reveal-delay="120"
              >
                {theme.question}
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="lede max-w-prose" data-reveal data-reveal-delay="80">
                {theme.body}
              </p>

              {related.length > 0 && (
                <div className="mt-10" data-reveal data-reveal-delay="140">
                  <h3 className="eyebrow-mute">Selected papers</h3>
                  <div className="mt-2">
                    {related.map((pub) => (
                      <PublicationEntry key={pub.id} publication={pub} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    })}

    <section className="section">
      <div className="shell">
        <div className="rule-heading" data-reveal>
          <span className="eyebrow">Forthcoming</span>
        </div>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl" data-reveal data-reveal-delay="60">
          Under review and in preparation
        </h2>
        <ul className="mt-9 border-t border-rule">
          {inProgress.map((item, i) => (
            <li key={item.title} className="border-b border-rule py-5" data-reveal data-reveal-delay={i * 50}>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.status}</p>
              <p className="mt-1.5 font-medium leading-snug text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-ink-mute">
                <Authors value={item.authors} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default Research;
