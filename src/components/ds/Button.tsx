import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const SIZE: Record<ButtonSize, string> = {
  sm: 'gap-1.5 px-3.5 py-2 text-[13px] rounded-sm',
  md: 'gap-2 px-5 py-[11px] text-sm rounded-md',
  lg: 'gap-2.5 px-6.5 py-3.5 text-[15.5px] rounded-md',
};

const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-magenta text-white hover:bg-magenta-dark',
  secondary: 'bg-card text-ink border border-border-strong hover:bg-paper',
  ghost: 'bg-transparent text-magenta hover:bg-info-bg',
  accent: 'bg-pink text-ink hover:bg-[#ffa3c1]',
  danger: 'bg-danger text-white hover:bg-[#8f1d3f]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cx(
        full ? 'flex w-full' : 'inline-flex',
        'items-center justify-center font-sans font-semibold leading-none',
        'transition-[background,translate] duration-150 active:translate-y-px',
        'disabled:cursor-not-allowed disabled:opacity-45',
        !disabled && 'cursor-pointer',
        SIZE[size],
        VARIANT[variant],
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
