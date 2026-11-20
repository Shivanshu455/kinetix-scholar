import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Page not found"
        description="The page you requested does not exist or the link was moved."
        tint="white"
      />
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] text-xs font-medium bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] text-white transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
      </main>
    </div>
  );
}
