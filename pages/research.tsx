import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactCta from '../components/ui/ContactCta';
import PublicationEntry from '../components/ui/PublicationEntry';
import { researchThemes } from '../data/content';
import { publications, type Publication } from '../data/publications';

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
    description="Research on children's theories of machine minds, trust in robots, child–robot connection, agency and moral standing, and new instruments for developmental science."
  >
    <PageHeader
      eyebrow="Research"
      title="What children believe about machines, and why it matters"
      lede="Children are the first generation to grow up with genuinely interactive technology as ordinary furniture. My work asks how that changes the concepts they build — about minds, about choice, and about who counts."
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

    <ContactCta />
  </Layout>
);

export default Research;
