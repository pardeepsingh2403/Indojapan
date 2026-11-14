import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEOHead = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
    }

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Indo Japan Language School in Jalandhar, Punjab provides Japanese language training and Japan study visa guidance.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description || '';
      document.head.appendChild(metaDescription);
    }

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonical || `https://indojapanlanguageschool.com${location.pathname}`;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', currentUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      linkCanonical.href = currentUrl;
      document.head.appendChild(linkCanonical);
    }

    // Scroll to top on page navigation
    window.scrollTo(0, 0);
  }, [title, description, canonical, location.pathname]);

  return null;
};
