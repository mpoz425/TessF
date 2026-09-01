import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  action?: { label: string; href: string };
};

export default function SectionHeading({ eyebrow, title, lede, action }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14" data-reveal>
      <div className="rule-heading">
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">{title}</h2>
          {lede && <p className="mt-4 max-w-prose text-ink-soft">{lede}</p>}
        </div>
        {action && (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
          >
            {action.label}
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
