import React from 'react';
import { FIND_MORE } from '../../data/venuesMore.js';
import VenueCard from './VenueCard.jsx';

export default function FindMoreSection() {
  return (
    <section id="find-more" className="scroll-mt-24">
      <div className="flex items-center gap-2.5">
        <span className="w-1 h-6 bg-[var(--color-teal-ink)] rounded-sm shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]">
          Find more
        </h2>
      </div>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        Directories and publisher finders for fields that are not listed above. Publisher finders only suggest their own journals, so try more than one.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIND_MORE.map((v) => (
          <VenueCard key={v.name} name={v.name} url={v.url} desc={v.desc} />
        ))}
      </div>
    </section>
  );
}
