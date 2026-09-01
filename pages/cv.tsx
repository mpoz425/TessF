import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactCta from '../components/ui/ContactCta';
import Icon from '../components/ui/Icon';
import { awards, education, methods, outreach, positions, teaching } from '../data/content';
import { groupByYear, publications, typeLabels } from '../data/publications';
import { site } from '../data/site';

type EntryProps = {
  primary: string;
  secondary?: string;
  meta: string;
  detail?: string[];
};

function CvEntry({ primary, secondary, meta, detail }: EntryProps) {
  return (
    <li className="grid gap-1 border-b border-rule py-5 last:border-0 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <span className="font-mono text-xs uppercase tracking-wider text-ink-faint sm:pt-1">{meta}</span>
      <div>
        <p className="font-medium text-ink">{primary}</p>
        {secondary && <p className="mt-0.5 text-sm text-ink-mute">{secondary}</p>}
        {detail && (
          <ul className="mt-2 space-y-1">
            {detail.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-ink-mute">
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 first:pt-0" data-reveal>
      <h2 className="rule-heading pb-5 font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-clay">
        {title}
      </h2>
      {children}
    </section>
  );
}

const Cv: NextPage = () => (
  <Layout
    title="CV"
    description="Curriculum vitae for Teresa (Tess) Flanagan: education, academic appointments, publications, teaching, awards, and service."
  >
    <PageHeader
      eyebrow="Curriculum Vitae"
      title="Teresa (Tess) Flanagan"
      lede={`${site.role}, ${site.affiliation}`}
    >
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className="btn-primary">
          <Icon name="email" className="h-4 w-4" />
          {site.email}
        </a>
        <a
          href="https://orcid.org/0000-0002-6003-7089"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Icon name="orcid" className="h-4 w-4" />
          ORCID
        </a>
      </div>
    </PageHeader>

    <div className="shell max-w-4xl py-14 sm:py-20">
      <CvSection title="Education">
        <ul>
          {education.map((e) => (
            <CvEntry
              key={e.role}
              meta={e.period}
              primary={e.role}
              secondary={`${e.org}${e.location ? ` · ${e.location}` : ''}`}
              detail={e.detail}
            />
          ))}
        </ul>
      </CvSection>

      <CvSection title="Academic Appointments">
        <ul>
          {positions.map((p) => (
            <CvEntry
              key={`${p.role}-${p.period}`}
              meta={p.period}
              primary={p.role}
              secondary={`${p.org}${p.location ? ` · ${p.location}` : ''}`}
              detail={p.detail}
            />
          ))}
        </ul>
      </CvSection>

      <CvSection title="Publications">
        {groupByYear(publications).map(([year, items]) => (
          <div key={year} className="mb-8 last:mb-0">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">{year}</h3>
            <ol className="mt-3 space-y-4">
              {items.map((pub) => (
                <li key={pub.id} className="text-sm leading-relaxed text-ink-soft">
                  <span>{pub.authors.replace(/\*\*/g, '')}</span> ({pub.year}).{' '}
                  <span className="text-ink">{pub.title}</span>.{' '}
                  <em>{pub.venue}</em>
                  {pub.detail && `, ${pub.detail}`}.{' '}
                  <span className="font-mono text-xs text-ink-faint">[{typeLabels[pub.type]}]</span>
                  {pub.links?.doi && (
                    <>
                      {' '}
                      <a
                        href={pub.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-xs"
                      >
                        doi
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </CvSection>

      <CvSection title="Teaching">
        <ul>
          {teaching.map((t) => (
            <CvEntry
              key={`${t.title}-${t.period}`}
              meta={t.period}
              primary={`${t.role} — ${t.title}`}
              secondary={t.org}
            />
          ))}
        </ul>
      </CvSection>

      <CvSection title="Honors, Grants & Awards">
        <ul>
          {awards.map((a) => (
            <CvEntry key={a.name} meta={a.year} primary={a.name} secondary={a.org} />
          ))}
        </ul>
      </CvSection>

      <CvSection title="Service & Outreach">
        <ul>
          {outreach.map((o) => (
            <CvEntry key={o.title} meta="Ongoing" primary={o.title} secondary={o.body} />
          ))}
        </ul>
      </CvSection>

      <CvSection title="Skills & Methods">
        <dl className="space-y-5 pt-1">
          {Object.entries(methods).map(([group, items]) => (
            <div key={group} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint sm:pt-0.5">{group}</dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </CvSection>
    </div>

    <ContactCta />
  </Layout>
);

export default Cv;
