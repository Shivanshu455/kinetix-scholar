import React from 'react';
import { JOURNALS } from '../../data/venuesJournals.js';
import VenueCard from './VenueCard.jsx';

export default function JournalsSection() {
  return (
    <section id="journals" className="scroll-mt-24">
      <div className="flex items-center gap-2.5">
        <span className="w-1 h-6 bg-[var(--color-green-ink)] rounded-sm shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]">
          Journals
        </h2>
      </div>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        Each journal website has its scope, author guidelines, article fees and indexing. Read these before you submit.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {JOURNALS.map((v) => (
          <VenueCard key={v.name} name={v.name} url={v.url} desc={v.desc} />
        ))}
      </div>
    </section>
  );
}
