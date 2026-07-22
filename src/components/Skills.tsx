import { PORTFOLIO } from '../data/portfolio';
import { SectionHead } from './SectionHead';
import { Tag } from './ds/Tag';

export function Skills() {
  return (
    <section id='skills' className='py-24'>
      <div className='mx-auto max-w-[1200px] px-8'>
        <SectionHead
          idx='01'
          eyebrow='Skills'
          title='What I build with'
          blurb="A stack I've tuned over years of shipping, chosen for speed, types, and staying out of the way."
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {PORTFOLIO.skills.map((g, i) => (
            <div
              className='reveal'
              key={g.group}
              style={{ transitionDelay: i * 70 + 'ms' }}
            >
              <h4 className='mb-3.5 flex items-center gap-2 font-sans text-[15px] font-bold text-ink'>
                <span className='h-[7px] w-[7px] rounded-full bg-magenta' />
                {g.group}
              </h4>
              <div className='flex flex-wrap gap-2'>
                {g.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
