import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'AI-use policy', path: '/ai-use-policy' }
  ];

  return (
    <footer className="border-t border-[#1f3560] bg-[var(--color-navy)] py-8 text-xs text-[var(--color-navy-soft)]">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="leading-relaxed">
          Free, no login. Always check the journal's current rules before you submit.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[var(--color-navy-soft)] hover:text-white hover:underline transition-colors duration-150 py-1 focus-visible:outline-[var(--color-amber)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://github.com/shiivammaurya/kinetix-scholar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-navy-soft)] hover:text-white hover:underline transition-colors duration-150 py-1 focus-visible:outline-[var(--color-amber)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
