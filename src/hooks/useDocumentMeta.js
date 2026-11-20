import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentMeta(selectedCategory) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      pathname === '/conferences-and-journals'
        ? 'Where to publish: conferences and journals | Kinetix Scholar'
        : pathname === '/academic-templates'
        ? 'Official IEEE, Springer, PRISMA & LaTeX Templates | Kinetix Scholar'
        : pathname === '/academic-prompt-vault'
        ? 'Research Prompts for Academics | Kinetix Scholar'
        : pathname === '/research-lab-pico-builder'
        ? 'Research Lab, Boolean PICO Builder & Manuscript Checklist | Kinetix Scholar'
        : pathname === '/ai-research-tools' && selectedCategory && selectedCategory !== 'All Categories'
        ? `${selectedCategory}: Academic Research Tools | Kinetix Scholar`
        : 'Kinetix Scholar: Free Research Tools, Prompts & Templates';

    const existingRobots = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"]');
    existingRobots.forEach((el) => el.remove());

    const upsertMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1');
    upsertMeta('bingbot', 'index, follow');
    const descriptionContent =
      pathname === '/conferences-and-journals'
        ? 'Directories for finding conferences and journals, and ways to check a venue is legitimate before you submit.'
        : 'Free software tools, official IEEE and Springer LaTeX templates, Boolean query builders, and writing prompts for academic researchers.';

    upsertMeta('description', descriptionContent);

    const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#fafaf7"/><path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" fill="none" stroke="#1f4e9c" stroke-width="4"/><circle cx="32" cy="32" r="7" fill="#1f4e9c"/></svg>`;
    const faviconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgFavicon)}`;
    let linkIcon = document.querySelector('link[rel="icon"]');
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.setAttribute('rel', 'icon');
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute('type', 'image/svg+xml');
    linkIcon.setAttribute('href', faviconUrl);
  }, [pathname, selectedCategory]);
}
