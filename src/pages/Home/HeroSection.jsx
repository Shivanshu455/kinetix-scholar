import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/ai-research-tools?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/ai-research-tools');
    }
  };

  const jumpLinks = [
    { label: 'IEEE conference template', path: '/academic-templates' },
    { label: 'Springer Nature template', path: '/academic-templates' },
    { label: 'Elsevier template', path: '/academic-templates' },
    { label: 'Boolean search builder', path: '/research-lab-pico-builder' },
    { label: 'Pre-submission checklist', path: '/research-lab-pico-builder' },
    { label: 'Prompt vault', path: '/academic-prompt-vault' }
  ];

  return (
    <section className="w-full bg-[var(--color-navy)] py-14">
      <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-7 lg:col-span-8 space-y-4">
          <h1 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-white leading-tight">
            Tools, templates and prompts for writing a research paper
          </h1>

          <p className="text-[var(--color-navy-soft)] text-base leading-relaxed max-w-[70ch]">
            Software tools, official publisher templates, and small utilities that run in your browser. No account needed.
          </p>

          <form onSubmit={handleSearch} className="w-full flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, for example: literature review, citation manager"
              aria-label="Search tools"
              className="flex-1 min-h-[44px] px-3.5 py-2 text-sm text-[var(--color-ink)] bg-white border border-transparent rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]"
            />
            <button
              type="submit"
              className="min-h-[44px] px-5 py-2 text-sm font-semibold text-[var(--color-navy)] bg-[var(--color-amber)] hover:bg-[#e09815] rounded-[6px] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-amber)]"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[var(--color-navy-soft)]">
            <span>Common searches:</span>
            <Link
              to="/ai-research-tools?q=literature+review"
              className="text-[var(--color-navy-soft)] underline hover:text-white"
            >
              literature review
            </Link>
            <span aria-hidden="true">•</span>
            <Link
              to="/academic-templates"
              className="text-[var(--color-navy-soft)] underline hover:text-white"
            >
              IEEE template
            </Link>
            <span aria-hidden="true">•</span>
            <Link
              to="/ai-research-tools?q=BibTeX"
              className="text-[var(--color-navy-soft)] underline hover:text-white"
            >
              BibTeX
            </Link>
          </div>

          <p className="text-xs text-[var(--color-navy-soft)] pt-1">
            Free. No account. Every link goes to the official site.
          </p>
        </div>

        {/* Right Column: White Card with Blue Links */}
        <div className="md:col-span-5 lg:col-span-4 bg-white border border-[var(--color-line)] rounded-[6px] p-5">
          <h2 className="font-serif text-lg font-bold text-[var(--color-ink)] mb-2">
            Jump straight to
          </h2>
          <ul className="divide-y divide-[var(--color-line)]">
            {jumpLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="min-h-[44px] flex items-center text-sm text-[var(--color-blue)] hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
