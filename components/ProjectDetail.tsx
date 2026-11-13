import { detailWorks, type Work } from '../data/works';
import Calculator from './Calculator';
import { Arrow, Cover, KindBadge, LinkIcon, StatusBadge, isExternal, tagList, type SiteContext } from './ui';

const sectionKeys = ['context', 'role', 'method', 'outcome'] as const;

export default function ProjectDetail({ site, work }: { site: SiteContext; work: Work }) {
  const { lang, t, href } = site;
  const d = t.detail;
  const detail = work.detail![lang];
  const index = detailWorks.indexOf(work);
  const previous = detailWorks[index - 1];
  const next = detailWorks[index + 1];
  const ownPath = `/work/${work.id}/`;

  return (
    <>
      <section className="section detail-top">
        <div className="wrap">
          <nav className="crumbs" aria-label={d.breadcrumb}>
            <a href={href('/work/')}>
              <span><Arrow>←</Arrow> {d.all}</span>
            </a>
            <span aria-hidden="true">/</span>
            <span>{t.work.cases}</span>
          </nav>

          <div className="detail-head">
            <div className="detail-head__copy">
              <div className="badges">
                <KindBadge kind={work.kind} t={t} />
                <StatusBadge status={work.status} t={t} />
              </div>
              <h1>{work.title[lang]}</h1>
              <p className="detail-head__q">{work.summary[lang]}</p>
              {work.links.length > 0 && (
                <div className="detail-head__actions">
                  {work.links.map((link) => {
                    // A demo that lives on this page is reached by its anchor alone.
                    const onPage = link.href.startsWith(`${ownPath}#`);
                    const target = onPage ? link.href.slice(ownPath.length) : href(link.href);
                    if (link.kind === 'demo') {
                      return (
                        <a className="btn" href={target} key={link.kind}>
                          <LinkIcon kind="demo" />
                          {d.tryDemo}
                          <Arrow>{onPage ? '↓' : isExternal(link.href) ? '↗' : '→'}</Arrow>
                        </a>
                      );
                    }
                    return (
                      <a className="btn2 btn2--source" href={target} key={link.kind}>
                        <LinkIcon kind={link.kind} />
                        {link.kind === 'github' ? d.source : t.links[link.kind]}
                        <Arrow>{isExternal(link.href) ? '↗' : '→'}</Arrow>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            <dl className="factsheet">
              <div>
                <dt>{d.type}</dt>
                <dd>{d.typeCase}</dd>
              </div>
              {work.facts && (
                <>
                  <div>
                    <dt>{d.role}</dt>
                    <dd>{work.facts[lang].role}</dd>
                  </div>
                  <div>
                    <dt>{d.with}</dt>
                    <dd>{work.facts[lang].with}</dd>
                  </div>
                </>
              )}
              <div>
                <dt>{d.focus}</dt>
                <dd>{tagList(work, lang)}</dd>
              </div>
            </dl>
          </div>

          <figure className="exhibit">
            <Cover work={work} lang={lang} className="cover cover--wide" eager />
            <figcaption>
              <span className="exhibit__label">{d.exhibit}</span>
              <span>{detail.caption}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section detail-body">
        <div className="wrap detail-body__inner">
          {sectionKeys.map((key, position) => (
            <div className="dsec" key={key}>
              <div className="dsec__head">
                <span className="dsec__num">{`0${position + 1}`}</span>
                <h2>{d.sections[key]}</h2>
              </div>
              {key === 'method' && work.flow ? (
                <div className="dsec__content">
                  <p className="dsec__text">{detail[key]}</p>
                  <ol className="flow" role="list">
                    {work.flow[lang].map((step, stepIndex) => (
                      <li key={step}>
                        {stepIndex > 0 && <span className="flow__arrow" aria-hidden="true">→</span>}
                        <span className="flow__step">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <p className="dsec__text dsec__content">{detail[key]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {work.calculator && <Calculator t={t} />}

      <section className="section detail-end">
        <div className="wrap">
          <div className="case-note">
            <h2 className="eyebrow">{d.about}</h2>
            <p>
              {d.aboutLead}
              {lang === 'en' ? ' ' : ''}
              {detail.note}
            </p>
          </div>

          <nav className="pager" aria-label={d.more}>
            {previous && (
              <a className="pager__link tile" href={href(`/work/${previous.id}/`)}>
                <span className="pager__label"><Arrow>←</Arrow> {d.previous}</span>
                <h3>{previous.title[lang]}</h3>
              </a>
            )}
            {next && (
              <a className="pager__link pager__link--next tile" href={href(`/work/${next.id}/`)}>
                <span className="pager__label">{d.next} <Arrow>→</Arrow></span>
                <h3>{next.title[lang]}</h3>
              </a>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}
