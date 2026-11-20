import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { ALL_TOOLS } from '../data/tools.js';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Saved() {
  const navigate = useNavigate();
  const { savedIds, toggleSave } = useApp();

  const savedToolsList = useMemo(
    () => ALL_TOOLS.filter((t) => savedIds.includes(t.id)),
    [savedIds]
  );

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title={`Saved tools (${savedToolsList.length})`}
        description="Saved in your browser localStorage."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 space-y-6">
        {savedToolsList.length === 0 ? (
          <div className="p-12 rounded-[6px] border border-[var(--color-line)] bg-white text-center space-y-3">
            <p className="text-sm text-[var(--color-ink-soft)]">You have not saved any tools yet.</p>
            <button
              type="button"
              onClick={() => navigate('/ai-research-tools')}
              className="px-4 py-2.5 rounded-[6px] text-xs font-medium bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] text-white cursor-pointer min-h-[44px]"
            >
              Browse all {ALL_TOOLS.length} tools
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedToolsList.map((tool) => (
              <div
                key={tool.id}
                className="p-5 rounded-[6px] border border-[var(--color-line)] bg-white flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-ink-soft)]">{tool.category}</span>
                    <button
                      type="button"
                      onClick={() => toggleSave(tool.id)}
                      className="text-xs text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:underline cursor-pointer min-h-[44px] inline-flex items-center"
                    >
                      Remove from saved
                    </button>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[var(--color-ink)]">{tool.name}</h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{tool.desc}</p>
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-[6px] text-xs font-medium bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] text-white inline-flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>Open tool</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
