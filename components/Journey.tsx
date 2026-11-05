import Skills from './Skills';
import { credentials } from '../data/credentials';
import {stops} from '../data/stages';
export default function Journey({zh}:{zh:boolean}) {
  return <section className="wrap section journey" id="experience">
    <p className="eyebrow">{zh?'个人履历':'Résumé'}</p><h1>{zh?'职业经历与教育背景':'Experience & education'}</h1>
    <nav className="section-links resume-nav" aria-label={zh ? '履历章节' : 'Résumé sections'}><a href="#experience">{zh?'教育与经历':'Education & experience'}</a><a href="#skills">{zh ? '技能与工具' : 'Skills & tools'}</a><a href="#credentials">{zh?'认证':'Credentials'}</a></nav>
    <ol>{stops.map(([id,year,en,cn,desc,summary])=><li key={id} id={id}><div className="logo-plate"><img src={'/assets/organizations/'+id+'.webp'} alt=""/></div><div><small>{year}</small><h2><a href={'/about/'+id+'/'+(zh?'?lang=zh':'')}>{zh?cn:en} <span aria-hidden="true">↗</span></a></h2><p>{zh?summary:desc}</p></div></li>)}</ol>
    <Skills zh={zh} />
    <section id="credentials" className="resume-section" aria-labelledby="credentials-title">
      <h2 id="credentials-title">{zh ? '专业认证' : 'Credentials'}</h2>
      <div className="credential-grid">
        {credentials.map((credential) => (
          <a className="credential-card" key={credential.url} href={credential.url}
            target="_blank" rel="noopener noreferrer">
            <div className="credential-badge">
              <img src={credential.image} alt="" loading="lazy" />
            </div>
            <div className="credential-body">
            <p className="credential-issuer">{credential.issuer}</p>
            <h3>{credential.name}</h3>
            <span className="credential-verify">{zh ? '查看证书' : 'View credential'} <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  </section>;
}
