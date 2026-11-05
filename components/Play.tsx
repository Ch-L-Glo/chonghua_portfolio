import type { ReactNode } from 'react';
type Entry = {cover:string;title:string;description:string;github?:string;figma?:string;site?:string};
function Project({entry,zh}:{entry:Entry;zh:boolean}) {
  const links:ReactNode[]=[];
  for(const [label,url] of [['GitHub',entry.github],['Figma',entry.figma],[zh?'打开作品':'Open project',entry.site]]) {
    if(url) links.push(<a className="text-link" href={url} key={label}>{label} ↗</a>);
  }
  return <article className="play-card"><img src={entry.cover} alt=""/><div><h2>{entry.title}</h2><p>{entry.description}</p><div className="section-links">{links}</div></div></article>;
}
export default function Play({zh}:{zh:boolean}) {
  return <section className="wrap section journey"><h1>Play</h1><p>{zh?'可以打开、试用和查看源码的个人作品。':'Personal builds you can explore, try and inspect.'}</p><a className="text-link" href="https://github.com/Ch-L-Glo">{zh?'浏览我的 GitHub':'Explore my GitHub'} ↗</a>
    <Project zh={zh} entry={{cover:'/assets/projects/portfolio.svg',title:zh?'双语个人网站':'A bilingual portfolio',description:zh?'用 Next.js 与 TypeScript 构建，从 GitHub 自动发布到 Cloudflare Pages。':'Built with Next.js and TypeScript, with GitHub powering automatic deployment to Cloudflare Pages.',github:'https://github.com/Ch-L-Glo/chonghua_portfolio',site:zh?'/?lang=zh':'/'}}/>
    <Project zh={zh} entry={{cover:'/assets/projects/inventory.svg',title:zh?'库存覆盖月数计算器':'Inventory coverage calculator',description:zh?'改变库存或月需求，观察库存可以维持几个月。使用模拟数据。':'Change stock levels and monthly demand to see how long inventory lasts, using illustrative inputs.',site:'/work/management-analytics/'+(zh?'?lang=zh':'')+'#calculator'}}/>
  </section>;
}
