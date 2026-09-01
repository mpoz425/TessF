export type PublicationType = 'journal' | 'conference' | 'chapter';

export type Publication = {
  id: string;
  title: string;
  /** Author list with Tess marked by `**` so the renderer can bold her name. */
  authors: string;
  /** Numeric year, or a status label for work not yet in print. */
  year: number | 'in press';
  venue: string;
  /** Volume/issue/pages, rendered after the venue. */
  detail?: string;
  type: PublicationType;
  /** Short plain-language finding shown under featured entries. */
  summary?: string;
  links?: {
    doi?: string;
    pdf?: string;
    code?: string;
    osf?: string;
  };
};

export const typeLabels: Record<PublicationType, string> = {
  journal: 'Journal Article',
  conference: 'Conference Paper',
  chapter: 'Book Chapter',
};

export const publications: Publication[] = [
  {
    id: 'hri26-help',
    title: 'Can you help me? The influence of robot requests for help on child–robot connection',
    authors: '**Flanagan, T.**, Zhang, J., Bian, L., & Sebo, S.',
    year: 2026,
    venue:
      'Proceedings of the 2026 ACM/IEEE International Conference on Human-Robot Interaction (HRI ’26)',
    type: 'conference',
    summary:
      'Children between six and ten trusted a robot more readily when it asked them for help than when it simply reported that something had gone wrong, and they felt closest to it when that request was expressed with some evident feeling behind it.',
    links: {
      doi: 'https://dl.acm.org/doi/abs/10.1145/3757279.3785631',
      pdf: 'http://hri.cs.uchicago.edu/publications/HRI_2026_Flanagan_Can_You_Help_Me.pdf',
      code: 'https://github.com/SeboLab/Robot_Requests_for_Help',
      osf: 'https://doi.org/10.17605/osf.io/bktus',
    },
  },
  {
    id: 'chapter-empathetic-ai',
    title: 'Children’s judgments and interactions with empathetic AI',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 'in press',
    venue: 'In D. Cameron & A. Perry (Eds.), AI Empathy',
    type: 'chapter',
  },
  {
    id: 'jecp25-butwhy',
    title: 'But why?: Children’s belief in the necessity of explanations',
    authors: '**Flanagan, T.**, Vesga, A., Kushnir, T., & Nichols, S.',
    year: 2025,
    venue: 'Journal of Experimental Child Psychology',
    type: 'journal',
    links: { doi: 'https://doi.org/10.1016/j.jecp.2025.106317' },
  },
  {
    id: 'hri25-morality',
    title: 'Perceived morality of robot and human transgressors varies by perceived ability to feel',
    authors: 'Georgiou, N., **Flanagan, T.**, Scassellati, B., & Kushnir, T.',
    year: 2025,
    venue:
      'Proceedings of the 2025 ACM/IEEE International Conference on Human-Robot Interaction (HRI ’25)',
    type: 'conference',
    links: {
      doi: 'https://doi.org/10.1109/HRI61500.2025.10973927',
      pdf: 'https://par.nsf.gov/servlets/purl/10669107',
    },
  },
  {
    id: 'cognition24-skeptical',
    title: 'School-age children are more skeptical of inaccurate robots than adults',
    authors: '**Flanagan, T.**, Georgiou, N., Scassellati, B., & Kushnir, T.',
    year: 2024,
    venue: 'Cognition',
    type: 'journal',
    summary:
      'When a robot gave inaccurate information, school-age children discounted it considerably more sharply than adults did, which suggests that skepticism toward machines is something children work out for themselves rather than something they absorb from the adults around them.',
    links: {
      doi: 'https://doi.org/10.1016/j.cognition.2024.105814',
      pdf: 'https://par.nsf.gov/servlets/purl/10576147',
    },
  },
  {
    id: 'jepg24-personal-social',
    title:
      'Is it personal or is it social? The interaction of knowledge domain and statistical evidence in U.S. and Chinese preschoolers’ social generalizations',
    authors: '**Flanagan, T.**, Zhao, X., Xu, F., & Kushnir, T.',
    year: 2024,
    venue: 'Journal of Experimental Psychology: General',
    type: 'journal',
    links: { doi: 'https://doi.org/10.1037/xge0001605' },
  },
  {
    id: 'devpsych23-minds',
    title:
      'The minds of machines: Children’s beliefs about the experiences, thoughts, and morals of familiar interactive technologies',
    authors: '**Flanagan, T.**, Wong, G., & Kushnir, T.',
    year: 2023,
    venue: 'Developmental Psychology',
    type: 'journal',
    summary:
      'Across Alexa, Roomba, and the NAO robot, the properties children attributed to each technology sorted into three distinct clusters, covering whether it has experiences, whether it has a mind, and whether it deserves moral treatment. Children endorsed some agent-like features for all three devices, though they did so less as they grew older.',
    links: {
      doi: 'https://doi.org/10.1037/dev0001524',
      pdf: 'https://psycnet.apa.org/manuscript/2023-61671-001.pdf',
    },
  },
  {
    id: 'humanamente22-agency',
    title:
      'Children’s developing beliefs about agency and free will in an increasingly technological world',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 2022,
    venue: 'HUMANA.MENTE Journal of Philosophical Studies',
    detail: '15(42), 179–204',
    type: 'journal',
    links: {
      doi: 'https://www.humanamente.eu/index.php/HM/article/view/415',
      pdf: 'https://www.humanamente.eu/index.php/HM/article/download/415/328',
    },
  },
  {
    id: 'cogsci21-constrained',
    title: 'Constrained choice: Children’s and adults’ attribution of choice to a humanoid robot',
    authors: '**Flanagan, T.**, Rottman, J., & Howard, L.',
    year: 2021,
    venue: 'Cognitive Science',
    detail: '45(10), e13043',
    type: 'journal',
    summary:
      'Presented with the same constrained scenarios, children were willing to grant a humanoid robot the freedom to have acted otherwise, whereas adults tended to see nothing more than a machine following its programming.',
    links: { doi: 'https://doi.org/10.1111/cogs.13043' },
  },
  {
    id: 'frontiers21-cel',
    title: 'The community-engaged lab: A case-study introduction for developmental science',
    authors:
      'Liu, J., Partington, S., Suh, Y., Finiasz, Z., **Flanagan, T.**, Kocher, D., Kortenaar, M., & Kushnir, T.',
    year: 2021,
    venue: 'Frontiers in Psychology',
    detail: '12',
    type: 'journal',
    links: {
      doi: 'https://doi.org/10.3389/fpsyg.2021.715914',
      pdf: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.715914/pdf',
    },
  },
  {
    id: 'cogsci19-ascribe',
    title: 'Do children ascribe the ability to choose to humanoid robots?',
    authors: '**Flanagan, T.**, Rottman, J., & Howard, L.',
    year: 2019,
    venue: 'Proceedings of the 41st Annual Conference of the Cognitive Science Society',
    type: 'conference',
    links: {
      pdf: 'https://escholarship.org/content/qt7jr8x5rs/qt7jr8x5rs.pdf',
    },
  },
  {
    id: 'cogsci19-fluency',
    title: 'Individual differences in counterfactual fluency predict judgments of free will',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 2019,
    venue: 'Proceedings of the 41st Annual Conference of the Cognitive Science Society',
    type: 'conference',
    links: {
      pdf: 'https://escholarship.org/content/qt7622v521/qt7622v521.pdf',
    },
  },
];
