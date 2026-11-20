import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ExternalLink } from 'lucide-react';
import { ALL_TOOLS, ANCHOR_TOOLS } from '../data/tools.js';
import { ACADEMIC_TEMPLATES } from '../data/templates.js';
import { WORKFLOW_STAGES } from '../data/workflow.js';
import Tag from './ui/Tag.jsx';

export default function CommandPalette({ show, onClose }) {
  const navigate = useNavigate();
  const [commandQuery, setCommandQuery] = useState('');

  const commandResults = useMemo(() => {
    const q = commandQuery.trim().toLowerCase();
    const matchedTools = q
      ? ALL_TOOLS.filter((t) => t.searchBlob.includes(q)).slice(0, 6)
      : ANCHOR_TOOLS.slice(0, 5);
    const matchedTemplates = q
      ? ACADEMIC_TEMPLATES.filter((t) =>
          `${t.name} ${t.publisher} ${t.category}`.toLowerCase().includes(q)
        ).slice(0, 3)
      : ACADEMIC_TEMPLATES.slice(0, 3);
    return { matchedTools, matchedTemplates };
  }, [commandQuery]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/40"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full rounded-[6px] border border-[#e4e2dc] bg-white overflow-hidden shadow-xl text-[#1a1a1a]"
      >
        <div className="flex items-center px-4 py-3.5 border-b border-[#e4e2dc]">
          <Search className="w-4 h-4 text-[#5c5c5c] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={commandQuery}
            onChange={(e) => setCommandQuery(e.target.value)}
            placeholder="Search tools, templates, or workflow sections..."
            className="w-full bg-transparent text-sm focus:outline-none text-[#1a1a1a] placeholder:text-[#5c5c5c]"
          />
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-0.5 rounded-[4px] text-xs border border-[#e4e2dc] text-[#5c5c5c] hover:text-[#1a1a1a] hover:bg-[#f5f4f0] cursor-pointer"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
          <div>
            <div className="text-xs font-semibold text-[#5c5c5c] px-1 mb-2">
              Workspace navigation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Research Lab & PICO', path: '/research-lab-pico-builder' },
                { label: 'AI research tools', path: '/ai-research-tools' },
                { label: 'Publisher templates', path: '/academic-templates' },
                { label: `${WORKFLOW_STAGES.length}-stage workflow`, path: '/research-lifecycle-workflow' }
              ].map((nav) => (
                <button
                  key={nav.path}
                  type="button"
                  onClick={() => {
                    navigate(nav.path);
                    onClose();
                  }}
                  className="p-2.5 rounded-[6px] border border-[#e4e2dc] hover:border-[#b8b5ad] hover:bg-[#fafaf7] text-xs text-left cursor-pointer transition-colors duration-150"
                >
                  <span className="font-medium text-[#1a1a1a]">{nav.label}</span>
                  <span className="text-[#1f4e9c] ml-1">→</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#5c5c5c] px-1 mb-2">
              Scholarly tools
            </div>
            <div className="space-y-1.5">
              {commandResults.matchedTools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-3 rounded-[6px] border border-[#e4e2dc] hover:border-[#b8b5ad] flex items-center justify-between gap-3 transition-colors duration-150"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#1a1a1a]">{tool.name}</span>
                      <Tag>{tool.category}</Tag>
                    </div>
                    <p className="text-xs text-[#5c5c5c] truncate mt-0.5">{tool.desc}</p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-[6px] text-xs font-medium text-white bg-[#1f4e9c] hover:bg-[#173b78] shrink-0 inline-flex items-center gap-1 min-h-[36px]"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
