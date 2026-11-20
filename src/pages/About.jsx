import React from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function About() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="About Kinetix Scholar"
        description="Kinetix Scholar is a free directory of academic research tools, publisher LaTeX templates, and prompt templates for researchers and students."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 text-sm text-[var(--color-ink-soft)] leading-relaxed space-y-4">
        <p>
          Each link goes to the tool's official site. Check the current price and terms there before you rely on a tool.
        </p>
      </main>
    </div>
  );
}
