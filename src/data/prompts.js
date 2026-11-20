// Academic Prompt Vault
export const PROMPT_STAGES = [
  'All Stages',
  '01. Topic & Free Dataset Finder',
  '02. Gap & Literature Synthesis',
  '03. Zero-Cost Experiment & Code',
  '04. Section-by-Section Paper Drafting',
  '05. AI-Phrasing & Originality Review',
  '06. Reviewer #2 & High-Acceptance Polish'
];

export const ACADEMIC_PROMPTS = [
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

1. Recommend 3 curated, 100% free, benchmark datasets in this area (with their exact repository names on Kaggle, UCI, Zenodo, or Hugging Face) that have clean labels and small-to-medium file sizes (<5 GB) so I can process them easily on free Google Colab.
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
