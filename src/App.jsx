import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  Sparkles,
  BookOpen,
  FileText,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Layers,
  CheckCircle2,
  Bookmark,
  Compass,
  Command,
  RotateCcw,
  Eye,
  Heart,
  Sun,
  Moon,
  X,
  Copy,
  Check,
  Award,
  Database,
  Code2,
  BarChart3,
  ShieldCheck,
  Terminal,
  Cpu,
  Microscope
} from 'lucide-react';

// ============================================================================
// 1. SCIENTIFIC DISCOVERY FACTS ENGINE (Refreshes on Reload)
// ============================================================================
const SCIENTIFIC_FACTS = [
  {
    id: 'fact-1',
    field: 'Mathematical Statistics',
    year: '1939',
    title: 'George Dantzig’s "Homework" Breakthrough',
    fact: 'Arriving late to Jerzy Neyman’s Berkeley statistics lecture, PhD student George Dantzig copied two famous unsolved problems from the chalkboard thinking they were homework—and handed in complete proofs days later.'
  },
  {
    id: 'fact-2',
    field: 'Molecular Biophysics',
    year: '1952',
    title: 'Rosalind Franklin’s 100-Hour Photo 51 Exposure',
    fact: 'Photograph 51—the X-ray diffraction image that revealed the double-helix geometry of DNA—required 100 hours of continuous X-ray exposure hydrated at exact relative humidity by Rosalind Franklin and Raymond Gosling.'
  },
  {
    id: 'fact-3',
    field: 'Information Systems',
    year: '1989',
    title: 'The Web Was Invented to Share Research Preprints',
    fact: 'Sir Tim Berners-Lee created HTML, HTTP, and URLs at CERN specifically so visiting physicists across global universities could cross-reference experimental nuclear research documentation without losing citations.'
  },
  {
    id: 'fact-4',
    field: 'Number Theory',
    year: '1966',
    title: 'The Shortest Counterexample Paper in History',
    fact: 'Lander and Parkin disproved Leonhard Euler’s 200-year-old sum-of-powers conjecture in the Bulletin of the American Mathematical Society using just two sentences and a single equation found on a CDC 6600 mainframe: 27⁵ + 84⁵ + 110⁵ + 133⁵ = 144⁵.'
  },
  {
    id: 'fact-5',
    field: 'Biochemistry',
    year: '1983',
    title: 'PCR Was Conceived on a Midnight Drive',
    fact: 'Kary Mullis conceptualized the Polymerase Chain Reaction (PCR)—which amplifies a single DNA segment into billions of copies—while driving along California Highway 128 at night, revolutionizing genomics and forensics.'
  },
  {
    id: 'fact-6',
    field: 'Astrophysics',
    year: '1970',
    title: 'Vera Rubin’s Galactic Rotation Curves',
    fact: 'By measuring the spectra of outer spiral galaxies at Kitt Peak Observatory, Vera Rubin and Kent Ford discovered that stars at the edges orbited just as fast as stars near the center, providing the first robust observational evidence for dark matter.'
  },
  {
    id: 'fact-7',
    field: 'Radio Astronomy',
    year: '1967',
    title: 'Jocelyn Bell Burnell’s "Scruff" on 3 Miles of Chart Paper',
    fact: 'While analyzing three miles of paper chart recordings by hand at Cambridge, graduate student Jocelyn Bell Burnell spotted a 0.25-inch anomaly repeating every 1.3373011 seconds—discovering the first pulsar (rapidly spinning neutron star).'
  },
  {
    id: 'fact-8',
    field: 'Radiochemistry',
    year: '1898',
    title: 'Marie Curie’s Lead-Lined Laboratory Notebooks',
    fact: 'Marie Skłodowska-Curie’s original laboratory notebooks from her discovery of polonium and radium remain so radioactive (Radium-226 has a 1,600-year half-life) that scholars at the Bibliothèque Nationale de France must sign a waiver and wear protective gear to inspect them.'
  }
];

