export type ResearchTheme = {
  id: string;
  index: string;
  title: string;
  question: string;
  body: string;
  /** Publication ids from data/publications.ts */
  related: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    id: 'theories-of-machines',
    index: '01',
    title: 'Theories of machines',
    question: 'What kind of thing do we take a robot to be?',
    body: 'Well before anyone sits them down to explain it, children arrive at working theories about what the technologies around them can feel, know, and want, and those theories turn out to be a good deal more structured than a single judgment about whether something is alive. Across smart speakers, robot vacuums, and humanoid robots, the properties people attribute separate into distinct clusters covering whether a machine has experiences, whether it has a mind, and whether it deserves moral treatment. This is also the point at which the work runs closest to philosophy, since longstanding questions about choice, free will, and moral standing become empirically tractable once you are able to ask a child whether a robot could have acted otherwise, and whether it should be held responsible when it does something wrong.',
    related: [
      'devpsych23-minds',
      'cogsci21-constrained',
      'hri25-morality',
      'humanamente22-agency',
      'cogsci19-ascribe',
    ],
  },
  {
    id: 'engagement-with-machines',
    index: '02',
    title: 'Engagement with machines',
    question: 'How do we come to trust and connect with robots?',
    body: 'Believing something about a machine and acting on that belief are not quite the same thing, and this strand of the work follows what happens once an interaction is actually underway. On the question of trust, I look at the cues people use to discount a robot that has given them bad information, and at the way that skepticism shifts across the school years in ways that set children apart from adults presented with the same errors. On the question of connection, controlled interaction studies let me isolate the small behavioral moments that leave a child feeling close to a robot, such as being asked for help rather than simply being told that something has gone wrong, which matters a great deal for the robots now being placed in classrooms.',
    related: ['cognition24-skeptical', 'hri26-help'],
  },
  {
    id: 'social-cognitive-development',
    index: '03',
    title: 'Social cognitive development',
    question: 'How do we come to understand other minds at all?',
    body: 'Not all of my work involves technology. A parallel line of research asks how children come to reason about explanation, evidence, and other people, which is the foundation that any account of how they think about machines has to rest on. That has included children’s conviction that events must have explanations in the first place, the relationship between fluency in generating ideas and children’s confidence in their own free will, and cross-cultural work with preschoolers in the United States and China on how statistical evidence is used rather differently depending on whether the knowledge at stake is personal or social.',
    related: ['jecp25-butwhy', 'cogsci23-psr', 'jepg24-personal-social', 'cogsci19-fluency'],
  },
];

export type TimelineEntry = {
  role: string;
  org: string;
  location?: string;
  period: string;
  detail?: string[];
  href?: string;
};

export const positions: TimelineEntry[] = [
  {
    role: 'Postdoctoral Scholar',
    org: 'Data Science Institute, University of Chicago',
    location: 'Chicago, IL',
    period: 'Sept 2024 — Present',
    detail: [
      'SEBO Lab with Dr. Sarah Sebo',
      'Child–robot interaction, social development, and robot trust',
    ],
    href: 'https://datascience.uchicago.edu/people/teresa-flanagan/',
  },
  {
    role: 'Postdoctoral Fellow',
    org: 'Department of Psychology & Neuroscience, Duke University',
    location: 'Durham, NC',
    period: 'Aug 2023 — Aug 2024',
    detail: ['Early Childhood Cognition Lab with Dr. Tamar Kushnir'],
  },
  {
    role: 'Graduate Researcher',
    org: 'Early Childhood Cognition Lab, Cornell University',
    location: 'Ithaca, NY',
    period: 'Aug 2018 — 2023',
    detail: ['Advised by Dr. Tamar Kushnir'],
  },
  {
    role: 'Lab Manager',
    org: 'Development and Experience Center, Franklin & Marshall College',
    location: 'Lancaster, PA',
    period: 'Jan 2017 — May 2018',
    detail: ['With Drs. Lauren Howard, Joshua Rottman, and Krista Casler'],
  },
  {
    role: 'Intern Research Assistant',
    org: 'Mind and Development Lab, Yale University',
    location: 'New Haven, CT',
    period: 'Summer 2016',
    detail: ['With Drs. Paul Bloom and Christina Starmans'],
  },
];

