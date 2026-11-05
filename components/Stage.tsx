import { stops } from '../data/stages';

const notes: Record<string, [string,string]> = {
  ecust: ['My undergraduate training was in mechanical automation. I later took that engineering background into manufacturing consulting at Mitsubishi Electric.', '本科专业为机械自动化。毕业后，我在三菱电机自动化从事制造业业务咨询，将工程背景带入工厂规划与生产流程分析。'],
  mitsubishi: ['I worked on digital factory planning and process improvement, connecting production requirements with automation solutions.', '参与数字工厂规划与流程改善，从生产现场的业务需求出发，梳理可通过自动化改进的环节。'],
  nus: ['My coursework covered business statistics, customer analytics and predictive modelling. I also reached the semi-finals of the KPMG business case competition.', '课程涵盖商业统计、客户分析与预测建模。在读期间，我也参加了毕马威商业案例竞赛，进入半决赛。'],
  kpmg: ['I worked with infrastructure teams to define performance indicators, develop management dashboards and translate risk-review processes into digital workflows.', '在基础设施咨询项目中，与业务团队一起定义绩效指标、开发管理看板，并把风险审核流程转化为数字化工作流。'],
  emerge: ['My work focuses on planning a shared data platform across regions, aligning metric definitions and translating supply-chain questions into data requirements.', '当前工作聚焦跨区域数据平台规划，包括协调各地指标口径，把供应链可视化需求拆解为数据和系统要求。'],
};
export default function Stage({id,zh}:{id:string;zh:boolean}) {
  const stage = stops.find(([key]) => key === id);
  if (!stage) return null;
  const [,years,en,cn,summary,summaryZh] = stage;
  const query = zh ? '?lang=zh' : '';
  return <article className="wrap section journey stage">
    <a className="text-link" href={'/about/'+query+'#'+id}>← {zh?'返回个人履历':'Back to résumé'}</a>
    <header className="stage-head"><div className="logo-plate"><img src={'/assets/organizations/'+id+'.webp'} alt=""/></div><div><small>{years}</small><h1>{zh?cn:en}</h1></div></header>
    <p className="large-copy">{id==='nus' ? (zh?'商业分析技术硕士':'Master of Technology in Business Analytics') : (zh?summaryZh:summary)}</p>
    <p>{notes[id][zh?1:0]}</p>
    {id==='nus' && <section className="internship"><div><p className="eyebrow">{zh?'在读期间实习':'Internship during graduate study'}</p><img src="/assets/organizations/roland-berger.webp" alt="Roland Berger"/></div><div><small>{zh?'2021 年 12 月 – 2022 年 1 月':'December 2021 – January 2022'}</small><h2>{zh?'罗兰贝格 · 商业分析实习生':'Roland Berger · Business Analyst Intern'}</h2><p>{zh?'参与汽车行业研究与竞争对标分析，为咨询团队整理市场和竞争对手资料。':'Supported automotive industry research and competitive benchmarking for the consulting team.'}</p></div></section>}
    {id==='emerge' && <a className="text-link" href={'/work/global-data-hub/'+query}>{zh?'查看全球数据平台案例':'Explore the global data platform case'} ↗</a>}
    {id==='kpmg' && <a className="text-link" href={'/work/management-analytics/'+query}>{zh?'查看管理分析案例':'Explore the management analytics case'} ↗</a>}
  </article>;
}
