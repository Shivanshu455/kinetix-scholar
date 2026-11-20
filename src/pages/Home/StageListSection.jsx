import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_TOOLS } from '../../data/tools.js';
import { ACADEMIC_TEMPLATES } from '../../data/templates.js';
import { IEEE_INDIA } from '../../data/ieeeIndia.js';
import { filterAndSortIeeeConferences } from '../../utils/dates.js';

export default function StageListSection() {
  const nTools = ALL_TOOLS.length;
  const mTemplates = ACADEMIC_TEMPLATES.length;
  const kConferences = filterAndSortIeeeConferences(IEEE_INDIA).length;

  const countsText = kConferences > 0
    ? `${nTools} tools, ${mTemplates} publisher templates and ${kConferences} IEEE conferences with open deadlines.`
    : `${nTools} tools and ${mTemplates} publisher templates.`;

  const stages = [
    {
      number: '1',
      title: 'Choose a topic',
      description: 'Find open datasets and gaps in existing work.',
      links: [
        { label: 'Prompts', path: '/academic-prompt-vault' },
        { label: 'Dataset tools', path: '/ai-research-tools?category=Datasets+%26+Repositories' }
      ]
    },
    {
      number: '2',
      title: 'Search the literature',
      description: 'Search engines, citation maps and review software.',
      links: [
        { label: 'Literature tools', path: '/ai-research-tools?category=Literature+Discovery' },
        { label: 'Boolean search builder', path: '/research-lab-pico-builder' }
      ]
    },
    {
      number: '3',
      title: 'Collect and analyze data',
      description: 'Statistics software, code notebooks and datasets.',
      links: [
        { label: 'Statistics tools', path: '/ai-research-tools?category=Data+%26+Statistics' },
        { label: 'Coding tools', path: '/ai-research-tools?category=Coding+%26+ML' }
      ]
    },
    {
      number: '4',
      title: 'Write the draft',
      description: 'Writing tools, LaTeX editors and prompts.',
      links: [
        { label: 'Writing tools', path: '/ai-research-tools?category=Academic+Writing' },
        { label: 'Prompts', path: '/academic-prompt-vault' }
      ]
    },
    {
      number: '5',
      title: 'Format and cite',
      description: 'Publisher templates, reference managers and BibTeX.',
      links: [
        { label: 'Templates', path: '/academic-templates' },
        { label: 'Citation tools', path: '/ai-research-tools?category=Citations+%26+References' }
      ]
    },
    {
      number: '6',
      title: 'Choose a venue and submit',
      description: 'Journal finders and the pre-submission checklist.',
      links: [
        { label: 'Journal finders', path: '/ai-research-tools?category=Journal+%26+Conference+Finders' },
        { label: 'Checklist', path: '/research-lab-pico-builder' }
      ]
    }
  ];

  return (
    <section>
      <div className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          Where are you in your paper?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="bg-white border border-[var(--color-line)] rounded-[6px] p-6 hover:border-[var(--color-blue)] transition-colors flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[var(--color-ink)]">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6">
                {stage.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="min-h-[44px] px-3.5 py-2 rounded-[6px] border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] text-xs font-medium inline-flex items-center transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-ink-soft)]">
            {countsText}
          </p>
          <Link
            to="/ai-research-tools"
            className="min-h-[44px] px-5 py-2 text-sm font-medium text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] rounded-[6px] inline-flex items-center justify-center transition-colors shrink-0"
          >
            Browse all {nTools} tools
          </Link>
        </div>
      </div>
    </section>
  );
}
