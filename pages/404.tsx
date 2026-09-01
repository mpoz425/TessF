import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Icon from '../components/ui/Icon';
import { nav } from '../data/site';

const NotFound: NextPage = () => (
  <Layout title="Page not found" description="That page does not exist.">
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 text-display-sm font-semibold sm:text-display">This page went missing</h1>
      <p className="lede mt-5 max-w-md">
        The link may be out of date. Here is everywhere else on the site.
      </p>
      <nav aria-label="Site pages" className="mt-9 flex flex-wrap justify-center gap-2">
        <Link
          href="/"
          className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-clay-200 hover:text-clay"
        >
          Home
        </Link>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-clay-200 hover:text-clay"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Link href="/" className="btn-primary mt-10">
        Back to the home page
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </section>
  </Layout>
);

export default NotFound;
