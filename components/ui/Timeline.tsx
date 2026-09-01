import React from 'react';
import type { TimelineEntry } from '../../data/content';
import Icon from './Icon';

type TimelineProps = {
  eyebrow: string;
  title: string;
  entries: TimelineEntry[];
};

export default function Timeline({ eyebrow, title, entries }: TimelineProps) {
  return (
    <div>
      <div className="rule-heading" data-reveal>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
        {title}
      </h2>

      <ol className="mt-9 border-l border-rule">
        {entries.map((entry, i) => (
          <li key={`${entry.role}-${entry.period}`} className="relative pb-9 pl-7 last:pb-0" data-reveal data-reveal-delay={i * 70}>
            <span
              aria-hidden="true"
              className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full border border-paper bg-clay"
            />
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{entry.period}</p>
            <h3 className="mt-1.5 text-lg font-semibold leading-snug text-ink">
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-1 transition-colors hover:text-clay"
                >
                  {entry.role}
                  <Icon name="arrow-up-right" className="h-3.5 w-3.5 self-center text-ink-faint" />
                </a>
              ) : (
                entry.role
              )}
            </h3>
            <p className="mt-0.5 text-sm text-ink-soft">
              {entry.org}
              {entry.location && <span className="text-ink-faint"> · {entry.location}</span>}
            </p>
            {entry.detail && (
              <ul className="mt-2.5 space-y-1.5">
                {entry.detail.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-ink-mute">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-clay-200" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
