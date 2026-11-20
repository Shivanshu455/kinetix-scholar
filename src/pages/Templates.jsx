import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { TEMPLATE_CATEGORIES, ACADEMIC_TEMPLATES } from '../data/templates.js';
import TemplateCard from '../components/TemplateCard.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Templates() {
  const { isDark, setInspectTemplate } = useApp();
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState('All Templates');

  const filteredTemplates = useMemo(() => {
    if (selectedTemplateCategory === 'All Templates') return ACADEMIC_TEMPLATES;
    return ACADEMIC_TEMPLATES.filter((t) => t.category === selectedTemplateCategory);
  }, [selectedTemplateCategory]);

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Official publisher templates for papers and theses"
        description="Links to official LaTeX packages and Overleaf templates from IEEE, Springer Nature, Elsevier, ACM, and PRISMA."
        tint="teal"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedTemplateCategory(cat)}
              className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-colors cursor-pointer min-h-[44px] ${
                selectedTemplateCategory === cat
                  ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                  : 'bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[#b8b5ad]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTemplates.map((tpl) => (
            <TemplateCard
              key={tpl.id}
              tpl={tpl}
              isDark={isDark}
              onInspect={setInspectTemplate}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
