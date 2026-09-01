export type PublicationType = 'journal' | 'conference' | 'chapter' | 'dissertation' | 'thesis';

export type Publication = {
  id: string;
  title: string;
  /** Author list with Tess marked by `**` so the renderer can bold her name. */
  authors: string;
  year: number;
  venue: string;
  /** Volume/issue/pages, rendered in italics after the venue. */
  detail?: string;
  type: PublicationType;
  /** Short plain-language finding shown under featured entries. */
  summary?: string;
  award?: string;
  citations?: number;
  featured?: boolean;
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
  dissertation: 'Dissertation',
  thesis: 'Honors Thesis',
};

export const publications: Publication[] = [
  {
    id: 'hri26-help',
    title: 'Can You Help Me? The Influence of Robot Requests for Help on Child–Robot Connection',
    authors: '**Flanagan, T.**, Zhang, J. C., Bian, L., & Sebo, S.',
    year: 2026,
    venue: 'Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction (HRI ’26)',
    detail: 'pp. 465–474',
    type: 'conference',
    featured: true,
    summary:
      'Children aged 6–10 trusted a robot more when it asked them for help than when it simply reported a problem — and felt closest to a robot whose request carried genuine emotion.',
    links: {
      doi: 'https://doi.org/10.1145/3757279.3785631',
      pdf: 'http://hri.cs.uchicago.edu/publications/HRI_2026_Flanagan_Can_You_Help_Me.pdf',
      code: 'https://github.com/SeboLab/Robot_Requests_for_Help',
      osf: 'https://doi.org/10.17605/osf.io/bktus',
    },
  },
  {
    id: 'jecp25-butwhy',
    title: 'But why?: Children’s belief in the necessity of explanations',
    authors: '**Flanagan, T.**, Vesga, A., Kushnir, T., & Nichols, S.',
    year: 2025,
    venue: 'Journal of Experimental Child Psychology',
    detail: '260, 106317',
    type: 'journal',
    citations: 2,
    links: { doi: 'https://doi.org/10.1016/j.jecp.2025.106317' },
  },
  {
    id: 'hri25-morality',
    title: 'Perceived Morality of Robot and Human Transgressors Varies by Perceived Ability to Feel',
    authors: 'Georgiou, N. C., **Flanagan, T.**, Scassellati, B., & Kushnir, T.',
    year: 2025,
    venue: 'Proceedings of the 2025 ACM/IEEE International Conference on Human-Robot Interaction (HRI ’25)',
    type: 'conference',
    citations: 4,
  },
  {
    id: 'cognition24-skeptical',
    title: 'School-age children are more skeptical of inaccurate robots than adults',
    authors: '**Flanagan, T.**, Georgiou, N. C., Scassellati, B., & Kushnir, T.',
    year: 2024,
    venue: 'Cognition',
    detail: '249, 105814',
    type: 'journal',
    citations: 19,
    featured: true,
    summary:
      'When a robot got things wrong, school-age children discounted it more sharply than adults did — evidence that skepticism toward machines is actively constructed in childhood, not inherited from adults.',
    links: { doi: 'https://doi.org/10.1016/j.cognition.2024.105814' },
  },
  {
    id: 'jepg24-personal-social',
    title:
      'Is it personal or is it social? The interaction of knowledge domain and statistical evidence in U.S. and Chinese preschoolers’ social generalizations',
    authors: '**Flanagan, T.**, Zhao, X. A., Xu, F., & Kushnir, T.',
    year: 2024,
    venue: 'Journal of Experimental Psychology: General',
    type: 'journal',
    citations: 3,
  },
  {
    id: 'devpsych23-minds',
    title:
      'The minds of machines: Children’s beliefs about the experiences, thoughts, and morals of familiar interactive technologies',
    authors: '**Flanagan, T.**, Wong, G., & Kushnir, T.',
    year: 2023,
    venue: 'Developmental Psychology',
    type: 'journal',
    citations: 59,
    featured: true,
    summary:
      'Across Alexa, Roomba, and the Nao robot, children’s attributions of agency sorted into three distinct clusters — having experiences, having minds, and deserving moral treatment — and thinned out with age.',
    links: { doi: 'https://doi.org/10.1037/dev0001524' },
  },
  {
    id: 'cogsci23-psr',
    title: 'Must there be an explanation? Children and the Principle of Sufficient Reason',
    authors: '**Flanagan, T.**, Vesga, A., Kushnir, T., & Nichols, S.',
    year: 2023,
    venue: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
    detail: 'Vol. 45',
    type: 'conference',
  },
  {
    id: 'diss23',
    title:
      'Growing up in the digital age: Investigating children’s use, judgment, and engagement with interactive technologies',
    authors: '**Flanagan, T.**',
    year: 2023,
    venue: 'Doctoral dissertation, Cornell University',
    type: 'dissertation',
    citations: 2,
  },
  {
    id: 'humanamente22-agency',
    title: 'Children’s developing beliefs about agency and free will in an increasingly technological world',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 2022,
    venue: 'Humana.Mente Journal of Philosophical Studies',
    detail: '15(42)',
    type: 'journal',
    citations: 2,
  },
  {
    id: 'cogsci21-constrained',
    title: 'Constrained choice: Children’s and adults’ attribution of choice to a humanoid robot',
    authors: '**Flanagan, T.**, Rottman, J., & Howard, L. H.',
    year: 2021,
    venue: 'Cognitive Science',
    detail: '45(10), e13043',
    type: 'journal',
    citations: 25,
    featured: true,
    summary:
      'Children granted a humanoid robot the freedom to act otherwise in situations where adults saw only a machine following its programming.',
    links: { doi: 'https://doi.org/10.1111/cogs.13043' },
  },
  {
    id: 'frontiers21-cel',
    title: 'The community-engaged lab: A case-study introduction for developmental science',
    authors:
      'Liu, J., Partington, S., Suh, Y., Finiasz, Z., **Flanagan, T.**, Kocher, D., Kiely, R., Kortenaar, M., & Kushnir, T.',
    year: 2021,
    venue: 'Frontiers in Psychology',
    detail: '12, 715914',
    type: 'journal',
    citations: 4,
    links: { doi: 'https://doi.org/10.3389/fpsyg.2021.715914' },
  },
  {
    id: 'cogsci19-fluency',
    title:
      'Individual differences in fluency with idea generation predict children’s beliefs in their own free will',
    authors: '**Flanagan, T.**, & Kushnir, T.',
    year: 2019,
    venue: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
    detail: 'Vol. 41',
    type: 'conference',
    citations: 4,
  },
  {
    id: 'cogsci19-ascribe',
    title: 'Do children ascribe the ability to choose to humanoid robots?',
    authors: '**Flanagan, T.**, Rottman, J., & Howard, L.',
    year: 2019,
    venue: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
    detail: 'Vol. 41',
    type: 'conference',
    citations: 2,
  },
  {
    id: 'thesis18',
    title:
      'What will the robot do?: A psychological, philosophical, and technological study on children’s attribution of free will',
    authors: '**Flanagan, T.**',
    year: 2018,
    venue: 'Honors thesis, Franklin & Marshall College',
    type: 'thesis',
  },
];

export const featuredPublications = publications.filter((p) => p.featured);

export function groupByYear(list: Publication[]): [number, Publication[]][] {
  const byYear = new Map<number, Publication[]>();
  for (const pub of list) {
    const bucket = byYear.get(pub.year);
    if (bucket) bucket.push(pub);
    else byYear.set(pub.year, [pub]);
  }
  return [...byYear.entries()].sort((a, b) => b[0] - a[0]);
}
