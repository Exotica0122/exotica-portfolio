import { useEffect, useState } from 'react';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { Footer } from './Footer';

/** Rect-based scroll reveal — IntersectionObserver was unreliable inside the
    design tool's preview iframe, so this stayed simple and framework-free. */
function useReveal() {
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) el.classList.add('in');
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    requestAnimationFrame(check);
    const t = setTimeout(check, 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

export function PortfolioApp() {
  // Starts at 'light' unconditionally so the server-rendered markup and the
  // client's first render agree (the server has no localStorage to read) —
  // reading the persisted value happens after mount instead, in the effect
  // below. The <head> script already stamps data-theme on <html> before
  // hydration so there's no flash of the wrong theme on the static chrome.
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('pa-theme');
      if (stored === 'dark' || stored === 'light') setTheme(stored);
    } catch {
      // storage unavailable — theme just won't persist across visits
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('pa-theme', theme);
    } catch {
      // storage unavailable — theme just won't persist across visits
    }
  }, [theme]);

  useReveal();

  const toggleTheme = () => setTheme((v) => (v === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero onPlum={false} />
        <hr className="border-t border-border" />
        <Skills />
        <hr className="border-t border-border" />
        <Projects />
        <hr className="border-t border-border" />
        <Experience />
        <hr className="border-t border-border" />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
