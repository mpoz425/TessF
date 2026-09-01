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
  citations?: number;
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
    links: { doi: 'https://doi.org/10.1016/j.cognition.2024.105814' },
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
    links: { doi: 'https://doi.org/10.1037/dev0001524' },
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
    links: { doi: 'https://www.humanamente.eu/index.php/HM/article/view/415' },
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
    links: { doi: 'https://doi.org/10.3389/fpsyg.2021.715914' },
  },
  {
    id: 'cogsci19-ascribe',
    title: 'Do children ascribe the ability to choose to humanoid robots?',
    authors: '**Flanagan, T.**, Rottman, J., & Howard, L.',
    year: 2019,
    venue: 'Proceedings of the 41st Annual Conference of the Cognitive Science Society',
    type: 'conference',
  },
  {
    id: 'cogsci19-fluency',
    title: 'Individual differences in counterfactual fluency predict judgments of free will',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 2019,
    venue: 'Proceedings of the 41st Annual Conference of the Cognitive Science Society',
    type: 'conference',
  },
];

/** Work that is written up but not yet published, shown as a short list. */
export const inProgress = [
  {
    title: 'Technologies in the home: A comprehensive report on children’s daily technology use',
    authors: '**Flanagan, T.**, DeCesare, A., & Kushnir, T.',
    status: 'Under review',
  },
  {
    title: 'Would you trust a robot that makes errors? The impact of robot errors on children’s trust',
    authors: 'Cao, X., **Flanagan, T.**, & Wang, F.',
    status: 'Under review',
  },
  {
    title: 'Children’s persistence and collaboration with mistaken robots',
    authors: '**Flanagan, T.**, Pitts, C., Georgiou, N., Scassellati, B., & Kushnir, T.',
    status: 'In preparation',
  },
  {
    title: 'Mind perception of a cheating robot',
    authors: '**Flanagan, T.**, Calabro, R., Leong, Y. C., & Sebo, S.',
    status: 'In preparation',
  },
  {
    title: 'Who am I collaborating with? Users’ perceptions of robots that are controlled by LLMs',
    authors: 'Zhang, J., **Flanagan, T.**, & Sebo, S.',
    status: 'In preparation',
  },
  {
    title:
      'Comparing the effects of robot empathy and self-disclosure on people’s rapport with a work companion robot',
    authors: 'Lin, T., **Flanagan, T.**, Malani, U., Liang, Y. L., Mutlu, B., Michaelis, J., & Sebo, S.',
    status: 'In preparation',
  },
];
