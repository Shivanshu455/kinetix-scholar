import React from 'react';

const TINT_CONFIG = {
  blue: {
    bg: 'bg-[var(--color-blue-tint)]',
    text: 'text-[var(--color-ink-soft)]'
  },
  teal: {
    bg: 'bg-[var(--color-teal-tint)]',
    text: 'text-[var(--color-teal-ink)]'
  },
  amber: {
    bg: 'bg-[var(--color-amber-tint)]',
    text: 'text-[var(--color-amber-ink)]'
  },
  green: {
    bg: 'bg-[var(--color-green-tint)]',
    text: 'text-[var(--color-green-ink)]'
  },
  coral: {
    bg: 'bg-[var(--color-coral-tint)]',
    text: 'text-[var(--color-coral-ink)]'
  },
  white: {
    bg: 'bg-[var(--color-surface)]',
    text: 'text-[var(--color-ink-soft)]'
  }
};

export default function PageHeader({
  title,
  description,
  tint = 'white',
  children,
  className = ''
}) {
  const cfg = TINT_CONFIG[tint] || TINT_CONFIG.white;

  return (
    <section className={`w-full ${cfg.bg} border-b border-[var(--color-line)] py-10 ${className}`.trim()}>
      <div className="max-w-[1100px] mx-auto px-5 space-y-3">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          {title}
        </h1>
        {description && (
          <p className={`text-sm sm:text-base ${cfg.text} leading-relaxed max-w-[70ch]`}>
            {description}
          </p>
        )}
        {children && <div className="pt-1">{children}</div>}
      </div>
    </section>
  );
}
