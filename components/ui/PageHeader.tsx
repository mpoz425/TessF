import React from 'react';
import Image from 'next/image';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Optional photo shown alongside the heading on wide screens. */
  figure?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, lede, figure, children }: PageHeaderProps) {
  const heading = (
    <>
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
    </>
  );

  return (
    <header className="border-b border-rule bg-paper-alt">
      <div className="shell py-14 sm:py-20">
        {figure ? (
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">{heading}</div>
            <figure className="lg:col-span-5" data-reveal data-reveal-delay="150">
              <div className="overflow-hidden rounded-card border border-rule bg-paper p-2">
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={figure.width}
                  height={figure.height}
                  sizes="(min-width: 1024px) 26rem, 92vw"
                  className="h-auto w-full rounded"
                />
              </div>
              {figure.caption && (
                <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
                  {figure.caption}
                </figcaption>
              )}
            </figure>
          </div>
        ) : (
          heading
        )}
      </div>
    </header>
  );
}
