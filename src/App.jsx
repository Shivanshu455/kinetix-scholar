import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext.jsx';
import { useDocumentMeta } from './hooks/useDocumentMeta.js';

import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import CommandPalette from './components/CommandPalette.jsx';

import Home from './pages/Home/Home.jsx';
import Tools from './pages/Tools.jsx';
import Templates from './pages/Templates.jsx';
import Prompts from './pages/Prompts.jsx';
import Publish from './pages/Publish/Publish.jsx';
import ResearchLab from './pages/ResearchLab/ResearchLab.jsx';
import Workflow from './pages/Workflow.jsx';
import Saved from './pages/Saved.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import AiUsePolicy from './pages/AiUsePolicy.jsx';
import NotFound from './pages/NotFound.jsx';

function AppContent() {
  const {
    showCommandPalette,
    setShowCommandPalette,
    inspectTool,
    setInspectTool,
    inspectTemplate,
    setInspectTemplate
  } = useApp();

  useDocumentMeta();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        if (window.innerWidth >= 768) {
          e.preventDefault();
          setShowCommandPalette((prev) => !prev);
        }
      } else if (e.key === 'Escape') {
        if (showCommandPalette) setShowCommandPalette(false);
        if (inspectTool) setInspectTool(null);
        if (inspectTemplate) setInspectTemplate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCommandPalette, inspectTool, inspectTemplate, setShowCommandPalette, setInspectTool, setInspectTemplate]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fafaf7] text-[#1a1a1a] selection:bg-[#1f4e9c] selection:text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-research-tools" element={<Tools />} />
        <Route path="/academic-templates" element={<Templates />} />
        <Route path="/academic-prompt-vault" element={<Prompts />} />
        <Route path="/conferences-and-journals" element={<Publish />} />
        <Route path="/research-lab-pico-builder" element={<ResearchLab />} />
        <Route path="/research-lifecycle-workflow" element={<Workflow />} />
        <Route path="/saved-instruments" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/ai-use-policy" element={<AiUsePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <Modal
        inspectTool={inspectTool}
        onCloseTool={() => setInspectTool(null)}
        inspectTemplate={inspectTemplate}
        onCloseTemplate={() => setInspectTemplate(null)}
      />

      <CommandPalette
        show={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}
