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
    id: 'machine-minds',
    index: '01',
    title: 'Children’s theories of machine minds',
    question: 'What does a child think is going on inside a robot?',
    body: 'Long before anyone teaches them, children arrive at working theories about what technologies can feel, know, and want. I map those theories across familiar devices — a smart speaker, a vacuum, a humanoid robot — and track how they reorganize with age. What emerges is not a single "is it alive?" judgment but several separable beliefs: having experiences, having a mind, and deserving moral treatment.',
    related: ['devpsych23-minds', 'humanamente22-agency'],
  },
  {
    id: 'trust',
    index: '02',
    title: 'Trust, testimony, and skepticism',
    question: 'When should a child believe a machine?',
    body: 'Children increasingly learn from systems that are confident, fluent, and sometimes wrong. I study how they calibrate: which cues they use to discount an unreliable robot, how that skepticism sharpens across the school years, and where it diverges from how adults respond to the same errors.',
    related: ['cognition24-skeptical'],
  },
  {
    id: 'connection',
    index: '03',
    title: 'Connection and vulnerability in child–robot interaction',
    question: 'What makes a child feel close to a robot?',
    body: 'Relationships with robots are built from small behavioral moments. In controlled interaction studies I isolate the behaviors that actually produce closeness and trust — asking for help rather than merely reporting a problem, expressing something that reads as feeling rather than malfunction — and ask what that means for designing robots that children will spend real time with in classrooms.',
    related: ['hri26-help'],
  },
  {
    id: 'agency',
    index: '04',
    title: 'Choice, free will, and moral standing',
    question: 'Who gets to count as an agent?',
    body: 'My work on agency runs in both directions: how children come to believe in their own capacity to choose, and how far they extend that capacity to others — including machines. This is where developmental psychology meets philosophy, and where questions about explanation, sufficient reason, and moral responsibility become empirically testable with four-year-olds.',
    related: ['cogsci21-constrained', 'hri25-morality', 'jecp25-butwhy', 'cogsci23-psr', 'cogsci19-fluency'],
  },
  {
    id: 'methods',
    index: '05',
    title: 'New instruments for developmental science',
    question: 'Can the technologies we study also help us study children?',
    body: 'Developmental data is expensive, slow, and drawn from narrow samples. At the Data Science Institute I work on the other side of the question: using robots and AI as instruments rather than stimuli, and building community-engaged infrastructure — museums, schools, public science spaces — that widens who ends up in the sample.',
    related: ['frontiers21-cel'],
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
      'Human–Robot Interaction Lab with Dr. Sarah Sebo',
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
    body: 'Coordinated a teaching team for the department’s large introductory developmental course, ran discussion sections, and managed assessment across several hundred students.',
  },
  {
    title: 'HD 1150 — Introduction to Infancy and Childhood',
    org: 'Cornell University',
    role: 'Teaching Assistant',
    period: 'Fall 2018',
    body: 'Led weekly sections introducing undergraduates to developmental theory and methods, from infant looking-time paradigms to preschool interviewing.',
  },
];

export const mentorship = [
  'Undergraduate and master’s researchers in the UChicago Human–Robot Interaction Lab, on study design, robot scripting, and analysis',
  'Research assistants at Cornell’s Early Childhood Cognition Lab across museum, lab, and online data collection',
  'First-generation and underrepresented students navigating research and graduate applications',
];

export const outreach = [
  {
    title: 'Museum-based developmental science',
    body: 'Much of my data has been collected on the floors of science museums rather than in a lab. Families take part in a short study, and then get to meet the robot and hear what the question actually was. It widens who participates in research and turns a study session into a science conversation.',
  },
  {
    title: 'The community-engaged lab',
    body: 'I contributed to a case-study framework for building durable partnerships between developmental labs and their surrounding communities — published in Frontiers in Psychology as a practical introduction for other researchers.',
  },
  {
    title: 'Graduate and Professional Diversity Council',
    body: 'Member at Cornell, working on recruitment, retention, and climate for graduate students across the university.',
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
    body: 'Presenting “Can You Help Me?” at HRI ’26 in Edinburgh — what happens to trust when a robot asks a child for help.',
    href: 'https://doi.org/10.1145/3757279.3785631',
  },
  {
    date: '2025',
    body: '“But why?: Children’s belief in the necessity of explanations” is out in the Journal of Experimental Child Psychology.',
    href: 'https://doi.org/10.1016/j.jecp.2025.106317',
  },
  {
    date: 'Sept 2024',
    body: 'Joined the Data Science Institute at the University of Chicago as a postdoctoral scholar.',
    href: 'https://datascience.uchicago.edu/people/teresa-flanagan/',
  },
];
