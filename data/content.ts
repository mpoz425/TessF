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
    body: 'Well before anyone sits them down to explain it, children arrive at working theories about what the technologies around them can feel, know, and want. I map those theories across the devices children actually encounter, including smart speakers, robot vacuums, and humanoid robots, and follow how they are reorganized over the course of development. What emerges is not a single judgment about whether a thing is alive, but a set of separable beliefs about whether it has experiences, whether it has a mind, and whether it deserves moral treatment, each of which appears to develop on its own timeline.',
    related: ['devpsych23-minds', 'humanamente22-agency'],
  },
  {
    id: 'trust',
    index: '02',
    title: 'Trust, testimony, and skepticism',
    question: 'When should a child believe a machine?',
    body: 'Children are increasingly learning from systems that sound confident and fluent even when they happen to be wrong, which raises the question of how they go about calibrating their trust. I look at the cues they use to discount an unreliable robot, at the way that skepticism shifts across the school years, and at the points where children respond rather differently from adults who have been shown the same errors.',
    related: ['cognition24-skeptical'],
  },
  {
    id: 'connection',
    index: '03',
    title: 'Connection and vulnerability in child–robot interaction',
    question: 'What makes a child feel close to a robot?',
    body: 'Whatever relationship a child forms with a robot is assembled out of small behavioral moments, and controlled interaction studies let me isolate which of those moments matter. Asking a child for help rather than simply reporting a problem turns out to make a measurable difference, as does expressing something that reads as feeling rather than as malfunction. My interest is in what findings like these imply for the design of robots that children may end up spending a good deal of time with in classrooms.',
    related: ['hri26-help'],
  },
  {
    id: 'agency',
    index: '04',
    title: 'Choice, free will, and moral standing',
    question: 'Who gets to count as an agent?',
    body: 'My work on agency runs in two directions at once, taking in both how children come to believe in their own capacity to choose and how far they are willing to extend that capacity to others, machines included. This is the point at which developmental psychology meets philosophy most directly, and where longstanding questions about explanation, sufficient reason, and moral responsibility can be turned into something that is genuinely testable with four-year-olds.',
    related: ['cogsci21-constrained', 'hri25-morality', 'jecp25-butwhy', 'cogsci23-psr', 'cogsci19-fluency'],
  },
  {
    id: 'methods',
    index: '05',
    title: 'New instruments for developmental science',
    question: 'Can the technologies we study also help us study children?',
    body: 'Developmental data tends to be slow and costly to collect, and it is often drawn from a narrower range of families than we would like. At the Data Science Institute I have been working on the other side of that problem, treating robots and AI systems as instruments for research rather than only as objects of study, and helping build the kind of community-engaged infrastructure, in museums, schools, and public science spaces, that widens who is able to take part in the first place.',
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

export const mentorship = [
  'Undergraduate and master’s researchers in the UChicago Human–Robot Interaction Lab, working on study design, robot scripting, and analysis',
  'Research assistants at Cornell’s Early Childhood Cognition Lab, across museum, laboratory, and online data collection',
  'First-generation and underrepresented students thinking through research experience and graduate applications',
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
    body: 'I joined the Data Science Institute at the University of Chicago as a postdoctoral scholar, working in Sarah Sebo’s Human–Robot Interaction Lab.',
    href: 'https://datascience.uchicago.edu/people/teresa-flanagan/',
  },
];
