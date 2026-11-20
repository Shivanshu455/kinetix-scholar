import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutStripSection() {
  return (
    <section>
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
        About this site
      </h2>
      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[70ch]">
        Tools are picked by hand and each link points to the official site. If a link is broken or a tool is missing, tell us on the{' '}
        <Link to="/about" className="text-[var(--color-blue)] hover:underline font-medium">
          About page
        </Link>
        .
      </p>
    </section>
  );
}
