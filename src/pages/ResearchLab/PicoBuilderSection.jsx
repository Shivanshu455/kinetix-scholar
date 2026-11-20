import React, { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PicoBuilderSection({ isDark }) {
  const [picoPopulation, setPicoPopulation] = useState('deep learning OR transformer models');
  const [picoIntervention, setPicoIntervention] = useState('intrusion detection OR zero-day attack');
  const [picoOutcome, setPicoOutcome] = useState('false positive rate OR latency');
  const [picoExclude, setPicoExclude] = useState('survey, review');
  const [picoYearStart, setPicoYearStart] = useState('2022');
  const [copiedQueryType, setCopiedQueryType] = useState('');

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

  return (
    <section className="space-y-5">
      <div>
        <span className="text-xs font-medium text-[#5c5c5c]">
          Boolean search query builder
        </span>
        <h2 className={`text-xl sm:text-2xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          Build search strings for PubMed, Scopus, and Web of Science
        </h2>
      </div>

      <div
        className={`rounded-2xl border p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 ${
          isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200/90 shadow-xs'
        }`}
      >
        <div className="lg:col-span-5 space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
              1. Population or context terms (separate with OR)
            </label>
            <input
              type="text"
              value={picoPopulation}
              onChange={(e) => setPicoPopulation(e.target.value)}
              className="w-full px-3.5 py-2 rounded-[6px] text-xs font-mono border border-[#e4e2dc] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1f4e9c]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
              2. Intervention or method terms (separate with OR)
            </label>
            <input
              type="text"
              value={picoIntervention}
              onChange={(e) => setPicoIntervention(e.target.value)}
              className="w-full px-3.5 py-2 rounded-[6px] text-xs font-mono border border-[#e4e2dc] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1f4e9c]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
              3. Outcome or metric terms (separate with OR)
            </label>
            <input
              type="text"
              value={picoOutcome}
              onChange={(e) => setPicoOutcome(e.target.value)}
              className="w-full px-3.5 py-2 rounded-[6px] text-xs font-mono border border-[#e4e2dc] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1f4e9c]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
                Terms to exclude (NOT)
              </label>
              <input
                type="text"
                value={picoExclude}
                onChange={(e) => setPicoExclude(e.target.value)}
                className="w-full px-3 py-2 rounded-[6px] text-xs font-mono border border-[#e4e2dc] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1f4e9c]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
                Earliest publication year
              </label>
              <input
                type="number"
                min="1990"
                max="2026"
                value={picoYearStart}
                onChange={(e) => setPicoYearStart(e.target.value)}
                className="w-full px-3 py-2 rounded-[6px] text-xs font-mono border border-[#e4e2dc] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1f4e9c]"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href={synthesizedQueries.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-xs font-medium bg-[#1f4e9c] hover:bg-[#173b78] text-white min-h-[44px]"
            >
              <span>Search on Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={synthesizedQueries.semanticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-xs font-medium border border-[#e4e2dc] bg-white hover:bg-[#f5f4f0] text-[#1a1a1a] min-h-[44px]"
            >
              <span>Search on Semantic Scholar</span>
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
                  className="px-2.5 py-1 rounded-[4px] text-xs font-medium border border-[#e4e2dc] bg-white text-[#1a1a1a] hover:bg-[#f5f4f0] cursor-pointer"
                >
                  {copiedQueryType === db.id ? 'Copied' : 'Copy search string'}
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
  );
}
