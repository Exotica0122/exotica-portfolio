import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

export type BadgeTone = 'neutral' | 'accent' | 'magenta' | 'success' | 'warning' | 'danger';
export type BadgeVariant = 'soft' | 'solid';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  children?: ReactNode;
}

const TONE: Record<BadgeTone, Record<BadgeVariant, string>> = {
  neutral: { soft: 'bg-paper text-ink-muted border-border-strong', solid: 'bg-ink text-white border-transparent' },
  accent: { soft: 'bg-info-bg text-pink-text-safe border-transparent', solid: 'bg-pink text-ink border-transparent' },
  magenta: { soft: 'bg-info-bg text-magenta border-transparent', solid: 'bg-magenta text-white border-transparent' },
  success: { soft: 'bg-success-bg text-success border-transparent', solid: 'bg-success text-white border-transparent' },
  warning: { soft: 'bg-warning-bg text-warning border-transparent', solid: 'bg-warning text-white border-transparent' },
  danger: { soft: 'bg-danger-bg text-danger border-transparent', solid: 'bg-danger text-white border-transparent' },
};

export function Badge({ tone = 'neutral', variant = 'soft', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-[3px]',
        'font-sans text-[11.5px] font-semibold leading-snug tracking-[0.02em]',
        TONE[tone][variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
