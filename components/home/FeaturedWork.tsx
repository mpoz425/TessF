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
          title="What the studies found"
          lede="A few papers that best represent the through-line — written up here in plain language, with data and code where it exists."
          action={{ label: 'All publications', href: '/publications' }}
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
