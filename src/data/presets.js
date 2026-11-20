// Stack Architect Presets
export const STACK_ARCHITECT_PRESETS = [
  {
    id: 'stack-q1-empirical',
    label: 'Q1 Empirical Journal Article',
    field: 'Computer Science, Engineering & Applied Sciences',
    duration: '8–14 Weeks',
    gradient: 'from-indigo-500 via-violet-500 to-cyan-500',
    architecture: [
      { stage: '01. Literature & Gap', toolName: 'Semantic Scholar', reason: 'Identify high-velocity citations and baseline TLDRs.' },
      { stage: '02. Citation Graph', toolName: 'Connected Papers', reason: 'Confirm zero missed foundational or derivative studies.' },
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
      { stage: '04. Citation Cross-Check', toolName: 'Scite.ai', reason: 'Check whether included studies were later contrasted or retracted.' },
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
      { stage: '03. CPC Classification', toolName: 'Google Patents', reason: 'Check Cooperative Patent Classification sub-codes.' },
      { stage: '04. Global Family Status', toolName: 'Espacenet (European Patent Office)', reason: 'Audit international patent family legal status.' },
      { stage: '05. Patent Drawings', toolName: 'Draw.io (diagrams.net)', reason: 'Draft black-and-white numbered embodiment figures (100, 102).' },
      { stage: '06. Claim Tree Typesetting', toolName: 'Overleaf', reason: 'Format [0001] bracketed specification and dependent claims.' }
    ],
    recommendedTemplateId: 'tpl-patent-specification'
  }
];
