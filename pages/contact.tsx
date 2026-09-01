import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import Icon from '../components/ui/Icon';
import { site, socials } from '../data/site';

const Contact: NextPage = () => (
  <Layout
    title="Contact"
    description="Get in touch with Tess Flanagan about research, collaborations, talks, or taking part in a study."
  >
    <PageHeader title="Contact" lede="Email is the best way to reach me.">
      <a href={`mailto:${site.email}`} className="btn-primary text-base">
        <Icon name="email" className="h-4 w-4" />
        {site.email}
      </a>
    </PageHeader>

    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow-mute" data-reveal>
            Office
          </p>
          <address className="mt-4 not-italic leading-relaxed text-ink-soft" data-reveal>
            <span className="block font-medium text-ink">Data Science Institute</span>
            University of Chicago
            <br />
            5730 S. Ellis Avenue
            <br />
            Chicago, IL 60637
          </address>

          <p className="eyebrow-mute mt-10" data-reveal>
            Elsewhere
          </p>
          <ul className="mt-4 space-y-3" data-reveal>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.icon === 'email' ? undefined : '_blank'}
                  rel={s.icon === 'email' ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-clay"
                >
                  <Icon
                    name={s.icon}
                    className="h-4 w-4 text-ink-faint transition-colors group-hover:text-clay"
                  />
                  {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {site.contactPhoto && (
          <figure className="lg:col-span-6" data-reveal data-reveal-delay="80">
            <div className="overflow-hidden rounded-card border border-rule bg-paper-alt">
              <Image
                src={site.contactPhoto.src}
                alt={site.contactPhoto.alt}
                width={site.contactPhoto.width}
                height={site.contactPhoto.height}
                sizes="(min-width: 1024px) 32rem, 92vw"
                className="h-auto w-full"
              />
            </div>
          </figure>
        )}
      </div>
    </section>
  </Layout>
);

export default Contact;
