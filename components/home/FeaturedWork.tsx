import React from 'react';
import { featuredPublications } from '../../data/publications';
import SectionHeading from '../ui/SectionHeading';
import PublicationEntry from '../ui/PublicationEntry';

export default function FeaturedWork() {
  return (
    <section className="section border-y border-rule bg-paper-alt">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Some of what the studies have found"
          lede="These papers give a reasonable sense of the overall direction of the work. Each is summarized here in plain language, with data and code linked wherever they are publicly available."
          action={{ label: 'Full publication list', href: '/cv' }}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredPublications.map((pub, i) => (
            <div key={pub.id} data-reveal data-reveal-delay={i * 70}>
              <PublicationEntry publication={pub} variant="featured" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
