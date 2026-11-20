import React from 'react';

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  children,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6px] text-sm font-medium min-h-[44px] cursor-pointer transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[var(--color-blue)] focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] text-white border border-transparent shadow-none',
    secondary:
      'bg-white hover:bg-[#f5f4f0] text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[#b8b5ad]',
    link:
      'bg-transparent text-[var(--color-blue)] hover:text-[var(--color-blue-hover)] hover:underline p-0 min-h-0',
    'navy-primary':
      'bg-[var(--color-amber)] hover:bg-[#e09815] text-[var(--color-navy)] font-semibold border border-transparent focus-visible:outline-[var(--color-amber)]'
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      disabled={disabled}
      className={`${baseStyles} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
