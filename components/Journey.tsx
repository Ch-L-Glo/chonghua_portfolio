const stops = [
  ['ecust','2013–2017','East China University of Science and Technology','华东理工大学','Mechanical automation · Bachelor of Engineering','机械自动化 · 工学学士'],
  ['mitsubishi','2017–2021','Mitsubishi Electric Automation','三菱电机自动化','Business Consultant · Manufacturing operations, digital factories and process improvement.','业务顾问 · 制造运营、数字工厂规划与流程优化。'],
  ['nus','2021–2022','National University of Singapore','新加坡国立大学','MTech in Business Analytics · Machine learning, predictive analytics and data governance. Semi-finalist in the KPMG business case competition.','商业分析技术硕士 · 学习机器学习、预测分析和数据治理，进入 KPMG 商业案例竞赛半决赛。'],
  ['kpmg','2022–2026','KPMG Singapore','毕马威新加坡','Senior Associate, Infrastructure Advisory · Digital strategy, management reporting and risk workflows.','基础设施咨询高级顾问 · 数字化战略、管理看板与风险管理工作流。'],
  ['emerge','2026–','Emerge Bioscience','Emerge Bioscience','Global data initiatives · Connecting regional data, supply-chain planning and reporting.','全球数据项目 · 对接跨区域数据，推进供应链规划与管理报告。'],
];
export default function Journey({zh}:{zh:boolean}) {
  return <section className="wrap section journey" id="experience">
    <p className="eyebrow">{zh?'个人履历':'Résumé'}</p><h1>{zh?'从工程到企业数据':'From engineering to enterprise data'}</h1>
    <nav className="section-links"><a href="#experience">{zh?'教育与经历':'Education & experience'}</a><a href="#credentials">{zh?'认证':'Credentials'}</a><a href="#outside">{zh?'工作之外':'Out of office'}</a></nav>
    <ol>{stops.map(([id,year,en,cn,desc,summary])=><li key={id}><div className="logo-plate"><img src={'/assets/organizations/'+id+'.webp'} alt=""/></div><div><small>{year}</small><h2>{zh?cn:en}</h2><p>{zh?summary:desc}</p></div></li>)}</ol>
    <section id="credentials"><h2>{zh?'专业认证':'Credentials'}</h2><p>Google Cloud · Generative AI Leader<br/>Microsoft Certified · Azure Fundamentals</p><a className="text-link" href="https://www.linkedin.com/in/chonghuali/">LinkedIn ↗</a></section>
    <section id="outside"><h2>{zh?'工作之外':'Out of office'}</h2><p>{zh?'工作之外，我喜欢踢开技术文档，换个角度理解问题。比如足球越位：如果把接球人往前移动一步，判断会如何改变？这也是我喜欢交互设计的原因。':'Away from work, I like exploring how games explain rules. Football’s offside rule is a favourite design question: move the receiver one step forward and what changes? It’s the sort of idea I enjoy turning into an interactive experiment.'}</p></section>
  </section>;
}
