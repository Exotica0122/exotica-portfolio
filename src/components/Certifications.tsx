import { PORTFOLIO } from '../data/portfolio';
import { SectionHead } from './SectionHead';
import { Card } from './ds/Card';
import { Badge } from './ds/Badge';
import { StatusIcon } from './icons/CustomIcons';

function isActive(expires?: string) {
  if (!expires) return true;
  const [month, year] = expires.split('/').map(Number);
  const expiry = new Date(year, month, 1);
  return expiry.getTime() > Date.now();
}

export function Certifications() {
  return (
    <section id='certifications' className='py-24'>
      <div className='mx-auto max-w-[1200px] px-8'>
        <SectionHead
          idx='04'
          eyebrow='Certifications'
          title='On paper'
          blurb='Formal recognition to back up the hands-on experience.'
        />
        <div className='reveal grid gap-4 sm:grid-cols-2'>
          {PORTFOLIO.certifications.map((c, i) => {
            const active = isActive(c.expires);
            return (
              <Card
                key={c.name}
                className='flex items-start justify-between gap-4'
                style={{ transitionDelay: i * 70 + 'ms' }}
              >
                <div>
                  <h3 className='m-0 font-sans text-[16px] font-bold text-ink'>
                    {c.href ? (
                      <a
                        href={c.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-ink hover:text-magenta hover:underline'
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <p className='mt-1 font-sans text-[13.5px] text-ink-muted'>
                    {c.issuer}
                  </p>
                  <div className='mt-2.5 font-mono text-[12.5px] text-ink-muted'>
                    {c.issued}
                    {c.expires && <> – {c.expires}</>}
                  </div>
                </div>
                <Badge tone={active ? 'success' : 'neutral'}>
                  <StatusIcon name={active ? 'check' : 'clock'} />
                  {active ? 'Active' : 'Expired'}
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
