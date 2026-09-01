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
    body: 'I study the beliefs children and adults hold about what machines can feel, know, choose, and deserve. Those ideas are more structured than a simple verdict about whether a robot is alive, and they change with age, experience, and the kind of machine someone encounters.',
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
    body: 'I also study what happens once an interaction is underway: whether people trust a robot, feel connected to it, or want to keep engaging. Children do not simply scale down the adult response; their trust and connection follow a developmental path of their own.',
    related: ['cognition24-skeptical', 'hri26-help', 'chapter-empathetic-ai'],
  },
  {
    id: 'social-cognitive-development',
    index: '03',
    title: 'Social cognitive development',
    question: 'How do we come to understand other minds at all?',
    body: 'Not all of this work is about technology. I also study how children reason about explanation, evidence, and other minds, which is the foundation for the questions I ask about machines.',
    related: ['jecp25-butwhy', 'jepg24-personal-social', 'cogsci19-fluency'],
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
    org: 'Data Science Institute & Computer Science, University of Chicago',
    location: 'Chicago, IL',
    period: 'Aug 2024 — Present',
    detail: ['SEBO Lab with Dr. Sarah Sebo'],
    href: 'https://sebo-hri-lab.github.io/index.html',
  },
  {
    role: 'Postdoctoral Associate',
    org: 'Psychology & Neuroscience, Duke University',
    location: 'Durham, NC',
    period: 'Aug 2023 — Aug 2024',
    detail: ['Early Childhood Cognition Lab with Dr. Tamar Kushnir'],
  },
  {
    role: 'Graduate Researcher',
    org: 'Department of Psychology, Cornell University',
    location: 'Ithaca, NY',
    period: 'Aug 2018 — Aug 2023',
    detail: [
      'Early Childhood Cognition Lab with Dr. Tamar Kushnir',
      'Research on the Principles of Sufficient Reasoning with Dr. Shaun Nichols',
      'Play and Learning Lab with Dr. Marianella Casasola',
    ],
  },
  {
    role: 'Lab Manager & Research Assistant',
    org: 'Franklin & Marshall College',
    location: 'Lancaster, PA',
    period: 'Jan 2016 — May 2018',
    detail: [
      'Development and Experience Center',
      'Early Social Cognition Lab with Dr. Lauren Howard, as a Hackman Scholar',
    ],
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
    period: 'Aug 2018 — Aug 2023',
    detail: [
      'Concentration in Developmental Psychology; minor in Cognitive Science',
      'Dissertation: Growing up in the digital age — investigating children’s use, judgment, and engagement with interactive technologies',
      'Committee: Drs. Tamar Kushnir and Marianella Casasola (co-chairs), Shaun Nichols, David Pizarro',
    ],
  },
  {
    role: 'B.A., Scientific and Philosophical Studies of the Mind',
    org: 'Franklin & Marshall College',
    location: 'Lancaster, PA',
    period: 'May 2018',
    detail: [
      'Graduated cum laude; minor in Applied Mathematics',
      'Honors thesis: What will the robot do? A psychological, philosophical, and technological study on children’s attribution of free will',
    ],
  },
];

export const awards = [
  { name: 'Data Science Postdoctoral Scholar Fellowship', org: 'University of Chicago', year: 'Present' },
  { name: 'Martha E. Foulk Fellowship', org: 'Cornell University', year: '2021' },
  { name: 'Human Development Summer Research Fellowship', org: 'Cornell University', year: '2020' },
  { name: 'Edward S. Reed Prize', org: 'Franklin & Marshall College', year: '2018' },
  { name: 'Nissley Scholar Grant', org: 'Franklin & Marshall College', year: '2017 — 2018' },
  { name: 'Lucille and William Hackman Endowment', org: 'Franklin & Marshall College', year: '2017' },
];

export const methods = {
  'Data collection': [
    'In-person child studies (infancy through adolescence)',
    'Museum data collection (ages 2–10)',
    'Controlled child–robot interaction studies',
    'Infant eye tracking (6–18 months)',
    'In-home data collection with children',
    'Online testing with children and adults',
  ],
  Analysis: ['R', 'SPSS', 'Python', 'Qualtrics', 'Prolific'],
};

export type PressItem = {
  outlet: string;
  author: string;
  date: string;
  title: string;
  href: string;
};

/** Press coverage, newest first. */
export const press: PressItem[] = [
  {
    outlet: 'WUNC',
    author: 'Paige Miranda',
    date: 'August 14, 2023',
    title:
      '‘Roomba is like your pet and Alexa is like your friend’: How kids view home smart devices',
    href: 'https://www.wunc.org/science-technology/2023-08-14/how-kids-view-smart-home-devices-roomba-pet-alexa-friend',
  },
  {
    outlet: 'Cosmos',
    author: 'Petra Stock',
    date: 'May 25, 2023',
    title: 'Why people are making room for Roomba… in their hearts',
    href: 'https://cosmosmagazine.com/technology/explainer-why-people-are-making-room-for-roomba-in-their-hearts/',
  },
  {
    outlet: 'The Wall Street Journal',
    author: 'Alison Gopnik',
    date: 'May 13, 2023',
    title: 'A child’s view of intelligent machines',
    href: 'https://www.wsj.com/articles/a-childs-view-of-intelligent-machines-65838dae',
  },
  {
    outlet: 'Duke Today',
    author: 'Dan Vahaba',
    date: 'April 9, 2023',
    title: 'Kids judge Alexa smarter than Roomba, but say both deserve kindness',
    href: 'https://today.duke.edu/2023/04/kids-judge-alexa-smarter-roomba-say-both-deserve-kindness',
  },
];
