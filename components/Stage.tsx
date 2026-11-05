import { stops } from '../data/stages';

const notes: Record<string, [string,string]> = {
  ecust: ['Studying mechanical automation gave me a starting point for understanding equipment and production processes. My first consulting work took those questions onto the factory floor.', '学习机械自动化让我从设备和生产流程入手理解工厂。毕业后，我在三菱电机的咨询工作中继续研究这些现场问题。'],
  mitsubishi: ['In digital factory planning, I worked from production requirements to the process changes an automation proposal would require.', '在数字工厂规划中，我从生产需求出发，梳理自动化方案需要配合哪些现场流程调整。'],
  nus: ['I studied how to use business statistics, customer analytics and predictive models to evaluate business questions. I also reached the semi-finals of the KPMG business case competition.', '学习重点是如何运用商业统计、客户分析和预测模型回答经营问题。在读期间，我也参加了毕马威商业案例竞赛，进入半决赛。'],
  kpmg: ['Two recurring questions shaped my work: how management should interpret project performance and who should act on a reported risk. I helped teams define KPIs, build dashboards and design the review workflow.', '项目里反复出现两个问题：管理层如何判断项目表现，风险上报后又由谁处理。我参与定义指标、开发管理看板，并设计审核流程。'],
  emerge: ['I help define what a regional inventory report should measure, which system supplies each figure and who resolves discrepancies. These decisions form the scope of the shared data platform.', '我参与确认跨区域库存报告应衡量什么、每项数字由哪个系统提供，以及差异由谁处理。这些决定构成共享数据平台的建设范围。'],
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
