// Anchor Tools - Part 1 (Categories 1-6: Systematic Review, Literature Discovery, Literature Mapping, PDF Analysis, Writing, Patents)
export const ANCHOR_TOOLS_PART1 = [
  // Systematic Review
  {
    id: 'rev-1',
    name: 'Consensus',
    category: 'Systematic Review',
    url: 'https://consensus.app',
    desc: 'Academic AI search engine that extracts findings directly from 200M+ peer-reviewed papers with a Consensus Meter.',
    stage: '03. Literature Review',
    baseScore: 9980,
    pricing: 'freemium'
  },
  {
    id: 'rev-2',
    name: 'Elicit',
    category: 'Systematic Review',
    url: 'https://elicit.com',
    desc: 'Automates systematic literature review tables, extracting methodologies, sample sizes, and PICO outcomes across papers.',
    stage: '04. Research Gap',
    baseScore: 9850,
    pricing: 'freemium'
  },
  {
    id: 'rev-3',
    name: 'Rayyan',
    category: 'Systematic Review',
    url: 'https://www.rayyan.ai',
    desc: 'Collaborative web workspace for blinded title/abstract screening and PRISMA systematic review inclusion tagging.',
    stage: '03. Literature Review',
    baseScore: 9420,
    pricing: 'freemium'
  },
  {
    id: 'rev-4',
    name: 'ASReview LAB',
    category: 'Systematic Review',
    url: 'https://asreview.nl',
    desc: 'Open-source active-learning systematic review screening suite developed at Utrecht University.',
    stage: '03. Literature Review',
    baseScore: 9190,
    pricing: 'free'
  },
  {
    id: 'rev-5',
    name: 'Scite.ai',
    category: 'Systematic Review',
    url: 'https://scite.ai',
    desc: 'Smart Citations engine that shows whether a paper has been supported, mentioned, or contrasted by subsequent studies.',
    stage: '11. Validation',
    baseScore: 9100,
    pricing: 'freemium'
  },

  // Literature Discovery
  {
    id: 'lit-1',
    name: 'Semantic Scholar',
    category: 'Literature Discovery',
    url: 'https://www.semanticscholar.org',
    desc: 'Free AI-powered academic search engine from Allen Institute for AI featuring TLDR summaries and citation velocity.',
    stage: '02. Literature Search',
    baseScore: 9940,
    pricing: 'free'
  },
  {
    id: 'lit-2',
    name: 'Google Scholar',
    category: 'Literature Discovery',
    url: 'https://scholar.google.com',
    desc: 'Comprehensive global index of scholarly articles, theses, books, abstracts, and legal opinions.',
    stage: '02. Literature Search',
    baseScore: 9910,
    pricing: 'free'
  },
  {
    id: 'lit-3',
    name: 'OpenAlex',
    category: 'Literature Discovery',
    url: 'https://openalex.org',
    desc: '100% open-source catalog of 250M+ global scholarly works, authors, institutions, and concepts with free API.',
    stage: '02. Literature Search',
    baseScore: 9540,
    pricing: 'free'
  },
  {
    id: 'lit-4',
    name: 'CORE',
    category: 'Literature Discovery',
    url: 'https://core.ac.uk',
    desc: 'World’s largest aggregator of open-access full-text research papers from institutional repositories.',
    stage: '02. Literature Search',
    baseScore: 9280,
    pricing: 'free'
  },

  // Literature Mapping
  {
    id: 'map-1',
    name: 'Connected Papers',
    category: 'Literature Mapping',
    url: 'https://www.connectedpapers.com',
    desc: 'Generates visual co-citation and bibliographic coupling graphs from a single seed paper to uncover prior & derivative works.',
    stage: '04. Research Gap',
    baseScore: 9920,
    pricing: 'freemium'
  },
  {
    id: 'map-2',
    name: 'Litmaps',
    category: 'Literature Mapping',
    url: 'https://www.litmaps.com',
    desc: 'Interactive chronological citation network mapper with automated literature monitoring alerts.',
    stage: '04. Research Gap',
    baseScore: 9630,
    pricing: 'freemium'
  },
  {
    id: 'map-3',
    name: 'ResearchRabbit',
    category: 'Literature Mapping',
    url: 'https://www.researchrabbit.ai',
    desc: 'Free citation-based literature discovery platform that visualizes author networks and related paper clusters.',
    stage: '02. Literature Search',
    baseScore: 9580,
    pricing: 'free'
  },
  {
    id: 'map-4',
    name: 'Inciteful',
    category: 'Literature Mapping',
    url: 'https://inciteful.xyz',
    desc: 'Builds a network graph connecting two separate papers or topics using open academic citation data.',
    stage: '04. Research Gap',
    baseScore: 9210,
    pricing: 'free'
  },

  // PDF & Paper Analysis
  {
    id: 'pdf-1',
    name: 'Google NotebookLM',
    category: 'PDF & Paper Analysis',
    url: 'https://notebooklm.google.com',
    desc: 'Upload up to 50 research PDFs per notebook to synthesize findings, compare methods, and generate grounded citations.',
    stage: '03. Literature Review',
    baseScore: 9960,
    pricing: 'free'
  },
  {
    id: 'pdf-2',
    name: 'SciSpace (Typeset)',
    category: 'PDF & Paper Analysis',
    url: 'https://typeset.io',
    desc: 'Highlight complex math equations, tables, or statistical paragraphs inside any PDF for instant plain-English explanations.',
    stage: '03. Literature Review',
    baseScore: 9740,
    pricing: 'freemium'
  },
  {
    id: 'pdf-3',
    name: 'Scholarcy',
    category: 'PDF & Paper Analysis',
    url: 'https://www.scholarcy.com',
    desc: 'Converts dense research articles and book chapters into structured summary flashcards with highlighted limitations.',
    stage: '03. Literature Review',
    baseScore: 9290,
    pricing: 'freemium'
  },

  // Academic Writing
  {
    id: 'wrt-1',
    name: 'Overleaf',
    category: 'Academic Writing',
    url: 'https://www.overleaf.com',
    desc: 'Collaborative cloud LaTeX editor pre-loaded with official IEEE, Springer, Elsevier, ACM, and Nature templates.',
    stage: '10. Paper Writing',
    baseScore: 9950,
    pricing: 'freemium'
  },
  {
    id: 'wrt-2',
    name: 'Manchester Academic Phrasebank',
    category: 'Academic Writing',
    url: 'https://www.phrasebank.manchester.ac.uk',
    desc: 'Curated repository of peer-reviewed rhetorical phrases for introductions, critiques, methods, and discussions.',
    stage: '10. Paper Writing',
    baseScore: 9690,
    pricing: 'free'
  },
  {
    id: 'wrt-3',
    name: 'Paperpal',
    category: 'Academic Writing',
    url: 'https://paperpal.com',
    desc: 'AI academic editor trained on millions of published manuscripts for technical grammar and journal readiness checks.',
    stage: '10. Paper Writing',
    baseScore: 9480,
    pricing: 'freemium'
  },
  {
    id: 'wrt-4',
    name: 'Writefull',
    category: 'Academic Writing',
    url: 'https://www.writefull.com',
    desc: 'Language feedback, abstract generator, and title synthesizer integrated with Overleaf and Word.',
    stage: '10. Paper Writing',
    baseScore: 9370,
    pricing: 'freemium'
  },

  // Thesis & Patents
  {
    id: 'pat-1',
    name: 'The Lens (Patent & Scholar)',
    category: 'Thesis & Patents',
    url: 'https://www.lens.org',
    desc: 'Open global database connecting 155M+ patent records directly to the scientific literature they cite.',
    stage: '01. Idea & Prior Art',
    baseScore: 9790,
    pricing: 'free'
  },
  {
    id: 'pat-2',
    name: 'OATD (Open Access Theses & Dissertations)',
    category: 'Thesis & Patents',
    url: 'https://oatd.org',
    desc: 'Search 6.8M+ open-access doctoral dissertations and master’s theses from 1,100+ universities worldwide.',
    stage: '10. Paper Writing',
    baseScore: 9510,
    pricing: 'free'
  },
  {
    id: 'pat-3',
    name: 'PQAI (Patent Quality AI)',
    category: 'Thesis & Patents',
    url: 'https://search.projectpq.ai',
    desc: 'Open-source AI prior-art search tool that converts plain-English invention descriptions into patent novelty reports.',
    stage: '01. Idea & Prior Art',
    baseScore: 9380,
    pricing: 'free'
  },
  {
    id: 'pat-4',
    name: 'Google Patents',
    category: 'Thesis & Patents',
    url: 'https://patents.google.com',
    desc: 'Full-text global patent search indexing USPTO, EPO, WIPO, and 100+ international patent offices with CPC classifications.',
    stage: '01. Idea & Prior Art',
    baseScore: 9620,
    pricing: 'free'
  },
  {
    id: 'pat-5',
    name: 'Espacenet (European Patent Office)',
    category: 'Thesis & Patents',
    url: 'https://worldwide.espacenet.com',
    desc: 'Official EPO search portal for auditing international patent families, legal status, and Cooperative Patent Classifications.',
    stage: '01. Idea & Prior Art',
    baseScore: 9290,
    pricing: 'free'
  },
];
