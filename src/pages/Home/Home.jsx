import React from 'react';
import HeroSection from './HeroSection.jsx';
import IeeeDeadlinesSection from './IeeeDeadlinesSection.jsx';
import StageListSection from './StageListSection.jsx';
import UtilitiesSection from './UtilitiesSection.jsx';
import TemplatesSection from './TemplatesSection.jsx';
import AboutStripSection from './AboutStripSection.jsx';

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />

      {/* IEEE conference deadlines in India (white band, conditional) */}
      <IeeeDeadlinesSection />

      {/* Stage cards in page cream band */}
      <div className="w-full bg-[var(--color-page)] py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <StageListSection />
        </div>
      </div>

      {/* Utilities in white band */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <UtilitiesSection />
        </div>
      </div>

      {/* Publisher templates in page cream band */}
      <div className="w-full bg-[var(--color-page)] py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <TemplatesSection />
        </div>
      </div>

      {/* About strip in blue-tint band */}
      <div className="w-full bg-[var(--color-blue-tint)] py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <AboutStripSection />
        </div>
      </div>
    </main>
  );
}
