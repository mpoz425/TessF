import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, socials } from '../../data/site';
import Icon from '../ui/Icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0" />
      {/* Warm bloom behind the portrait cluster. */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-clay-50 blur-3xl"
      />

      <div className="shell relative grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-7 xl:col-span-7">
          <p className="eyebrow" data-reveal>
            Developmental Psychology · Human–Robot Interaction
          </p>

          <h1
            className="mt-5 text-display-sm font-semibold sm:text-display lg:text-display-lg"
            data-reveal
            data-reveal-delay="60"
          >
            Teresa <span className="text-ink-faint">(Tess)</span> Flanagan
          </h1>

          <p
            className="mt-5 max-w-xl font-display text-xl leading-snug text-clay sm:text-2xl"
            data-reveal
            data-reveal-delay="120"
          >
            I study how children make sense of the machines they are growing up with.
          </p>

          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft" data-reveal data-reveal-delay="180">
            I am a postdoctoral scholar at the{' '}
            <a
              href="https://datascience.uchicago.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Data Science Institute
            </a>{' '}
            at the University of Chicago, working in the{' '}
            <a href="http://hri.cs.uchicago.edu/" target="_blank" rel="noopener noreferrer" className="link">
              Human–Robot Interaction Lab
            </a>
            . My research asks what children believe robots and AI can think, feel, choose, and deserve — and
            what those beliefs mean for the technologies we are putting in front of them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal data-reveal-delay="240">
            <Link href="/research" className="btn-primary">
              Read the research
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <Link href="/cv" className="btn-secondary">
              Curriculum vitae
            </Link>
          </div>

          <ul
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-6"
            data-reveal
            data-reveal-delay="300"
          >
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.icon === 'email' ? undefined : '_blank'}
                  rel={s.icon === 'email' ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-2 text-sm text-ink-mute transition-colors hover:text-clay"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                  <span>{s.icon === 'email' ? site.email : s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 xl:col-span-5">
          <figure
            className="relative mx-auto w-full max-w-[22rem] lg:ml-auto lg:mr-0"
            data-reveal
            data-reveal-delay="150"
          >
            {/* Offset accent frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-card border border-clay-200"
            />
            <div className="relative overflow-hidden rounded-card border border-rule bg-paper-alt shadow-lift">
              <Image
                src="/images/tess-portrait.jpg"
                alt="Tess Flanagan beside a NAO humanoid robot at her desk"
                width={400}
                height={400}
                priority
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 22rem, 80vw"
                className="h-auto w-full"
              />
            </div>

            {/* Field photo inset — small on purpose, like a pinned print. */}
            <div className="absolute -bottom-10 -left-4 w-36 rotate-[-4deg] sm:-left-10 sm:w-44">
              <div className="rounded-lg border border-rule bg-white p-1.5 shadow-lift-lg">
                <Image
                  src="/images/tess-museum-aibo.jpg"
                  alt="Tess running a study with a child and a robot dog at a science museum"
                  width={185}
                  height={123}
                  sizes="(min-width: 640px) 11rem, 9rem"
                  className="h-auto w-full rounded"
                />
              </div>
            </div>

            <figcaption className="mt-16 text-right font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint sm:mt-14">
              Collecting data in the field
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
