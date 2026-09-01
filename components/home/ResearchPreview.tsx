import React from 'react';
import Link from 'next/link';
import { researchThemes } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';

export default function ResearchPreview() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Research"
          title="The questions I keep returning to"
          lede="Children and adults alike are forming beliefs about the technologies around them rather more quickly than developmental science has managed to document, and the areas below describe where I have concentrated that work."
          action={{ label: 'All research areas', href: '/research' }}
        />

        <ul className="grid gap-px overflow-hidden rounded-card border border-rule bg-rule sm:grid-cols-2">
          {researchThemes.slice(0, 4).map((theme, i) => (
            <li key={theme.id} data-reveal data-reveal-delay={i * 70}>
              <Link
                href={`/research#${theme.id}`}
                className="group flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-alt sm:p-9"
              >
                <span className="font-mono text-xs text-clay">{theme.index}</span>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">{theme.title}</h3>
                <p className="mt-2 font-display text-base italic text-ink-mute">{theme.question}</p>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-soft">{theme.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-clay">
                  Read more
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
