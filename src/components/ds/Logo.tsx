interface LogoProps {
  channel?: 'none' | 'software' | 'studio';
  surface?: 'light' | 'dark';
  /** Overrides which bar-color tint the mark itself uses, independent of
   *  `surface` — e.g. pin the mark to always match the loading screen's
   *  colors while the wordmark text still adapts to the real surface for
   *  contrast. Defaults to `surface`. */
  markSurface?: 'light' | 'dark';
  wordmark?: boolean;
  layout?: 'horizontal' | 'stacked';
  size?: number;
}

/** Exotica logo lockup — the "Aperture Bars" mark, optional wordmark, and channel badge. */
export function Logo({ channel = 'none', surface = 'light', markSurface, wordmark = true, layout = 'horizontal', size = 48 }: LogoProps) {
  const onDark = surface === 'dark';
  const markOnDark = (markSurface ?? surface) === 'dark';
  const top = markOnDark ? '#d190d4' : '#974391';
  const mid = '#FFB7CE';
  const bottom = markOnDark ? '#7e2066' : '#650c51';
  const wordColor = onDark ? 'var(--paper-on-plum)' : 'var(--ink)';
  const subColor = onDark ? (channel === 'software' ? '#d190d4' : '#FFB7CE') : 'var(--pink-text-safe)';
  const subLabel = channel === 'software' ? 'Software' : channel === 'studio' ? 'Studio' : null;
  const badgeSize = size * 0.34;

  return (
    <span
      className="inline-flex items-center"
      style={{ flexDirection: layout === 'stacked' ? 'column' : 'row', gap: layout === 'stacked' ? size * 0.28 : size * 0.42 }}
    >
      <span className="relative inline-flex flex-none">
        <svg width={size} height={size} viewBox="0 0 140 140" role="img" aria-label="Exotica" className="block">
          <rect x="23" y="16" width="100" height="26" rx="7" fill={top} />
          <path d="M 30 64 L 90 64 L 81 76 L 30 76 Z" fill={mid} stroke={mid} strokeWidth="14" strokeLinejoin="round" />
          <rect x="23" y="98" width="100" height="26" rx="7" fill={bottom} />
        </svg>
        {subLabel && (
          // The 0.28/0.22 corner offsets are a fraction of the BADGE's own
          // size (badgeSize), not the mark's — applying them to `size`
          // directly (as this previously did) pushed the badge ~3x further
          // outside the mark than intended, leaving it looking unattached.
          <span
            className="absolute inline-flex items-center justify-center rounded-[28%] bg-paper shadow-[0_2px_8px_rgba(45,16,40,0.35)]"
            style={{ right: -badgeSize * 0.28, bottom: -badgeSize * 0.22, width: badgeSize, height: badgeSize }}
          >
            <svg width={badgeSize * 0.64} height={badgeSize * 0.64} viewBox="0 0 20 20">
              {channel === 'software' ? (
                <>
                  <path d="M 7 5 L 2 10 L 7 15" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 13 5 L 18 10 L 13 15" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <>
                  <circle cx="10" cy="10" r="7" fill="none" stroke="var(--ink)" strokeWidth="2" />
                  <circle cx="10" cy="10" r="2.6" fill="var(--ink)" />
                </>
              )}
            </svg>
          </span>
        )}
      </span>
      {wordmark && (
        <span className="flex flex-col leading-none" style={{ gap: size * 0.06 }}>
          <span className="font-sans font-extrabold tracking-[-0.02em]" style={{ fontSize: size * 0.62, color: wordColor }}>
            Exotica
          </span>
          {subLabel && (
            <span
              className="font-sans font-bold uppercase tracking-[0.22em]"
              style={{ fontSize: Math.max(9, size * 0.2), color: subColor }}
            >
              {subLabel}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
