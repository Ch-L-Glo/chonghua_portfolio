import { builds, cases, type WorkStatus } from '../data/works';
import { Arrow, Cover, LinkIcon, SectionHead, StatusBadge, isExternal, linkLabel, tagLine, type SiteContext } from './ui';

const statuses: WorkStatus[] = ['delivered', 'in-design', 'live', 'in-preparation'];

export default function WorkIndex({ site }: { site: SiteContext }) {
  const { lang, t, href } = site;
  const w = t.work;

  return (
    <>
      <section className="section page-intro">
        <div className="wrap page-intro__inner">
          <div className="page-intro__copy">
            <p className="eyebrow page-intro__eyebrow">{w.eyebrow}</p>
            <h1>{w.title}</h1>
            <p className="page-intro__lead">{w.intro}</p>
            <div className="page-intro__actions">
              <a className="btn2 btn2--stat" href="#cases">
                {w.cases}
                <span className="count">{cases.length}</span>
                <Arrow>↓</Arrow>
              </a>
              <a className="btn2 btn2--stat" href="#builds">
                {w.builds}
                <span className="count">{builds.length}</span>
                <Arrow>↓</Arrow>
              </a>
            </div>
          </div>
          <div className="aside">
            <p className="eyebrow aside__title">{w.statusKey}</p>
            <dl className="status-key">
              {statuses.map((status) => (
                <div key={status}>
                  <dt>
                    <span className={`dot dot--${status}`} aria-hidden="true" />
                    {t.status[status]}
                  </dt>
                  <dd>{w.statusNotes[status]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section cases" id="cases">
        <div className="wrap">
          <SectionHead num="A" title={w.cases} desc={w.casesDesc} />
          <div className="case-grid">
            {cases.map((work) => (
              <a className="case-card tile" href={href(`/work/${work.id}/`)} key={work.id}>
                <Cover work={work} lang={lang} />
                <StatusBadge status={work.status} t={t} />
                <h3>{work.title[lang]}</h3>
                <p className="case-card__q">{work.summary[lang]}</p>
                {work.detail && <p className="case-card__role">{work.detail[lang].role}</p>}
                <p className="case-card__tags">{tagLine(work, lang)}</p>
                <span className="case-card__more">
                  <span className="ulink-text">{t.read} <Arrow>→</Arrow></span>
                  {work.calculator && <span className="case-card__note">{w.demo}</span>}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section builds" id="builds">
        <div className="wrap">
          <SectionHead num="B" title={w.builds} desc={w.buildsDesc} />
          <div className="build-grid">
            {builds.map((work) => {
              const isPending = work.status === 'in-preparation';
              return (
                <article className="build" key={work.id}>
                  {work.cover ? (
                    <Cover work={work} lang={lang} />
                  ) : (
                    <div className="cover-pending">
                      <span>{w.coverPending[0]}</span>
                      <span>{w.coverPending[1]}</span>
                    </div>
                  )}
                  <div className="build__meta">
                    <StatusBadge status={work.status} t={t} />
                    {work.tags[lang].length > 0 && <span className="build__tags">{tagLine(work, lang)}</span>}
                  </div>
                  <h3>{work.title[lang]}</h3>
                  <p className={isPending ? 'build__summary build__summary--muted' : 'build__summary'}>{work.summary[lang]}</p>
                  {!isPending && work.links.length > 0 && (
                    <div className="build__links">
                      {work.links.map((link) => (
                        <a className="btn2 btn2--link" href={href(link.href)} key={link.kind}>
                          <LinkIcon kind={link.kind} />
                          {linkLabel(link, site)}
                          <Arrow>{isExternal(link.href) ? '↗' : '→'}</Arrow>
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
