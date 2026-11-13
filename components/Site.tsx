'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { contact, copy, type Lang } from '../data/site';
import { findWork } from '../data/works';
import About from './About';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import WorkIndex from './WorkIndex';
import { Arrow, type SiteContext } from './ui';

export type View = 'home' | 'work' | 'project' | 'about' | 'not-found';

const readLang = (): Lang => (new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en');
const applyLang = (lang: Lang) => {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
};

// Page shell: skip link, header, the requested view and the contact footer.
// English is rendered at build time; ?lang=zh switches the copy in the browser.
export default function Site({ view, slug }: { view: View; slug?: string }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const sync = () => {
      const next = readLang();
      setLang(next);
      applyLang(next);
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const zh = lang === 'zh';
  const t = copy[lang];

  // Keep the chosen language on internal links; leave anchors and external URLs alone.
  const href = (path: string) => {
    if (!zh || !path.startsWith('/')) return path;
    const [base, hash] = path.split('#');
    return `${base}?lang=zh${hash ? `#${hash}` : ''}`;
  };

  const switchTo = (next: Lang) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    if (next === 'zh') url.searchParams.set('lang', 'zh');
    else url.searchParams.delete('lang');
    window.history.pushState({}, '', url);
    setLang(next);
    applyLang(next);
  };

  const site: SiteContext = { lang, zh, t, href };
  const work = view === 'project' && slug ? findWork(slug) : undefined;
  const inWork = view === 'work' || view === 'project';

  return (
    <div className="site" data-lang={lang}>
      <a className="skip" href="#main">{t.skip}</a>

      <header className="header">
        <div className="header__inner">
          <a className="brand" href={href('/')} aria-label={t.brandLabel}>
            <span className="brand__mark" aria-hidden="true" />
            {zh ? (
              <>
                <span>李崇华</span>
                <span className="brand__alt" lang="en">Chonghua Li</span>
              </>
            ) : (
              <span>Chonghua Li</span>
            )}
          </a>
          <div className="header__nav">
            <nav className="nav" aria-label={t.nav.label}>
              <a href={href('/work/')} aria-current={view === 'work' ? 'page' : inWork ? 'true' : undefined}>{t.nav.work}</a>
              <a href={href('/about/')} aria-current={view === 'about' ? 'page' : undefined}>{t.nav.about}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
            <div className="lang" role="group" aria-label={t.language}>
              {zh ? (
                <a href="./" lang="en" aria-label="Switch to English" onClick={switchTo('en')}>EN</a>
              ) : (
                <span aria-current="true">EN</span>
              )}
              {zh ? (
                <span aria-current="true" lang="zh-CN">中文</span>
              ) : (
                <a href="?lang=zh" lang="zh-CN" aria-label="切换为中文" onClick={switchTo('zh')}>中文</a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        {view === 'home' && <Home site={site} />}
        {view === 'work' && <WorkIndex site={site} />}
        {view === 'project' && work?.detail && <ProjectDetail site={site} work={work} />}
        {view === 'about' && <About site={site} />}
        {view === 'not-found' && (
          <section className="section page-intro page-intro--solo">
            <div className="wrap">
              <p className="eyebrow page-intro__eyebrow">404</p>
              <h1>{t.notFound.title}</h1>
              <p className="page-intro__lead">{t.notFound.text}</p>
              <div className="page-intro__actions">
                <a className="btn" href={href('/')}>
                  {t.notFound.home}
                  <Arrow>→</Arrow>
                </a>
                <a className="btn2" href={href('/work/')}>
                  {t.nav.work}
                  <Arrow>→</Arrow>
                </a>
                <a className="btn2" href={href('/about/')}>
                  {t.nav.about}
                  <Arrow>→</Arrow>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer" id="contact">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__intro">
              <p className="eyebrow footer__eyebrow">{t.footer.eyebrow}</p>
              <h2>{t.footer.title}</h2>
              <p className="footer__text">{t.footer.text}</p>
            </div>
            <ul className="footer__links" role="list">
              <li>
                <a href={contact.linkedin}>
                  <span className="footer__label">LinkedIn</span>
                  <span className="footer__hint">{contact.linkedinHandle} <Arrow>↗</Arrow></span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <span className="footer__label">{t.footer.email}</span>
                  <span className="footer__hint footer__hint--text">{t.footer.emailHint} <Arrow>→</Arrow></span>
                </a>
              </li>
              <li>
                <a href={contact.github}>
                  <span className="footer__label">GitHub</span>
                  <span className="footer__hint">{contact.githubHandle} <Arrow>↗</Arrow></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {t.footer.owner}</span>
            <span className="footer__tagline">{t.footer.tagline}</span>
            {zh ? (
              <a href="./" lang="en" onClick={switchTo('en')}>English</a>
            ) : (
              <a href="?lang=zh" lang="zh-CN" onClick={switchTo('zh')}>中文</a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
