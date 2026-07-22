export type ProjectStatus = 'live' | 'oss' | 'shipped' | 'wip';

export interface ProjectLink {
  kind: 'code' | 'demo' | 'docs';
  href: string;
}

export interface Project {
  name: string;
  stack: string;
  year: string;
  status: ProjectStatus;
  statusLabel: string;
  rating: string;
  desc: string;
  links: ProjectLink[];
  image?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface ExperienceEntry {
  start: string;
  end: string;
  now?: boolean;
  role: string;
  co: string;
  bullets: string[];
  tags: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  href?: string;
}

export interface Social {
  label: string;
  icon: 'github' | 'linkedin' | 'mail' | 'instagram';
  href: string;
}

export interface CodeToken {
  t: string;
  k?: boolean;
  s?: boolean;
}

export interface HeroStat {
  num: string;
  u?: string;
  lbl: string;
}

export const PORTFOLIO = {
  person: {
    name: 'Peter An',
    initials: 'PA',
    role: 'Full-stack engineer',
    tagline: 'ships tested code.',
    taglines: [
      'ships tested code.',
      'owns features end to end.',
      'codes with rhythm.',
      'levels up fast.',
    ],
    status: 'Available for work',
    years: 3,
    bio: "I'm a full-stack engineer who cares about quality and well-tested software. With how fast AI can churn out code these days, I'd rather slow down and get the details right, the same care osu players put into timing and rhythm. I like owning a feature front to back, and I pick up new stacks quickly with a growth mindset.",
    code: [
      { t: 'const', k: true },
      { t: ' craft ' },
      { t: '=' },
      { t: ' "software + timing"', s: true },
      { t: ';' },
    ] as CodeToken[],
    stats: [
      { num: '3', u: 'yr', lbl: 'Building products' },
      { num: '3', u: '', lbl: 'Projects shipped' },
      { num: '5', u: '', lbl: 'Languages used' },
      { num: '2', u: '', lbl: 'Certifications' },
    ] as HeroStat[],
  },

  skills: [
    {
      group: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Go', 'PHP', 'Python'],
    },
    {
      group: 'Frontend',
      items: ['React', 'Next.js', 'Astro', 'Tailwind', 'HTML/CSS'],
    },
    {
      group: 'Backend',
      items: ['NestJS', 'Express.js', 'FastAPI', 'Go', 'Node.js'],
    },
    {
      group: 'Cloud & infra',
      items: ['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'GitLab CI/CD'],
    },
    { group: 'Databases & messaging', items: ['MySQL', 'PostgreSQL', 'Kafka'] },
    {
      group: 'Dev environment',
      items: ['Neovim', 'Emacs', 'Ghostty', 'Tmux', 'Cursor', 'VS Code'],
    },
    { group: 'AI tools', items: ['ChatGPT', 'Claude', 'Cursor', 'OpenCode'] },
  ] as SkillGroup[],

  // status → Badge tone: live=success, oss=magenta, shipped=neutral, wip=warning
  projects: [
    {
      name: 'Manna',
      stack: 'Express · Next.js · React',
      year: '2026',
      status: 'live',
      statusLabel: 'Live',
      rating: '6.7',
      desc: 'A Duolingo-style quiz app for learning the Bible, with bite-sized lessons and streaks to keep you coming back.',
      links: [{ kind: 'demo', href: 'https://www.mannaquiz.co.nz/' }],
      image: '/images/manna.png',
    },
    {
      name: 'fromis_9 Bias Matcher',
      stack: 'React · React Router · Tailwind',
      year: '2026',
      status: 'live',
      statusLabel: 'Live',
      rating: '5.8',
      desc: 'A quiz that matches you to your fromis_9 bias based on your answers, built as a fun project for the fandom.',
      links: [
        {
          kind: 'code',
          href: 'https://github.com/Exotica0122/fromis_9-bias-matcher',
        },
        { kind: 'demo', href: 'https://fromis-9-bias-matcher.vercel.app/' },
      ],
      image: '/images/fromis_9.png',
    },
    {
      name: 'Typefast',
      stack: 'React · Supabase',
      year: '2024',
      status: 'shipped',
      statusLabel: 'Shipped',
      rating: '5.2',
      desc: 'A typing speed test that tracks your WPM and accuracy over time, with Supabase storing results behind the scenes.',
      links: [
        { kind: 'code', href: 'https://github.com/Exotica0122/Typefast' },
        { kind: 'demo', href: 'https://typefast-exotica.vercel.app/' },
      ],
      image: '/images/typefast.png',
    },
  ] as Project[],

  experience: [
    {
      start: '2025',
      end: 'Present',
      now: true,
      role: 'Intermediate Full-Stack Engineer',
      co: 'IDEXX',
      bullets: [
        'Rewrote a poorly architected service in Go, improving maintainability and performance while reducing on-call incidents.',
        'Resolved a timezone calculation bug affecting 800K appointments, about 20% of total volume.',
        'Owned a domain end-to-end: designed REST APIs and coordinated cross-team feature delivery.',
        'Led design discussions and technical initiatives to improve reliability, performance, and pay down tech debt.',
      ],
      tags: ['Go', 'REST APIs', 'System Design', 'AWS', 'NestJS'],
    },
    {
      start: '2023',
      end: '2025',
      role: 'Full-Stack Engineer',
      co: 'IDEXX / ezyVet',
      bullets: [
        'Resolved Twilio UK regulatory compliance issues by shipping a business-information onboarding feature.',
        'Fixed rate-limiting issues for partner integrations using Lambda and SQS queue-based ingestion.',
        'Mentored engineers on AWS and cloud infrastructure; moved across teams to provide frontend expertise.',
      ],
      tags: ['PHP', 'AWS', 'Lambda', 'SQS', 'Twilio'],
    },
    {
      start: '2022',
      end: '2023',
      role: 'Full-Stack Developer Intern',
      co: 'ezyVet',
      bullets: [
        'Extracted API documentation from the monolith into a standalone service with an automated build pipeline and S3 hosting.',
        'Resolved a critical production bug blocking invoice unapproval and financial transactions.',
        'Built a data-export automation tool (React, FastAPI), cutting export time by 20 minutes.',
        'Developed an integration test suite for the monolith to catch pipeline errors.',
      ],
      tags: ['React', 'FastAPI', 'AWS', 'PHP'],
    },
  ] as ExperienceEntry[],

  certifications: [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      issued: '11/2023',
      expires: '11/2026',
      href: 'https://www.credly.com/badges/744cc198-6d12-41c1-bf2f-1dd46f32f703',
    },
    {
      name: 'AZ-900: Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      issued: '06/2021',
      href: 'https://www.credly.com/badges/c16857b4-b945-4166-965c-df8665b6fe98',
    },
  ] as CertificationEntry[],

  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/Exotica0122' },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/peteransoftware',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
      href: 'https://www.instagram.com/exotica_dev',
    },
    { label: 'Email', icon: 'mail', href: 'mailto:peteransoftware@gmail.com' },
  ] as Social[],
};
