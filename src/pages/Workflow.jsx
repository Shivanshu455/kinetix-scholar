import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WORKFLOW_STAGES } from '../data/workflow.js';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Workflow() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Research stages and recommended tools"
        description="A structured walkthrough of the research lifecycle from literature discovery to publication, with recommended software tools for each phase."
        tint="blue"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WORKFLOW_STAGES.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-[6px] border border-[var(--color-line)] bg-white flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <span className="text-xs text-[var(--color-ink-soft)]">
                  Stage {st.step}
                </span>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                  {st.name}
                </h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {st.goal}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--color-line)] space-y-1.5">
                <div className="text-xs font-medium text-[var(--color-ink-soft)]">
                  Recommended tools:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {st.topTools.map((tName) => (
                    <button
                      key={tName}
                      type="button"
                      onClick={() => navigate(`/ai-research-tools?q=${encodeURIComponent(tName)}`)}
                      className="px-2.5 py-1 rounded-[4px] text-xs font-medium bg-[var(--color-blue-tint)] text-[var(--color-blue)] hover:bg-[#d6e4f9] transition-colors cursor-pointer"
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
    </div>
  );
}
