import ContactIcon from './ContactIcon';
import {stops} from '../data/stages';
export default function Journey({zh}:{zh:boolean}) {
  return <section className="wrap section journey" id="experience">
    <p className="eyebrow">{zh?'个人履历':'Résumé'}</p><h1>{zh?'职业经历与教育背景':'Experience & education'}</h1>
    <nav className="section-links"><a href="#experience">{zh?'教育与经历':'Education & experience'}</a><a href="#credentials">{zh?'认证':'Credentials'}</a></nav>
    <ol>{stops.map(([id,year,en,cn,desc,summary])=><li key={id} id={id}><div className="logo-plate"><img src={'/assets/organizations/'+id+'.webp'} alt=""/></div><div><small>{year}</small><h2><a href={'/about/'+id+'/'+(zh?'?lang=zh':'')}>{zh?cn:en} <span aria-hidden="true">↗</span></a></h2><p>{zh?summary:desc}</p></div></li>)}</ol>
    <section id="credentials"><h2>{zh?'专业认证':'Credentials'}</h2><p>Google Cloud · Generative AI Leader<br/>Microsoft Certified · Azure Fundamentals</p><a className="text-link" href="https://www.linkedin.com/in/chonghuali/"><ContactIcon kind="linkedin"/>LinkedIn ↗</a></section>
  </section>;
}
