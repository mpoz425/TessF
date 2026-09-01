import React from 'react';
import { currently } from '../../data/site';
import Icon from '../ui/Icon';

export default function CurrentlyStrip() {
  return (
    <section aria-label="Current appointments" className="border-b border-rule bg-paper-alt">
      <div className="shell grid divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {currently.map((item, i) => {
          const content = (
            <>
              <p className="eyebrow-mute">{item.label}</p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                {item.value}
                {item.href && (
                  <Icon
                    name="arrow-up-right"
                    className="ml-1 inline h-3.5 w-3.5 -translate-y-0.5 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
                  />
                )}
              </p>
              <p className="mt-1.5 text-sm text-ink-mute">{item.detail}</p>
            </>
          );

          return (
            <div
              key={item.label}
              className="py-7 sm:px-7 sm:first:pl-0 sm:last:pr-0"
              data-reveal
              data-reveal-delay={i * 80}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-colors hover:text-clay"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
