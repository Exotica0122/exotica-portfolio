import { PORTFOLIO } from '../data/portfolio';
import { SectionHead } from './SectionHead';
import { BeatmapCard } from './BeatmapCard';

export function Projects() {
  return (
    <section id='work' className='py-24'>
      <div className='mx-auto max-w-[1200px] px-8'>
        <SectionHead
          idx='02'
          eyebrow='Projects'
          title="Things I've shipped"
          blurb="A slice of what I've built: open-source tools, production apps, and a few experiments still finding their tempo."
        />
        <div className='reveal mb-6 flex justify-end'>
          <span className='font-mono text-[11.5px] text-ink-muted'>
            {PORTFOLIO.projects.length} project
            {PORTFOLIO.projects.length === 1 ? '' : 's'}
          </span>
        </div>
        <div className='reveal grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3'>
          {PORTFOLIO.projects.map((p, index) => (
            <BeatmapCard key={p.name} p={p} index={index} layout='grid' />
          ))}
        </div>
      </div>
    </section>
  );
}
