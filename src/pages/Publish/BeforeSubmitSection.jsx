import React from 'react';
import { BEFORE_SUBMIT } from '../../data/venuesMore.js';
import VenueCard from './VenueCard.jsx';

export default function BeforeSubmitSection() {
  return (
    <section id="before-you-submit" className="scroll-mt-24">
      <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1a1a1a]">
        Before you submit
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BEFORE_SUBMIT.map((v) => (
          <VenueCard key={v.name} name={v.name} url={v.url} desc={v.desc} />
        ))}
      </div>
    </section>
  );
}
