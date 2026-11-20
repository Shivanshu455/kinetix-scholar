import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, onClear, placeholder = 'Search tools by name, topic, or task...' }) {
  return (
    <div className="flex items-center w-full px-3.5 py-2.5 rounded-[6px] border border-[#e4e2dc] bg-white transition-colors duration-150 focus-within:border-[#1f4e9c]">
      <Search className="w-4 h-4 text-[#5c5c5c] mr-3 shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm sm:text-base text-[#1a1a1a] placeholder:text-[#5c5c5c] focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="px-2 py-1 rounded-[4px] text-xs font-medium border border-[#e4e2dc] text-[#5c5c5c] hover:text-[#1a1a1a] hover:bg-[#f5f4f0] cursor-pointer shrink-0"
        >
          Clear
        </button>
      )}
    </div>
  );
}
