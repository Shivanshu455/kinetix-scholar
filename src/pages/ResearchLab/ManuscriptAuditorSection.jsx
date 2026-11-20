import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MANUSCRIPT_AUDIT_ITEMS } from '../../data/audit.js';

export default function ManuscriptAuditorSection({ isDark, checkedAuditIds = [], onToggleAuditItem }) {
  const auditReadinessScore = Math.round(
    (checkedAuditIds.length / MANUSCRIPT_AUDIT_ITEMS.length) * 100
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-medium text-[#5c5c5c]">
            Pre-submission review
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            {MANUSCRIPT_AUDIT_ITEMS.length}-item pre-submission checklist
          </h2>
        </div>

        <div className="text-right">
          <div className="text-xs font-medium text-[#5c5c5c]">Checklist progress</div>
          <div className="text-xl font-bold text-[#1f4e9c]">
            {auditReadinessScore}% ({checkedAuditIds.length}/{MANUSCRIPT_AUDIT_ITEMS.length})
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {MANUSCRIPT_AUDIT_ITEMS.map((item) => {
          const isChecked = checkedAuditIds.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onToggleAuditItem(item.id)}
              className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                isChecked
                  ? isDark
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                    : 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                  : isDark
                  ? 'bg-[#0E1320]/90 border-white/10 text-slate-300 hover:border-white/25'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 mt-0.5 shrink-0 ${
                  isChecked ? 'text-emerald-400' : 'text-slate-500'
                }`}
              />
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">{item.label}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
