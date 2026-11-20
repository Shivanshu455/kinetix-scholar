import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [inspectTool, setInspectTool] = useState(null);
  const [inspectTemplate, setInspectTemplate] = useState(null);

  // Saved bookmarks & manuscript audit
  const [savedIds, setSavedIds] = useLocalStorage('kinetix_saved_v3', []);
  const [checkedAuditIds, setCheckedAuditIds] = useLocalStorage('kinetix_manuscript_audit_v1', ['aud-1', 'aud-3', 'aud-4']);

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAuditItem = (id) => {
    setCheckedAuditIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider
      value={{
        isDark: false,
        showCommandPalette,
        setShowCommandPalette,
        inspectTool,
        setInspectTool,
        inspectTemplate,
        setInspectTemplate,
        savedIds,
        setSavedIds,
        toggleSave,
        checkedAuditIds,
        setCheckedAuditIds,
        toggleAuditItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
