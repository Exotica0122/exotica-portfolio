import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent';
  onRemove?: () => void;
  children?: ReactNode;
}

export function Tag({ tone = 'neutral', onRemove, className, children, ...rest }: TagProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border border-border font-sans text-[13px] font-medium',
        onRemove ? 'py-[5px] pl-3 pr-[7px]' : 'px-3 py-[5px]',
        tone === 'accent' ? 'bg-info-bg text-pink-text-safe' : 'bg-card text-ink',
        className,
      )}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-none bg-transparent text-ink-faint"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}
