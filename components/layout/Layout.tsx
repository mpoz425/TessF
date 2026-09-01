import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Seo from '../Seo';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  structuredData?: boolean;
};

/**
 * Reveals `[data-reveal]` elements as they scroll into view. The CSS that hides
 * them is gated on a `.js` class, so this is purely additive.
 *
 * Re-runs on navigation, since a client-side route change swaps in elements the
 * previous observer never saw. Cancels the failsafe timer set in _document so
 * that content is only ever force-shown when this never runs at all.
 */
function useScrollReveal(routeKey: string) {
  useEffect(() => {
    const w = window as Window & { __revealFailsafe?: ReturnType<typeof setTimeout> };
    if (w.__revealFailsafe) {
      clearTimeout(w.__revealFailsafe);
      w.__revealFailsafe = undefined;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
      (el) => !el.classList.contains('is-visible')
    );
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          el.style.animationDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [routeKey]);
}

export default function Layout({ children, title, description, structuredData }: LayoutProps) {
  const { asPath } = useRouter();
  useScrollReveal(asPath);

  return (
    <>
      <Seo title={title} description={description} structuredData={structuredData} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