export const education: TimelineEntry[] = [
  {
    role: 'Ph.D., Psychology',
    org: 'Cornell University',
    location: 'Ithaca, NY',
    period: '2018 — 2023',
    detail: [
      'Concentration in Developmental Psychology; minor in Cognitive Science',
      'Committee: Drs. Tamar Kushnir and Marianella Casasola (co-chairs), Lin Bian, Shaun Nichols, David Pizarro',
    ],
  },
  {
    role: 'B.A., Scientific and Philosophical Studies of the Mind',
    org: 'Franklin & Marshall College',
    location: 'Lancaster, PA',
    period: '2014 — 2018',
    detail: [
      'Graduated cum laude; minor in Applied Mathematics',
      'Honors thesis with Drs. Lauren Howard and Joshua Rottman (co-chairs)',
      'Budapest Semester in Cognitive Science',
    ],
  },
];

export const awards = [
  { name: 'Martha E. Foulk Fellowship', org: 'Cornell University', year: '2021' },
  { name: 'Human Development Summer Research Fellowship', org: 'Cornell University', year: '2020' },
  { name: 'Hackman Scholar', org: 'Franklin & Marshall College', year: '2016 — 2018' },
  { name: 'cum laude', org: 'Franklin & Marshall College', year: '2018' },
];

export const teaching = [
  {
    title: 'HD 1150 — Introduction to Infancy and Childhood',
    org: 'Cornell University',
    role: 'Head Teaching Assistant',
    period: 'Fall 2019',
    body: 'Coordinated the teaching team for the department’s large introductory course in developmental psychology, leading discussion sections of my own while overseeing assessment across a cohort of several hundred students.',
  },
  {
    title: 'HD 1150 — Introduction to Infancy and Childhood',
    org: 'Cornell University',
    role: 'Teaching Assistant',
    period: 'Fall 2018',
    body: 'Led weekly sections introducing undergraduates to developmental theory and method, covering everything from infant looking-time paradigms through to the practicalities of interviewing preschoolers.',
  },
];

export const outreach = [
  {
    title: 'Museum-based developmental science',
    body: 'A considerable amount of my data has been gathered on the floors of science museums rather than in a university laboratory. Families take part in a short study and then have the chance to meet the robot and hear what the question behind the session actually was, which both widens the range of children who end up in developmental research and turns a few minutes of participation into something closer to a conversation about science.',
  },
  {
    title: 'The community-engaged lab',
    body: 'I contributed to a case-study framework for building durable partnerships between developmental laboratories and the communities around them, published in Frontiers in Psychology as a practical introduction for researchers who want to work this way but are unsure where to begin.',
  },
  {
    title: 'Graduate and Professional Diversity Council',
    body: 'As a member of the council at Cornell, I worked on questions of recruitment, retention, and departmental climate for graduate students across the university.',
  },
];

export const methods = {
  'Data collection': [
    'In-person child studies (infancy through adolescence)',
    'Museum and community data collection (ages 2–10)',
    'Controlled child–robot interaction studies',
    'Infant eye tracking (6–18 months)',
    'Online and remote testing with children and adults',
  ],
  Platforms: ['NAO humanoid robot', 'Qualtrics', 'Tobii Studio', 'jHab', 'Mangold Interact', 'Prolific / MTurk'],
  Analysis: ['R', 'Python', 'SPSS', 'Mixed-effects modeling', 'Cluster analysis', 'Preregistration and open data (OSF)'],
};

export type NewsItem = { date: string; body: string; href?: string };

export const news: NewsItem[] = [
  {
    date: 'Mar 2026',
    body: 'I will be presenting “Can You Help Me?” at HRI ’26 in Edinburgh, on what happens to a child’s trust when a robot asks them for help rather than simply reporting that something has gone wrong.',
    href: 'https://doi.org/10.1145/3757279.3785631',
  },
  {
    date: '2025',
    body: '“But why?: Children’s belief in the necessity of explanations” has been published in the Journal of Experimental Child Psychology, with Alejandro Vesga, Tamar Kushnir, and Shaun Nichols.',
    href: 'https://doi.org/10.1016/j.jecp.2025.106317',
  },
  {
    date: 'Sept 2024',
    body: 'I joined the Data Science Institute at the University of Chicago as a postdoctoral scholar, working in the SEBO Lab with Sarah Sebo.',
    href: 'https://datascience.uchicago.edu/people/teresa-flanagan/',
  },
];
