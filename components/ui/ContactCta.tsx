import React from 'react';
import { site } from '../../data/site';
import Icon from './Icon';

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-rule bg-ink text-paper">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="shell relative py-20 text-center sm:py-28">
        <p className="font-mono text-eyebrow font-medium uppercase text-clay-200" data-reveal>
          Get in touch
        </p>
        <h2
          className="mx-auto mt-5 max-w-2xl text-3xl font-semibold text-paper sm:text-display-sm"
          data-reveal
          data-reveal-delay="60"
        >
          Collaborations, talks, and questions about the research
        </h2>
        <p
          className="mx-auto mt-5 max-w-xl leading-relaxed text-paper/70"
          data-reveal
          data-reveal-delay="120"
        >
          I am always glad to hear from researchers, designers building for children, and families curious
          about taking part in a study.
        </p>
        <div className="mt-9 flex justify-center" data-reveal data-reveal-delay="180">
          <a
            href={`mailto:${site.email}`}
            className="btn inline-flex bg-paper text-ink hover:bg-clay hover:text-paper"
          >
            <Icon name="email" className="h-4 w-4" />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
