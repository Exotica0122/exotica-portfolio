import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import { PORTFOLIO, type Social } from '../data/portfolio';
import { Card } from './ds/Card';
import { Eq, LinkedinIcon, MailIcon } from './icons/CustomIcons';

function socialIcon(icon: Social['icon']) {
  switch (icon) {
    case 'github':
      return <SiGithub size={18} aria-hidden="true" />;
    case 'instagram':
      return <SiInstagram size={18} aria-hidden="true" />;
    case 'linkedin':
      return <LinkedinIcon />;
    case 'mail':
      return <MailIcon />;
  }
}

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <Card surface="plum" padding={56} radius="rounded-2xl" className="reveal relative overflow-hidden">
          <div className="absolute right-10 top-10 opacity-90">
            <Eq lg />
          </div>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pink">End screen</span>
          <h2 className="mt-4 font-sans text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-paper-on-plum">
            Let&apos;s build something with good timing.
          </h2>
          <p className="mt-[18px] max-w-[46ch] text-[17px] text-muted-on-plum">
            I&apos;m open to full-stack roles, freelance builds, and the occasional ambitious side quest. Reach out, I reply fast.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3">
            {PORTFOLIO.socials.map((s) => {
              const isExternal = !s.href.startsWith('mailto:');
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-[9px] rounded-md border border-plum-border bg-plum-raised px-[18px] py-[11px] font-sans text-sm font-semibold text-paper-on-plum transition-colors hover:border-pink hover:bg-pink hover:text-ink hover:no-underline"
                >
                  {socialIcon(s.icon)}
                  {s.label}
                </a>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
