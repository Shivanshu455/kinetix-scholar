import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { IEEE_INDIA } from '../../data/ieeeIndia.js';
import { filterAndSortIeeeConferences } from '../../utils/dates.js';
import DeadlineDateBlock from '../../components/DeadlineDateBlock.jsx';

export default function IeeeDeadlinesSection() {
  const openConferences = filterAndSortIeeeConferences(IEEE_INDIA).slice(0, 3);

  if (openConferences.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto px-5">
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              IEEE conference deadlines in India
            </h2>
            <Link
              to="/conferences-and-journals#ieee-india"
              className="text-sm font-medium text-[var(--color-blue)] hover:underline shrink-0"
            >
              All conferences
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {openConferences.map((conf) => (
              <article
                key={conf.id}
                className="bg-white border border-[var(--color-line)] rounded-[6px] p-4 flex flex-row items-stretch gap-3 sm:gap-4"
              >
                <DeadlineDateBlock
                  deadlineStr={conf.deadline}
                  className="w-[104px] min-w-[104px] max-w-[104px]"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <a
                      href={conf.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif font-semibold text-base sm:text-lg text-[var(--color-ink)] hover:underline leading-snug line-clamp-2"
                    >
                      {conf.name}
                    </a>
                    <p className="text-xs sm:text-sm text-[var(--color-ink-soft)] mt-1">
                      {conf.city}, {conf.state}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={conf.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-blue)] hover:underline"
                    >
                      <span>Open official site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
