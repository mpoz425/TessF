import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactCta from '../components/ui/ContactCta';
import { mentorship, outreach, teaching } from '../data/content';

const Teaching: NextPage = () => (
  <Layout
    title="Teaching & Outreach"
    description="Teaching in developmental psychology, mentorship of student researchers, and museum-based public engagement with developmental science."
  >
    <PageHeader
      eyebrow="Teaching & Outreach"
      title="Bringing people into the work"
      lede="Most of what I study happens in public — in museums, in classrooms, in living rooms. Teaching and outreach are not a sideline to that research; they are the conditions that make it possible."
    />

    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Courses</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
            Teaching
          </h2>
          <p className="mt-4 text-ink-soft" data-reveal data-reveal-delay="120">
            My classroom teaching has centered on the introductory developmental sequence — the course where
            most students first encounter the idea that childhood can be studied experimentally.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="space-y-px overflow-hidden rounded-card border border-rule bg-rule">
            {teaching.map((course, i) => (
              <li key={`${course.title}-${course.period}`} className="bg-paper p-7 sm:p-8" data-reveal data-reveal-delay={i * 80}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tag-clay">{course.role}</span>
                  <span className="font-mono text-xs text-ink-faint">{course.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{course.title}</h3>
                <p className="mt-1 text-sm text-ink-mute">{course.org}</p>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{course.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="section border-y border-rule bg-paper-alt">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:col-span-5" data-reveal>
          <div className="overflow-hidden rounded-card border border-rule bg-paper p-2">
            <Image
              src="/images/tess-museum-aibo.jpg"
              alt="Tess and a young participant interacting with a robot dog and a tablet at a science museum event"
              width={185}
              height={123}
              sizes="(min-width: 1024px) 26rem, 92vw"
              className="h-auto w-full rounded"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-ink-mute">
            Running a study at a public science event. Families take part, and then get to meet the robot and
            hear what the question actually was.
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Public engagement</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
            Outreach
          </h2>
          <dl className="mt-9 space-y-8">
            {outreach.map((item, i) => (
              <div key={item.title} className="border-l-2 border-clay-100 pl-6" data-reveal data-reveal-delay={i * 80}>
                <dt className="font-display text-lg font-semibold text-ink">{item.title}</dt>
                <dd className="mt-2 max-w-prose leading-relaxed text-ink-soft">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell max-w-reading">
        <div className="rule-heading" data-reveal>
          <span className="eyebrow">Mentorship</span>
        </div>
        <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
          Working with students
        </h2>
        <p className="mt-4 text-ink-soft" data-reveal data-reveal-delay="100">
          I supervise undergraduate and master&rsquo;s researchers across the full arc of a study — designing
          the interaction, scripting the robot, running children, and analyzing what comes back.
        </p>
        <ul className="mt-8 space-y-4">
          {mentorship.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 border-b border-rule pb-4 leading-relaxed text-ink-soft last:border-0"
              data-reveal
              data-reveal-delay={i * 70}
            >
              <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-clay-200" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <ContactCta />
  </Layout>
);

export default Teaching;
