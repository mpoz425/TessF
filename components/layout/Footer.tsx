import React from 'react';
import Link from 'next/link';
import { nav, site, socials } from '../../data/site';
import Icon from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-paper-alt">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold text-ink">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-mute">
              {site.role}, {site.affiliation}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-clay"
            >
              <Icon name="email" className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow-mute">Pages</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="link-quiet">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-quiet">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow-mute">Elsewhere</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {socials
                .filter((s) => s.icon !== 'email')
                .map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet inline-flex items-center gap-2"
                    >
                      <Icon name={s.icon} className="h-4 w-4 text-ink-faint" />
                      {s.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
