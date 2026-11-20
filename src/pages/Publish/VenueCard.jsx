import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Card from '../../components/ui/Card.jsx';

export default function VenueCard({ name, url, desc }) {
  const external = url.startsWith('http://') || url.startsWith('https://');

  return (
    <Card
      as="article"
      className="flex flex-col justify-between !p-5 h-full hover:border-[var(--color-blue)] hover:bg-[var(--color-blue-tint)] transition-colors duration-150"
    >
      <div className="space-y-2">
        {external ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg font-semibold text-[var(--color-ink)] leading-snug hover:underline"
          >
            {name}
          </a>
        ) : (
          <Link
            to={url}
            className="font-serif text-lg font-semibold text-[var(--color-ink)] leading-snug hover:underline"
          >
            {name}
          </Link>
        )}

        <p className="text-[15px] text-[var(--color-ink-soft)] leading-relaxed line-clamp-3 pt-1">
          {desc}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex items-center">
        {external ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-blue)] hover:underline"
          >
            <span>Open site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={url}
            className="min-h-[44px] inline-flex items-center text-xs font-medium text-[var(--color-blue)] hover:underline"
          >
            Open
          </Link>
        )}
      </div>
    </Card>
  );
}
