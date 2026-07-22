import { PORTFOLIO } from '../data/portfolio';
import { SectionHead } from './SectionHead';
import { Tag } from './ds/Tag';

export function Experience() {
  return (
    <section id='experience' className='py-24'>
      <div className='mx-auto max-w-[1200px] px-8'>
        <SectionHead
          idx='03'
          eyebrow='Experience'
          title="Where I've worked"
          blurb='Three years at IDEXX and ezyVet, starting as an intern and growing into ownership of full domains, from REST APIs to cross-team feature delivery.'
        />
        <div className='reveal flex flex-col'>
          {PORTFOLIO.experience.map((x, i) => (
            <div
              key={i}
              className='grid grid-cols-1 gap-2.5 border-t border-border py-[26px] first:border-t last:border-b sm:grid-cols-[168px_1fr] sm:gap-8'
            >
              <div className='pt-[3px] font-mono text-[13px] text-ink-muted'>
                {x.start} –{' '}
                {x.now ? (
                  <span className='text-pink-text-safe'>{x.end}</span>
                ) : (
                  x.end
                )}
              </div>
              <div>
                <h3 className='m-0 font-sans text-[19px] font-bold text-ink'>
                  {x.role}{' '}
                  <span className='font-bold text-magenta'>· {x.co}</span>
                </h3>
                <ul className='mt-2.5 max-w-[62ch] list-disc space-y-1 pl-[1.1em] text-[14.5px] leading-[1.55] text-ink-muted marker:text-border-strong'>
                  {x.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className='mt-3.5 flex flex-wrap gap-[7px]'>
                  {x.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
