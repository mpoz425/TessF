import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactCta from '../components/ui/ContactCta';
import Icon from '../components/ui/Icon';
import Timeline from '../components/ui/Timeline';
import { awards, education, methods, positions } from '../data/content';
import { site } from '../data/site';

const About: NextPage = () => (
  <Layout
    title="About"
    description="Tess Flanagan is a developmental psychologist at the University of Chicago studying children's beliefs about robots, AI, agency, and moral standing."
  >
    <PageHeader
      eyebrow="About"
      title="A developmental psychologist in a robotics lab"
      lede="I came to human–robot interaction the long way around — through philosophy of mind, infant eye tracking, and a lot of hours on museum floors asking children what they think a machine can feel."
    />

    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="prose prose-lg" data-reveal>
            <p>
              I am a postdoctoral scholar at the Data Science Institute at the University of Chicago, where I
              work in Dr. Sarah Sebo&rsquo;s Human–Robot Interaction Lab. My research sits at the seam between
              developmental psychology and robotics: I study what children believe about the technologies
              around them, and how those beliefs shape whether they trust, learn from, and form attachments to
              machines.
            </p>
            <p>
              That question turns out to be less obvious than it sounds. Children do not simply sort the world
              into alive and not-alive. Across my work with smart speakers, robot vacuums, and humanoid robots,
              their attributions separate into distinct clusters — whether a thing has experiences, whether it
              has a mind, and whether it deserves moral treatment — and each of those develops on its own
              schedule. A seven-year-old can be confident that a robot cannot feel pain while remaining
              genuinely unsure whether it chose to do what it just did.
            </p>
            <p>
              My doctoral work at Cornell, with Dr. Tamar Kushnir, traced how children reason about agency and
              free will as the technological landscape around them changes. Since then I have been pushing in
              two directions at once. One is interactional: what specific robot behaviors build a real sense of
              connection with a child, and what that implies for robots being placed in classrooms. The other
              is methodological — asking whether the same technologies we study can also help developmental
              science collect better data from a wider range of families than the field currently reaches.
            </p>
            <p>
              Before Chicago I was a postdoctoral fellow at Duke University, and before that I earned my B.A.
              at Franklin &amp; Marshall College, where an honors thesis on children&rsquo;s attributions of
              free will to robots set the agenda I am still working through.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            <Link href={site.cvPath} className="btn-primary">
              Full CV
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <Link href="/research" className="btn-secondary">
              Research areas
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5 xl:col-span-4">
          <figure data-reveal data-reveal-delay="80">
            <div className="overflow-hidden rounded-card border border-rule bg-paper-alt">
              <Image
                src="/images/tess-portrait.jpg"
                alt="Tess Flanagan beside a NAO humanoid robot at her desk"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 22rem, 90vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
              With NAO, the robot at the center of much of this work
            </figcaption>
          </figure>

          <div className="mt-8 rounded-card border border-rule bg-paper-alt p-6" data-reveal data-reveal-delay="140">
            <p className="eyebrow-mute">At a glance</p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ['Pronouns', site.pronouns],
                ['Based in', 'Chicago, Illinois'],
                ['Field', 'Developmental psychology'],
                ['Also', 'Human–robot interaction, cognitive science'],
              ].map(([term, value]) => (
                <div key={term} className="flex gap-4">
                  <dt className="w-24 shrink-0 text-ink-mute">{term}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <section className="section border-t border-rule bg-paper-alt">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Timeline eyebrow="Positions" title="Where I have worked" entries={positions} />
        <Timeline eyebrow="Education" title="Training" entries={education} />
      </div>
    </section>

    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Honors</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
            Awards &amp; fellowships
          </h2>
          <ul className="mt-8 space-y-4">
            {awards.map((a, i) => (
              <li
                key={a.name}
                className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 last:border-0"
                data-reveal
                data-reveal-delay={i * 70}
              >
                <div>
                  <p className="font-medium text-ink">{a.name}</p>
                  <p className="text-sm text-ink-mute">{a.org}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-ink-faint">{a.year}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Toolkit</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold" data-reveal data-reveal-delay="60">
            Methods &amp; skills
          </h2>
          <div className="mt-8 space-y-8">
            {Object.entries(methods).map(([group, items], i) => (
              <div key={group} data-reveal data-reveal-delay={i * 70}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-clay">{group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="tag-neutral normal-case tracking-normal">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ContactCta />
  </Layout>
);

export default About;
