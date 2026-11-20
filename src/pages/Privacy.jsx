import React from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Privacy() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Privacy policy"
        description="Kinetix Scholar does not collect personal information, require an account, or track you across the web; your saved tools are stored entirely in your browser's local storage."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 text-sm text-[var(--color-ink-soft)] leading-relaxed space-y-4">
        <p>
          We respect your privacy. No cookies, trackers, or advertising beacons are used on this website.
        </p>
      </main>
    </div>
  );
}
