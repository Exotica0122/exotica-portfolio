// Genuinely custom (non-brand) icons: decorative glyphs and generic pictograms
// with no logo to license. Brand marks (GitHub, Instagram, ...) come straight
// from @icons-pack/react-simple-icons at each call site instead of living
// here — the one exception is LinkedIn, hand-drawn below because Simple
// Icons doesn't ship it (pulled from the library after a takedown request).

export function LinkedinIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.3H5.5V9.7h2.8v8.6ZM6.9 8.5a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3Zm11.4 9.8h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H9.7V9.7h2.7v1.2h.04a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3v4.6Z" />
    </svg>
  );
}

export function MailIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function DemoIcon({ className = 'h-[17px] w-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M14 4h6v6M20 4 9 15M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function DocsIcon({ className = 'h-[17px] w-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}

export function ArrowIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Rhythm equalizer glyph — a quiet nod to timing, used throughout as a section marker. */
export function Eq({ lg = false }: { lg?: boolean }) {
  return (
    <span className={lg ? 'inline-flex h-[26px] items-end gap-1' : 'inline-flex h-[18px] items-end gap-[3px]'} aria-hidden="true">
      <i className={cxBar(lg, 'h-[55%]')} style={{ background: 'var(--bar-a)' }} />
      <i className={cxBar(lg, 'h-full')} style={{ background: 'var(--bar-b)' }} />
      <i className={cxBar(lg, 'h-[72%]')} style={{ background: 'var(--bar-c)' }} />
    </span>
  );
}

function cxBar(lg: boolean, heightClass: string) {
  return `block rounded-sm ${lg ? 'w-1' : 'w-[3px]'} ${heightClass}`;
}

/** Beatmap ranked-status glyphs — decorative, not brand marks. */
export function StatusIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'heart') {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
        <path d="M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.7 5.4 4.5c2-.1 3.4 1 4.6 2.4C11.2 5.5 12.6 4.4 14.6 4.5 18 4.7 19.6 8.4 22 11.7 19.5 16.3 12 21 12 21Z" />
      </svg>
    );
  }
  if (name === 'check') {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" {...common}>
        <path d="m20 6-11 11-5-5" />
      </svg>
    );
  }
  if (name === 'clock') {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" {...common}>
      <path d="m6 17 5-5-5-5M13 17l5-5-5-5" />
    </svg>
  );
}
