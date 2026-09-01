import React from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, lede, children }: PageHeaderProps) {
  return (
    <header className="border-b border-rule bg-paper-alt">
      <div className="shell py-14 sm:py-20">
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h1
          className="mt-4 max-w-4xl text-display-sm font-semibold sm:text-display"
          data-reveal
          data-reveal-delay="60"
        >
          {title}
        </h1>
        {lede && (
          <p className="lede mt-6 max-w-prose" data-reveal data-reveal-delay="120">
            {lede}
          </p>
        )}
        {children && (
          <div className="mt-8" data-reveal data-reveal-delay="180">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
