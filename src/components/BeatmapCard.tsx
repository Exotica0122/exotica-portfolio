import { SiGithub } from '@icons-pack/react-simple-icons';
import type { Project, ProjectLink } from '../data/portfolio';
import { DemoIcon, DocsIcon, StatusIcon } from './icons/CustomIcons';

function linkIcon(kind: ProjectLink['kind']) {
  switch (kind) {
    case 'code':
      return <SiGithub size={17} aria-hidden="true" />;
    case 'demo':
      return <DemoIcon />;
    case 'docs':
      return <DocsIcon />;
  }
}

const RAMP = ['#650c51', '#974391', '#c25fb1', '#e58fc3', '#FFB7CE'];
const STATUS = {
  live: { label: 'RANKED', color: '#FFB7CE', icon: 'chevrons' },
  oss: { label: 'LOVED', color: '#FF6FA5', icon: 'heart' },
  shipped: { label: 'APPROVED', color: '#c25fb1', icon: 'check' },
  wip: { label: 'PENDING', color: '#c9b9c4', icon: 'clock' },
} as const;

const COVERS = [
  'linear-gradient(135deg,#2d1028 0%,#974391 100%)',
  'linear-gradient(135deg,#3d1838 0%,#841660 100%)',
  'linear-gradient(135deg,#650c51 0%,#d190d4 130%)',
  'linear-gradient(135deg,#2d1028 0%,#b0264e 110%)',
  'linear-gradient(135deg,#411a3a 0%,#974391 55%,#FFB7CE 150%)',
  'linear-gradient(135deg,#2d1028 0%,#650c51 100%)',
  'linear-gradient(135deg,#3d1838 0%,#c25fb1 130%)',
  'linear-gradient(135deg,#220c1f 0%,#841660 70%,#974391 120%)',
];

function ramp5(i: number) { return RAMP[Math.max(0, Math.min(4, i))]; }
function hashInt(str: string) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
function starColor(r: string) {
  const v = parseFloat(r);
  if (v < 3) return '#c25fb1';
  if (v < 4.5) return '#974391';
  if (v < 6) return '#FF6FA5';
  return '#FFB7CE';
}

function DiffDots({ rating }: { rating: string }) {
  const filled = Math.max(2, Math.min(5, Math.round(parseFloat(rating) - 1)));
  return (
    <div className="mb-2.5 flex gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="h-[7px] w-[7px] rounded-full" style={{ background: i < filled ? ramp5(i) : 'rgba(255,255,255,0.18)' }} />
      ))}
    </div>
  );
}

interface BeatmapCardProps {
  p: Project;
  index: number;
  layout: 'grid' | 'list';
}

