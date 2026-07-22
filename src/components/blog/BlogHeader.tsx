import { useEffect, useState } from 'react';
import { Logo } from '../ds/Logo';
import { ThemeToggle } from '../ThemeToggle';

/** Standalone header for blog pages, which sit outside PortfolioApp's React
    tree — it manages its own theme state (mirroring PortfolioApp's) rather
    than receiving it as a prop. The inline script in PageShell.astro already
    stamps data-theme on <html> before hydration, so there's no flash. */
export function BlogHeader() {
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

  const toggleTheme = () => setTheme((v) => (v === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/[0.82] backdrop-blur-[10px] backdrop-saturate-[1.6]">
      <div className="mx-auto flex h-[66px] max-w-[1200px] items-center justify-between px-8">
        <a href="/" aria-label="Exotica Software home" className="inline-flex items-center gap-3 text-ink no-underline">
          <Logo channel="software" surface={theme === 'dark' ? 'dark' : 'light'} markSurface="dark" size={32} />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1.5">
          <a href="/#top" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Home
          </a>
          <a href="/blog" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Blog
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>
      </div>
    </header>
  );
}
