import React from 'react';
import PageHeader from '../../components/ui/PageHeader.jsx';
import IeeeIndiaSection from './IeeeIndiaSection.jsx';
import ConferencesSection from './ConferencesSection.jsx';
import JournalsSection from './JournalsSection.jsx';
import PreprintsSection from './PreprintsSection.jsx';
import FindMoreSection from './FindMoreSection.jsx';
import CheckSection from './CheckSection.jsx';
import IndiaSection from './IndiaSection.jsx';
import BeforeSubmitSection from './BeforeSubmitSection.jsx';

const JUMP_LINKS = [
  {
    label: 'IEEE conferences in India',
    href: '#ieee-india',
    className: 'bg-[var(--color-blue-tint)] text-[var(--color-blue)] hover:bg-[#d8e6fa]'
  },
  {
    label: 'Conferences',
    href: '#conferences',
    className: 'bg-[var(--color-blue-tint)] text-[var(--color-blue)] hover:bg-[#d8e6fa]'
  },
  {
    label: 'Journals',
    href: '#journals',
    className: 'bg-[var(--color-green-tint)] text-[var(--color-green-ink)] hover:bg-[#d0eed6]'
  },
  {
    label: 'Preprint servers',
    href: '#preprints',
    className: 'bg-[var(--color-amber-tint)] text-[var(--color-amber-ink)] hover:bg-[#fae7be]'
  },
  {
    label: 'Find more',
    href: '#find-more',
    className: 'bg-[var(--color-teal-tint)] text-[var(--color-teal-ink)] hover:bg-[#cfede9]'
  },
  {
    label: 'Check a venue',
    href: '#check-a-venue',
    className: 'bg-[var(--color-coral-tint)] text-[var(--color-coral-ink)] hover:bg-[#fad8d3]'
  }
];

export default function Publish() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Where to publish"
        description="Established conferences and journals with links to their official sites. Check there for the current details, and ask your supervisor which venues suit your level and field. Many of these are hard to get into."
        tint="coral"
      >
        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Sections on this page">
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors min-h-[44px] inline-flex items-center ${link.className}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </PageHeader>

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-10">
        <div className="flex flex-col gap-9 sm:gap-12">
          <IeeeIndiaSection />
          <ConferencesSection />
          <JournalsSection />
          <PreprintsSection />
          <FindMoreSection />
          <CheckSection />
          <IndiaSection />
          <BeforeSubmitSection />
        </div>
      </main>
    </div>
  );
}
