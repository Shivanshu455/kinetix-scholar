import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from './ui/Card.jsx';
import Tag from './ui/Tag.jsx';
import Button from './ui/Button.jsx';

export default function TemplateCard({ tpl, onInspect }) {
  return (
    <Card className="flex flex-col justify-between gap-5 p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Tag>{tpl.publisher}</Tag>
            <Tag>{tpl.formatBadge}</Tag>
          </div>
        </div>

        <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] leading-snug">
          {tpl.name}
        </h3>

        <p className="text-sm text-[#5c5c5c] leading-relaxed max-w-[70ch]">
          {tpl.desc}
        </p>
      </div>

      <div className="pt-4 border-t border-[#e4e2dc] flex flex-wrap items-center justify-between gap-3">
        {onInspect ? (
          <button
            type="button"
            onClick={() => onInspect(tpl)}
            className="text-xs text-[#5c5c5c] hover:text-[#1a1a1a] hover:underline cursor-pointer min-h-[44px] inline-flex items-center"
          >
            View template outline
          </button>
        ) : (
          <div />
        )}

        <div className="flex flex-wrap items-center gap-2">
          <Button
            as="a"
            href={tpl.overleafUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="text-xs px-3 py-1.5 min-h-[44px]"
          >
            <span>Overleaf LaTeX</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>

          <Button
            as="a"
            href={tpl.officialDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-xs px-3 py-1.5 min-h-[44px]"
          >
            <span>Download from publisher</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
