import React from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Terms() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Terms of service"
        description="All links and templates are provided for informational and academic purposes; always verify journal guidelines and submission requirements directly with the publisher."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 text-sm text-[var(--color-ink-soft)] leading-relaxed space-y-4">
        <p>
          Kinetix Scholar provides links to external software tools, official templates, and publication venues. We do not operate or control third-party services.
        </p>
      </main>
    </div>
  );
}
