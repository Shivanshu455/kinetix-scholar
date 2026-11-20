import { ANCHOR_TOOLS_PART1 } from './anchorToolsPart1.js';
import { ANCHOR_TOOLS_PART2 } from './anchorToolsPart2.js';

export const ANCHOR_TOOLS = [
  ...ANCHOR_TOOLS_PART1,
  ...ANCHOR_TOOLS_PART2
];

export const ALL_TOOLS = ANCHOR_TOOLS.map((t) => ({
  ...t,
  searchBlob: `${t.name} ${t.category} ${t.desc} ${t.stage}`.toLowerCase()
}));
