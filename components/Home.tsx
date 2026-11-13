import { Fragment } from 'react';
import { contact } from '../data/site';
import { credentials } from '../data/credentials';
import { experience } from '../data/experience';
import { toolkit } from '../data/skills';
import { homeCards, homeFeature, homePending, type Work } from '../data/works';
import { Arrow, Cover, KindBadge, Logo, SectionHead, StatusBadge, isExternal, linkLabel, tagLine, tagList, type SiteContext } from './ui';

// Where a card leads: its own case page, or else its demo (or first) link.
function cardHref(work: Work) {
  if (work.detail) return `/work/${work.id}/`;
  return (work.links.find((link) => link.kind === 'demo') ?? work.links[0])?.href ?? '/work/';
}

export default function Home({ site }: { site: SiteContext }) {
  const { lang, zh, t, href } = site;
  const h = t.home;
  const feature = homeFeature;

  return (
    <>
      <section className="section hero">
        <div className="wrap">
          <div className="hero__top">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">{h.eyebrow}</p>
              <h1 className="hero__title">
                {h.title.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </h1>
              <p className="hero__intro">{h.intro}</p>
              <div className="hero__actions">
                <a className="btn" href="#work">
                  {h.ctaWork}
                  <Arrow>↓</Arrow>
                </a>
                <a className="btn2" href={href('/about/')}>
                  {h.ctaResume}
                  <Arrow>→</Arrow>
                </a>
                <div className="hero__links">
                  <a className="ulink" href={contact.linkedin}>
                    <span>LinkedIn <Arrow>↗</Arrow></span>
                  </a>
                  <a className="ulink" href={contact.github}>
                    <span>GitHub <Arrow>↗</Arrow></span>
                  </a>
                </div>
              </div>
            </div>
            <figure className="portrait">
              <div className="portrait__frame">
                <img src="/assets/portrait/chonghua.webp" alt={h.portraitAlt} width={960} height={1440} fetchPriority="high" />
              </div>
              <figcaption>
                <span className="portrait__name">
                  {zh ? (
                    <>李崇华 <span lang="en">Chonghua Li</span></>
                  ) : (
                    <>Chonghua Li <span lang="zh-CN">李崇华</span></>
                  )}
                </span>
                <span className="portrait__place">{h.place}</span>
              </figcaption>
            </figure>
          </div>

          <dl className="facts">
            {h.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd lang={zh && fact.english ? 'en' : undefined}>
                  <span>{fact.main}</span>
                  <span>{fact.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="wrap">
          <SectionHead
            num="01"
            title={h.work.title}
            desc={h.work.desc}
            link={
              <a className="sec-head__link" href={href('/work/')}>
                {h.work.all}
                <Arrow>→</Arrow>
              </a>
            }
          />

          <a className="feature tile" href={href(`/work/${feature.id}/`)}>
            <div className="feature__media">
              <Cover work={feature} lang={lang} />
            </div>
            <div className="feature__body">
              <div className="badges">
                <KindBadge kind={feature.kind} t={t} />
                <StatusBadge status={feature.status} t={t} />
              </div>
              <h3>{feature.title[lang]}</h3>
              <p className="feature__q">{feature.summary[lang]}</p>
              {feature.detail && <p className="feature__ctx">{feature.detail[lang].context}</p>}
              {feature.feature && (
                <dl className="feature__facts">
                  <div>
                    <dt>{h.feature.role}</dt>
                    <dd>{feature.feature[lang].role}</dd>
                  </div>
                  <div>
                    <dt>{h.feature.output}</dt>
                    <dd>{feature.feature[lang].output}</dd>
                  </div>
                  <div>
                    <dt>{h.feature.focus}</dt>
                    <dd>{tagList(feature, lang)}</dd>
                  </div>
                </dl>
              )}
              <span className="feature__more">
                <span className="ulink-text">{t.read} <Arrow>→</Arrow></span>
                {feature.calculator && <span className="feature__note">{h.feature.demo}</span>}
              </span>
            </div>
          </a>

          <div className="cards">
            {homeCards.map((work) => (
              <article className="card" key={work.id}>
                <a className="card__link tile" href={href(cardHref(work))}>
                  <Cover work={work} lang={lang} />
                  <div className="badges">
                    <KindBadge kind={work.kind} t={t} />
                    <StatusBadge status={work.status} t={t} />
                  </div>
                  <h3>{work.title[lang]}</h3>
                  <p className="card__desc">{work.summary[lang]}</p>
                </a>
                {work.links.length > 0 ? (
                  <div className="card__links">
                    {work.links.map((link) => (
                      <a className="ulink" href={href(link.href)} key={link.kind}>
                        <span>{linkLabel(link, site)} <Arrow>{isExternal(link.href) ? '↗' : '→'}</Arrow></span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="card__tags">{tagLine(work, lang)}</p>
                )}
              </article>
            ))}
          </div>

          <ul className="pending" role="list">
            {homePending.map((work) => (
              <li className="pending__item" key={work.id}>
                <div className="pending__text">
                  <p className="pending__title">{work.title[lang]}</p>
                  <p className="pending__note">{work.summary[lang]}</p>
                </div>
                <StatusBadge status={work.status} t={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section approach">
        <div className="wrap">
          <SectionHead num="02" title={h.approach.title} desc={h.approach.desc} narrowDesc hideDescOnMobile />
          <ol className="steps" role="list">
            {h.approach.steps.map((step, index) => (
              <li key={step.title}>
                <span className="steps__num" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section xp">
        <div className="wrap">
          <SectionHead
            num="03"
            title={h.experience.title}
            desc={h.experience.desc}
            narrowDesc
            hideDescOnMobile
            link={
              <a className="sec-head__link" href={href('/about/')}>
                <span className="only-wide">{h.experience.all}</span>
                <span className="only-narrow">{h.experience.allShort}</span>
                <Arrow>→</Arrow>
              </a>
            }
          />

          <ol className="xp-list" role="list">
            {experience.map((item) => (
              <li className="xp-item" key={item.id}>
                <p className="xp-item__year">{item.years[lang]}</p>
                <div className="xp-item__body">
                  <div className="xp-row">
                    <div className="xp-org">
                      <Logo org={item.id} />
                      <div className="xp-org__text">
                        <h3 lang={zh && item.orgIsEnglish ? 'en' : undefined}>{item.org[lang]}</h3>
                        <p>{(item.roleShort ?? item.role)[lang]}</p>
                      </div>
                    </div>
                    <p className="xp-row__sum">{item.summary[lang]}</p>
                  </div>
                  {item.internship && (
                    <div className="intern">
                      <p className="intern__meta">
                        {h.experience.internshipLead && <span className="only-wide">{h.experience.internshipLead}</span>}
                        {h.experience.internship}
                        {h.experience.internshipRest && <span className="only-wide">{h.experience.internshipRest}</span>}
                        {' · '}
                        {item.internship.periodShort[lang]}
                      </p>
                      <div className="xp-row">
                        <div className="xp-org">
                          <Logo org={item.internship.logo} />
                          <div className="xp-org__text">
                            <h4>{item.internship.org[lang]}</h4>
                            <p>{item.internship.role[lang]}</p>
                          </div>
                        </div>
                        <p className="xp-row__sum">{item.internship.summary[lang]}</p>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section creds">
        <div className="wrap">
          <SectionHead
            num="04"
            title={h.credentials.title}
            titleRest={h.credentials.titleRest}
            link={
              <a className="sec-head__link" href={href('/about/#skills')}>
                {h.credentials.all}
                <Arrow>→</Arrow>
              </a>
            }
          />

          <div className="cred-grid">
            {credentials.map((credential) => (
              <a className="cred tile" key={credential.url} href={credential.url} target="_blank" rel="noopener noreferrer">
                <span className="cred__badge">
                  <img src={credential.image} alt="" loading="lazy" decoding="async" />
                </span>
                <div className="cred__text">
                  <span className="cred__issuer" lang={zh ? 'en' : undefined}>{credential.issuer}</span>
                  <h3 lang={zh ? 'en' : undefined}>{credential.name}</h3>
                  <span className="cred__verify">{t.verify} <Arrow>↗</Arrow></span>
                </div>
                <span className="cred__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <div className="toolkit">
            <p className="eyebrow toolkit__label">{h.credentials.toolkit}</p>
            <ul className="chips" role="list" lang={zh ? 'en' : undefined}>
              {toolkit.map((tool) => (
                <li className="chip" key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
