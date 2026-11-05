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
  return <section className="wrap section journey"><h1>Play</h1><p>{zh?'两个可动手体验的例子：查看本站的实现，或调整需求，观察库存能支撑多久。':'Two working examples: inspect the code behind this portfolio, or test how demand changes inventory coverage.'}</p><a className="text-link" href="https://github.com/Ch-L-Glo">{zh?'浏览我的 GitHub':'Explore my GitHub'} ↗</a>
    <Project zh={zh} entry={{cover:'/assets/projects/portfolio.svg',title:zh?'双语网站的构建与发布':'Publishing a bilingual portfolio',description:zh?'在 GitHub 提交一次，就能构建并发布中英文页面。源码展示了页面结构与项目资料的组织方式。':'A single change in GitHub builds and publishes the English and Chinese site. The source shows how the pages and project records fit together.',github:'https://github.com/Ch-L-Glo/chonghua_portfolio',site:zh?'/?lang=zh':'/'}}/>
    <Project zh={zh} entry={{cover:'/assets/projects/inventory.svg',title:zh?'库存覆盖月数计算器':'Inventory coverage calculator',description:zh?'改变库存或月需求，观察库存可以维持几个月。使用模拟数据。':'Change stock levels and monthly demand to see how long inventory lasts, using illustrative inputs.',site:'/work/management-analytics/'+(zh?'?lang=zh':'')+'#calculator'}}/>
  </section>;
}
