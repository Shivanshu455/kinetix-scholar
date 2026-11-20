import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  if (!isOpen) return null;

  const links = [
    { name: 'Tools', path: '/ai-research-tools' },
    { name: 'Templates', path: '/academic-templates' },
    { name: 'Prompts', path: '/academic-prompt-vault' },
    { name: 'Publish', path: '/conferences-and-journals' },
    { name: 'Research Lab', path: '/research-lab-pico-builder' },
    { name: 'Guide', path: '/research-lifecycle-workflow' }
  ];

  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile navigation"
      className="md:hidden border-b border-[#1f3560] bg-[var(--color-navy)] px-4 py-2"
    >
      <ul className="flex flex-col divide-y divide-[#1f3560]">
        {links.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `min-h-[44px] w-full flex items-center text-sm transition-colors duration-150 focus-visible:outline-[var(--color-amber)] ${
                  isActive
                    ? 'text-white font-semibold underline underline-offset-4 decoration-2 decoration-[var(--color-amber)]'
                    : 'text-[var(--color-navy-soft)] hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/saved-instruments"
            onClick={onClose}
            className={({ isActive }) =>
              `min-h-[44px] w-full flex items-center gap-2 text-sm transition-colors duration-150 focus-visible:outline-[var(--color-amber)] ${
                isActive
                  ? 'text-white font-semibold underline underline-offset-4 decoration-2 decoration-[var(--color-amber)]'
                  : 'text-[var(--color-navy-soft)] hover:text-white'
              }`
            }
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
