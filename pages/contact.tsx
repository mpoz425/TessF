import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import Icon from '../components/ui/Icon';
import { site, socials } from '../data/site';

const reasons = [
  {
    title: 'Research collaboration',
    body: 'If your work touches children, robots, trust, or agency — in psychology, HRI, education, or design — I would like to hear about it.',
  },
  {
    title: 'Talks and panels',
    body: 'I speak about how children reason about AI and robots, and about what developmental evidence should mean for the people building these systems.',
  },
  {
    title: 'Taking part in a study',
    body: 'Families in the Chicago area can participate in child–robot interaction research. Sessions are short, playful, and children get to meet the robot afterward.',
  },
  {
    title: 'Students',
    body: 'Undergraduates and master’s students interested in developmental or HRI research are welcome to reach out about joining a project.',
  },
];

const Contact: NextPage = () => (
  <Layout
    title="Contact"
    description="Contact Tess Flanagan about research collaborations, talks, student opportunities, or participating in child–robot interaction studies."
  >
    <PageHeader
      eyebrow="Contact"
      title="Say hello"
      lede="Email is the fastest way to reach me, and I read everything that arrives."
    >
      <a href={`mailto:${site.email}`} className="btn-primary text-base">
        <Icon name="email" className="h-4 w-4" />
        {site.email}
      </a>
    </PageHeader>

    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Reasons to write</span>
          </div>
          <dl className="mt-9 space-y-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="border-l-2 border-clay-100 pl-6" data-reveal data-reveal-delay={i * 70}>
                <dt className="font-display text-lg font-semibold text-ink">{r.title}</dt>
                <dd className="mt-2 max-w-prose leading-relaxed text-ink-soft">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-card border border-rule bg-paper-alt p-7" data-reveal>
            <p className="eyebrow-mute">Where to find me</p>
            <address className="mt-4 not-italic leading-relaxed text-ink-soft">
              <span className="block font-medium text-ink">Data Science Institute</span>
              University of Chicago
              <br />
              5730 S. Ellis Avenue
              <br />
              Chicago, IL 60637
            </address>

            <p className="eyebrow-mute mt-8">Elsewhere</p>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.icon === 'email' ? undefined : '_blank'}
                    rel={s.icon === 'email' ? undefined : 'noopener noreferrer'}
                    className="group inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-clay"
                  >
                    <Icon name={s.icon} className="h-4 w-4 text-ink-faint transition-colors group-hover:text-clay" />
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </Layout>
);

export default Contact;
