import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import Tag from './ui/Tag.jsx';
import Button from './ui/Button.jsx';

export default function Modal({
  inspectTool,
  onCloseTool,
  inspectTemplate,
  onCloseTemplate
}) {
  return (
    <>
      {/* Tool inspector modal */}
      {inspectTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={onCloseTool}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full rounded-[6px] border border-[#e4e2dc] bg-white p-6 space-y-4 text-[#1a1a1a] shadow-lg"
          >
            <div className="flex items-center justify-between">
              <Tag>{inspectTool.category}</Tag>
              <button
                type="button"
                onClick={onCloseTool}
                className="w-8 h-8 rounded-[4px] text-[#5c5c5c] hover:text-[#1a1a1a] hover:bg-[#f5f4f0] inline-flex items-center justify-center cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-serif text-xl font-bold">{inspectTool.name}</h3>
            <p className="text-sm text-[#5c5c5c] leading-relaxed">{inspectTool.desc}</p>
            <div className="text-xs text-[#5c5c5c]">
              Research stage: <span className="font-medium text-[#1a1a1a]">{inspectTool.stage}</span>
            </div>
            <div className="pt-3 border-t border-[#e4e2dc] flex justify-end gap-2">
              <Button
                as="a"
                href={inspectTool.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-xs"
              >
                <span>Open official website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Template outline inspector modal */}
      {inspectTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={onCloseTemplate}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full rounded-[6px] border border-[#e4e2dc] bg-white p-6 space-y-4 text-[#1a1a1a] shadow-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag>{inspectTemplate.publisher}</Tag>
                <Tag>{inspectTemplate.formatBadge}</Tag>
              </div>
              <button
                type="button"
                onClick={onCloseTemplate}
                className="w-8 h-8 rounded-[4px] text-[#5c5c5c] hover:text-[#1a1a1a] hover:bg-[#f5f4f0] inline-flex items-center justify-center cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-serif text-xl font-bold">{inspectTemplate.name}</h3>
            <p className="text-sm text-[#5c5c5c] leading-relaxed">{inspectTemplate.desc}</p>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1a1a1a]">Manuscript sections in this template:</div>
              <div className="space-y-1.5">
                {inspectTemplate.sections.map((sec) => (
                  <div key={sec} className="p-2 rounded-[4px] bg-[#fafaf7] border border-[#e4e2dc] text-xs text-[#1a1a1a]">
                    {sec}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-[#e4e2dc] flex flex-wrap items-center justify-end gap-2">
              <Button
                as="a"
                href={inspectTemplate.overleafUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="text-xs"
              >
                <span>Open in Overleaf</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
              <Button
                as="a"
                href={inspectTemplate.officialDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-xs"
              >
                <span>Download from publisher</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
