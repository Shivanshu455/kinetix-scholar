import React from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function AiUsePolicy() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="AI-use policy"
        description="We encourage transparent, ethical research practices; always review and comply with your target journal or institution's specific policies on AI-assisted writing and data analysis."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 text-sm text-[var(--color-ink-soft)] leading-relaxed space-y-4">
        <p>
          Always declare the use of AI tools in manuscripts according to the guidelines of COPE and your target journal.
        </p>
      </main>
    </div>
  );
}
