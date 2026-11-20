import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bookmark, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tools', path: '/ai-research-tools' },
    { name: 'Templates', path: '/academic-templates' },
    { name: 'Prompts', path: '/academic-prompt-vault' },
    { name: 'Publish', path: '/conferences-and-journals' },
    { name: 'Research Lab', path: '/research-lab-pico-builder' },
    { name: 'Guide', path: '/research-lifecycle-workflow' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-navy)] border-b border-[#1f3560]">
      <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Site Name */}
        <Link
          to="/"
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white hover:text-white transition-colors duration-150 shrink-0"
          title="Kinetix Scholar home"
        >
          Kinetix Scholar
        </Link>

        {/* Desktop Navigation (768px and up) */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 sm:gap-2 flex-nowrap whitespace-nowrap"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm transition-colors duration-150 min-h-[44px] inline-flex items-center focus-visible:outline-[var(--color-amber)] ${
                  isActive
                    ? 'text-white font-semibold underline underline-offset-4 decoration-2 decoration-[var(--color-amber)]'
                    : 'text-[var(--color-navy-soft)] hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/saved-instruments"
            className={({ isActive }) =>
              `pl-3 pr-0 py-1.5 text-sm transition-colors duration-150 min-h-[44px] inline-flex items-center gap-1.5 focus-visible:outline-[var(--color-amber)] ${
                isActive
                  ? 'text-white font-semibold underline underline-offset-4 decoration-2 decoration-[var(--color-amber)]'
                  : 'text-[var(--color-navy-soft)] hover:text-white'
              }`
            }
            title="Saved tools"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved</span>
          </NavLink>
        </nav>

        {/* Mobile Menu Button (under 768px) */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-navy-soft)] hover:text-white transition-colors duration-150 cursor-pointer focus-visible:outline-[var(--color-amber)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
