import React from 'react';
import { Bookmark, ExternalLink } from 'lucide-react';
import Card from './ui/Card.jsx';

const getCategoryChipClass = (cat) => {
  const c = cat || '';
  if (/Literature|Systematic Review|PDF/i.test(c)) {
    return 'bg-[var(--color-blue-tint)] text-[var(--color-blue)]';
  }
  if (/Writing|Thesis|Citation/i.test(c)) {
    return 'bg-[var(--color-amber-tint)] text-[var(--color-amber-ink)]';
  }
  if (/Data|Coding|Dataset/i.test(c)) {
    return 'bg-[var(--color-teal-tint)] text-[var(--color-teal-ink)]';
  }
  if (/Visualization|Journal/i.test(c)) {
    return 'bg-[var(--color-coral-tint)] text-[var(--color-coral-ink)]';
  }
  return 'bg-[var(--color-blue-tint)] text-[var(--color-blue)]';
};

const getPriceChip = (pricing) => {
  const p = (pricing || '').toLowerCase();
  if (p === 'free') {
    return {
      label: 'Free',
      className: 'bg-[var(--color-green-tint)] text-[var(--color-green-ink)]'
    };
  }
  if (p === 'freemium') {
    return {
      label: 'Freemium',
      className: 'bg-[var(--color-blue-tint)] text-[var(--color-blue)]'
    };
  }
  if (p === 'paid') {
    return {
      label: 'Paid',
      className: 'bg-[var(--color-amber-tint)] text-[var(--color-amber-ink)]'
    };
  }
  return {
    label: 'Not checked',
    className: 'bg-[var(--color-page)] border border-[var(--color-line)] text-[var(--color-ink-soft)]'
  };
};

export default function ToolCard({ tool, isSaved, onToggleSave }) {
  const priceChip = getPriceChip(tool.pricing);
  const categoryChipClass = getCategoryChipClass(tool.category);

  return (
    <Card
      as="article"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      className="flex flex-col justify-between !p-5 h-full"
    >
      <div className="space-y-2">
        {/* Header: Name on left, bookmark on right */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              itemProp="name"
              className="font-serif text-lg font-semibold text-[var(--color-ink)] leading-snug"
            >
              {tool.name}
            </h3>
            <div className="mt-1">
              <span className={`text-[12px] font-medium px-2 py-0.5 rounded-[4px] inline-block max-w-full truncate ${categoryChipClass}`}>
                {tool.category}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onToggleSave?.(tool.id)}
            className="w-11 h-11 shrink-0 inline-flex items-center justify-center rounded-[6px] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:bg-[#f5f4f0] cursor-pointer transition-colors duration-150"
            title={isSaved ? `Remove ${tool.name} from saved` : `Save ${tool.name}`}
            aria-label={isSaved ? `Remove ${tool.name} from saved` : `Save ${tool.name}`}
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? 'fill-[var(--color-blue)] text-[var(--color-blue)]' : ''}`}
            />
          </button>
        </div>

        {/* Description: 15px, text-ink-soft, clamp to 3 lines */}
        <p
          itemProp="description"
          className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed line-clamp-3 pt-1"
        >
          {tool.desc}
        </p>
      </div>

      {/* Footer pinned to bottom */}
      <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex items-center justify-between gap-2">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-[4px] ${priceChip.className}`}>
          {priceChip.label}
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-blue)] hover:underline"
        >
          <span>Open tool</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Card>
  );
}
