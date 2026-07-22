import type { ReactNode } from 'react';
import { Eq } from './icons/CustomIcons';

interface SectionHeadProps {
  idx: string;
  eyebrow: string;
  title: string;
  blurb?: ReactNode;
}

export function SectionHead({ idx, eyebrow, title, blurb }: SectionHeadProps) {
  return (
    <div className="reveal mb-10 max-w-[640px]">
      <span className="inline-flex items-center gap-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
        <span className="font-mono font-medium text-pink-text-safe">{idx}</span>
        {eyebrow}
        <Eq />
      </span>
      <h2 className="mt-3.5 font-sans text-[40px] font-bold leading-[1.18] tracking-[-0.01em] text-ink">{title}</h2>
      {blurb && <p className="mt-3 max-w-[56ch] font-sans text-[17px] text-ink-muted">{blurb}</p>}
    </div>
  );
}
