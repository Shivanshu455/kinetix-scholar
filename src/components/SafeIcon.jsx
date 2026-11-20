import React from 'react';
import * as Icons from 'lucide-react';

export default function SafeIcon({ name, className = 'w-4 h-4', fallback = 'Sparkles', ...props }) {
  const IconComponent = Icons[name] || Icons[fallback] || Icons.Sparkles;
  return <IconComponent className={className} {...props} />;
}
