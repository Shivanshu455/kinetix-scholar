import React from 'react';
import { getDeadlineDetails } from '../utils/dates.js';

const urgencyStyles = {
  green: 'bg-[var(--color-green-tint)] text-[var(--color-green-ink)]',
  amber: 'bg-[var(--color-amber-tint)] text-[var(--color-amber-ink)]',
  coral: 'bg-[var(--color-coral-tint)] text-[var(--color-coral-ink)]'
};

export default function DeadlineDateBlock({ deadlineStr, className = '' }) {
  const deadline = typeof deadlineStr === 'string' ? getDeadlineDetails(deadlineStr) : deadlineStr;
  if (!deadline) return null;

  const urgencyClass = urgencyStyles[deadline.urgency] || urgencyStyles.green;
  const widthClasses = className.includes('w-') ? '' : 'w-full md:w-[112px] md:min-w-[112px] md:max-w-[112px]';

  return (
    <div
      className={`shrink-0 rounded-[6px] p-3 text-center flex flex-col items-center justify-center ${widthClasses} ${urgencyClass} ${className}`.trim()}
    >
      <span className="text-[11px] font-semibold tracking-wide uppercase opacity-85">
        Paper deadline
      </span>
      <span className="font-serif text-3xl font-bold leading-tight my-0.5">
        {deadline.day}
      </span>
      <span className="text-xs font-semibold tracking-wider">
        {deadline.month}
      </span>
      <span className="text-xs opacity-80">
        {deadline.year}
      </span>
      <span className="text-[11px] font-medium mt-1.5 pt-1 border-t border-current/25 w-full block">
        {deadline.remainingText}
      </span>
    </div>
  );
}