// ============================================================================
// 2. COLORFUL CATEGORY METADATA (12 Core Blueprint Categories)
// ============================================================================
const CATEGORIES = [
  { name: 'All Categories', color: 'from-indigo-500 to-violet-500', badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
  { name: 'Literature Discovery', color: 'from-blue-500 to-indigo-600', badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  { name: 'Literature Mapping', color: 'from-violet-500 to-purple-600', badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
  { name: 'Systematic Review', color: 'from-emerald-500 to-teal-600', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { name: 'PDF & Paper Analysis', color: 'from-rose-500 to-pink-600', badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
  { name: 'Academic Writing', color: 'from-amber-500 to-orange-600', badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { name: 'Thesis & Patents', color: 'from-cyan-500 to-sky-600', badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
  { name: 'Citations & References', color: 'from-fuchsia-500 to-pink-600', badge: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' },
  { name: 'Data & Statistics', color: 'from-sky-500 to-blue-600', badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  { name: 'Coding & ML', color: 'from-teal-500 to-emerald-600', badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30' },
  { name: 'Visualization & Diagrams', color: 'from-orange-500 to-red-500', badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30' },
  { name: 'Journal & Conference Finders', color: 'from-purple-500 to-indigo-600', badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  { name: 'Datasets & Repositories', color: 'from-green-500 to-emerald-600', badge: 'bg-green-500/15 text-green-300 border-green-500/30' }
];

const CATEGORY_STYLE_MAP = CATEGORIES.reduce((acc, cat) => {
  acc[cat.name] = cat;
  return acc;
}, {});

// ============================================================================
// 3. RESEARCH TOOLS CATALOG
// ============================================================================
const ANCHOR_TOOLS = [
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

  // Citations & References
  {
    id: 'cit-1',
    name: 'Zotero',
    category: 'Citations & References',
    url: 'https://www.zotero.org',
    desc: 'Free, open-source reference manager with PDF annotation, BibTeX sync, Retraction Watch alerts, and 10,000+ citation styles.',
    stage: '11. Validation',
    baseScore: 9970,
    pricing: 'free'
  },
  {
    id: 'cit-2',
    name: 'ZoteroBib (zbib)',
    category: 'Citations & References',
    url: 'https://zbib.org',
    desc: 'Instant browser-based bibliography builder supporting DOI, ISBN, PMID, and arXiv IDs in APA, IEEE, and Vancouver.',
    stage: '11. Validation',
    baseScore: 9610,
    pricing: 'free'
  },
  {
    id: 'cit-3',
    name: 'JabRef',
    category: 'Citations & References',
    url: 'https://www.jabref.org',
    desc: 'Open-source cross-platform BibTeX and BibLaTeX reference manager built specifically for LaTeX researchers.',
    stage: '11. Validation',
    baseScore: 9340,
    pricing: 'free'
  },

  // Data & Statistics
  {
    id: 'dat-1',
    name: 'JASP Statistical Software',
    category: 'Data & Statistics',
    url: 'https://jasp-stats.org',
    desc: 'Free, open-source SPSS alternative endorsed by universities for both Frequentist and Bayesian statistical analysis.',
    stage: '09. Data Analysis',
    baseScore: 9810,
    pricing: 'free'
  },
  {
    id: 'dat-2',
    name: 'G*Power Statistical Power Analysis',
    category: 'Data & Statistics',
    url: 'https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower',
    desc: 'Gold-standard academic software for computing statistical power and required sample sizes across t, F, χ², and z tests.',
    stage: '06. Methodology',
    baseScore: 9660,
    pricing: 'free'
  },
  {
    id: 'dat-3',
    name: 'Julius AI',
    category: 'Data & Statistics',
    url: 'https://julius.ai',
    desc: 'Natural-language data analyst that executes Python/R code on CSV and Excel datasets to run ANOVA, regression, and plots.',
    stage: '09. Data Analysis',
    baseScore: 9490,
    pricing: 'freemium'
  },

  // Coding & ML
  {
    id: 'cod-1',
    name: 'Google Colaboratory (Colab)',
    category: 'Coding & ML',
    url: 'https://colab.research.google.com',
    desc: 'Hosted Jupyter Notebook workspace providing free cloud access to NVIDIA T4 GPUs and TPUs for deep learning experiments.',
    stage: '08. Experiment',
    baseScore: 9930,
    pricing: 'freemium'
  },
  {
    id: 'cod-2',
    name: 'Papers With Code',
    category: 'Coding & ML',
    url: 'https://paperswithcode.com',
    desc: 'Open directory linking machine learning papers directly to their official GitHub repositories and SOTA leaderboards.',
    stage: '08. Experiment',
    baseScore: 9780,
    pricing: 'free'
  },
  {
    id: 'cod-3',
    name: 'Hugging Face Hub',
    category: 'Coding & ML',
    url: 'https://huggingface.co',
    desc: 'Open-source collaborative hub hosting 900,000+ pretrained transformer weights, datasets, and Gradio research demos.',
    stage: '08. Experiment',
    baseScore: 9840,
    pricing: 'freemium'
  },

  // Visualization & Diagrams
  {
    id: 'vis-1',
    name: 'Draw.io (diagrams.net)',
    category: 'Visualization & Diagrams',
    url: 'https://app.diagrams.net',
    desc: 'Free browser-based vector diagramming suite for neural architectures, PRISMA flowcharts, and 600-DPI PDF/SVG figures.',
    stage: '10. Paper Writing',
    baseScore: 9870,
    pricing: 'free'
  },
  {
    id: 'vis-2',
    name: 'RAWGraphs 2.0',
    category: 'Visualization & Diagrams',
    url: 'https://www.rawgraphs.io',
    desc: 'Open-source web tool that converts tabular research data into publication-grade alluvial, dendrogram, and violin SVG charts.',
    stage: '09. Data Analysis',
    baseScore: 9520,
    pricing: 'free'
  },
  {
    id: 'vis-3',
    name: 'ColorBrewer 2.0',
    category: 'Visualization & Diagrams',
    url: 'https://colorbrewer2.org',
    desc: 'Scientifically validated colorblind-safe and print-friendly color palettes for cartography and multi-class plots.',
    stage: '10. Paper Writing',
    baseScore: 9360,
    pricing: 'free'
  },

  // Journal & Conference Finders
  {
    id: 'jrn-1',
    name: 'Elsevier Journal Finder',
    category: 'Journal & Conference Finders',
    url: 'https://journalfinder.elsevier.com',
    desc: 'Paste your paper title and abstract to match against Scopus-indexed journals with CiteScore, Impact Factor, and review speed.',
    stage: '12. Journal Selection',
    baseScore: 9890,
    pricing: 'free'
  },
  {
    id: 'jrn-2',
    name: 'Springer Nature Journal Suggester',
    category: 'Journal & Conference Finders',
    url: 'https://journalsuggester.springer.com',
    desc: 'Semantic abstract matcher across 2,500+ Springer and Nature Portfolio journals with acceptance rate metrics.',
    stage: '12. Journal Selection',
    baseScore: 9720,
    pricing: 'free'
  },
  {
    id: 'jrn-3',
    name: 'IEEE Publication Recommender',
    category: 'Journal & Conference Finders',
    url: 'https://publication-recommender.ieee.org',
    desc: 'Matches engineering and computer science manuscripts with IEEE Transactions, Journals, and upcoming Conferences.',
    stage: '12. Journal Selection',
    baseScore: 9680,
    pricing: 'free'
  },
  {
    id: 'jrn-4',
    name: 'DOAJ (Directory of Open Access Journals)',
    category: 'Journal & Conference Finders',
    url: 'https://doaj.org',
    desc: 'Independent index of 20,000+ peer-reviewed open-access journals, including 13,000+ diamond OA journals with $0 APC fees.',
    stage: '12. Journal Selection',
    baseScore: 9640,
    pricing: 'free'
  },
  {
    id: 'jrn-5',
    name: 'Scimago Journal & Country Rank (SJR)',
    category: 'Journal & Conference Finders',
    url: 'https://www.scimagojr.com',
    desc: 'Public portal for verifying Q1–Q4 journal quartiles, H-index metrics, and Scopus subject rankings.',
    stage: '12. Journal Selection',
    baseScore: 9760,
    pricing: 'free'
  },

  // Datasets & Repositories
  {
    id: 'dst-1',
    name: 'Google Dataset Search',
    category: 'Datasets & Repositories',
    url: 'https://datasetsearch.research.google.com',
    desc: 'Indexes 45M+ open scientific datasets across government portals, Harvard Dataverse, Zenodo, and Figshare.',
    stage: '07. Data Collection',
    baseScore: 9880,
    pricing: 'free'
  },
  {
    id: 'dst-2',
    name: 'Zenodo (CERN Open Science)',
    category: 'Datasets & Repositories',
    url: 'https://zenodo.org',
    desc: 'CERN-operated open repository that mints permanent citable DOIs for research datasets, code releases, and preprints.',
    stage: '07. Data Collection',
    baseScore: 9750,
    pricing: 'free'
  },
  {
    id: 'dst-3',
    name: 'UCI Machine Learning Repository',
    category: 'Datasets & Repositories',
    url: 'https://archive.ics.uci.edu',
    desc: 'Foundational collection of 650+ curated benchmark datasets for empirical machine learning and statistical evaluation.',
    stage: '07. Data Collection',
    baseScore: 9610,
    pricing: 'free'
  }
];

// ============================================================================
// 3b. FULL TOOL CATALOG (hand-written tools only, with search index)
// ============================================================================
const ALL_TOOLS = ANCHOR_TOOLS.map((t) => ({
  ...t,
  searchBlob: `${t.name} ${t.category} ${t.desc} ${t.stage}`.toLowerCase()
}));

// ============================================================================
// 4. OFFICIAL PUBLISHER & MANUSCRIPT TEMPLATES HUB (28+ Official Links)
// ============================================================================
const TEMPLATE_CATEGORIES = [
  'All Templates',
  'IEEE & Conferences',
  'Springer, Elsevier & Journals',
  'Review Papers (Systematic / Comprehensive / General)',
  'Book Chapters & Monographs',
  'Thesis, Dissertations & Patents'
];

const ACADEMIC_TEMPLATES = [
  {
    id: 'tpl-ieee-conf',
    name: 'IEEE Conference Two-Column Template (IEEEtran)',
    publisher: 'IEEE',
    category: 'IEEE & Conferences',
    formatBadge: 'LaTeX + Word (.docx)',
    overleafUrl: 'https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn',
    officialDownloadUrl: 'https://www.ieee.org/conferences/publishing/templates.html',
    desc: 'Official two-column 10pt Times Roman format required for all IEEE international conferences and symposia.',
    sections: ['Abstract & Index Terms', 'I. Introduction', 'II. Related Work', 'III. Proposed Methodology', 'IV. Experimental Evaluation', 'V. Conclusion & References (IEEE Style)']
  },
  {
    id: 'tpl-ieee-trans',
    name: 'IEEE Transactions & Journal Article Template',
    publisher: 'IEEE',
    category: 'IEEE & Conferences',
    formatBadge: 'LaTeX + Word (.docx)',
    overleafUrl: 'https://www.overleaf.com/latex/templates/preparation-of-papers-for-ieee-transactions-and-journals/fmpBVnWSJrGR',
    officialDownloadUrl: 'https://template-selector.ieee.org/',
    desc: 'Official IEEE Transactions template supporting graphical abstracts, author biographies, and double-column proof layout.',
    sections: ['Abstract & Index Terms', 'I. Introduction & Contributions', 'II. System Model / Problem Formulation', 'III. Theoretical & Algorithmic Analysis', 'IV. Empirical Results & Ablation', 'V. Conclusion & Author Biographies']
  },
  {
    id: 'tpl-acm-acmart',
    name: 'ACM Primary Article Template (acmart)',
    publisher: 'Association for Computing Machinery',
    category: 'IEEE & Conferences',
    formatBadge: 'LaTeX + Word',
    overleafUrl: 'https://www.overleaf.com/latex/templates/acm-conference-proceedings-primary-article-template/wbvnghjbzwpc',
    officialDownloadUrl: 'https://www.acm.org/publications/proceedings-template',
    desc: 'Master single- and double-column template for CHI, SIGGRAPH, KDD, WWW, and ACM Transactions.',
    sections: ['Abstract & CCS Concepts', '1. Introduction', '2. Background & Related Work', '3. System Architecture', '4. Evaluation & User Study', '5. Discussion, Limitations & References']
  },
  {
    id: 'tpl-springer-sn',
    name: 'Springer Nature Journal Article Template (sn-jnl)',
    publisher: 'Springer Nature',
    category: 'Springer, Elsevier & Journals',
    formatBadge: 'LaTeX (.zip) + Word',
    overleafUrl: 'https://www.overleaf.com/latex/templates/springer-nature-latex-template/myxmhdsbzkyd',
    officialDownloadUrl: 'https://www.springernature.com/gp/authors/campaigns/latex-author-support',
    desc: 'Universal manuscript package for 2,500+ Springer, Nature Portfolio, and BMC peer-reviewed journals.',
    sections: ['Structured Abstract & Keywords', '1. Introduction', '2. Literature Review', '3. Materials and Methods', '4. Results and Discussion', '5. Declarations, Data Availability & References']
  },
  {
    id: 'tpl-springer-lncs',
    name: 'Springer Lecture Notes in Computer Science (LNCS)',
    publisher: 'Springer',
    category: 'Springer, Elsevier & Journals',
    formatBadge: 'LaTeX (llncs2e) + Word',
    overleafUrl: 'https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj',
    officialDownloadUrl: 'https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines',
    desc: 'Official single-column camera-ready format for Springer LNCS, LNAI, and MICCAI proceedings.',
    sections: ['Title & Running Head', 'Abstract (150–250 words)', '1. Introduction', '2. Preliminaries', '3. Proposed Framework', '4. Experiments & References (splncs04)']
  },
  {
    id: 'tpl-elsevier-cas',
    name: 'Elsevier CAS Single & Double Column (elsarticle)',
    publisher: 'Elsevier',
    category: 'Springer, Elsevier & Journals',
    formatBadge: 'LaTeX (cas-sc / cas-dc) + Word',
    overleafUrl: 'https://www.overleaf.com/latex/templates/elseviers-cas-latex-double-column-template/hhzpymgjmxfk',
    officialDownloadUrl: 'https://www.elsevier.com/researcher/author/policies-and-guidelines/latex-instructions',
    desc: 'Standard template for ScienceDirect journals including Highlights, Graphical Abstract, and CRediT authorship.',
    sections: ['Research Highlights (3–5 bullets)', 'Abstract & Keywords', '1. Introduction', '2. Methodology', '3. Empirical Results', '4. CRediT Authorship & Declaration of Interest']
  },
  {
    id: 'tpl-prisma-slr',
    name: 'PRISMA 2020 Systematic Literature Review (SLR) Template',
    publisher: 'PRISMA Statement / BMJ',
    category: 'Review Papers (Systematic / Comprehensive / General)',
    formatBadge: 'Word Checklist + Flow Diagram + LaTeX',
    overleafUrl: 'https://www.overleaf.com/latex/templates?q=PRISMA+systematic+review',
    officialDownloadUrl: 'https://www.prisma-statement.org/prisma-2020-flow-diagram',
    desc: 'Gold-standard 27-item PRISMA 2020 protocol and 4-phase selection flow diagram for systematic reviews and meta-analyses.',
    sections: ['1. Structured Review Question (PICO)', '2. Eligibility Criteria & Information Sources', '3. Database Boolean Search Strategy', '4. PRISMA 2020 Selection Flowchart', '5. Risk of Bias & Quality Assessment', '6. Quantitative Synthesis & Meta-Analysis']
  },
  {
    id: 'tpl-comp-survey',
    name: 'Comprehensive State-of-the-Art Survey & Taxonomy Paper',
    publisher: 'ACM Computing Surveys / IEEE COMST Style',
    category: 'Review Papers (Systematic / Comprehensive / General)',
    formatBadge: 'LaTeX + Taxonomy Blueprint',
    overleafUrl: 'https://www.overleaf.com/latex/templates/acm-journals-primary-article-template/cpkjqttwbpbm',
    officialDownloadUrl: 'https://dl.acm.org/journal/csur/author-guidelines',
    desc: 'Designed for 25–40 page comprehensive survey papers featuring hierarchical taxonomy trees, comparison matrices, and open challenges.',
    sections: ['1. Introduction & Prior Surveys Comparison Table', '2. Background & Foundational Preliminaries', '3. Proposed Multi-Level Taxonomy', '4. Qualitative & Quantitative Method Comparison', '5. Benchmark Datasets & Evaluation Metrics', '6. Open Research Challenges & Future Directions']
  },
  {
    id: 'tpl-general-review',
    name: 'General / Narrative Literature Review Article Template',
    publisher: 'Universal Academic Standard',
    category: 'Review Papers (Systematic / Comprehensive / General)',
    formatBadge: 'LaTeX + Word (.docx)',
    overleafUrl: 'https://www.overleaf.com/latex/templates?q=literature+review',
    officialDownloadUrl: 'https://www.springer.com/gp/authors-editors/authorandreviewertutorials/writing-a-journal-manuscript',
    desc: 'Streamlined structure for thematic, historical, or conceptual literature reviews synthesizing key debates and research gaps.',
    sections: ['1. Abstract & Scope of Review', '2. Historical Evolution of the Field', '3. Thematic Synthesis of Core Schools of Thought', '4. Critical Contradictions & Methodological Gaps', '5. Conceptual Framework & Future Agenda']
  },
  {
    id: 'tpl-springer-book-chapter',
    name: 'Springer Edited Book Chapter & Contributed Volume (svmult)',
    publisher: 'Springer Nature Books',
    category: 'Book Chapters & Monographs',
    formatBadge: 'LaTeX (svmult) + Word (.zip)',
    overleafUrl: 'https://www.overleaf.com/latex/templates?q=springer+book+chapter',
    officialDownloadUrl: 'https://www.springer.com/gp/authors-editors/book-authors-editors/your-publication-journey/manuscript-preparation',
    desc: 'Official Springer chapter template (`svmult.cls`) for edited volumes, handbooks, and Festschriften with index terms.',
    sections: ['Chapter Title & Author Affiliation', 'Abstract (Online Collectible)', '1. Introduction & Chapter Roadmap', '2. Core Theoretical / Empirical Exposition', '3. Case Study / Application', '4. Summary, Key Takeaways & References']
  },
  {
    id: 'tpl-elsevier-book-chapter',
    name: 'Elsevier Edited Book Chapter & Reference Module Template',
    publisher: 'Elsevier Books / Academic Press',
    category: 'Book Chapters & Monographs',
    formatBadge: 'Word + LaTeX Guidelines',
    overleafUrl: 'https://www.overleaf.com/latex/templates?q=book+chapter',
    officialDownloadUrl: 'https://www.elsevier.com/books-and-journals/book-companion/author-resources',
    desc: 'Structured book chapter layout for Academic Press and Elsevier handbooks featuring Key Points, Glossary, and Nomenclature.',
    sections: ['Chapter Outline & Keywords', 'Synopsis / Abstract', '1. Foundational Principles', '2. Advanced Methodologies & Protocols', '3. Future Outlook', 'Glossary & Further Reading']
  },
  {
    id: 'tpl-phd-masters-thesis',
    name: 'Universal PhD Dissertation & Master’s Thesis Template',
    publisher: 'MIT / Cambridge / Universal LaTeX Class',
    category: 'Thesis, Dissertations & Patents',
    formatBadge: 'Multi-Chapter LaTeX + Word',
    overleafUrl: 'https://www.overleaf.com/latex/templates/tagged/thesis',
    officialDownloadUrl: 'https://ctan.org/topic/dissertation',
    desc: 'Modular multi-chapter dissertation template with automated Table of Contents, List of Figures, Nomenclature, and Appendices.',
    sections: ['Front Matter (Title, Declaration, Abstract, ToC)', 'Chapter 1: Introduction & Problem Statement', 'Chapter 2: Literature Review & Gap', 'Chapter 3: Methodology & Experimental Setup', 'Chapter 4–5: Empirical Findings & Discussion', 'Chapter 6: Conclusion, Future Work & Appendices']
  },
  {
    id: 'tpl-patent-specification',
    name: 'USPTO / WIPO PCT Patent Specification & Claims Template',
    publisher: 'USPTO / WIPO Standard',
    category: 'Thesis, Dissertations & Patents',
    formatBadge: 'LaTeX (uspatent) + DOCX Guide',
    overleafUrl: 'https://www.overleaf.com/latex/templates/us-patent-template/wbdvymxbfnjb',
    officialDownloadUrl: 'https://www.uspto.gov/patents/basics/apply/nonprovisional-utility-patent-application-filing-guide',
    desc: 'Standard utility patent disclosure format with numbered paragraphs [0001], brief description of drawings, and independent/dependent claims.',
    sections: ['Title of Invention & Cross-Reference', 'Background & Field of the Invention', 'Brief Summary of the Invention', 'Brief Description of the Drawings (FIG. 1–6)', 'Detailed Description of Preferred Embodiments', 'Claims (Independent Claim 1 + Dependent Claims) & Abstract']
  }
];

// ============================================================================
// 5. RESEARCH WORKFLOW STAGES & STACK PRESETS
// ============================================================================
const WORKFLOW_STAGES = [
  { step: '01', name: 'Idea & Prior Art', goal: 'Validate originality and verify no existing paper or patent already solved the exact problem.', topTools: ['Semantic Scholar', 'The Lens (Patent & Scholar)', 'Connected Papers'] },
  { step: '02', name: 'Literature Search', goal: 'Build syntax-accurate Boolean queries across peer-reviewed indexes and open-access repositories.', topTools: ['Semantic Scholar', 'Google Scholar', 'OpenAlex'] },
  { step: '03', name: 'Systematic Review', goal: 'Screen titles/abstracts using PRISMA criteria and extract structured PICO tables.', topTools: ['Consensus', 'Elicit', 'Rayyan'] },
  { step: '04', name: 'Research Gap & Question', goal: 'Map co-citation networks to pinpoint unresolved methodological or empirical contradictions.', topTools: ['Connected Papers', 'Litmaps', 'Google NotebookLM'] },
  { step: '05', name: 'Methodology & Power', goal: 'Select quantitative/qualitative protocols and compute statistical sample-size power.', topTools: ['G*Power Statistical Power Analysis', 'JASP Statistical Software', 'Google Dataset Search'] },
  { step: '06', name: 'Experiments & Code', goal: 'Execute reproducible code, benchmark baselines, and log hyperparameters.', topTools: ['Google Colaboratory (Colab)', 'Papers With Code', 'Hugging Face Hub'] },
  { step: '07', name: 'Data Analysis & Plots', goal: 'Run Frequentist/Bayesian tests and generate 600-DPI vector SVG/PDF figures.', topTools: ['JASP Statistical Software', 'Draw.io (diagrams.net)', 'RAWGraphs 2.0'] },
  { step: '08', name: 'Manuscript & LaTeX Writing', goal: 'Draft the manuscript in official IEEE, Springer, or Elsevier templates with clean BibTeX references.', topTools: ['Overleaf', 'Zotero', 'Manchester Academic Phrasebank'] },
  { step: '09', name: 'Journal Selection & Publication', goal: 'Match abstract to verified Q1–Q2 Scopus/DOAJ journals and pass pre-submission peer-review checks.', topTools: ['Elsevier Journal Finder', 'Springer Nature Journal Suggester', 'Scimago Journal & Country Rank (SJR)'] }
];

const HOMEPAGE_GOALS = [
  {
    id: 'goal-paper',
    title: 'Original Research Paper',
    desc: 'Identify a novel research gap, run reproducible experiments, format in IEEE/Springer LaTeX, and match with Q1/Q2 journals.',
    stage: '10. Paper Writing',
    tools: ['Semantic Scholar', 'Connected Papers', 'Overleaf', 'Elsevier Journal Finder']
  },
  {
    id: 'goal-review',
    title: 'Systematic & Survey Review',
    desc: 'Synthesize 50–200 peer-reviewed studies using PRISMA 2020 protocols, automated PICO tables, and taxonomy diagrams.',
    stage: '03. Literature Review',
    tools: ['Consensus', 'Elicit', 'Rayyan', 'Draw.io (diagrams.net)']
  },
  {
    id: 'goal-thesis',
    title: 'PhD Dissertation & Master’s Thesis',
    desc: 'Benchmark global dissertations, organize 300+ chapter references, and typeset multi-chapter monographs.',
    stage: '10. Paper Writing',
    tools: ['OATD (Open Access Theses & Dissertations)', 'Google NotebookLM', 'Zotero', 'Overleaf']
  },
  {
    id: 'goal-patent',
    title: 'Patent Drafting & Prior-Art Search',
    desc: 'Audit 155M+ global patents, verify Cooperative Patent Classifications (CPC), and draft independent/dependent claims.',
    stage: '01. Idea & Prior Art',
    tools: ['The Lens (Patent & Scholar)', 'PQAI (Patent Quality AI)', 'Google Patents', 'Espacenet (European Patent Office)']
  },
  {
    id: 'goal-book',
    title: 'Edited Book Chapter & Monograph',
    desc: 'Structure contributed chapters for Springer (svmult) or Elsevier volumes with comprehensive cross-referencing.',
    stage: '10. Paper Writing',
    tools: ['Google NotebookLM', 'Manchester Academic Phrasebank', 'Zotero', 'Overleaf']
  }
];

const STACK_ARCHITECT_PRESETS = [
  {
    id: 'stack-q1-empirical',
    label: 'Q1 Empirical Journal Article',
    field: 'Computer Science, Engineering & Applied Sciences',
    duration: '8–14 Weeks',
    gradient: 'from-indigo-500 via-violet-500 to-cyan-500',
    architecture: [
      { stage: '01. Literature & Gap', toolName: 'Semantic Scholar', reason: 'Identify high-velocity citations and baseline TLDRs.' },
      { stage: '02. Citation Graph', toolName: 'Connected Papers', reason: 'Verify zero missed foundational or derivative studies.' },
      { stage: '03. Reproducible Code', toolName: 'Google Colaboratory (Colab)', reason: 'Execute PyTorch/Python benchmarks with cloud GPUs.' },
      { stage: '04. Statistical Rigor', toolName: 'JASP Statistical Software', reason: 'Run frequentist/Bayesian significance and effect-size tests.' },
      { stage: '05. Vector Figures', toolName: 'Draw.io (diagrams.net)', reason: 'Export 600-DPI vector SVG/PDF system architectures.' },
      { stage: '06. Typesetting & BibTeX', toolName: 'Overleaf', reason: 'Compile camera-ready IEEEtran / Springer sn-jnl manuscript.' }
    ],
    recommendedTemplateId: 'tpl-ieee-trans'
  },
  {
    id: 'stack-prisma-slr',
    label: 'PRISMA 2020 Systematic Review',
    field: 'Medicine, Clinical Science, AI & Social Sciences',
    duration: '6–12 Weeks',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    architecture: [
      { stage: '01. Evidence Discovery', toolName: 'Consensus', reason: 'Measure quantitative scientific agreement across 200M+ papers.' },
      { stage: '02. PICO Matrix Extraction', toolName: 'Elicit', reason: 'Extract sample sizes, methods, and limitations into structured tables.' },
      { stage: '03. Blinded Screening', toolName: 'Rayyan', reason: 'Execute dual-reviewer blinded inclusion/exclusion tagging.' },
      { stage: '04. Citation Verification', toolName: 'Scite.ai', reason: 'Verify whether included studies were later contrasted or retracted.' },
      { stage: '05. PRISMA Diagram', toolName: 'Draw.io (diagrams.net)', reason: 'Generate the official 4-stage PRISMA selection flow diagram.' },
      { stage: '06. Reference Deduplication', toolName: 'Zotero', reason: 'Merge multi-database BibTeX exports and format citations.' }
    ],
    recommendedTemplateId: 'tpl-prisma-slr'
  },
  {
    id: 'stack-doctoral-thesis',
    label: 'PhD Dissertation & Defense',
    field: 'All Doctoral & Master’s Programs',
    duration: '6–24 Months',
    gradient: 'from-rose-500 via-pink-500 to-purple-600',
    architecture: [
      { stage: '01. Thesis Benchmarking', toolName: 'OATD (Open Access Theses & Dissertations)', reason: 'Inspect 6.8M+ global dissertations for structural scope.' },
      { stage: '02. Deep PDF Synthesis', toolName: 'Google NotebookLM', reason: 'Synthesize 50+ core papers per chapter with grounded citations.' },
      { stage: '03. Reference Vault', toolName: 'Zotero', reason: 'Organize 300+ citations with chapter collections and PDF notes.' },
      { stage: '04. Academic Rhetoric', toolName: 'Manchester Academic Phrasebank', reason: 'Use peer-reviewed transitions for critique and discussion.' },
      { stage: '05. Power & Stats', toolName: 'G*Power Statistical Power Analysis', reason: 'Defend sample size adequacy before thesis committee.' },
      { stage: '06. Modular LaTeX', toolName: 'Overleaf', reason: 'Manage multi-chapter front matter, ToC, and nomenclature.' }
    ],
    recommendedTemplateId: 'tpl-phd-masters-thesis'
  },
  {
    id: 'stack-patent-ip',
    label: 'Patent Filing & Prior-Art Defense',
    field: 'DeepTech, Biotech, Hardware & Algorithms',
    duration: '4–8 Weeks',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    architecture: [
      { stage: '01. Science-to-IP Link', toolName: 'The Lens (Patent & Scholar)', reason: 'Trace 155M+ patents cited by peer-reviewed literature.' },
      { stage: '02. Semantic Prior Art', toolName: 'PQAI (Patent Quality AI)', reason: 'Test invention novelty against plain-English prior art.' },
      { stage: '03. CPC Classification', toolName: 'Google Patents', reason: 'Verify Cooperative Patent Classification sub-codes.' },
      { stage: '04. Global Family Status', toolName: 'Espacenet (European Patent Office)', reason: 'Audit international patent family legal status.' },
      { stage: '05. Patent Drawings', toolName: 'Draw.io (diagrams.net)', reason: 'Draft black-and-white numbered embodiment figures (100, 102).' },
      { stage: '06. Claim Tree Typesetting', toolName: 'Overleaf', reason: 'Format [0001] bracketed specification and dependent claims.' }
    ],
    recommendedTemplateId: 'tpl-patent-specification'
  }
];

const MANUSCRIPT_AUDIT_ITEMS = [
  { id: 'aud-1', category: 'Title & Abstract', label: 'Title is concise (<15 words), declarative, and contains primary searchable domain keywords.' },
  { id: 'aud-2', category: 'Title & Abstract', label: 'Abstract states Background, Objective, Methodology, Quantitative Key Results, and Implication within 250 words.' },
  { id: 'aud-3', category: 'Literature & Novelty', label: 'Introduction explicitly states the Research Gap and lists 3–4 bulleted core contributions.' },
  { id: 'aud-4', category: 'Literature & Novelty', label: 'Citation lineage verified in Connected Papers / Litmaps with recent (2024–2026) references included.' },
  { id: 'aud-5', category: 'Methodology & Stats', label: 'Statistical power / sample size justified (e.g., G*Power) and exact p-values, effect sizes, and confidence intervals reported.' },
  { id: 'aud-6', category: 'Methodology & Stats', label: 'All baselines, hyperparameters, and inclusion/exclusion criteria (PRISMA) are reproducible.' },
  { id: 'aud-7', category: 'Figures & Tables', label: 'All figures exported as vector PDF/SVG or 600-DPI TIFF using colorblind-safe palettes (ColorBrewer).' },
  { id: 'aud-8', category: 'Figures & Tables', label: 'Every table and figure is self-explanatory with units, error bars, and sample sizes in the caption.' },
  { id: 'aud-9', category: 'Open Science & Ethics', label: 'Data Availability & Code Availability statements included (e.g., permanent Zenodo DOI or GitHub link).' },
  { id: 'aud-10', category: 'Open Science & Ethics', label: 'CRediT authorship statement, funding acknowledgments, IRB ethics approval, and competing interests declared.' },
  { id: 'aud-11', category: 'Formatting & References', label: 'All references verified for retractions and DOIs normalized via Zotero / JabRef with zero broken citations.' },
  { id: 'aud-12', category: 'Formatting & References', label: 'Target journal verified in ScimagoJR (Q1–Q4) and DOAJ to safeguard against predatory publishers.' }
];

// ============================================================================
// 5.5 ACADEMIC PROMPT VAULT (ZERO-COST, TOPIC-TO-ACCEPTANCE)
// ============================================================================
const PROMPT_STAGES = [
  'All Stages',
  '01. Topic & Free Dataset Finder',
  '02. Gap & Literature Synthesis',
  '03. Zero-Cost Experiment & Code',
  '04. Section-by-Section Paper Drafting',
  '05. AI-Phrasing & Originality Review',
  '06. Reviewer #2 & High-Acceptance Polish'
];

const ACADEMIC_PROMPTS = [
  // STAGE 01: TOPIC & FREE DATASET FINDER
  {
    id: 'prm-topic-1',
    stage: '01. Topic & Free Dataset Finder',
    title: 'Zero-Budget, High-Acceptance Research Topic Generator (2025–2026)',
    recommendedAi: 'ChatGPT / Claude / Perplexity',
    goal: 'Finds 5 latest, easy-to-execute research topics in your domain that require $0 hardware budget, use public datasets, and have high acceptance rates in IEEE/Springer/Scopus.',
    promptTemplate: `Act as a Senior Academic Research Advisor and Journal Editor in {{DOMAIN}}.
I am a {{LEVEL}} researcher looking for a novel, publishable research paper topic for {{VENUE}} that meets these strict constraints:
1. ZERO FINANCIAL COST: Must not require paid APIs, wet-lab hardware, or massive GPU clusters (must run on free Google Colab T4 GPU or a standard laptop).
2. LATEST PUBLIC DATASET AVAILABLE: Must rely on a real, publicly downloadable dataset from Kaggle, UCI, Hugging Face, Zenodo, or Government portals (2023–2026).
3. HIGH ACCEPTANCE & LOW COMPLEXITY: Combine an established, reliable method with a fresh application domain, lightweight hybrid optimization, or explainability (XAI) angle so implementation takes 2–4 weeks.

Please generate 5 concrete research paper topics. For each topic, provide:
- Proposed Catchy Academic Title (<15 words)
- Exact Research Gap (Why existing 2024–2025 papers fall short)
- Exact Name & Source of the Free Public Dataset to use
- Step-by-Step Lightweight Methodology (trainable on free Google Colab)
- Evaluation Metrics to report (e.g., F1-score, RMSE, latency, ablation)
- Why reviewers at {{VENUE}} will accept this paper.`
  },
  {
    id: 'prm-topic-2',
    stage: '01. Topic & Free Dataset Finder',
    title: 'Dataset-First Topic Reverse Engineer (Start from a Free Dataset)',
    recommendedAi: 'Perplexity / ChatGPT / Claude',
    goal: 'Instead of picking a hard topic and struggling to find data, this prompt takes any free Kaggle/UCI dataset and builds 3 novel, publishable paper angles around it.',
    promptTemplate: `Act as a Principal Data Scientist and Academic Reviewer in {{DOMAIN}}.
I want to write a research paper for {{VENUE}} without spending any money on data collection.
My chosen area/dataset interest is: [Insert dataset name or sub-topic in {{DOMAIN}}, e.g., CIC-IDS2017 / Medical MNIST / Smart Grid Load].

1. Recommend 3 verified, 100% free, benchmark datasets in this area (with their exact repository names on Kaggle, UCI, Zenodo, or Hugging Face) that have clean labels and small-to-medium file sizes (<5 GB) so I can process them easily on free Google Colab.
2. For each dataset, design a unique, publishable paper angle (e.g., Feature Selection + Lightweight Ensemble, Class-Imbalance Handling + SHAP Explainability, or Cross-Domain Generalization) that has NOT been overdone.
3. Write the exact "Problem Statement" and 3 bulleted "Core Contributions" I can put directly in my Introduction.`
  },
  {
    id: 'prm-topic-3',
    stage: '01. Topic & Free Dataset Finder',
    title: 'Fast-Track Systematic / Survey Paper Topic Architect (No Coding Needed)',
    recommendedAi: 'Claude / ChatGPT / NotebookLM',
    goal: 'Perfect for students who want to publish a high-impact Review or PRISMA Survey paper without writing complex code or buying hardware.',
    promptTemplate: `Act as an Editor-in-Chief for a Q1 Survey Journal in {{DOMAIN}}.
I am a {{LEVEL}} researcher and I want to write a high-acceptance Systematic Literature Review (SLR) or Comprehensive Survey paper for {{VENUE}} that requires ZERO lab budget and ZERO heavy coding.

Identify 4 emerging micro-niches in {{DOMAIN}} (from 2024–2026) where dozens of primary papers have been published recently, but NO comprehensive PRISMA systematic review exists yet.
For each micro-niche, provide:
1. A high-impact Survey Title
2. The 4 Research Questions (RQs) the review will answer
3. A proposed 3-level Taxonomy to classify the papers
4. The exact Boolean search string to paste into Google Scholar and Semantic Scholar.`
  },

  // STAGE 02: GAP & LITERATURE SYNTHESIS
  {
    id: 'prm-lit-1',
    stage: '02. Gap & Literature Synthesis',
    title: 'Grounded Literature Review Matrix & Gap Extractor',
    recommendedAi: 'Google NotebookLM / Claude / ChatGPT',
    goal: 'Synthesizes uploaded PDFs or pasted abstracts into a critical Literature Review section and Comparison Table without inventing fake citations.',
    promptTemplate: `STRICT RULE: Do NOT invent, guess, or hallucinate any paper titles, authors, years, or DOIs. Use ONLY the paper abstracts/texts I provide below.

Act as an Academic Literature Synthesizer in {{DOMAIN}}.
Below are the abstracts/notes from [N] real research papers I collected:
[PASTE ABSTRACTS OR UPLOAD PDFs HERE]

Perform the following tasks using strictly academic, human-written prose (zero AI clichés):
1. Create a Markdown Comparison Table with columns: [Author & Year | Core Method | Dataset Used | Key Metric/Accuracy | Critical Limitation].
2. Synthesize a 4-paragraph thematic "Related Work" section grouping these studies by methodology rather than listing them one by one.
3. Write a final "Research Gap & Motivation" paragraph that highlights the collective limitations of these papers and naturally leads into my proposed work for {{VENUE}}.`
  },
  {
    id: 'prm-lit-2',
    stage: '02. Gap & Literature Synthesis',
    title: '3-Bullet "Core Contributions" & Novelty Sharpener',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Transforms a simple student project or minor modification into a sharp, mathematically and scientifically framed novelty statement for the Introduction.',
    promptTemplate: `Act as a Senior Peer Reviewer for {{VENUE}} in {{DOMAIN}}.
Many student papers get desk-rejected because their contribution sounds like "we just ran existing algorithms on a dataset."

Here is what I actually did in my project:
[Briefly describe your dataset, preprocessing, model/method, and results in plain English]

Reframe my work honestly (without fabricating data) into high-level academic positioning:
1. Formulate a sharp 2-sentence "Research Gap" statement.
2. Write 3–4 bulleted "Main Contributions of this Study" for the end of the Introduction section (covering methodological framing, empirical benchmarking, ablation/statistical validation, and practical reproducibility).
3. Suggest 1 simple, 30-minute additional test (such as a Wilcoxon signed-rank test, computational time comparison, or SHAP feature importance plot) that will immediately elevate the paper's novelty.`
  },

  // STAGE 03: ZERO-COST EXPERIMENT & CODE
  {
    id: 'prm-exp-1',
    stage: '03. Zero-Cost Experiment & Code',
    title: 'Complete Google Colab Experiment & Ablation Code Generator',
    recommendedAi: 'Claude 3.5 Sonnet / ChatGPT',
    goal: 'Generates a single-file, reproducible Python notebook script that loads your dataset, trains baseline + proposed models, runs ablation, and exports 600-DPI plots.',
    promptTemplate: `Act as a Senior Machine Learning & Reproducible Research Engineer in {{DOMAIN}}.
Write a complete, clean, self-contained Python script designed to run in a free Google Colab notebook for my paper targeting {{VENUE}}.

My Dataset & Task: [Describe dataset columns/format and prediction/analysis goal]
My Proposed Approach: [Describe your model or statistical pipeline]

Ensure the code includes:
1. Data preprocessing, missing-value handling, and stratified train/validation/test split with a fixed random seed (seed=42) for 100% reproducibility.
2. Comparison of 3 standard baseline models against my Proposed Method.
3. An automated Ablation Study table showing performance with and without key components.
4. Calculation of Mean ± Standard Deviation across 5-fold cross-validation + p-value significance test.
5. Matplotlib/Seaborn code to save publication-ready, colorblind-safe 600-DPI PDF/PNG figures (ROC curve, confusion matrix, and training convergence).`
  },
  {
    id: 'prm-exp-2',
    stage: '03. Zero-Cost Experiment & Code',
    title: 'Raw CSV / Experimental Output to LaTeX & Word Table Converter',
    recommendedAi: 'ChatGPT / Claude',
    goal: 'Converts messy Python/Excel numbers into an IEEE/Springer booktabs LaTeX table with bolded best results and an analytical Results narrative.',
    promptTemplate: `Act as a Technical Typesetter and Quantitative Analyst for {{VENUE}} in {{DOMAIN}}.
Here are my raw experimental results / CSV output:
[PASTE RAW NUMBERS OR TABLE HERE]

1. Convert these results into a clean, publication-ready LaTeX table using the \\toprule, \\midrule, and \\bottomrule (booktabs) package, automatically bolding the best metric in each column and underlining the second-best.
2. Also provide a clean Markdown table I can paste into Microsoft Word.
3. Write a 2-paragraph "Quantitative Results Analysis" explaining WHY the proposed method outperformed the baselines, referencing exact percentage improvements without using repetitive AI phrasing.`
  },

  // STAGE 04: SECTION-BY-SECTION PAPER DRAFTING
  {
    id: 'prm-wrt-1',
    stage: '04. Section-by-Section Paper Drafting',
    title: 'High-Impact Structured Abstract & Keywords Architect (150–250 Words)',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Writes a tight, zero-fluff academic abstract following the exact 5-part Background → Gap → Method → Quantitative Results → Impact structure.',
    promptTemplate: `Act as an Academic Editor for {{VENUE}} in {{DOMAIN}}.
Write a 200-word structured Abstract and 6 Index Terms/Keywords based on my study details below:
- Topic & Gap: [Insert]
- Dataset & Methodology: [Insert]
- Key Quantitative Results (Accuracy/F1/Gain): [Insert]

STRICT CONSTRAINTS:
- Follow the 5-part structure: (1) Context, (2) Problem/Gap, (3) Proposed Methodology, (4) Exact Quantitative Findings, (5) Broader Implication.
- BANNED AI WORDS: Do NOT use "delve", "tapestry", "testament", "pivotal", "underscore", "realm", "groundbreaking", "beacon", or "revolutionary".
- Keep sentences crisp, factual, and written in formal third-person or active plural ("We propose...") matching {{VENUE}} style.`
  },
  {
    id: 'prm-wrt-2',
    stage: '04. Section-by-Section Paper Drafting',
    title: 'Methodology & Mathematical Formulation Drafter (Reproducible Spec)',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Converts your workflow steps or Python code into a formal "Proposed Methodology" section complete with LaTeX equations and an Algorithm pseudocode block.',
    promptTemplate: `Act as a Senior Author in {{DOMAIN}} writing for {{VENUE}}.
Here is my workflow / code logic:
[PASTE YOUR CODE OR WORKFLOW STEPS HERE]

Transform this into a formal, reproducible "Proposed Methodology" section containing:
1. System Architecture Overview (explaining the end-to-end pipeline step by step).
2. Mathematical Formulation (define input tensors/variables, loss functions, and transformations using clean LaTeX equations with every symbol defined immediately after).
3. A formal LaTeX Algorithm 1 Pseudocode block (\\begin{algorithm} ... \\end{algorithm}) showing Input, Output, and step-by-step execution.
4. Hyperparameter & Implementation Details table (learning rate, batch size, optimizer, hardware used) so peer reviewers cannot complain about missing reproducibility.`
  },

  // STAGE 05: AI-PHRASING & ORIGINALITY REVIEW
  {
    id: 'prm-plag-1',
    stage: '05. AI-Phrasing & Originality Review',
    title: 'AI-Phrasing & Originality Review',
    recommendedAi: 'Claude 3.5 Sonnet / ChatGPT',
    goal: 'Rewrites rough drafts or AI-assisted paragraphs into natural, varied-burstiness scholarly prose. Always review the output yourself and follow your target journal\'s AI-use policy.',
    promptTemplate: `Act as a Native-Speaking Academic Copyeditor for {{VENUE}} in {{DOMAIN}}.
Rewrite the following draft paragraph so it reads like authentic, human-authored scholarly prose written by a domain specialist, with varied sentence rhythm and natural academic prose:

[PASTE YOUR DRAFT PARAGRAPH HERE]

MANDATORY EDITING RULES:
1. HIGH BURSTINESS & NATURAL CADENCE: Vary sentence lengths naturally (mix a short 9-word declarative sentence with a detailed 26-word analytical clause).
2. STRICT VOCABULARY BAN: Never use AI-flagged words ("delve", "crucial", "moreover", "furthermore", "it is worth noting", "comprehensive", "intricate", "tapestry", "leveraging", "utilize", "paradigm", "underscore"). Use direct verbs ("use", "show", "measure", "compare", "indicate").
3. PRESERVE CITATIONS & NUMBERS: Keep all [1], (Author, Year) citations, mathematical variables, and experimental numbers 100% intact.
4. Provide 2 versions: Version A (Concise IEEE/ACM Direct Style) and Version B (Flowing Elsevier/Springer Narrative Style).`
  },
  {
    id: 'prm-plag-2',
    stage: '05. AI-Phrasing & Originality Review',
    title: 'Ethical Source Synthesis Paraphraser (Zero Patchwriting)',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Prevents accidental plagiarism when citing other papers by restructuring ideas from the conceptual level instead of swapping synonyms.',
    promptTemplate: `Act as an Academic Writing Coach in {{DOMAIN}}.
I want to cite the findings from the following original source text in my paper for {{VENUE}} without committing "patchwriting" or triggering Turnitin phrase-matching:

Original Source Excerpt & Citation:
[PASTE ORIGINAL SENTENCES + AUTHOR/YEAR HERE]

1. First, extract the core factual takeaway in 3 bullet points (stripping away the original author's sentence structure).
2. Next, write 3 completely original ways to integrate and cite this finding in my own voice (1 Author-Prominent citation, 1 Information-Prominent citation, and 1 Contrast/Critique transition) with zero overlapping 4-word chains from the original text.`
  },

  // STAGE 06: REVIEWER #2 & HIGH-ACCEPTANCE POLISH
  {
    id: 'prm-rev-1',
    stage: '06. Reviewer #2 & High-Acceptance Polish',
    title: 'Reviewer #2 Brutal Pre-Submission Critique & Fix Simulator',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Simulates a tough IEEE/Springer peer reviewer before you submit, spotting every weakness in your draft and giving you the exact sentences to fix them.',
    promptTemplate: `Act as "Reviewer #2"—a rigorous, skeptical Senior Peer Reviewer for {{VENUE}} in {{DOMAIN}}.
Read my manuscript draft / abstract + methodology summary below:
[PASTE YOUR DRAFT OR SUMMARY HERE]

1. Identify the top 5 flaws that could cause a Desk Reject or Major Revision (e.g., unclear baseline comparison, overclaimed novelty, missing statistical significance, dataset bias, or weak ablation).
2. For EVERY flaw you identify, write the exact 2–3 sentences or small table I should insert into my manuscript right now to preemptively neutralize that criticism before I submit.`
  },
  {
    id: 'prm-rev-2',
    stage: '06. Reviewer #2 & High-Acceptance Polish',
    title: 'Limitations, Threats to Validity & Future Work Generator',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Peer reviewers trust papers that honestly state their limitations. This prompt writes a mature "Limitations & Future Work" subsection that protects your paper.',
    promptTemplate: `Act as an Experienced Academic Author in {{DOMAIN}} submitting to {{VENUE}}.
Here is a brief summary of my study's dataset, model, and experimental setup:
[INSERT BRIEF SUMMARY]

Write a transparent, scholarly "Limitations, Threats to Validity, and Future Directions" subsection (200–250 words) that:
1. Acknowledges realistic constraints (e.g., single-modality public dataset, compute constraints on edge/cloud hardware, or class distribution) in a way that shows scientific maturity rather than invalidating our findings.
2. Outlines 3 concrete, actionable extensions for future research.`
  },
  {
    id: 'prm-rev-3',
    stage: '06. Reviewer #2 & High-Acceptance Polish',
    title: 'Point-by-Point Rebuttal & Response-to-Reviewers Letter Builder',
    recommendedAi: 'Claude / ChatGPT',
    goal: 'Turns harsh reviewer comments into a polite, diplomatic, evidence-backed Response Letter that secures final acceptance.',
    promptTemplate: `Act as a Senior Corresponding Author in {{DOMAIN}}.
I received Major/Minor Revision comments from {{VENUE}}.
Here is the Reviewer's comment:
"[PASTE REVIEWER COMMENT HERE]"
And here is what I changed (or why I cannot run their requested expensive experiment):
"[INSERT YOUR ACTION / CONSTRAINT]"

Write a respectful, diplomatic, and scientifically rigorous Point-by-Point Response following this template:
- **Polite Acknowledgment**: Thank the reviewer for the insightful observation.
- **Direct Answer**: Clearly explain how we resolved the concern (or justify why our current scope/ablation already addresses it without needing new hardware).
- **Exact Manuscript Change**: Quote the exact new text added to Page [X], Section [Y] highlighted in blue.`
  }
];

// ============================================================================
// 6. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'explore' | 'templates' | 'prompts' | 'lab' | 'workflow' | 'saved'
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [inspectTool, setInspectTool] = useState(null);
  const [inspectTemplate, setInspectTemplate] = useState(null);
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState('All Templates');
  const [selectedHomepageGoalId, setSelectedHomepageGoalId] = useState('goal-paper');

  // Reload-triggered scientific discovery fact
  const [factIndex, setFactIndex] = useState(() =>
    Math.floor(Math.random() * SCIENTIFIC_FACTS.length)
  );
  const currentFact = SCIENTIFIC_FACTS[factIndex] || SCIENTIFIC_FACTS[0];

  // Saved bookmarks & silent usage-based ranking state
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const raw = localStorage.getItem('kinetix_saved_v3');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });


  // Universal Cmd+K Command Palette & Interactive Research Lab states
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [selectedStackPresetId, setSelectedStackPresetId] = useState('stack-q1-empirical');
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);

  // Interactive Boolean & PICO Query Synthesizer states
  const [picoPopulation, setPicoPopulation] = useState('deep learning OR transformer models');
  const [picoIntervention, setPicoIntervention] = useState('intrusion detection OR zero-day attack');
  const [picoOutcome, setPicoOutcome] = useState('false positive rate OR latency');
  const [picoExclude, setPicoExclude] = useState('survey, review');
  const [picoYearStart, setPicoYearStart] = useState('2022');
  const [copiedQueryType, setCopiedQueryType] = useState('');

  // Pre-Submission Manuscript Readiness Auditor state
  const [checkedAuditIds, setCheckedAuditIds] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetix_manuscript_audit_v1');
      return saved ? JSON.parse(saved) : ['aud-1', 'aud-3', 'aud-4'];
    } catch {
      return ['aud-1', 'aud-3', 'aud-4'];
    }
  });

  // Academic Prompt Vault Customizer & Filter States
  const [selectedPromptStage, setSelectedPromptStage] = useState('All Stages');
  const [promptDomain, setPromptDomain] = useState('Computer Science & AI');
  const [promptVenue, setPromptVenue] = useState('IEEE / Springer / Scopus Q1-Q2');
  const [promptLevel, setPromptLevel] = useState('B.Tech / M.Tech / PhD Student');
  const [copiedPromptId, setCopiedPromptId] = useState('');


  const searchInputRef = useRef(null);
  const ITEMS_PER_PAGE = 36;

  // Live DOM <head> SEO, Favicon, No-Noindex Purge & JSON-LD Injection
  useEffect(() => {
    document.title =
      activeTab === 'templates'
        ? 'Official IEEE, Springer, PRISMA & LaTeX Templates | Kinetix Scholar'
        : activeTab === 'prompts'
        ? 'Academic Prompt Vault — Research Prompts for Academics | Kinetix Scholar'
        : activeTab === 'lab'
        ? 'Interactive Research Lab, Boolean PICO Builder & Manuscript Auditor | Kinetix Scholar'
        : selectedCategory !== 'All Categories'
        ? `${selectedCategory} — Top AI & Academic Research Tools | Kinetix Scholar`
        : 'Kinetix Scholar — Free AI & Academic Research Tools, Prompts & Templates';

    const existingRobots = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"]');
    existingRobots.forEach((el) => el.remove());

    const upsertMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1');
    upsertMeta('bingbot', 'index, follow');
    upsertMeta(
      'description',
      'Kinetix Scholar connects researchers with curated free and open-source AI research tools, official IEEE/Springer/PRISMA LaTeX templates, Boolean query builders, and lifecycle workflows.'
    );

    const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6366f1"/><stop offset="50%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#06b6d4"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="#07090E"/><path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" fill="none" stroke="url(#g)" stroke-width="4"/><circle cx="32" cy="32" r="7" fill="url(#g)"/></svg>`;
    const faviconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgFavicon)}`;
    let linkIcon = document.querySelector('link[rel="icon"]');
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.setAttribute('rel', 'icon');
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute('type', 'image/svg+xml');
    linkIcon.setAttribute('href', faviconUrl);
  }, [activeTab, selectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        if (showCommandPalette) setShowCommandPalette(false);
        if (inspectTool) setInspectTool(null);
        if (inspectTemplate) setInspectTemplate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCommandPalette, inspectTool, inspectTemplate]);

  useEffect(() => {
    try {
      localStorage.setItem('kinetix_saved_v3', JSON.stringify(savedIds));
    } catch {
      // Ignore storage errors
    }
  }, [savedIds]);


  useEffect(() => {
    try {
      localStorage.setItem('kinetix_manuscript_audit_v1', JSON.stringify(checkedAuditIds));
    } catch {
      // Ignore storage errors
    }
  }, [checkedAuditIds]);

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };


  const handleJumpToToolByName = (toolName) => {
    setSearchQuery(toolName);
    setSelectedCategory('All Categories');
    setCurrentPage(1);
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = ALL_TOOLS.filter((tool) => {
      if (
        selectedCategory !== 'All Categories' &&
        tool.category !== selectedCategory
      ) {
        return false;
      }
      if (q && !tool.searchBlob.includes(q)) {
        return false;
      }
      return true;
    });

    return list.sort((a, b) => b.baseScore - a.baseScore);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredTools.length / ITEMS_PER_PAGE));
  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTools.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTools, currentPage]);

  const savedToolsList = useMemo(
    () => ALL_TOOLS.filter((t) => savedIds.includes(t.id)),
    [savedIds]
  );

  const filteredTemplates = useMemo(() => {
    if (selectedTemplateCategory === 'All Templates') return ACADEMIC_TEMPLATES;
    return ACADEMIC_TEMPLATES.filter((t) => t.category === selectedTemplateCategory);
  }, [selectedTemplateCategory]);

  const filteredPrompts = useMemo(() => {
    return ACADEMIC_PROMPTS.filter(
      (p) => selectedPromptStage === 'All Stages' || p.stage === selectedPromptStage
    ).map((p) => ({
      ...p,
      compiledPrompt: p.promptTemplate
        .replace(/\{\{DOMAIN\}\}/g, promptDomain || 'Computer Science & AI')
        .replace(/\{\{VENUE\}\}/g, promptVenue || 'IEEE / Springer / Scopus Journal')
        .replace(/\{\{LEVEL\}\}/g, promptLevel || 'Student Researcher')
    }));
  }, [selectedPromptStage, promptDomain, promptVenue, promptLevel]);

  const handleCopyPrompt = (id, text) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedPromptId(id);
      setTimeout(() => setCopiedPromptId(''), 2200);
    } catch {
      // Ignore clipboard errors
    }
  };

  const homepageFeaturedTools = useMemo(() => {
    const flagshipIds = ['rev-1', 'rev-2', 'pdf-1', 'map-1'];
    return flagshipIds
      .map((id) => ALL_TOOLS.find((t) => t.id === id))
      .filter(Boolean);
  }, []);

  const activeHomepageGoal = useMemo(
    () =>
      HOMEPAGE_GOALS.find((g) => g.id === selectedHomepageGoalId) ||
      HOMEPAGE_GOALS[0],
    [selectedHomepageGoalId]
  );

  const activeStackPreset = useMemo(
    () =>
      STACK_ARCHITECT_PRESETS.find((s) => s.id === selectedStackPresetId) ||
      STACK_ARCHITECT_PRESETS[0],
    [selectedStackPresetId]
  );

  const synthesizedQueries = useMemo(() => {
    const formatTerms = (raw) =>
      raw
        .split(/OR|,/i)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => (s.includes(' ') ? `"${s}"` : s));

    const pTerms = formatTerms(picoPopulation);
    const iTerms = formatTerms(picoIntervention);
    const oTerms = formatTerms(picoOutcome);
    const exTerms = formatTerms(picoExclude);

    const pBlock = pTerms.length ? `(${pTerms.join(' OR ')})` : '';
    const iBlock = iTerms.length ? `(${iTerms.join(' OR ')})` : '';
    const oBlock = oTerms.length ? `(${oTerms.join(' OR ')})` : '';
    const exBlock = exTerms.length ? ` AND NOT (${exTerms.join(' OR ')})` : '';

    const coreAnd = [pBlock, iBlock, oBlock].filter(Boolean).join(' AND ');

    const scopus = `TITLE-ABS-KEY ( ${coreAnd}${exBlock} ) AND PUBYEAR > ${
      Number(picoYearStart) - 1
    }`;
    const wos = `TS=(${coreAnd}${exBlock}) AND PY=(${picoYearStart}-2026)`;
    const pubmed = `${[
      pTerms.length ? `(${pTerms.map((t) => `${t}[Title/Abstract]`).join(' OR ')})` : '',
      iTerms.length ? `(${iTerms.map((t) => `${t}[Title/Abstract]`).join(' OR ')})` : '',
      oTerms.length ? `(${oTerms.map((t) => `${t}[Title/Abstract]`).join(' OR ')})` : ''
    ]
      .filter(Boolean)
      .join(' AND ')}${
      exTerms.length ? ` NOT (${exTerms.map((t) => `${t}[Publication Type]`).join(' OR ')})` : ''
    } AND ("${picoYearStart}"[Date - Publication] : "2026"[Date - Publication])`;

    const scholarUrlQuery = `${coreAnd} ${
      exTerms.length ? exTerms.map((t) => `-${t}`).join(' ') : ''
    }`.trim();

    return {
      scopus,
      wos,
      pubmed,
      scholarUrlQuery,
      scholarUrl: `https://scholar.google.com/scholar?as_ylo=${picoYearStart}&q=${encodeURIComponent(
        scholarUrlQuery
      )}`,
      semanticUrl: `https://www.semanticscholar.org/search?year%5B0%5D=${picoYearStart}&year%5B1%5D=2026&q=${encodeURIComponent(
        [picoPopulation, picoIntervention, picoOutcome].filter(Boolean).join(' ')
      )}`
    };
  }, [picoPopulation, picoIntervention, picoOutcome, picoExclude, picoYearStart]);

  const auditReadinessScore = Math.round(
    (checkedAuditIds.length / MANUSCRIPT_AUDIT_ITEMS.length) * 100
  );

  const toggleAuditItem = (id) => {
    setCheckedAuditIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyStackBlueprint = () => {
    const md = `# Kinetix Scholar — Research Stack Blueprint: ${activeStackPreset.label}
Field: ${activeStackPreset.field}
Target Standard: ${activeStackPreset.badge} (${activeStackPreset.duration})

## Recommended 6-Stage Instrument Pipeline
${activeStackPreset.architecture
  .map((item) => `- **${item.stage}**: ${item.toolName} — ${item.reason}`)
  .join('\n')}

## Pre-Submission Readiness Score: ${auditReadinessScore}% (${checkedAuditIds.length}/${MANUSCRIPT_AUDIT_ITEMS.length} Verified)`;
    try {
      navigator.clipboard.writeText(md);
      setCopiedBlueprint(true);
      setTimeout(() => setCopiedBlueprint(false), 2200);
    } catch {
      // Ignore clipboard error
    }
  };

  const commandResults = useMemo(() => {
    const q = commandQuery.trim().toLowerCase();
    const matchedTools = q
      ? ALL_TOOLS.filter((t) => t.searchBlob.includes(q)).slice(0, 6)
      : ANCHOR_TOOLS.slice(0, 5);
    const matchedTemplates = q
      ? ACADEMIC_TEMPLATES.filter((t) =>
          `${t.name} ${t.publisher} ${t.category}`.toLowerCase().includes(q)
        ).slice(0, 3)
      : ACADEMIC_TEMPLATES.slice(0, 3);
    return { matchedTools, matchedTemplates };
  }, [commandQuery]);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
        isDark ? 'bg-[#07090E] text-slate-100' : 'bg-[#FAFAFC] text-slate-900'
      }`}
    >
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[150px] ${
            isDark ? 'bg-indigo-600/12' : 'bg-indigo-300/25'
          }`}
        />
        <div
          className={`absolute top-1/3 right-10 w-[30rem] h-[30rem] rounded-full blur-[150px] ${
            isDark ? 'bg-cyan-500/10' : 'bg-sky-200/30'
          }`}
        />
      </div>

      {/* TOP NAVIGATION DOCK */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors ${
          isDark
            ? 'bg-[#07090E]/85 border-white/[0.08]'
            : 'bg-white/85 border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
            title="Return to Kinetix Scholar Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 p-[1px] shadow-md shadow-indigo-500/20">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center ${
                  isDark ? 'bg-[#07090E]' : 'bg-slate-950'
                }`}
              >
                <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-serif text-lg font-semibold tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Kinetix Scholar
                </span>
              </div>
              <p
                className={`text-[10px] tracking-widest uppercase ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Research Intelligence
              </p>
            </div>
          </button>

          {/* Center Navigation Pills */}
          <nav
            className={`flex items-center gap-1 p-1 rounded-xl border ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.08]'
                : 'bg-slate-100/90 border-slate-200/80'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'explore'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>AI Tools</span>
              <span
                className={`hidden md:inline-block px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                  activeTab === 'explore'
                    ? 'bg-white/25 text-white'
                    : isDark
                    ? 'bg-indigo-500/20 text-indigo-300'
                    : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                {ALL_TOOLS.length.toLocaleString()}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('templates');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'templates'
                  ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-md shadow-fuchsia-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Templates Hub</span>
              <span className="sm:hidden">Templates</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('prompts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'prompts'
                  ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-md shadow-amber-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Terminal className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Prompt Vault</span>
              <span className="sm:hidden">Prompts</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('lab');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white shadow-md shadow-cyan-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="hidden sm:inline">Research Lab</span>
              <span className="sm:hidden">Lab</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('workflow');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'workflow'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Workflow</span>
              <span className="sm:hidden">Guide</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('saved');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/30'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Saved</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-rose-500/20 text-rose-300 font-bold">
                {savedIds.length}
              </span>
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowCommandPalette(true)}
              className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border-white/10'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200/80'
              }`}
              title="Open Instant Command Palette (⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-indigo-400" />
              <span>Command</span>
              <kbd
                className={`px-1.5 py-0.5 text-[10px] rounded font-mono ${
                  isDark ? 'bg-black/50 text-slate-400' : 'bg-white text-slate-600'
                }`}
              >
                ⌘K
              </kbd>
            </button>


            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/[0.04] hover:bg-white/[0.08] text-amber-300 border-white/10'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
              title="Toggle Daylight / Dark Studio Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* HOMEPAGE */}
      {activeTab === 'home' && (
        <main className="relative z-10 flex-1">
          <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400">
                  <span>Academic Research Workspace</span>
                  <span>•</span>
                  <span>{ALL_TOOLS.length.toLocaleString()} Indexed Instruments</span>
                </div>

                <h1
                  className={`font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-[1.12] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Clarity for every stage of scholarly inquiry.
                </h1>

                <p
                  className={`text-base sm:text-lg leading-relaxed max-w-xl ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Discover selected AI instruments, official publisher LaTeX templates, and reproducible workflows—organized calmly around how research is actually written.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setActiveTab('explore');
                  }}
                  className={`flex items-center p-2 rounded-2xl border transition-all max-w-xl ${
                    isDark
                      ? 'bg-white/[0.03] border-white/15 focus-within:border-indigo-400'
                      : 'bg-white border-slate-300 shadow-sm focus-within:border-indigo-600'
                  }`}
                >
                  <Search className="w-5 h-5 ml-3 text-slate-400 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Describe a research task, method, or discipline..."
                    className="w-full px-3.5 py-2.5 text-sm bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0 cursor-pointer"
                  >
                    Explore
                  </button>
                </form>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>
                    Common inquiries:
                  </span>
                  {[
                    { label: 'Find Easy Zero-Budget Topic (Prompt Vault)', tab: 'prompts' },
                    { label: 'AI-Phrasing & Originality Review Prompts', tab: 'prompts' },
                    { label: 'IEEE & Springer Templates', tab: 'templates' },
                    { label: 'Boolean PICO Builder', tab: 'lab' }
                  ].map((q) => (
                    <button
                      key={q.label}
                      type="button"
                      onClick={() => {
                        if (q.tab) {
                          setActiveTab(q.tab);
                        } else {
                          setSelectedCategory(q.cat);
                          setActiveTab('explore');
                        }
                      }}
                      className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                        isDark
                          ? 'border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                          : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                      }`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div
                  className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border flex items-center justify-center ${
                    isDark ? 'border-white/10 bg-white/[0.01]' : 'border-slate-200 bg-white'
                  }`}
                >
                  <svg className="w-full h-full p-6" viewBox="0 0 240 240">
                    <circle
                      cx="120"
                      cy="120"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeDasharray="3 5"
                      className={isDark ? 'text-indigo-400/40' : 'text-indigo-500/40'}
                    />
                    <circle
                      cx="120"
                      cy="120"
                      r="62"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      className={isDark ? 'text-white/15' : 'text-slate-300'}
                    />
                    <line
                      x1="24"
                      y1="120"
                      x2="216"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className={isDark ? 'text-white/10' : 'text-slate-200'}
                    />
                    <line
                      x1="120"
                      y1="24"
                      x2="120"
                      y2="216"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className={isDark ? 'text-white/10' : 'text-slate-200'}
                    />
                    <circle cx="120" cy="24" r="4" className="fill-indigo-400" />
                    <circle cx="182" cy="120" r="4" className="fill-cyan-400" />
                    <circle cx="120" cy="182" r="4" className="fill-emerald-400" />
                    <circle cx="58" cy="120" r="4" className="fill-violet-400" />
                    <circle cx="120" cy="120" r="10" className="fill-indigo-500" />
                  </svg>
                  <div className="absolute bottom-6 text-center">
                    <span
                      className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Discovery → Validation → Publication
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-4xl">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-indigo-400">
                  <span>Research Chronicle • {currentFact.field} ({currentFact.year})</span>
                  <span>—</span>
                  <span>{currentFact.title}</span>
                </div>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {currentFact.fact}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFactIndex((prev) => (prev + 1) % SCIENTIFIC_FACTS.length)}
                className={`self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border cursor-pointer shrink-0 ${
                  isDark
                    ? 'border-white/10 text-slate-300 hover:bg-white/5'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Next Note</span>
              </button>
            </div>
          </section>

          {/* 2. INTERACTIVE GOAL SELECTOR */}
          <section
            className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-slate-200/80'
            }`}
          >
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  Research Objective
                </span>
                <h2
                  className={`mt-2 font-serif text-3xl sm:text-4xl font-normal ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Select what you are authoring.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {HOMEPAGE_GOALS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedHomepageGoalId(g.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                      selectedHomepageGoalId === g.id
                        ? isDark
                          ? 'bg-white text-slate-950 border-white font-semibold'
                          : 'bg-slate-900 text-white border-slate-900 font-semibold'
                        : isDark
                        ? 'bg-white/[0.02] text-slate-300 border-white/10 hover:border-white/25'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {g.title}
                  </button>
                ))}
              </div>

              <div
                className={`p-8 rounded-2xl border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10'
                    : 'bg-white border-slate-200/90 shadow-xs'
                }`}
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono text-indigo-400">
                    Primary Lifecycle Stage: {activeHomepageGoal.stage}
                  </span>
                  <h3
                    className={`font-serif text-2xl font-normal ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {activeHomepageGoal.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {activeHomepageGoal.desc}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveTab('explore')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                    >
                      <span>Open Full Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('templates')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300 cursor-pointer"
                    >
                      <span>View Publisher Templates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeHomepageGoal.tools.map((tName, idx) => (
                    <button
                      key={tName}
                      type="button"
                      onClick={() => handleJumpToToolByName(tName)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isDark
                          ? 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80'
                      }`}
                    >
                      <span className="text-[11px] font-mono text-indigo-400">
                        0{idx + 1} • Recommended Instrument
                      </span>
                      <div
                        className={`mt-1 text-sm font-semibold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {tName}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. FOUR FLAGSHIP FEATURED INSTRUMENTS */}
          <section
            className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-slate-200/80'
            }`}
          >
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                    Essential Instruments
                  </span>
                  <h2
                    className={`mt-2 font-serif text-3xl sm:text-4xl font-normal ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Most-relied-upon scholarly tools.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('explore')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  <span>Browse all {ALL_TOOLS.length.toLocaleString()} tools</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {homepageFeaturedTools.map((tool) => (
                  <div
                    key={tool.id}
                    className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                      isDark
                        ? 'bg-white/[0.02] hover:bg-white/[0.04] border-white/10'
                        : 'bg-white border-slate-200/90 shadow-xs'
                    }`}
                  >
                    <div className="space-y-3">
                      <span className="text-[11px] font-semibold text-indigo-400">
                        {tool.category}
                      </span>
                      <h3
                        className={`font-serif text-xl font-normal ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {tool.name}
                      </h3>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {tool.desc}
                      </p>
                    </div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 pt-4 border-t border-white/10 inline-flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      <span>Open Official Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. SIGNATURE INTERACTIVE RESEARCH WORKBENCH PREVIEW */}
          <section
            className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-slate-200/80'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Interactive Workbench
                  </span>
                  <h2
                    className={`mt-2 font-serif text-3xl sm:text-4xl font-normal ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Built-in scholarly utilities.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('lab');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  <span>Open Research Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    tag: '01 • Academic Prompt Vault',
                    title: 'Zero-Budget Topic to Publication-Ready Paper',
                    desc: 'Copy-paste system prompts that help find current research topics with free public datasets, generate reproducible Colab code, and strengthen your writing.',
                    cta: 'Open Prompt Vault',
                    targetTab: 'prompts'
                  },
                  {
                    tag: '02 • Query Synthesizer',
                    title: 'Scopus, PubMed & WoS Boolean Builder',
                    desc: 'Enter your Population, Intervention, and Outcome keywords once to compile exact Boolean search strings for Scopus, PubMed, and Web of Science.',
                    cta: 'Synthesize Search String',
                    targetTab: 'lab'
                  },
                  {
                    tag: '03 • Readiness Auditor',
                    title: 'Pre-Submission Peer-Review Audit',
                    desc: 'Audit your manuscript against 12 high-impact journal desk-rejection criteria covering statistical power, FAIR data DOIs, and vector figures.',
                    cta: `Run Manuscript Audit (${auditReadinessScore}%)`,
                    targetTab: 'lab'
                  }
                ].map((item) => (
                  <div
                    key={item.tag}
                    className={`p-7 rounded-2xl border flex flex-col justify-between transition-all ${
                      isDark
                        ? 'bg-white/[0.02] hover:bg-white/[0.04] border-white/10'
                        : 'bg-white border-slate-200/90 shadow-xs'
                    }`}
                  >
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400">
                        {item.tag}
                      </span>
                      <h3
                        className={`mt-3 font-serif text-xl font-normal ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab(item.targetTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="mt-7 pt-4 border-t border-white/10 w-full flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* TAB 2.2: ACADEMIC PROMPT VAULT */}
      {activeTab === 'prompts' && (
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Terminal className="w-3.5 h-3.5" />
                <span>Zero-Budget Topic Selection → Free Public Dataset → Publication-Ready Draft</span>
              </div>
              <h1
                className={`font-serif text-3xl sm:text-4xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                The Academic Prompt Vault
              </h1>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Designed for students and scholars who want a practical research topic with a free public dataset, $0 project cost, and guidance toward journal-ready writing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 shrink-0">
              {[
                { label: '$0 Hardware & Data Cost', sub: 'Runs on Free Google Colab' },
                { label: 'Latest Public Datasets', sub: 'Kaggle, UCI, Zenodo, HF' },
                { label: 'Academic Vocabulary', sub: 'Guidance on common AI-flagged phrases' },
                { label: 'High Acceptance Focus', sub: 'IEEE, Springer & Scopus' }
              ].map((b) => (
                <div
                  key={b.label}
                  className={`px-3.5 py-2.5 rounded-xl border ${
                    isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200/90'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-400">{b.label}</div>
                  <div className="text-[11px] text-slate-400">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-4 rounded-xl border text-sm ${isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-300 text-amber-900'}`}>
            ⚠️ AI can make mistakes. Verify every fact and citation, and follow your target journal’s AI-use policy.
          </div>

          <div
            className={`p-5 rounded-2xl border grid grid-cols-1 md:grid-cols-3 gap-4 ${
              isDark ? 'bg-[#0D1322]/90 border-amber-500/30' : 'bg-amber-50/50 border-amber-200'
            }`}
          >
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-1.5">
                1. Your Branch / Research Domain
              </label>
              <input
                type="text"
                value={promptDomain}
                onChange={(e) => setPromptDomain(e.target.value)}
                placeholder="e.g., Computer Science, Cybersecurity, Healthcare AI, Civil Eng..."
                className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold border focus:outline-none ${
                  isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-1.5">
                2. Target Publisher / Conference
              </label>
              <input
                type="text"
                value={promptVenue}
                onChange={(e) => setPromptVenue(e.target.value)}
                placeholder="e.g., IEEE Conference, Springer Nature, Elsevier Q1/Q2..."
                className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold border focus:outline-none ${
                  isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1.5">
                3. Your Academic Level
              </label>
              <input
                type="text"
                value={promptLevel}
                onChange={(e) => setPromptLevel(e.target.value)}
                placeholder="e.g., Final Year B.Tech, Master's, PhD Scholar..."
                className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold border focus:outline-none ${
                  isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {PROMPT_STAGES.map((stg) => (
              <button
                key={stg}
                type="button"
                onClick={() => setSelectedPromptStage(stg)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedPromptStage === stg
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white border-transparent shadow-md'
                    : isDark
                    ? 'bg-[#0E1320] text-slate-300 border-white/10 hover:border-white/25'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                {stg}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrompts.map((prm) => {
              const isCopied = copiedPromptId === prm.id;
              return (
                <div
                  key={prm.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between gap-5 transition-all ${
                    isDark
                      ? 'bg-[#0D1322]/95 border-white/10 hover:border-amber-500/40'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {prm.stage}
                      </span>
                    </div>

                    <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {prm.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {prm.goal}
                    </p>

                    <div
                      className={`p-4 rounded-xl border font-mono text-xs leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto ${
                        isDark
                          ? 'bg-black/60 border-white/10 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-emerald-300'
                      }`}
                    >
                      {prm.compiledPrompt}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-400">
                      Best used with: <strong className="text-slate-200">{prm.recommendedAi}</strong>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyPrompt(prm.id, prm.compiledPrompt)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white shadow-sm'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Customized Prompt'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* TAB 1: AI & RESEARCH TOOLS DIRECTORY */}
      {activeTab === 'explore' && (
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-lg">
            <div
              className={`rounded-[15px] p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3 ${
                isDark ? 'bg-[#0B0F1A]' : 'bg-white'
              }`}
            >
              <div className="flex items-center w-full gap-3">
                <Search className="w-5 h-5 text-indigo-400 ml-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={`Search across ${ALL_TOOLS.length.toLocaleString()} academic AI tools, disciplines, or research stages...`}
                  className="w-full bg-transparent text-sm sm:text-base focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setCurrentPage(1);
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/10 text-slate-300 hover:text-white cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    active
                      ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-md`
                      : isDark
                      ? 'bg-[#0E1320] text-slate-300 border-white/10 hover:border-white/25'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredTools.length.toLocaleString()}</strong> curated tools in{' '}
              <strong className="text-indigo-400">{selectedCategory}</strong>
            </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedTools.map((tool, index) => {
              const style = CATEGORY_STYLE_MAP[tool.category] || CATEGORIES[0];
              const isSaved = savedIds.includes(tool.id);

              return (
                <article
                  key={tool.id}
                  itemScope
                  itemType="https://schema.org/SoftwareApplication"
                  className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
                    isDark
                      ? 'bg-[#0D1322]/90 border-white/10 hover:border-indigo-500/40'
                      : 'bg-white border-slate-200/90 hover:border-indigo-300 shadow-xs'
                  }`}
                >
                  <div>
                    <div className={`h-1.5 w-full bg-gradient-to-r ${style.color}`} />
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          itemProp="applicationCategory"
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${style.badge}`}
                        >
                          {tool.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setInspectTool(tool)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                            title="Inspect Tool Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleSave(tool.id)}
                            className={`p-1.5 rounded-lg cursor-pointer ${
                              isSaved
                                ? 'text-rose-400 bg-rose-500/15'
                                : 'text-slate-400 hover:text-rose-400 hover:bg-white/10'
                            }`}
                            title="Bookmark Tool"
                          >
                            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <h3
                        itemProp="name"
                        className={`text-base font-extrabold leading-snug ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {tool.name}
                      </h3>

                      <p
                        itemProp="description"
                        className={`text-xs leading-relaxed ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {tool.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      {tool.stage}
                    </span>
                    <a
                      itemProp="url"
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${style.color} hover:opacity-95 inline-flex items-center gap-1.5 shadow-sm`}
                    >
                      <span>Open Tool</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-white/10 bg-white/5 disabled:opacity-40 cursor-pointer"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-xs font-bold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-white/10 bg-white/5 disabled:opacity-40 cursor-pointer"
              >
                Next Page
              </button>
            </div>
          )}
        </main>
      )}

      {/* TAB 2: OFFICIAL PUBLISHER & MANUSCRIPT TEMPLATES HUB */}
      {activeTab === 'templates' && (
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Publisher Downloads &amp; Overleaf LaTeX</span>
            </span>
            <h1
              className={`font-serif text-3xl sm:text-4xl font-normal ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Academic Manuscript, Review &amp; Book Chapter Templates
            </h1>
            <p className={`text-xs sm:text-sm max-w-3xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Direct links to official IEEE, Springer Nature, Elsevier, ACM, PRISMA 2020 Systematic Review, Comprehensive Survey, Book Chapter, and Doctoral Thesis templates.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedTemplateCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedTemplateCategory === cat
                    ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white border-transparent shadow-md'
                    : isDark
                    ? 'bg-[#0E1320] text-slate-300 border-white/10 hover:border-white/25'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 ${
                  isDark
                    ? 'bg-[#0D1322]/90 border-white/10'
                    : 'bg-white border-slate-200/90 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
                      {tpl.publisher}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {tpl.formatBadge}
                    </span>
                  </div>
                  <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {tpl.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {tpl.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setInspectTemplate(tpl)}
                    className="px-3 py-2 rounded-xl text-xs font-bold border border-white/15 hover:bg-white/5 cursor-pointer"
                  >
                    Inspect Section Outline
                  </button>
                  <div className="flex items-center gap-2">
                    <a
                      href={tpl.overleafUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center gap-1"
                    >
                      <span>Overleaf LaTeX</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={tpl.officialDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center gap-1"
                    >
                      <span>Official Download</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* TAB 2.5: INTERACTIVE RESEARCH LAB */}
      {activeTab === 'lab' && (
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Scholarly Utilities</span>
              </span>
              <h1
                className={`font-serif text-3xl sm:text-4xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Kinetix Research Lab &amp; Decision Workbench
              </h1>
              <p className={`text-xs sm:text-sm max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Architect your end-to-end research software stack, synthesize multi-database Boolean search strings for PRISMA systematic reviews, and audit your manuscript before journal submission.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyStackBlueprint}
              className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 text-white shadow-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>
                {copiedBlueprint
                  ? 'Copied Markdown Blueprint!'
                  : 'Copy My Research Blueprint (.md)'}
              </span>
            </button>
          </div>

          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Utility 01 • Stack Architect
                </span>
                <h2 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  1-Click Research Workflow &amp; Instrument Stack Builder
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {STACK_ARCHITECT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedStackPresetId(preset.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedStackPresetId === preset.id
                        ? `bg-gradient-to-r ${preset.gradient} text-white border-transparent shadow-md`
                        : isDark
                        ? 'bg-[#0E1320] text-slate-300 border-white/10 hover:border-white/25'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border p-6 space-y-6 ${
                isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200/90 shadow-xs'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {activeStackPreset.label}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {activeStackPreset.badge}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Domain: {activeStackPreset.field} • Typical Horizon: {activeStackPreset.duration}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const tpl = ACADEMIC_TEMPLATES.find(
                      (t) => t.id === activeStackPreset.recommendedTemplateId
                    );
                    if (tpl) setInspectTemplate(tpl);
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30 hover:bg-fuchsia-500/25 cursor-pointer"
                >
                  Inspect Matched Publisher Template →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeStackPreset.architecture.map((step) => {
                  const matchedTool = ALL_TOOLS.find(
                    (t) => t.name.toLowerCase() === step.toolName.toLowerCase()
                  );
                  return (
                    <div
                      key={step.stage}
                      className={`p-4 rounded-xl border flex flex-col justify-between gap-3 ${
                        isDark
                          ? 'bg-white/[0.02] border-white/10 hover:border-indigo-500/40'
                          : 'bg-slate-50/70 border-slate-200/80'
                      }`}
                    >
                      <div>
                        <span className="text-[11px] font-mono font-bold text-indigo-400">
                          {step.stage}
                        </span>
                        <div className={`text-sm font-extrabold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {step.toolName}
                        </div>
                        <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {step.reason}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleJumpToToolByName(step.toolName)}
                          className="text-[11px] font-bold text-slate-400 hover:text-white cursor-pointer"
                        >
                          Locate in Directory
                        </button>
                        {matchedTool && (
                          <a
                            href={matchedTool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                          >
                            <span>Open Official</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Utility 02 • Systematic Search Synthesizer
              </span>
              <h2 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Multi-Database Boolean &amp; PICO Search String Compiler
              </h2>
            </div>

            <div
              className={`rounded-2xl border p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 ${
                isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200/90 shadow-xs'
              }`}
            >
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-1">
                    1. Population / Core Context (OR-separated)
                  </label>
                  <input
                    type="text"
                    value={picoPopulation}
                    onChange={(e) => setPicoPopulation(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                      isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    2. Intervention / Method / Model (OR-separated)
                  </label>
                  <input
                    type="text"
                    value={picoIntervention}
                    onChange={(e) => setPicoIntervention(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                      isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    3. Outcome / Evaluation Metric (OR-separated)
                  </label>
                  <input
                    type="text"
                    value={picoOutcome}
                    onChange={(e) => setPicoOutcome(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                      isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1">
                      Exclude Terms (NOT)
                    </label>
                    <input
                      type="text"
                      value={picoExclude}
                      onChange={(e) => setPicoExclude(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                        isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Start Year Filter
                    </label>
                    <input
                      type="number"
                      min="1990"
                      max="2026"
                      value={picoYearStart}
                      onChange={(e) => setPicoYearStart(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${
                        isDark ? 'bg-[#07090E] border-white/15 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href={synthesizedQueries.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    <span>Test Live on Google Scholar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={synthesizedQueries.semanticUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    <span>Test on Semantic Scholar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {[
                  { id: 'scopus', title: 'Scopus Advanced Search (TITLE-ABS-KEY)', code: synthesizedQueries.scopus },
                  { id: 'wos', title: 'Web of Science Core Collection (TS=)', code: synthesizedQueries.wos },
                  { id: 'pubmed', title: 'PubMed / MEDLINE Entrez Syntax', code: synthesizedQueries.pubmed }
                ].map((db) => (
                  <div
                    key={db.id}
                    className="p-3.5 rounded-xl border bg-black/60 border-white/10"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-indigo-300">{db.title}</span>
                      <button
                        type="button"
                        onClick={() => {
                          try {
                            navigator.clipboard.writeText(db.code);
                            setCopiedQueryType(db.id);
                            setTimeout(() => setCopiedQueryType(''), 2000);
                          } catch {
                            // Ignore
                          }
                        }}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                      >
                        {copiedQueryType === db.id ? 'Copied!' : 'Copy String'}
                      </button>
                    </div>
                    <pre className="text-xs font-mono text-emerald-300 whitespace-pre-wrap break-words leading-relaxed">
                      {db.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Utility 03 • Peer-Review Safeguard
                </span>
                <h2 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  12-Point Journal &amp; Conference Submission Readiness Auditor
                </h2>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold text-slate-400">Submission Readiness Score</div>
                <div className="text-xl font-extrabold text-emerald-400">
                  {auditReadinessScore}% ({checkedAuditIds.length}/{MANUSCRIPT_AUDIT_ITEMS.length})
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MANUSCRIPT_AUDIT_ITEMS.map((item) => {
                const isChecked = checkedAuditIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleAuditItem(item.id)}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                      isChecked
                        ? isDark
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                          : 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                        : isDark
                        ? 'bg-[#0E1320]/90 border-white/10 text-slate-300 hover:border-white/25'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        isChecked ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">
                        {item.category}
                      </span>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">{item.label}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      )}

      {/* TAB 3: RESEARCH WORKFLOW GUIDE */}
      {activeTab === 'workflow' && (
        <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              End-to-End Academic Lifecycle
            </span>
            <h1 className={`font-serif text-3xl sm:text-4xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Research Lifecycle &amp; Recommended Instruments
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WORKFLOW_STAGES.map((st) => (
              <div
                key={st.step}
                className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 ${
                  isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200/90 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    STAGE {st.step}
                  </span>
                  <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {st.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {st.goal}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Top Matched Instruments:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {st.topTools.map((tName) => (
                      <button
                        key={tName}
                        type="button"
                        onClick={() => handleJumpToToolByName(tName)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 cursor-pointer"
                      >
                        {tName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* TAB 4: SAVED BOOKMARKS */}
      {activeTab === 'saved' && (
        <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`font-serif text-3xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Saved Research Instruments ({savedToolsList.length})
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Stored locally in your browser for immediate access.
              </p>
            </div>
          </div>

          {savedToolsList.length === 0 ? (
            <div className="p-12 rounded-2xl border border-white/10 text-center space-y-3">
              <p className="text-sm text-slate-400">No tools bookmarked yet.</p>
              <button
                type="button"
                onClick={() => setActiveTab('explore')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white cursor-pointer"
              >
                Explore {ANCHOR_TOOLS.length} Curated Tools
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedToolsList.map((tool) => (
                <div
                  key={tool.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between gap-4 ${
                    isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-indigo-400">{tool.category}</span>
                      <button
                        type="button"
                        onClick={() => toggleSave(tool.id)}
                        className="text-xs text-rose-400 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                    <h3 className="text-base font-extrabold">{tool.name}</h3>
                    <p className="text-xs text-slate-400">{tool.desc}</p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Open Tool</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* MODAL 1: TOOL QUICK INSPECTOR */}
      {inspectTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setInspectTool(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-lg w-full rounded-3xl border p-6 space-y-4 ${
              isDark ? 'bg-[#0E1320] border-white/15 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300">
                {inspectTool.category}
              </span>
              <button
                type="button"
                onClick={() => setInspectTool(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-extrabold">{inspectTool.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{inspectTool.desc}</p>
            <div className="text-xs font-mono text-indigo-400">
              Primary Research Lifecycle Stage: {inspectTool.stage}
            </div>
            <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
              <a
                href={inspectTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white inline-flex items-center gap-1.5"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: TEMPLATE SECTION OUTLINE INSPECTOR */}
      {inspectTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setInspectTemplate(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-xl w-full rounded-3xl border p-6 space-y-4 ${
              isDark ? 'bg-[#0E1320] border-white/15 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-fuchsia-500/20 text-fuchsia-300">
                {inspectTemplate.publisher} • {inspectTemplate.formatBadge}
              </span>
              <button
                type="button"
                onClick={() => setInspectTemplate(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-extrabold">{inspectTemplate.name}</h3>
            <p className="text-xs text-slate-400">{inspectTemplate.desc}</p>
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-indigo-400">Required Manuscript Sections:</div>
              {inspectTemplate.sections.map((sec) => (
                <div key={sec} className="p-2.5 rounded-xl bg-white/5 text-xs font-mono">
                  {sec}
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-end gap-2">
              <a
                href={inspectTemplate.overleafUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white inline-flex items-center gap-1"
              >
                <span>Open in Overleaf</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={inspectTemplate.officialDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white inline-flex items-center gap-1"
              >
                <span>Official Publisher Download</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2.5: UNIVERSAL ⌘K COMMAND PALETTE */}
      {showCommandPalette && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-md"
          onClick={() => setShowCommandPalette(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-2xl w-full rounded-3xl border overflow-hidden shadow-2xl ${
              isDark ? 'bg-[#0B101D] border-white/15 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center px-4 py-3.5 border-b border-white/10">
              <Search className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={commandQuery}
                onChange={(e) => setCommandQuery(e.target.value)}
                placeholder="Type a research tool, publisher template, or workflow action..."
                className="w-full bg-transparent text-sm sm:text-base focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowCommandPalette(false)}
                className="px-2 py-1 rounded-lg text-[10px] font-mono bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2 mb-2">
                  Quick Workspace Navigation
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Research Lab & PICO', tab: 'lab' },
                    { label: 'AI Research Tools', tab: 'explore' },
                    { label: 'Publisher Templates', tab: 'templates' },
                    { label: '9-Stage Workflow', tab: 'workflow' }
                  ].map((nav) => (
                    <button
                      key={nav.tab}
                      type="button"
                      onClick={() => {
                        setActiveTab(nav.tab);
                        setShowCommandPalette(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-indigo-500/20 text-xs font-bold text-left cursor-pointer"
                    >
                      {nav.label} →
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 px-2 mb-2">
                  Top Matched Research Instruments
                </div>
                <div className="space-y-1.5">
                  {commandResults.matchedTools.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold">{tool.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 font-bold">
                            {tool.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">{tool.desc}</p>
                      </div>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowCommandPalette(false)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shrink-0 inline-flex items-center gap-1"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Footer */}
      <footer
        className={`relative z-10 border-t py-8 px-4 sm:px-6 lg:px-8 text-xs ${
          isDark ? 'border-white/[0.08] text-slate-500' : 'border-slate-200 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Kinetix Scholar • {ALL_TOOLS.length.toLocaleString()} Research Tools &amp; Official Publisher Templates
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowCommandPalette(true)}
              className="hover:underline cursor-pointer"
            >
              Command Palette (⌘K)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}