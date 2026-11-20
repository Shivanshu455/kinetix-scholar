import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import { STACK_ARCHITECT_PRESETS } from '../../data/presets.js';
import { ACADEMIC_TEMPLATES } from '../../data/templates.js';
import { ALL_TOOLS } from '../../data/tools.js';

export default function StackArchitectSection({ isDark }) {
  const navigate = useNavigate();
  const { setInspectTemplate } = useApp();
  const [selectedStackPresetId, setSelectedStackPresetId] = useState('stack-q1-empirical');

  const activeStackPreset = useMemo(
    () =>
      STACK_ARCHITECT_PRESETS.find((s) => s.id === selectedStackPresetId) ||
      STACK_ARCHITECT_PRESETS[0],
    [selectedStackPresetId]
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-medium text-[#5c5c5c]">
            Suggested tool stacks
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Software stack presets by publication target
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {STACK_ARCHITECT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setSelectedStackPresetId(preset.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedStackPresetId === preset.id
                  ? `bg-gradient-to-r ${preset.gradient} text-white border-transparent shadow-md`
                  : isDark
                  ? 'bg-[#0E1320] text-slate-300 border-white/10 hover:border-white/25'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`rounded-2xl border p-6 space-y-6 ${
          isDark ? 'bg-[#0D1322]/90 border-white/10' : 'bg-white border-slate-200/90 shadow-xs'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {activeStackPreset.label}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {activeStackPreset.badge}
              </span>
            </div>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-[#5c5c5c]'}`}>
              Field: {activeStackPreset.field}, estimated timeline: {activeStackPreset.duration}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const tpl = ACADEMIC_TEMPLATES.find(
                (t) => t.id === activeStackPreset.recommendedTemplateId
              );
              if (tpl) setInspectTemplate(tpl);
            }}
            className="px-3.5 py-2 rounded-[6px] text-xs font-medium border border-[#e4e2dc] bg-white text-[#1f4e9c] hover:border-[#b8b5ad] cursor-pointer min-h-[44px]"
          >
            View template for this stack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeStackPreset.architecture.map((step) => {
            const matchedTool = ALL_TOOLS.find(
              (t) => t.name.toLowerCase() === step.toolName.toLowerCase()
            );
            return (
              <div
                key={step.stage}
                className={`p-4 rounded-xl border flex flex-col justify-between gap-3 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:border-indigo-500/40'
                    : 'bg-slate-50/70 border-slate-200/80'
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-400">
                    {step.stage}
                  </span>
                  <div className={`text-sm font-extrabold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {step.toolName}
                  </div>
                  <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {step.reason}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e2dc] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate(`/ai-research-tools?q=${encodeURIComponent(step.toolName)}`)}
                    className="text-xs font-medium text-[#5c5c5c] hover:text-[#1a1a1a] cursor-pointer"
                  >
                    Find in directory
                  </button>
                  {matchedTool && (
                    <a
                      href={matchedTool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#1f4e9c] hover:text-[#173b78] hover:underline"
                    >
                      <span>Open tool</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
