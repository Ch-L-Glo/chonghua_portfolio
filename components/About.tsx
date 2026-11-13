import { credentials } from '../data/credentials';
import { experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { findWork } from '../data/works';
import { Arrow, Logo, SectionHead, type SiteContext } from './ui';

export default function About({ site }: { site: SiteContext }) {
  const { lang, zh, t, href } = site;
  const a = t.about;
  const toc = [
    ['#experience', a.experience],
    ['#skills', a.skills],
    ['#credentials', a.credentials],
  ];

  return (
    <>
      <section className="section page-intro">
        <div className="wrap page-intro__inner">
          <div className="page-intro__copy">
            <p className="eyebrow page-intro__eyebrow">{a.eyebrow}</p>
            <h1>{a.title}</h1>
            <p className="page-intro__lead">{a.intro}</p>
          </div>
          <nav className="aside" aria-label={a.toc}>
            <p className="eyebrow aside__title">{a.toc}</p>
            {toc.map(([target, label], index) => (
              <a className="toc__link" href={target} key={target}>
                <span>
                  <span className="toc__num">{`0${index + 1}`}</span>
                  {label}
                </span>
                <Arrow>↓</Arrow>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section resume" id="experience">
        <div className="wrap">
          <SectionHead num="01" title={a.experience} desc={a.experienceDesc} />
          <ol className="xpf-list" role="list">
            {experience.map((item) => {
              const related = (item.cases ?? []).map((id) => findWork(id)).filter(Boolean);
              return (
                <li className="xpf-item" id={item.id} key={item.id}>
                  <div className="xpf-item__when">
                    <p>{item.years[lang]}</p>
                    <p>{a.type[item.type]}</p>
                  </div>
                  <div className="xpf-item__body">
                    <div className="xpf-row">
                      <div className="xpf-org">
                        <Logo org={item.id} />
                        <div>
                          <h3 lang={zh && item.orgIsEnglish ? 'en' : undefined}>{item.org[lang]}</h3>
                          <p>{item.role[lang]}</p>
                        </div>
                      </div>
                      <div className="xpf-detail">
                        <p>{item.detail[lang]}</p>
                        {related.length > 0 && (
                          <div className="xpf-links">
                            {related.map((work) => (
                              <a className="ulink" href={href(`/work/${work.id}/`)} key={work.id}>
                                <span>{a.caseLink}{work.title[lang]} <Arrow>→</Arrow></span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {item.internship && (
                      <div className="xpf-intern">
                        <p className="xpf-intern__meta">
                          <span>{a.internship}</span> · {item.internship.period[lang]}
                        </p>
                        <div className="xpf-row">
                          <div className="xpf-org">
                            <Logo org={item.internship.logo} />
                            <div>
                              <h4>{item.internship.org[lang]}</h4>
                              <p>{item.internship.role[lang]}</p>
                            </div>
                          </div>
                          <p className="xpf-intern__sum">{item.internship.summary[lang]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section resume" id="skills">
        <div className="wrap">
          <SectionHead num="02" title={a.skills} />
          <dl className="skills">
            {skillGroups.map((group) => (
              <div key={group.name.en}>
                <dt>{group.name[lang]}</dt>
                <dd lang={zh ? 'en' : undefined}>
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section resume resume--last" id="credentials">
        <div className="wrap">
          <SectionHead num="03" title={a.credentials} desc={a.credentialsDesc} />
          <div className="credf-grid">
            {credentials.map((credential) => (
              <a className="credf tile" key={credential.url} href={credential.url} target="_blank" rel="noopener noreferrer">
                <div className="credf__badge">
                  <img src={credential.image} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="credf__body">
                  <p className="credf__issuer" lang={zh ? 'en' : undefined}>{credential.issuer}</p>
                  <h3 lang={zh ? 'en' : undefined}>{credential.name}</h3>
                  <p className="credf__verify">
                    <span>{t.verify}</span>
                    <Arrow>↗</Arrow>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
