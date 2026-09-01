import React from 'react';
import Timeline from '../ui/Timeline';
import { education, positions } from '../../data/content';

export default function AboutSection() {
  return (
    <section id="about" className="section scroll-mt-24 border-b border-rule bg-paper-alt">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="rule-heading" data-reveal>
              <span className="eyebrow">About</span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl" data-reveal data-reveal-delay="60">
              A developmental psychologist in a robotics lab
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="prose prose-lg" data-reveal data-reveal-delay="80">
              <p>
                I arrived at human–robot interaction by a fairly indirect route, having come through
                philosophy of mind and infant eye tracking before spending a great many hours on museum
                floors asking children what they think a machine is capable of feeling. My research now sits
                along the seam between developmental psychology and robotics, and it is concerned with what
                people believe about the technologies around them and how those beliefs shape whether they go
                on to trust machines, learn from them, or become attached to them.
              </p>
              <p>
                That turns out to be a less straightforward question than it first appears, because children
                do not simply sort the world into things that are alive and things that are not. Across my
                work with smart speakers, robot vacuums, and humanoid robots, the properties children
                attribute separate into distinct clusters, covering whether a thing has experiences, whether
                it has a mind, and whether it deserves moral treatment, and each of these appears to develop
                on its own schedule. A seven-year-old can be quite certain that a robot is unable to feel pain
                while remaining genuinely undecided about whether it chose to do what it has just done.
              </p>
              <p>
                My doctoral work at Cornell, supervised by Dr. Tamar Kushnir, traced the way children reason
                about agency and free will as the technological landscape around them continues to shift.
                Since finishing, I have been working in two directions at once, asking which particular robot
                behaviors build a genuine sense of connection with a child, and whether the same technologies
                we study might also help developmental science gather better data from a wider range of
                families than the field currently manages to reach.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-rule pt-14 lg:grid-cols-2 lg:gap-16">
          <Timeline eyebrow="Positions" title="Where I have worked" entries={positions} />
          <Timeline eyebrow="Education" title="Training" entries={education} />
        </div>
      </div>
    </section>
  );
}
