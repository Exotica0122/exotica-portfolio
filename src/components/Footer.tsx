import { PORTFOLIO } from '../data/portfolio';

export function Footer() {
  return (
    <footer className='border-t border-border py-[34px]'>
      <div className='mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8'>
        <span className='text-[13px] text-ink-faint'>
          © 2026 {PORTFOLIO.person.name}, coded with{' '}
          <span className='text-pink-text-safe'>♥</span> &amp; good timing
        </span>
      </div>
    </footer>
  );
}
