import { useEffect, useRef, useState } from 'react';
import { PORTFOLIO } from '../data/portfolio';
import { Button } from './ds/Button';
import { ArrowIcon } from './icons/CustomIcons';
import { cx } from '../lib/cx';

const person = PORTFOLIO.person;

interface HeroProps {
  onPlum: boolean;
}

export function Hero({ onPlum }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglines = person.taglines?.length ? person.taglines : [person.tagline];
  const [tagIdx, setTagIdx] = useState(0);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rot: ReturnType<typeof setInterval> | undefined;
    let moveBound: ((e: MouseEvent) => void) | undefined;
    let started = false;

    function countUp() {
      root!.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const raw = el.getAttribute('data-count')!;
        const target = parseFloat(raw);
        const decimals = (raw.split('.')[1] || '').length;
        if (reduce) {
          el.textContent = target.toFixed(decimals);
          return;
        }
        const dur = 1200;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * e).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals);
        };
        requestAnimationFrame(tick);
      });
    }

    function startIntro() {
      if (started) return;
      started = true;
      setPlayed(true);
      countUp();
      if (taglines.length > 1 && !reduce) {
        rot = setInterval(() => setTagIdx((i) => (i + 1) % taglines.length), 2800);
      }
    }

    if (!reduce) {
      moveBound = (e: MouseEvent) => {
        const r = root!.getBoundingClientRect();
        const cx0 = (e.clientX - r.left) / r.width - 0.5;
        const cy0 = (e.clientY - r.top) / r.height - 0.5;
        root!.querySelectorAll<HTMLElement>('[data-par]').forEach((el) => {
          const d = parseFloat(el.getAttribute('data-par')!);
          el.style.transform = `translate(${(cx0 * d).toFixed(1)}px, ${(cy0 * d).toFixed(1)}px)`;
        });
      };
      root.addEventListener('mousemove', moveBound);
    }

    if (window.__appReady) startIntro();
    else window.addEventListener('app-ready', startIntro, { once: true });

    return () => {
      if (rot) clearInterval(rot);
      if (moveBound) root.removeEventListener('mousemove', moveBound);
      window.removeEventListener('app-ready', startIntro);
    };
  }, [taglines.length]);

  // .reveal / .reveal-down come from global.css as plain CSS transitions
  // (not Tailwind utilities) — see the comment there for why: Tailwind v4's
  // standalone translate/scale/rotate properties don't mix reliably with
  // transform-based transitions/animations, which is what made this section
  // feel off. `played` flips once, permanently, so .in just stays on.
  const revealIn = played && 'in';

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative flex min-h-[min(88vh,820px)] items-center overflow-hidden pb-24 pt-16"
    >
      {/* decorative approach orbits (osu motif) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <span
          data-par="-26"
          className="absolute -right-[60px] top-[2%] h-[340px] w-[340px] rounded-full border-[1.5px] border-[color:color-mix(in_srgb,var(--magenta)_22%,transparent)] will-change-transform"
        >
          <i
            className={cx(
              'absolute -inset-[1.5px] rounded-full border-[1.5px] border-magenta opacity-0',
              played && 'animate-orbit-pulse',
            )}
          />
        </span>
        <span
          data-par="18"
          className="absolute right-[30%] top-[58%] h-[200px] w-[200px] rounded-full border-[1.5px] border-[color:color-mix(in_srgb,var(--pink)_26%,transparent)] will-change-transform"
        >
          <i
            className={cx(
              'absolute -inset-[1.5px] rounded-full border-[1.5px] border-pink opacity-0',
              played && 'animate-orbit-pulse [animation-delay:1200ms]',
            )}
          />
        </span>
        <span
          data-par="-40"
          className="absolute bottom-[12%] left-[4%] h-[120px] w-[120px] rounded-full border-[1.5px] border-[color:color-mix(in_srgb,var(--magenta)_22%,transparent)] will-change-transform"
        />
        <span data-par="30" className="absolute right-[22%] top-[20%] h-3 w-3 rounded-full bg-pink will-change-transform" />
        <span data-par="-22" className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-magenta will-change-transform" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <div className="grid items-center gap-14 md:grid-cols-[1.25fr_0.95fr]">
          <div className="relative z-[1] min-w-0">
            <div
              className={cx(
                'reveal-down mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-border bg-card px-[15px] py-2 font-sans text-[13.5px] font-semibold text-ink-muted',
                revealIn,
              )}
              style={{ transitionDelay: '60ms' }}
            >
              <span className="h-[9px] w-[9px] animate-hs-ping rounded-full bg-success" />
              {person.status}
              <span className="text-ink-faint">·</span>
              <span className="font-bold text-ink">{person.role}</span>
            </div>

            <h1 className="m-0 font-sans text-[clamp(38px,5.4vw,64px)] font-extrabold leading-[1.0] tracking-[-0.035em] text-ink">
              <span className={cx('reveal-down block', revealIn)} style={{ transitionDelay: '120ms' }}>
                {person.name}
              </span>
              <span className="relative mt-1.5 block overflow-hidden">
                {taglines.map((t, i) => {
                  const isOn = played && i === tagIdx;
                  const isPrev = played && i === (tagIdx - 1 + taglines.length) % taglines.length;
                  return (
                    <span key={t} className={cx('tag-word', isOn && 'is-on', isPrev && 'is-prev')}>
                      {t}
                    </span>
                  );
                })}
                <span className="invisible block">{taglines.reduce((a, b) => (b.length > a.length ? b : a), '')}</span>
              </span>
            </h1>

            <p
              className={cx('reveal mt-[26px] max-w-[50ch] text-[16.5px] leading-[1.62] text-ink-muted', revealIn)}
              style={{ transitionDelay: '260ms' }}
            >
              {person.bio}
            </p>

            <div
              className={cx(
                'reveal mt-[26px] inline-flex items-center rounded-md border border-border bg-card px-[15px] py-[11px] font-mono text-[13.5px] text-ink-muted',
                revealIn,
              )}
              style={{ transitionDelay: '360ms' }}
              aria-hidden="true"
            >
              {/* Rendered as one continuous inline run — the tokens already carry
                  their own spacing (e.g. " craft ", " \"...\""), so a flex `gap`
                  on the container (as this used to have) added an extra, uneven
                  1px on top of that at every boundary. */}
              <span className="whitespace-pre">
                {person.code.map((c, i) => (
                  <span key={i} className={c.k ? 'text-magenta' : c.s ? 'text-pink-text-safe' : ''}>
                    {c.t}
                  </span>
                ))}
              </span>
              <span className="ml-1 inline-block h-4 w-2 animate-caret bg-pink-text-safe" />
            </div>

            <div className={cx('reveal mt-[30px] flex flex-wrap gap-3', revealIn)} style={{ transitionDelay: '460ms' }}>
              <Button size="lg" variant={onPlum ? 'accent' : 'primary'} iconRight={<ArrowIcon />} onClick={() => { location.hash = '#work'; }}>
                View work
              </Button>
              <Button size="lg" variant="secondary" onClick={() => { location.hash = '#contact'; }}>
                Get in touch
              </Button>
            </div>
          </div>

          {/* signature feature panel — a "score HUD" console */}
          <div data-par="-12" className={cx('reveal relative z-[1] min-w-0', revealIn)} style={{ transitionDelay: '360ms' }}>
            <div className="overflow-hidden rounded-2xl border border-plum-border bg-plum px-5 pb-2 pt-5 shadow-lg [background:radial-gradient(120%_90%_at_88%_-6%,color-mix(in_srgb,var(--magenta)_30%,transparent),transparent_58%),var(--plum)]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex gap-[5px]" aria-hidden="true">
                  <i className="h-[9px] w-[9px] rounded-full bg-[color:color-mix(in_srgb,var(--danger)_70%,var(--plum))]" />
                  <i className="h-[9px] w-[9px] rounded-full bg-[color:color-mix(in_srgb,var(--warning)_70%,var(--plum))]" />
                  <i className="h-[9px] w-[9px] rounded-full bg-[color:color-mix(in_srgb,var(--success)_70%,var(--plum))]" />
                </span>
                <span className="font-mono text-xs text-muted-on-plum">peter@exotica ~ %</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-pink/[0.14] px-2 py-1 font-sans text-[9.5px] font-extrabold tracking-[0.14em] text-pink">
                  <i className="h-1.5 w-1.5 animate-hs-ping rounded-full bg-pink" />
                  LIVE
                </span>
              </div>

              <img
                src="/images/profile.jpg"
                alt="Peter An"
                className="my-4 h-[320px] w-full rounded-xl border border-plum-border object-cover"
              />

              <div className="grid grid-cols-2 border-t border-plum-border">
                {person.stats.map((s, i) => (
                  <div
                    key={i}
                    className={cx(
                      'px-1.5 py-4',
                      i % 2 === 0 && 'border-r border-plum-border pl-0.5',
                      i < 2 && 'border-b border-plum-border',
                    )}
                  >
                    <div className="font-sans text-[34px] font-extrabold leading-none tracking-[-0.03em] text-paper-on-plum tabular-nums">
                      <span data-count={s.num}>0</span>
                      {s.u && <span className="ml-px text-lg text-pink">{s.u}</span>}
                    </div>
                    <div className="mt-[7px] text-xs font-medium text-muted-on-plum">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
