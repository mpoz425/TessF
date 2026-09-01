import React from 'react';
import { news } from '../../data/content';
import Icon from '../ui/Icon';

export default function News() {
  return (
    <section className="section border-t border-rule">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Recently</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl" data-reveal data-reveal-delay="60">
            News &amp; updates
          </h2>
        </div>

        <ol className="lg:col-span-8">
          {news.map((item, i) => {
            const body = (
              <>
                <span className="mt-0.5 shrink-0 font-mono text-xs uppercase tracking-wider text-clay sm:w-24">
                  {item.date}
                </span>
                <span className="leading-relaxed text-ink-soft">
                  {item.body}
                  {item.href && (
                    <Icon
                      name="arrow-up-right"
                      className="ml-1 inline h-3.5 w-3.5 -translate-y-0.5 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
                    />
                  )}
                </span>
              </>
            );

            return (
              <li
                key={item.date + i}
                className="border-b border-rule py-6 first:pt-0 last:border-0"
                data-reveal
                data-reveal-delay={i * 80}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1.5 transition-colors hover:text-ink sm:flex-row sm:gap-6"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-6">{body}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
