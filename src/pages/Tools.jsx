import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { CATEGORIES } from '../data/categories.js';
import { ALL_TOOLS } from '../data/tools.js';
import ToolCard from '../components/ToolCard.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const toSentenceCase = (str) => {
  if (!str) return '';
  return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).replace(/\bpdf\b/gi, 'PDF');
};

export default function Tools() {
  const { savedIds, toggleSave } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'All Categories';
  const initialPrice = searchParams.get('price') || 'All prices';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [visibleCount, setVisibleCount] = useState(30);

  // Sync state if URL query params change (reload, shared link, back/forward)
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cat = searchParams.get('category') || 'All Categories';
    const p = searchParams.get('price') || 'All prices';
    setSearchQuery(q);
    setSelectedCategory(cat);
    setSelectedPrice(p);
    setVisibleCount(30);
  }, [searchParams]);

  const hasFilters = Boolean(
    (selectedCategory && selectedCategory !== 'All Categories') ||
    searchQuery.trim() ||
    (selectedPrice && selectedPrice !== 'All prices')
  );

  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = ALL_TOOLS.filter((tool) => {
      if (
        selectedCategory !== 'All Categories' &&
        tool.category !== selectedCategory
      ) {
        return false;
      }
      if (selectedPrice !== 'All prices') {
        const p = (tool.pricing || '').toLowerCase();
        if (selectedPrice === 'Free' && p !== 'free') return false;
        if (selectedPrice === 'Freemium' && p !== 'freemium') return false;
        if (selectedPrice === 'Paid' && p !== 'paid') return false;
        if (
          selectedPrice === 'Not checked' &&
          (p === 'free' || p === 'freemium' || p === 'paid')
        ) {
          return false;
        }
      }
      if (q && !tool.searchBlob.includes(q) && !tool.name.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });

    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, searchQuery, selectedPrice]);

  // Category groups for default view (no search, no category filter, no price filter)
  const categoryGroups = useMemo(() => {
    return CATEGORIES.filter((c) => c.name !== 'All Categories')
      .map((cat) => {
        const toolsInCat = ALL_TOOLS.filter((t) => t.category === cat.name).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          category: cat.name,
          tools: toolsInCat
        };
      })
      .filter((group) => group.tools.length > 0);
  }, []);

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    setVisibleCount(30);
    const newParams = new URLSearchParams(searchParams);
    if (catName !== 'All Categories') {
      newParams.set('category', catName);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setVisibleCount(30);
    const newParams = new URLSearchParams(searchParams);
    if (val.trim()) {
      newParams.set('q', val.trim());
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };

  const handlePriceChange = (val) => {
    setSelectedPrice(val);
    setVisibleCount(30);
    const newParams = new URLSearchParams(searchParams);
    if (val && val !== 'All prices') {
      newParams.set('price', val);
    } else {
      newParams.delete('price');
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedPrice('All prices');
    setVisibleCount(30);
    setSearchParams(new URLSearchParams());
  };

  const remainingCount = Math.max(0, filteredTools.length - visibleCount);
  const nextBatchSize = Math.min(30, remainingCount);

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Software tools for research"
        description="Each link goes to the tool's official site. Check the current price and terms there before you rely on a tool."
        tint="blue"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 space-y-6">

      {/* 2 & 6. Search Bar, Result Count, and Price Filter */}
      <div className="space-y-3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search by name or task"
          aria-label="Search tools"
          className="w-full min-h-[44px] px-3.5 py-2 text-sm text-[#1a1a1a] bg-white border border-[#e4e2dc] rounded-[6px] focus:outline-none focus:border-[#1f4e9c] transition-colors"
        />

        <div className="flex items-center justify-between gap-4 flex-wrap text-xs text-[#5c5c5c]">
          <div className="flex items-center gap-3">
            <span>
              {hasFilters
                ? `${filteredTools.length.toLocaleString()} ${filteredTools.length === 1 ? 'tool' : 'tools'} matching your filters`
                : `${ALL_TOOLS.length.toLocaleString()} tools`}
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-[#1f4e9c] hover:underline cursor-pointer min-h-[44px] inline-flex items-center"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="price-filter" className="text-xs text-[#5c5c5c] shrink-0">
              Price:
            </label>
            <select
              id="price-filter"
              value={selectedPrice}
              onChange={(e) => handlePriceChange(e.target.value)}
              aria-label="Filter by price"
              className="min-h-[44px] px-3 py-1.5 text-xs text-[#1a1a1a] bg-white border border-[#e4e2dc] rounded-[6px] focus:outline-none focus:border-[#1f4e9c] cursor-pointer"
            >
              <option value="All prices">All prices</option>
              <option value="Free">Free</option>
              <option value="Freemium">Freemium</option>
              <option value="Paid">Paid</option>
              <option value="Not checked">Not checked</option>
            </select>
          </div>
        </div>
      </div>

      {/* 5. Category Chips: Desktop wraps, Mobile scrolls with right fade */}
      <div className="relative">
        <div className="flex md:flex-wrap items-center gap-2 overflow-x-auto md:overflow-visible pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleCategoryChange(cat.name)}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-colors duration-150 cursor-pointer min-h-[44px] shrink-0 border ${
                  active
                    ? 'bg-[var(--color-blue)] text-white border-[var(--color-blue)]'
                    : 'bg-white text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] border-[var(--color-line)] hover:border-[#b8b5ad]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
          {hasFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs text-[#1f4e9c] hover:underline cursor-pointer min-h-[44px] inline-flex items-center px-2 shrink-0 whitespace-nowrap"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-[#fafaf7] to-transparent md:hidden" />
      </div>

      {/* 7. Default View (Grouped by Category) vs 8. Filtered View (Flat List) */}
      {!hasFilters ? (
        <div className="space-y-12">
          {categoryGroups.map((group) => (
            <section key={group.category} className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a]">
                {toSentenceCase(group.category)}{' '}
                <span className="text-[#5c5c5c] font-normal text-base">
                  ({group.tools.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.tools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isSaved={savedIds.includes(tool.id)}
                    onToggleSave={toggleSave}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : filteredTools.length === 0 ? (
        <div className="p-12 rounded-[6px] border border-[#e4e2dc] bg-white text-center space-y-3">
          <p className="text-sm text-[#5c5c5c]">
            No tools match. Try a different search or clear the filters.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-[6px] text-xs font-medium bg-[#1f4e9c] hover:bg-[#173b78] text-white cursor-pointer min-h-[44px]"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.slice(0, visibleCount).map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isSaved={savedIds.includes(tool.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="pt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + nextBatchSize)}
                className="px-6 py-2 rounded-[6px] text-sm font-medium border border-[#e4e2dc] hover:border-[#b8b5ad] bg-white text-[#1a1a1a] cursor-pointer min-h-[44px] transition-colors"
              >
                Show {nextBatchSize} more
              </button>
            </div>
          )}
        </>
      )}
    </main>
  </div>
  );
}
