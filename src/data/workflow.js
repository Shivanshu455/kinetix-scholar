// Research Workflow Stages
export const WORKFLOW_STAGES = [
  { step: '01', name: 'Idea & Prior Art', goal: 'Validate originality and confirm no existing paper or patent already solved the exact problem.', topTools: ['Semantic Scholar', 'The Lens (Patent & Scholar)', 'Connected Papers'] },
  { step: '02', name: 'Literature Search', goal: 'Build syntax-accurate Boolean queries across peer-reviewed indexes and open-access repositories.', topTools: ['Semantic Scholar', 'Google Scholar', 'OpenAlex'] },
  { step: '03', name: 'Systematic Review', goal: 'Screen titles/abstracts using PRISMA criteria and extract structured PICO tables.', topTools: ['Consensus', 'Elicit', 'Rayyan'] },
  { step: '04', name: 'Research Gap & Question', goal: 'Map co-citation networks to pinpoint unresolved methodological or empirical contradictions.', topTools: ['Connected Papers', 'Litmaps', 'Google NotebookLM'] },
  { step: '05', name: 'Methodology & Power', goal: 'Select quantitative/qualitative protocols and compute statistical sample-size power.', topTools: ['G*Power Statistical Power Analysis', 'JASP Statistical Software', 'Google Dataset Search'] },
  { step: '06', name: 'Experiments & Code', goal: 'Execute reproducible code, benchmark baselines, and log hyperparameters.', topTools: ['Google Colaboratory (Colab)', 'Papers With Code', 'Hugging Face Hub'] },
  { step: '07', name: 'Data Analysis & Plots', goal: 'Run Frequentist/Bayesian tests and generate 600-DPI vector SVG/PDF figures.', topTools: ['JASP Statistical Software', 'Draw.io (diagrams.net)', 'RAWGraphs 2.0'] },
  { step: '08', name: 'Manuscript & LaTeX Writing', goal: 'Draft the manuscript in official IEEE, Springer, or Elsevier templates with clean BibTeX references.', topTools: ['Overleaf', 'Zotero', 'Manchester Academic Phrasebank'] },
  { step: '09', name: 'Journal Selection & Publication', goal: 'Match abstract to selected Q1–Q2 Scopus/DOAJ journals and pass pre-submission peer-review checks.', topTools: ['Elsevier Journal Finder', 'Springer Nature Journal Suggester', 'Scimago Journal & Country Rank (SJR)'] }
];
