import React from 'react';
import Image from 'next/image';

const principles = [
  {
    title: 'Studies that leave the lab',
    body: 'Museum floors, classrooms, and community science spaces — because a convenience sample of university-adjacent four-year-olds cannot answer questions about how children in general understand technology.',
  },
  {
    title: 'Real robots, controlled designs',
    body: 'Children meet an actual NAO robot in a scripted, randomized interaction. Keeping the machine physically present matters: beliefs about a robot on a screen are not the same as beliefs about one in the room.',
  },
  {
    title: 'Psychology and philosophy, together',
    body: 'Questions about free will, sufficient reason, and moral standing came from philosophy first. I turn them into things a six-year-old can be asked, and take the answers seriously in both directions.',
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
            How the work gets done
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
