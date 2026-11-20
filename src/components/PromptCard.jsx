import React from 'react';
import { Check, Copy } from 'lucide-react';
import Card from './ui/Card.jsx';
import Tag from './ui/Tag.jsx';
import Button from './ui/Button.jsx';

export default function PromptCard({ prm, isCopied, onCopy }) {
  return (
    <Card className="flex flex-col justify-between gap-5 p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Tag>{prm.stage}</Tag>
        </div>

        <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] leading-snug">
          {prm.title}
        </h3>

        <p className="text-sm text-[#5c5c5c] leading-relaxed max-w-[70ch]">
          {prm.goal}
        </p>

        <div className="p-4 rounded-[6px] border border-[#e4e2dc] bg-[#f5f4f0] font-mono text-xs text-[#1a1a1a] leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
          {prm.compiledPrompt}
        </div>
      </div>

      <div className="pt-3 border-t border-[#e4e2dc] flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-[#5c5c5c]">
          Recommended AI model:{' '}
          <strong className="font-medium text-[#1a1a1a]">{prm.recommendedAi}</strong>
        </span>

        <Button
          type="button"
          onClick={() => onCopy?.(prm.id, prm.compiledPrompt)}
          variant={isCopied ? 'secondary' : 'primary'}
          className="text-xs px-4 py-2 min-h-[44px]"
        >
          {isCopied ? (
            <Check className="w-3.5 h-3.5 text-[#1f4e9c]" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          <span>{isCopied ? 'Copied' : 'Copy prompt'}</span>
        </Button>
      </div>
    </Card>
  );
}
