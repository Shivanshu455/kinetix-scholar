import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import { STACK_ARCHITECT_PRESETS } from '../../data/presets.js';
import { MANUSCRIPT_AUDIT_ITEMS } from '../../data/audit.js';
import StackArchitectSection from './StackArchitectSection.jsx';
import PicoBuilderSection from './PicoBuilderSection.jsx';
import ManuscriptAuditorSection from './ManuscriptAuditorSection.jsx';
import PageHeader from '../../components/ui/PageHeader.jsx';

export default function ResearchLab() {
  const { isDark, checkedAuditIds, toggleAuditItem } = useApp();
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);

  const activeStackPreset = STACK_ARCHITECT_PRESETS[0];

  const auditReadinessScore = Math.round(
    (checkedAuditIds.length / MANUSCRIPT_AUDIT_ITEMS.length) * 100
  );

  const handleCopyStackBlueprint = () => {
    const md = `# Kinetix Scholar: Software stack for ${activeStackPreset.label}
Field: ${activeStackPreset.field}
Target Standard: ${activeStackPreset.badge} (${activeStackPreset.duration})

## Suggested ${activeStackPreset.architecture.length}-stage tool pipeline
${activeStackPreset.architecture
  .map((item) => `- **${item.stage}**: ${item.toolName}, ${item.reason}`)
  .join('\n')}

## Pre-submission checklist progress: ${auditReadinessScore}% (${checkedAuditIds.length}/${MANUSCRIPT_AUDIT_ITEMS.length} completed)`;
    try {
      navigator.clipboard.writeText(md);
      setCopiedBlueprint(true);
      setTimeout(() => setCopiedBlueprint(false), 2200);
    } catch {
      // Ignore clipboard error
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageHeader
        title="Research lab and utilities"
        description="Tools to assemble software for your project, build Boolean search strings for systematic reviews, and check a pre-submission paper checklist."
        tint="green"
      >
        <button
          type="button"
          onClick={handleCopyStackBlueprint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] text-xs font-medium bg-[var(--color-navy)] hover:bg-[#1f3560] text-white cursor-pointer min-h-[44px]"
        >
          <FileText className="w-4 h-4" />
          <span>
            {copiedBlueprint
              ? 'Copied markdown summary'
              : 'Copy markdown summary'}
          </span>
        </button>
      </PageHeader>

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 py-8 space-y-12">
        <StackArchitectSection isDark={isDark} />
        <PicoBuilderSection isDark={isDark} />
        <ManuscriptAuditorSection
          isDark={isDark}
          checkedAuditIds={checkedAuditIds}
          onToggleAuditItem={toggleAuditItem}
        />
      </main>
    </div>
  );
}
