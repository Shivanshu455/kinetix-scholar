// Manuscript Audit Checklist Items
export const MANUSCRIPT_AUDIT_ITEMS = [
  { id: 'aud-1', category: 'Title & Abstract', label: 'Title is concise (<15 words), declarative, and contains primary searchable domain keywords.' },
  { id: 'aud-2', category: 'Title & Abstract', label: 'Abstract states Background, Objective, Methodology, Quantitative Key Results, and Implication within 250 words.' },
  { id: 'aud-3', category: 'Literature & Novelty', label: 'Introduction explicitly states the Research Gap and lists 3–4 bulleted core contributions.' },
  { id: 'aud-4', category: 'Literature & Novelty', label: 'Citation lineage confirmed in Connected Papers / Litmaps with recent (2024–2026) references included.' },
  { id: 'aud-5', category: 'Methodology & Stats', label: 'Statistical power / sample size justified (e.g., G*Power) and exact p-values, effect sizes, and confidence intervals reported.' },
  { id: 'aud-6', category: 'Methodology & Stats', label: 'All baselines, hyperparameters, and inclusion/exclusion criteria (PRISMA) are reproducible.' },
  { id: 'aud-7', category: 'Figures & Tables', label: 'All figures exported as vector PDF/SVG or 600-DPI TIFF using colorblind-safe palettes (ColorBrewer).' },
  { id: 'aud-8', category: 'Figures & Tables', label: 'Every table and figure is self-explanatory with units, error bars, and sample sizes in the caption.' },
  { id: 'aud-9', category: 'Open Science & Ethics', label: 'Data Availability & Code Availability statements included (e.g., permanent Zenodo DOI or GitHub link).' },
  { id: 'aud-10', category: 'Open Science & Ethics', label: 'CRediT authorship statement, funding acknowledgments, IRB ethics approval, and competing interests declared.' },
  { id: 'aud-11', category: 'Formatting & References', label: 'All references cross-checked for retractions and DOIs normalized via Zotero / JabRef with zero broken citations.' },
  { id: 'aud-12', category: 'Formatting & References', label: 'Target journal confirmed in ScimagoJR (Q1–Q4) and DOAJ to safeguard against predatory publishers.' }
];
