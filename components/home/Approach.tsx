import React from 'react';
import Image from 'next/image';

const principles = [
  {
    title: 'Working outside the laboratory',
    body: 'A good deal of my data has been collected in science museums, classrooms, and other community spaces rather than in a university laboratory, on the reasoning that a sample drawn only from families who already live near a research campus can tell us relatively little about how children in general come to understand technology.',
  },
  {
    title: 'Physical robots in controlled designs',
    body: 'Children in my studies meet an actual NAO robot in an interaction that is scripted and randomized, and keeping the machine physically present in the room matters more than it might appear, since what a child believes about a robot on a screen turns out to be quite different from what they believe about one sitting in front of them.',
  },
  {
    title: 'Psychology alongside philosophy',
    body: 'Questions about free will, sufficient reason, and moral standing came into this field from philosophy rather than psychology, and a fair amount of my work involves translating them into something a six-year-old can reasonably be asked, then taking the answers seriously in both directions.',
  },
];

export default function Approach() {
  return (
    <section className="section">
      <div className="shell grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:col-span-5" data-reveal>
          <div className="overflow-hidden rounded-card border border-rule bg-paper-alt">
            <Image
              src="/images/tess-speaking.jpg"
              alt="Tess Flanagan presenting a talk titled “Growing up in the digital age”"
              width={1136}
              height={1026}
              sizes="(min-width: 1024px) 30rem, 92vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
            Growing up in the digital age — dissertation talk
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <div className="rule-heading" data-reveal>
            <span className="eyebrow">Approach</span>
          </div>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold sm:text-4xl" data-reveal data-reveal-delay="60">
            How the research is done
          </h2>

          <dl className="mt-10 space-y-8">
            {principles.map((p, i) => (
              <div key={p.title} className="border-l-2 border-clay-100 pl-6" data-reveal data-reveal-delay={i * 80}>
                <dt className="font-display text-lg font-semibold text-ink">{p.title}</dt>
                <dd className="mt-2 max-w-prose leading-relaxed text-ink-soft">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
