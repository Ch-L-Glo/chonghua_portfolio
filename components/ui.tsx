import type { ReactNode } from 'react';
import type { Copy, Lang } from '../data/site';
import type { Work, WorkKind, WorkLink, WorkStatus } from '../data/works';

// What every view needs from the shell: language, copy and a link helper that keeps ?lang=zh.
export type SiteContext = { lang: Lang; zh: boolean; t: Copy; href: (path: string) => string };

export const Arrow = ({ children }: { children: ReactNode }) => <span aria-hidden="true">{children}</span>;

export const isExternal = (url: string) => /^https?:/.test(url);

export function KindBadge({ kind, t }: { kind: WorkKind; t: Copy }) {
  return <span className={kind === 'build' ? 'badge badge--solid' : 'badge'}>{t.kind[kind]}</span>;
}

export function StatusBadge({ status, t }: { status: WorkStatus; t: Copy }) {
  return (
    <span className={status === 'in-preparation' ? 'badge badge--plain' : 'badge'}>
      <span className={`dot dot--${status}`} aria-hidden="true" />
      {t.status[status]}
    </span>
  );
}

export function Cover({ work, lang, className = 'cover', eager = false }: { work: Work; lang: Lang; className?: string; eager?: boolean }) {
  return (
    <img
      className={className}
      src={work.cover}
      alt={work.coverAlt?.[lang] ?? ''}
      width={1600}
      height={1000}
      loading={eager ? undefined : 'lazy'}
      decoding="async"
    />
  );
}

const logoSizes: Record<string, [number, number]> = {
  emerge: [278, 280],
  kpmg: [405, 162],
  nus: [540, 248],
  'roland-berger': [405, 200],
  mitsubishi: [540, 158],
  ecust: [255, 260],
};

export function Logo({ org }: { org: string }) {
  const [width, height] = logoSizes[org];
  return (
    <span className="logo" data-org={org}>
      <img src={`/assets/organizations/${org}.webp`} alt="" width={width} height={height} loading="lazy" decoding="async" />
    </span>
  );
}

const iconPaths: Record<WorkLink['kind'], string> = {
  github: 'M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5',
  figma: 'M4.5 1.5v13M11.5 1.5v13M1.5 4.5h13M1.5 11.5h13',
  demo: 'M5 3.5v9l7-4.5-7-4.5Z',
};

export function LinkIcon({ kind }: { kind: WorkLink['kind'] }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[kind]} />
    </svg>
  );
}

export const linkLabel = (link: WorkLink, site: SiteContext) => link.label?.[site.lang] ?? site.t.links[link.kind];

// Tags as a slash-separated line: "Power BI / KPI design / Data visualisation".
export const tagLine = (work: Work, lang: Lang) => work.tags[lang].join(' / ');

// Tags as a sentence-style list for the Focus field: "Power BI, KPI design, data visualisation".
// Later English tags start lowercase unless they open with an acronym or a mixed-case name.
export function tagList(work: Work, lang: Lang) {
  const tags = work.tags[lang];
  if (lang === 'zh') return tags.join('、');
  return tags
    .map((tag, index) => (index > 0 && /^[A-Z][a-z]+(\s|$)/.test(tag) ? tag[0].toLowerCase() + tag.slice(1) : tag))
    .join(', ');
}

export function SectionHead({
  num,
  title,
  titleRest,
  desc,
  narrowDesc = false,
  hideDescOnMobile = false,
  link,
}: {
  num: string;
  title: string;
  titleRest?: string;
  desc?: string;
  narrowDesc?: boolean;
  hideDescOnMobile?: boolean;
  link?: ReactNode;
}) {
  const descClass = ['sec-head__desc', narrowDesc && 'sec-head__desc--narrow', hideDescOnMobile && 'only-wide'].filter(Boolean).join(' ');
  return (
    <div className="sec-head">
      <div className="sec-head__main">
        <span className="sec-head__num">{num}</span>
        <div className="sec-head__text">
          <h2>
            {title}
            {titleRest && <span className="only-wide">{titleRest}</span>}
          </h2>
          {desc && <p className={descClass}>{desc}</p>}
        </div>
      </div>
      {link}
    </div>
  );
}
