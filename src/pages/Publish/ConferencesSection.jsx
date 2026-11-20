import React from 'react';
import { CONFERENCES } from '../../data/venuesConferences.js';
import VenueCard from './VenueCard.jsx';

export default function ConferencesSection() {
  return (
    <section id="conferences" className="scroll-mt-24">
      <div className="flex items-center gap-2.5">
        <span className="w-1 h-6 bg-[var(--color-blue)] rounded-sm shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]">
          Conferences
        </h2>
      </div>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        Each official site has the current call for papers, deadlines, location, registration and fees. This list covers computing and AI. For other fields, see{' '}
        <a href="#find-more" className="text-[var(--color-blue)] hover:underline">Find more</a> below.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONFERENCES.map((v) => (
          <VenueCard key={v.name} name={v.name} url={v.url} desc={v.desc} />
        ))}
      </div>
    </section>
  );
}
