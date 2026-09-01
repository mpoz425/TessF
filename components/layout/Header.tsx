import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { nav, site } from '../../data/site';
import Icon from '../ui/Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, events } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile panel on navigation so it never lingers over a new page.
  useEffect(() => {
    const close = () => setOpen(false);
    events.on('routeChangeStart', close);
    return () => events.off('routeChangeStart', close);
  }, [events]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-rule bg-paper/85 backdrop-blur-md' : 'border-transparent bg-paper'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 shrink-0 translate-y-[-0.15em] rounded-full bg-clay transition-transform duration-300 group-hover:scale-125"
          />
          {site.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const className = `relative py-1 text-sm transition-colors ${
              isActive(item.href) ? 'text-ink' : 'text-ink-mute hover:text-ink'
            }`;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={className}
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-clay transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 rounded-full p-2 text-ink transition-colors hover:bg-paper-alt md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Primary (mobile)" className="shell flex flex-col py-3">
          {nav.map((item) => {
            const className = `flex items-center justify-between border-b border-rule/60 py-3.5 text-base transition-colors last:border-0 ${
              isActive(item.href) ? 'text-clay' : 'text-ink'
            }`;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.name}
                  <Icon name="arrow-up-right" className="h-4 w-4 text-ink-faint" />
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={className}
              >
                {item.name}
                <Icon name="arrow-right" className="h-4 w-4 text-ink-faint" />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
