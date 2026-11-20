import React from 'react';

export default function Tag({
  children,
  active = false,
  onClick,
  className = '',
  ...props
}) {
  const Component = onClick ? 'button' : 'span';

  const baseStyle =
    'inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-xs font-normal border transition-colors duration-150';
  const stateStyle = active
    ? 'bg-[#1f4e9c] text-white border-[#1f4e9c] font-medium'
    : 'bg-white text-[#5c5c5c] border-[#e4e2dc]';
  const interactiveStyle = onClick
    ? 'cursor-pointer hover:border-[#b8b5ad] hover:text-[#1a1a1a]'
    : '';

  return (
    <Component
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`${baseStyle} ${stateStyle} ${interactiveStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
