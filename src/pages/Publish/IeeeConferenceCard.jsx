import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../components/ui/Card.jsx';
import DeadlineDateBlock from '../../components/DeadlineDateBlock.jsx';
import {
  formatDateRange,
  formatCheckedOnText
} from '../../utils/dates.js';

export default function IeeeConferenceCard({ conf }) {
  const datesText = formatDateRange(conf.startDate, conf.endDate);
  const checkedText = formatCheckedOnText(conf.checkedOn);
  const recordText = conf.recordNumber || 'See IEEE conference search';

  return (
    <Card as="article" className="!p-5 bg-white flex flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        {/* Left: 112px date block on desktop, full-width row on mobile */}
        {conf.deadline && <DeadlineDateBlock deadlineStr={conf.deadline} />}

        {/* Middle: Conference details */}
        <div className="flex-1 min-w-0 space-y-3">
          <a
            href={conf.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg font-semibold text-[var(--color-ink)] leading-snug hover:underline block"
          >
            {conf.name}
          </a>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <dt className="text-xs text-[var(--color-ink-soft)]">Location</dt>
              <dd className="text-[var(--color-ink)] mt-0.5">{conf.city}, {conf.state}</dd>
            </div>

            <div>
              <dt className="text-xs text-[var(--color-ink-soft)]">Conference dates</dt>
              <dd className="text-[var(--color-ink)] mt-0.5">{datesText}</dd>
            </div>

            <div>
              <dt className="text-xs text-[var(--color-ink-soft)]">IEEE record number</dt>
              <dd className="text-[var(--color-ink)] mt-0.5">{recordText}</dd>
            </div>

            {conf.sponsorship && (
              <div>
                <dt className="text-xs text-[var(--color-ink-soft)]">Sponsorship</dt>
                <dd className="text-[var(--color-ink)] mt-0.5">{conf.sponsorship}</dd>
              </div>
            )}

            {conf.mode && (
              <div>
                <dt className="text-xs text-[var(--color-ink-soft)]">Format</dt>
                <dd className="text-[var(--color-ink)] mt-0.5">{conf.mode}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* Bottom right of the card */}
      <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex flex-wrap items-center justify-end gap-4">
        {checkedText && (
          <span className="text-xs text-[var(--color-ink-soft)]">
            {checkedText}
          </span>
        )}
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
    </Card>
  );
}
