import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import Icon from '../components/ui/Icon';
import { press } from '../data/content';

const News: NextPage = () => (
  <Layout
    title="In the News"
    description="Press coverage of Tess Flanagan's research on how children think about robots, smart speakers, and other interactive technologies."
  >
    <PageHeader
      eyebrow="In the News"
      title="Press coverage"
      lede="My research has been featured in The Wall Street Journal, Cosmos Magazine, WUNC, and Duke Today. Below are some select featured articles and interviews."
    />

    <section className="section">
      <div className="shell">
        <ol className="border-t border-rule">
          {press.map((item, i) => (
            <li key={item.href} data-reveal data-reveal-delay={i * 70}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 border-b border-rule py-8 transition-colors sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-clay">{item.outlet}</p>
                  <p className="mt-1 text-sm text-ink-faint">{item.date}</p>
                </div>
                <div className="sm:col-span-9">
                  <h2 className="text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-clay sm:text-2xl">
                    {item.title}
                    <Icon
                      name="arrow-up-right"
                      className="ml-1.5 inline h-4 w-4 -translate-y-1 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1.5"
                    />
                  </h2>
                  <p className="mt-2 text-sm text-ink-mute">By {item.author}</p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </Layout>
);

export default News;
