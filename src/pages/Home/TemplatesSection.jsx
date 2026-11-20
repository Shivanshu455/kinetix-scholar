import React from 'react';
import { Link } from 'react-router-dom';
import { ACADEMIC_TEMPLATES } from '../../data/templates.js';

function getPublisherChip(tpl) {
  const text = `${tpl.publisher || ''} ${tpl.name || ''}`;
  if (/IEEE/i.test(text)) {
    return { name: 'IEEE', classes: 'bg-[var(--color-blue-tint)] text-[var(--color-blue)]' };
  }
  if (/ACM|Computing Machinery/i.test(text)) {
    return { name: 'ACM', classes: 'bg-[var(--color-teal-tint)] text-[var(--color-teal-ink)]' };
  }
  if (/Springer/i.test(text)) {
    return { name: 'Springer', classes: 'bg-[var(--color-amber-tint)] text-[var(--color-amber-ink)]' };
  }
  if (/Elsevier/i.test(text)) {
    return { name: 'Elsevier', classes: 'bg-[var(--color-coral-tint)] text-[var(--color-coral-ink)]' };
  }
  return null;
}

export default function TemplatesSection() {
  const templates = ACADEMIC_TEMPLATES.slice(0, 6);

  return (
    <section>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Publisher templates
          </h2>
          <Link
            to="/academic-templates"
            className="min-h-[44px] inline-flex items-center text-sm font-medium text-[var(--color-blue)] hover:underline"
          >
            All templates
          </Link>
        </div>

        {/* Mobile View (under 640px): stacked layout in one column */}
        <div className="sm:hidden border-t border-[var(--color-line)] divide-y divide-[var(--color-line)]">
          {templates.map((tpl) => {
            const chip = getPublisherChip(tpl);
            return (
              <div key={tpl.id} className="py-4 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {chip && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${chip.classes}`}>
                      {chip.name}
                    </span>
                  )}
                  <span className="font-medium text-sm text-[var(--color-ink)]">
                    {tpl.name}
                  </span>
                </div>
                <div className="text-xs text-[var(--color-ink-soft)]">
                  {tpl.formatBadge}
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {tpl.overleafUrl && (
                    <a
                      href={tpl.overleafUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3 py-1.5 rounded-[6px] border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] text-xs font-medium inline-flex items-center transition-colors"
                    >
                      Overleaf
                    </a>
                  )}
                  {tpl.officialDownloadUrl && (
                    <a
                      href={tpl.officialDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3 py-1.5 rounded-[6px] border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] text-xs font-medium inline-flex items-center transition-colors"
                    >
                      Official download
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View (640px and up): table layout */}
        <div className="hidden sm:block border-t border-[var(--color-line)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)] text-xs font-semibold text-[var(--color-ink-soft)]">
                <th scope="col" className="py-3 pr-4 font-semibold">Name</th>
                <th scope="col" className="py-3 px-4 font-semibold w-44">Format</th>
                <th scope="col" className="py-3 pl-4 font-semibold">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line)]">
              {templates.map((tpl) => {
                const chip = getPublisherChip(tpl);
                return (
                  <tr key={tpl.id} className="h-16 align-middle">
                    <td className="py-2 pr-4 font-medium text-[var(--color-ink)]">
                      <div className="flex items-center gap-2">
                        {chip && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shrink-0 ${chip.classes}`}>
                            {chip.name}
                          </span>
                        )}
                        <span>{tpl.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-xs text-[var(--color-ink-soft)] w-44">
                      {tpl.formatBadge}
                    </td>
                    <td className="py-2 pl-4">
                      <div className="flex items-center gap-2">
                        {tpl.overleafUrl && (
                          <a
                            href={tpl.overleafUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] px-3 py-1.5 rounded-[6px] border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] text-xs font-medium inline-flex items-center transition-colors shrink-0"
                          >
                            Overleaf
                          </a>
                        )}
                        {tpl.officialDownloadUrl && (
                          <a
                            href={tpl.officialDownloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] px-3 py-1.5 rounded-[6px] border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] text-xs font-medium inline-flex items-center transition-colors shrink-0"
                          >
                            Official download
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
