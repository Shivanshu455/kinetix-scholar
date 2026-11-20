import React from 'react';
import { IEEE_INDIA } from '../../data/ieeeIndia.js';
import { filterAndSortIeeeConferences } from '../../utils/dates.js';
import IeeeConferenceCard from './IeeeConferenceCard.jsx';

export default function IeeeIndiaSection() {
  const openConferences = filterAndSortIeeeConferences(IEEE_INDIA);

  return (
    <section id="ieee-india" className="scroll-mt-24">
      <div className="flex items-center gap-2.5">
        <span className="w-1 h-6 bg-[var(--color-blue)] rounded-sm shrink-0" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]">
          IEEE conferences in India
        </h2>
      </div>

      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        We list a conference only after we find it in IEEE conference search and match its name, dates, location and record number to the organizer's website. The date on each entry is when we last checked. An IEEE record number shows that IEEE lists the conference. It does not judge the quality of the conference or its organizers. Organizers often extend deadlines, so confirm on the official site before you submit.
      </p>

      {openConferences.length > 0 ? (
        <div className="mt-6 flex flex-col gap-4">
          {openConferences.map((conf) => (
            <IeeeConferenceCard key={conf.id} conf={conf} />
          ))}
        </div>
      ) : (
        <div className="mt-6 p-5 bg-white border border-[var(--color-line)] rounded-[6px] text-sm text-[var(--color-ink-soft)]">
          No conferences with an open deadline are listed right now. Search{' '}
          <a
            href="https://conferences.ieee.org/conferences_events/conferences/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-blue)] hover:underline"
          >
            IEEE conference search
          </a>{' '}
          for more.
        </div>
      )}

      <div className="mt-8 p-5 bg-white border border-[var(--color-line)] rounded-[6px] space-y-3">
        <h3 className="font-serif text-base font-semibold text-[var(--color-ink)]">
          Check a conference yourself
        </h3>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-[var(--color-ink-soft)]">
          <li>Open IEEE conference search and look up the name or record number.</li>
          <li>Check that the name, dates, city and record number match the organizer's website.</li>
          <li>Read the paper deadline on the organizer's website, not on a listing site.</li>
          <li>Be careful with conferences that contact you by email without you asking.</li>
        </ol>
        <p className="text-xs text-[var(--color-ink-soft)] pt-1">
          More checks are in the{' '}
          <a href="#check-a-venue" className="text-[var(--color-blue)] hover:underline">
            Check a venue section below
          </a>
          .
        </p>
      </div>
    </section>
  );
}
