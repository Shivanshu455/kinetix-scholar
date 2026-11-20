import React from 'react';
import { PREPRINTS } from '../../data/venuesPreprints.js';
import VenueCard from './VenueCard.jsx';

export default function PreprintsSection() {
  return (
    <section id="preprints" className="scroll-mt-24">
      <div className="flex items-center gap-2.5">
        <span className="w-1 h-6 bg-[var(--color-amber)] rounded-sm shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]">
          Preprint servers
        </h2>
      </div>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        Preprints are not peer reviewed. Check the journal's preprint policy before you post one.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PREPRINTS.map((v) => (
          <VenueCard key={v.name} name={v.name} url={v.url} desc={v.desc} />
        ))}
      </div>
    </section>
  );
}
