// Résumé timeline, most recent first. Study sits in the same list as work.
// `summary` is the one-liner on the home page; `detail` is the paragraph on /about/.
// The ids double as anchors (/about/#kpmg) and as logo file names in public/assets/organizations.

import type { Localized } from './site';

export type ExperienceId = 'emerge' | 'kpmg' | 'nus' | 'mitsubishi' | 'ecust';

export type Internship = {
  logo: string;
  period: Localized;
  periodShort: Localized;
  org: Localized;
  role: Localized;
  summary: Localized;
};

export type Experience = {
  id: ExperienceId;
  type: 'work' | 'education';
  years: Localized;
  org: Localized;
  orgIsEnglish?: boolean;
  role: Localized;
  roleShort?: Localized;
  summary: Localized;
  detail: Localized;
  cases?: string[];
  internship?: Internship;
};

export const experience: Experience[] = [
  {
    id: 'emerge',
    type: 'work',
    years: { en: '2026 – Now', zh: '2026 – 至今' },
    org: { en: 'Emerge Bioscience', zh: 'Emerge Bioscience' },
    orgIsEnglish: true,
    role: { en: 'Supply-chain data', zh: '供应链数据' },
    summary: {
      en: 'Planning how regional teams report inventory and demand together.',
      zh: '和各地区团队一起规划库存与需求报表。',
    },
    detail: {
      en: 'I help define what a regional inventory report should measure, which system supplies each figure and who resolves discrepancies. These decisions form the scope of the shared data platform.',
      zh: '我参与确认跨区域库存报告应衡量什么、每项数字由哪个系统提供，以及差异由谁处理。这些决定构成共享数据平台的建设范围。',
    },
    cases: ['global-data-hub'],
  },
  {
    id: 'kpmg',
    type: 'work',
    years: { en: '2022 – 2026', zh: '2022 – 2026' },
    org: { en: 'KPMG Singapore', zh: '毕马威新加坡' },
    role: { en: 'Senior Associate, Infrastructure Advisory', zh: '基础设施咨询高级顾问' },
    summary: {
      en: 'Designed performance reports and workflows for reviewing risks.',
      zh: '设计经营看板，梳理风险上报、审核和跟进流程。',
    },
    detail: {
      en: 'Two recurring questions shaped my work: how management should interpret project performance and who should act on a reported risk. I helped teams define KPIs, build dashboards and design the review workflow.',
      zh: '项目里反复出现两个问题：管理层如何判断项目表现，风险上报后又由谁处理。我参与定义指标、开发管理看板，并设计审核流程。',
    },
    cases: ['management-analytics', 'risk-workflow'],
  },
  {
    id: 'nus',
    type: 'education',
    years: { en: '2021 – 2022', zh: '2021 – 2022' },
    org: { en: 'National University of Singapore', zh: '新加坡国立大学' },
    role: { en: 'Master of Technology in Business Analytics', zh: '商业分析技术硕士' },
    roleShort: { en: 'MTech, Business Analytics', zh: '商业分析技术硕士' },
    summary: {
      en: 'Machine learning, predictive analytics and data governance. Semi-finalist in the KPMG business case competition.',
      zh: '学习机器学习、预测分析和数据治理，进入 KPMG 商业案例竞赛半决赛。',
    },
    detail: {
      en: 'I studied how to use business statistics, customer analytics and predictive models to evaluate business questions. I also reached the semi-finals of the KPMG business case competition.',
      zh: '学习重点是如何运用商业统计、客户分析和预测模型回答经营问题。在读期间，我也参加了毕马威商业案例竞赛，进入半决赛。',
    },
    internship: {
      logo: 'roland-berger',
      period: { en: 'December 2021 – January 2022', zh: '2021 年 12 月 – 2022 年 1 月' },
      periodShort: { en: 'Dec 2021 – Jan 2022', zh: '2021 年 12 月 – 2022 年 1 月' },
      org: { en: 'Roland Berger', zh: '罗兰贝格' },
      role: { en: 'Business Analyst Intern', zh: '商业分析实习生' },
      summary: {
        en: 'Supported automotive industry research and competitive benchmarking for the consulting team.',
        zh: '参与汽车行业研究与竞争对标分析，为咨询团队整理市场和竞争对手资料。',
      },
    },
  },
  {
    id: 'mitsubishi',
    type: 'work',
    years: { en: '2017 – 2021', zh: '2017 – 2021' },
    org: { en: 'Mitsubishi Electric Automation', zh: '三菱电机自动化' },
    role: { en: 'Business Consultant', zh: '业务顾问' },
    summary: {
      en: 'Manufacturing operations, digital factories and process improvement.',
      zh: '制造运营、数字工厂规划与流程优化。',
    },
    detail: {
      en: 'Manufacturing operations, digital factories and process improvement. In digital factory planning, I worked from production requirements to the process changes an automation proposal would require.',
      zh: '制造运营、数字工厂规划与流程优化。在数字工厂规划中，我从生产需求出发，梳理自动化方案需要配合哪些现场流程调整。',
    },
  },
  {
    id: 'ecust',
    type: 'education',
    years: { en: '2013 – 2017', zh: '2013 – 2017' },
    org: { en: 'East China University of Science and Technology', zh: '华东理工大学' },
    role: { en: 'Bachelor of Engineering, Mechanical automation', zh: '工学学士 · 机械自动化' },
    roleShort: { en: 'BEng, Mechanical automation', zh: '工学学士 · 机械自动化' },
    summary: {
      en: 'A starting point for understanding equipment and production processes.',
      zh: '从设备和生产流程入手理解工厂。',
    },
    detail: {
      en: 'Studying mechanical automation gave me a starting point for understanding equipment and production processes. My first consulting work took those questions onto the factory floor.',
      zh: '学习机械自动化让我从设备和生产流程入手理解工厂。毕业后，我在三菱电机的咨询工作中继续研究这些现场问题。',
    },
  },
];
