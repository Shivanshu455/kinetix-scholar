// Category Metadata & Style Mapping
export const CATEGORIES = [
  { name: 'All Categories', color: 'from-indigo-500 to-violet-500', badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
  { name: 'Literature Discovery', color: 'from-blue-500 to-indigo-600', badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  { name: 'Literature Mapping', color: 'from-violet-500 to-purple-600', badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
  { name: 'Systematic Review', color: 'from-emerald-500 to-teal-600', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { name: 'PDF & Paper Analysis', color: 'from-rose-500 to-pink-600', badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
  { name: 'Academic Writing', color: 'from-amber-500 to-orange-600', badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { name: 'Thesis & Patents', color: 'from-cyan-500 to-sky-600', badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
  { name: 'Citations & References', color: 'from-fuchsia-500 to-pink-600', badge: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' },
  { name: 'Data & Statistics', color: 'from-sky-500 to-blue-600', badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  { name: 'Coding & ML', color: 'from-teal-500 to-emerald-600', badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30' },
  { name: 'Visualization & Diagrams', color: 'from-orange-500 to-red-500', badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30' },
  { name: 'Journal & Conference Finders', color: 'from-purple-500 to-indigo-600', badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  { name: 'Datasets & Repositories', color: 'from-green-500 to-emerald-600', badge: 'bg-green-500/15 text-green-300 border-green-500/30' }
];

export const CATEGORY_STYLE_MAP = CATEGORIES.reduce((acc, cat) => {
  acc[cat.name] = cat;
  return acc;
}, {});
