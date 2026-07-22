import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import { cx } from '../../lib/cx';

export type CardSurface = 'card' | 'white' | 'plum';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  surface?: CardSurface;
  elevated?: boolean;
  padding?: number;
  radius?: string;
  interactive?: boolean;
  children?: ReactNode;
}

const SURFACE: Record<CardSurface, string> = {
  card: 'bg-card border-border text-ink',
  white: 'bg-pure border-border text-ink',
  plum: 'bg-plum border-plum-border text-paper-on-plum',
};

export function Card({
  surface = 'card',
  elevated = false,
  padding = 24,
  radius = 'rounded-xl',
  interactive = false,
  className,
  style,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        'border transition-[box-shadow,translate] duration-200',
        SURFACE[surface],
        radius,
        elevated && 'shadow-md',
        interactive && 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
      style={{ padding, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
