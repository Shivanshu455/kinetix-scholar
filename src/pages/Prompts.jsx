import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { PROMPT_STAGES, ACADEMIC_PROMPTS } from '../data/prompts.js';
import PromptCard from '../components/PromptCard.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Prompts() {
  const { isDark } = useApp();
  const [selectedPromptStage, setSelectedPromptStage] = useState('All Stages');
  const [promptDomain, setPromptDomain] = useState('Computer Science & AI');
  const [promptVenue, setPromptVenue] = useState('IEEE / Springer / Scopus Q1-Q2');
  const [promptLevel, setPromptLevel] = useState('B.Tech / M.Tech / PhD Student');
  const [copiedPromptId, setCopiedPromptId] = useState('');

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

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Prompts for research and academic writing"
        description="Structured system prompts for topic exploration, experiment code, and manuscript drafting. Fill in your field and target venue to customize each prompt."
        tint="amber"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 space-y-6">
        <div className="p-4 rounded-[6px] border border-[var(--color-line)] bg-white text-sm text-[var(--color-ink)]">
          Note: AI outputs can contain errors. Check every fact and citation against original sources, and follow your target journal's policy on AI assistance.
        </div>

        <div className="p-5 rounded-[6px] border border-[var(--color-line)] bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">
              1. Research field
            </label>
            <input
              type="text"
              value={promptDomain}
              onChange={(e) => setPromptDomain(e.target.value)}
              placeholder="e.g., Computer Science, Cybersecurity, Healthcare AI, Civil Eng..."
              className="w-full px-3.5 py-2 rounded-[6px] text-xs border border-[var(--color-line)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-blue)]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">
              2. Target journal or conference
            </label>
            <input
              type="text"
              value={promptVenue}
              onChange={(e) => setPromptVenue(e.target.value)}
              placeholder="e.g., IEEE Conference, Springer Nature, Elsevier Q1/Q2..."
              className="w-full px-3.5 py-2 rounded-[6px] text-xs border border-[var(--color-line)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-blue)]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">
              3. Academic level
            </label>
            <input
              type="text"
              value={promptLevel}
              onChange={(e) => setPromptLevel(e.target.value)}
              placeholder="e.g., Final Year B.Tech, Master's, PhD Scholar..."
              className="w-full px-3.5 py-2 rounded-[6px] text-xs border border-[var(--color-line)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-blue)]"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROMPT_STAGES.map((stg) => (
            <button
              key={stg}
              type="button"
              onClick={() => setSelectedPromptStage(stg)}
              className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-colors cursor-pointer min-h-[44px] ${
                selectedPromptStage === stg
                  ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                  : 'bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[#b8b5ad]'
              }`}
            >
              {stg}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredPrompts.map((prm) => (
            <PromptCard
              key={prm.id}
              prm={prm}
              isDark={isDark}
              isCopied={copiedPromptId === prm.id}
              onCopy={handleCopyPrompt}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