export function BeatmapCard({ p, index, layout }: BeatmapCardProps) {
  const st = STATUS[p.status] ?? STATUS.wip;
  const h = hashInt(p.name);
  const plays = (parseFloat(p.rating) * 137 + (h % 90)) | 0;
  const playsStr = plays > 999 ? (plays / 1000).toFixed(1) + 'M' : plays + 'K';
  const favs = (parseFloat(p.rating) * 41 + (h % 60)) | 0;
  const cover = COVERS[index % COVERS.length];

  const star = (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs font-semibold text-plum shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
      style={{ background: starColor(p.rating) }}
    >
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
        <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
      </svg>
      {p.rating}
    </span>
  );
  const status = (
    <span
      className="inline-flex items-center gap-[5px] rounded-full border-[1.5px] bg-[rgba(20,8,18,0.5)] px-[9px] py-1 font-sans text-[10px] font-extrabold tracking-[0.1em] backdrop-blur-[4px]"
      style={{ color: st.color, borderColor: st.color }}
    >
      <StatusIcon name={st.icon} />
      {st.label}
    </span>
  );
  const stats = (
    <div className="flex items-center gap-3 font-mono text-xs text-muted-on-plum" aria-hidden="true">
      <span className="inline-flex items-center gap-1">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="opacity-85"><path d="M8 5v14l11-7z" /></svg>
        {playsStr}
      </span>
      <span className="inline-flex items-center gap-1">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="opacity-85">
          <path d="M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.7 5.4 4.5c2-.1 3.4 1 4.6 2.4C11.2 5.5 12.6 4.4 14.6 4.5 18 4.7 19.6 8.4 22 11.7 19.5 16.3 12 21 12 21Z" />
        </svg>
        {favs}
      </span>
    </div>
  );
  const mapper = (
    <div className="flex items-center gap-2 font-sans text-[12.5px] text-muted-on-plum">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] bg-gradient-to-br from-magenta to-pink font-sans text-[10px] font-extrabold text-plum">PA</span>
      <span>
        mapped by <b className="font-bold text-paper-on-plum">Peter An</b>
      </span>
    </div>
  );

  if (layout === 'list') {
    return (
      <div className="grid grid-cols-[148px_1fr_auto] items-center gap-5 rounded-lg border border-plum-border bg-plum p-3.5 transition-[translate,box-shadow] duration-200 hover:translate-x-[3px] hover:shadow-md max-[620px]:grid-cols-1">
        <div className="relative aspect-video max-w-[200px] overflow-hidden rounded-md p-2" style={{ background: cover }}>
          {p.image && (
            <img src={p.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(80% 90% at 80% 0%, rgba(255,183,206,0.25), transparent 60%)' }} />
          <span className="relative z-[1]">{status}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <h3 className="m-0 font-sans text-xl font-extrabold leading-[1.15] tracking-[-0.01em] text-paper-on-plum">{p.name}</h3>
            {star}
          </div>
          <p className="mt-1 font-mono text-[11.5px] text-muted-on-plum">{p.stack}</p>
          <div className="mt-3 flex items-center justify-between gap-4">
            {mapper}
            <DiffDots rating={p.rating} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-3 max-[620px]:flex-row max-[620px]:items-center max-[620px]:justify-between">
          {stats}
          <div className="flex gap-[7px]">
            {p.links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} ${l.kind}`}
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-plum-border bg-plum-raised text-paper-on-plum transition-[background,color,border-color,scale] duration-200 hover:scale-[1.06] hover:border-pink hover:bg-pink hover:text-plum hover:no-underline [&_svg]:h-4 [&_svg]:w-4"
              >
                {linkIcon(l.kind)}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border border-plum-border bg-plum shadow-sm transition-[translate,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-lg"
    >
      <div className="relative flex aspect-[16/8.4] flex-col justify-between overflow-hidden p-3.5" style={{ background: cover }}>
        {p.image && (
          <img src={p.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(90% 80% at 85% 8%, rgba(255,183,206,0.28), transparent 55%)' }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%]" style={{ background: 'linear-gradient(180deg, transparent, rgba(20,8,18,0.86))' }} />

        <div className="relative z-[1] flex items-start justify-between gap-2">
          {status}
          {star}
        </div>

        <div className="absolute right-3 bottom-3 z-[3] flex items-center gap-1.5">
          {p.links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} ${l.kind}`}
              className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border-none bg-pink text-plum transition-[scale,background] duration-200 hover:scale-[1.08] hover:bg-paper-on-plum hover:no-underline [&_svg]:h-[17px] [&_svg]:w-[17px]"
            >
              {linkIcon(l.kind)}
            </a>
          ))}
        </div>

        <div className="relative z-[1]">
          <DiffDots rating={p.rating} />
          <h3 className="m-0 font-sans text-xl font-extrabold leading-[1.15] tracking-[-0.01em] text-paper-on-plum">{p.name}</h3>
          <p className="mt-1 font-mono text-[11.5px] text-muted-on-plum">{p.stack}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-plum-raised px-3.5 py-3">
        {mapper}
        <div className="flex items-center gap-3">
          {stats}
          <span className="font-mono text-[11px] text-faint-on-plum">{p.year}</span>
        </div>
      </div>
    </article>
  );
}
