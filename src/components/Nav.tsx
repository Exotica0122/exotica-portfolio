import { Logo } from './ds/Logo';
import { Button } from './ds/Button';
import { ThemeToggle } from './ThemeToggle';

interface NavProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/[0.82] backdrop-blur-[10px] backdrop-saturate-[1.6]">
      <div className="mx-auto flex h-[66px] max-w-[1200px] items-center justify-between px-8">
        <a href="#top" aria-label="Exotica Software home" className="inline-flex items-center gap-3 text-ink no-underline">
          {/* markSurface pins the mark's bar tint to match the loading screen
              exactly; surface stays theme-adaptive so the wordmark text keeps
              proper contrast against the nav's own (theme-flipping) background. */}
          <Logo channel="software" surface={theme === 'dark' ? 'dark' : 'light'} markSurface="dark" size={32} />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1.5">
          <a href="#work" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Work
          </a>
          <a href="#skills" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Skills
          </a>
          <a href="#experience" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Experience
          </a>
          <a href="#certifications" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Certifications
          </a>
          <a href="/blog" className="hidden rounded-sm px-3 py-2 font-sans text-sm font-semibold text-ink-muted transition-colors hover:bg-card hover:text-ink hover:no-underline md:inline-block">
            Blog
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button size="sm" variant="primary" onClick={() => { location.hash = '#contact'; }}>
            Let&apos;s talk
          </Button>
        </nav>
      </div>
    </header>
  );
}
