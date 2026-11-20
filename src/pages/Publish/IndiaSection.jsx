import React from 'react';

export default function IndiaSection() {
  return (
    <section id="india-note" className="scroll-mt-24">
      <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1a1a1a]">
        A note for students in India
      </h2>
      <p className="mt-2 text-sm text-[#5c5c5c] leading-relaxed max-w-[70ch]">
        <a
          href="https://www.ugc.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1f4e9c] hover:underline font-medium"
        >
          UGC
        </a>{' '}
        discontinued the UGC-CARE journal list on 11 February 2025. UGC now publishes suggested parameters for choosing peer-reviewed journals. Check your university's current rules and ask your supervisor before you submit.
      </p>
    </section>
  );
}
