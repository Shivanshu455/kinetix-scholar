import React from 'react';
import { Link } from 'react-router-dom';

export default function UtilitiesSection() {
  const utilities = [
    {
      title: 'Boolean search builder',
      description: 'Turn your keywords into search strings for PubMed, Scopus and Web of Science.',
      path: '/research-lab-pico-builder',
      actionLabel: 'Open builder'
    },
    {
      title: 'Pre-submission checklist',
      description: '12 standard checks before you submit.',
      path: '/research-lab-pico-builder',
      actionLabel: 'Open checklist'
    }
  ];

  return (
    <section>
      <div className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          Utilities that run in your browser
        </h2>

        <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
          {utilities.map((item) => (
            <div
              key={item.title}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="text-sm">
                <span className="font-semibold text-[var(--color-ink)]">{item.title}: </span>
                <span className="text-[var(--color-ink-soft)]">{item.description}</span>
              </div>
              <Link
                to={item.path}
                className="min-h-[44px] inline-flex items-center text-sm font-medium text-[var(--color-blue)] hover:underline shrink-0"
              >
                {item.actionLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
