import React from 'react';

export default function Card({
  as: Component = 'div',
  children,
  className = '',
  ...props
}) {
  return (
    <Component
      className={`bg-white border border-[#e4e2dc] rounded-[6px] hover:border-[#b8b5ad] transition-colors duration-150 p-6 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
