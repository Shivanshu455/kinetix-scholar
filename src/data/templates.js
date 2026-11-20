// Official Publisher & Manuscript Templates Hub
export const TEMPLATE_CATEGORIES = [
  'All Templates',
  'IEEE & Conferences',
  'Springer, Elsevier & Journals',
  'Review Papers (Systematic / Comprehensive / General)',
  'Book Chapters & Monographs',
  'Thesis, Dissertations & Patents'
];

export const ACADEMIC_TEMPLATES = [
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
