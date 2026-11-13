// Single source for everything shown under Work: professional case studies and personal builds.
// Add an entry here and it appears on /work/; cases with `detail` also get a page at /work/<id>/.

import { contact, type Localized } from './site';

export type WorkKind = 'case' | 'build';
export type WorkStatus = 'delivered' | 'in-design' | 'live' | 'in-preparation';
export type WorkLinkKind = 'github' | 'figma' | 'demo';

// Only the links listed are rendered, in this order. `label` overrides the default button text.
export type WorkLink = { kind: WorkLinkKind; href: string; label?: Localized };

export type CaseDetail = {
  context: string;
  role: string;
  method: string;
  outcome: string;
  note: string;
  caption: string;
};

export type Work = {
  id: string;
  kind: WorkKind;
  status: WorkStatus;
  cover?: string;
  coverAlt?: Localized;
  title: Localized;
  summary: Localized;
  tags: Localized<string[]>;
  links: WorkLink[];
  detail?: Localized<CaseDetail>;
  // Optional extras. Leave them out rather than writing filler.
  feature?: Localized<{ role: string; output: string }>;
  facts?: Localized<{ role: string; with: string }>;
  flow?: Localized<string[]>;
  calculator?: boolean;
};

const calculatorHref = '/work/management-analytics/#calculator';
const pending: Localized = {
  en: 'Summary, screenshots and links to follow.',
  zh: '简介、截图与链接待补充。',
};

export const works: Work[] = [
  {
    id: 'global-data-hub',
    kind: 'case',
    status: 'in-design',
    cover: '/assets/projects/cover-hub.svg',
    coverAlt: {
      en: 'Illustration: four regional sources mapped through shared definitions into one aligned table',
      zh: '示意图：四个区域的数据来源经过统一口径，汇入一张对齐的表',
    },
    title: { en: 'Regional supply-chain visibility', zh: '跨区域供应链可视化' },
    summary: {
      en: 'Which inventory and demand figures can regional teams compare?',
      zh: '各区域的库存与需求，哪些数字可以直接比较？',
    },
    tags: {
      en: ['Data strategy', 'Architecture', 'Governance'],
      zh: ['数据战略', '架构规划', '数据治理'],
    },
    links: [],
    detail: {
      en: {
        context:
          'Teams report from different systems. A common inventory view depends on agreement about products, units and the date each number represents.',
        role: 'I help translate planning questions into data requirements and identify who owns each definition.',
        method:
          'Start with shared definitions, map local records to them and route discrepancies to someone who can resolve them.',
        outcome:
          'The platform is in planning and solution design. The next test is whether regional data reconciles against the agreed definitions.',
        note: 'A high-level, anonymised summary. The visual is conceptual and does not reproduce internal architecture.',
        caption:
          'Four regional sources mapped through shared definitions into one aligned table. A conceptual illustration, not internal architecture.',
      },
      zh: {
        context: '各区域使用不同系统。要汇总库存，先要对齐产品、计量单位和数据对应的日期。',
        role: '我把供应链规划问题拆成数据需求，并与团队确认每项定义由谁负责。',
        method: '先定义共同口径，再映射本地记录，把差异交给有权限处理的人。',
        outcome: '目前处于平台规划与方案设计阶段。下一步要用区域数据核对这些口径能否实际对账。',
        note: '经概括的匿名案例。配图为概念示意，不复现内部架构。',
        caption: '四个区域的数据来源经过统一口径，汇入一张对齐的表。概念示意，不复现内部架构。',
      },
    },
  },
  {
    id: 'management-analytics',
    kind: 'case',
    status: 'delivered',
    cover: '/assets/projects/cover-chart.svg',
    coverAlt: {
      en: 'Illustration: one figure traced from a source table, through its calculation, to a highlighted bar in a management chart',
      zh: '示意图：一个数字从来源表格出发，经过计算，对应到管理图表中被高亮的柱形',
    },
    title: { en: 'Management reporting', zh: '经营指标与管理报告' },
    summary: {
      en: 'What does a change in a reported KPI actually tell management?',
      zh: '同一个 KPI 发生变化，管理层该如何解读？',
    },
    tags: {
      en: ['Power BI', 'KPI design', 'Data visualisation'],
      zh: ['Power BI', '指标设计', '数据可视化'],
    },
    links: [
      { kind: 'demo', href: calculatorHref },
      { kind: 'github', href: contact.repo },
    ],
    detail: {
      en: {
        context:
          'A portfolio report draws on project-level records. The same indicator can carry a different meaning across teams.',
        role: 'I worked with infrastructure advisory teams on corporate and project indicators and management dashboards.',
        method:
          'Trace a metric from its source to its calculation and reporting period. Review the resulting view with the people who use it.',
        outcome:
          'The work produced KPI frameworks and dashboard views for management review. The calculator below illustrates one planning measure.',
        note: 'The charts and calculator are newly created illustrative examples, not screenshots of a client deliverable.',
        caption:
          'Tracing one indicator from source record to management view. Newly drawn for this page, not a screenshot of a client deliverable.',
      },
      zh: {
        context: '管理报告汇集多个项目的数据。名称相同的指标，各团队可能使用不同算法。',
        role: '我在基础设施咨询项目中参与企业及项目指标设计，并开发管理看板。',
        method: '从数据来源、计算逻辑一路追到报告周期，再与使用者一起核对看板。',
        outcome: '交付内容包括 KPI 框架和供管理层审阅的看板。下方计算器演示一个库存规划指标。',
        note: '图表和计算器为新制作的说明性示例，不是客户交付物截图。',
        caption: '追踪一个指标从来源记录到管理视图的过程。为本页新绘制，不是客户交付物截图。',
      },
    },
    feature: {
      en: {
        role: 'Corporate and project indicators and management dashboards, with infrastructure advisory teams',
        output: 'KPI frameworks and dashboard views for management review',
      },
      zh: {
        role: '在基础设施咨询项目中参与企业及项目指标设计，并开发管理看板',
        output: 'KPI 框架，以及供管理层审阅的看板',
      },
    },
    facts: {
      en: {
        role: 'Corporate and project indicators; management dashboards',
        with: 'Infrastructure advisory teams',
      },
      zh: {
        role: '企业及项目指标设计；管理看板开发',
        with: '基础设施咨询团队',
      },
    },
    flow: {
      en: ['Source', 'Calculation', 'Reporting period', 'Review with users'],
      zh: ['数据来源', '计算逻辑', '报告周期', '与使用者核对'],
    },
    calculator: true,
  },
  {
    id: 'risk-workflow',
    kind: 'case',
    status: 'delivered',
    cover: '/assets/projects/cover-flow.svg',
    coverAlt: {
      en: 'Illustration: a risk item moving across three lanes from submission to review to a named follow-up',
      zh: '示意图：一项风险在三条泳道间流转，从提交、审核到指定负责人跟进',
    },
    title: { en: 'Risk review and follow-up', zh: '风险审核与跟进' },
    summary: {
      en: 'When a risk is raised, who owns the next action?',
      zh: '风险上报之后，谁来跟进？',
    },
    tags: {
      en: ['Process design', 'Workflow', 'Delivery'],
      zh: ['流程设计', '工作流', '项目交付'],
    },
    links: [],
    detail: {
      en: {
        context:
          'Risk reviews cross team boundaries. An open item needs a named owner, a review stage and a way to track the response.',
        role: 'I helped consulting teams document risk processes and turn review requirements into workflow specifications.',
        method:
          'Map the handoffs from submission to review and follow-up, including the information each person needs to act.',
        outcome: 'The deliverables covered process definitions and digital workflows for review and follow-up.',
        note: 'An anonymised professional summary. The flow is an explanatory illustration rather than an internal process specification.',
        caption:
          'A risk item moving across three lanes from submission to review to a named follow-up. An explanatory illustration, not an internal process specification.',
      },
      zh: {
        context: '风险审核跨越多个团队。每项待处理事项都需要明确负责人、审核节点和后续记录。',
        role: '我协助咨询团队梳理风险流程，将审核要求转化为工作流设计。',
        method: '逐步梳理提交、审核和跟进之间的交接，明确每位处理人需要哪些信息。',
        outcome: '交付内容涵盖流程定义，以及支持审核与后续跟进的数字工作流。',
        note: '匿名职业案例。流程图仅用于解释概念，不是内部流程规范。',
        caption: '一项风险在三条泳道间流转，从提交、审核到指定负责人跟进。仅用于解释概念，不是内部流程规范。',
      },
    },
  },
  {
    id: 'bilingual-portfolio',
    kind: 'build',
    status: 'live',
    cover: '/assets/projects/cover-portfolio.svg',
    coverAlt: {
      en: 'Illustration: one commit passing through a build step and publishing an English page and a Chinese page',
      zh: '示意图：一次提交经过构建，发布出英文和中文两个页面',
    },
    title: { en: 'Publishing a bilingual portfolio', zh: '双语网站的构建与发布' },
    summary: {
      en: 'A single change in GitHub builds and publishes the English and Chinese site. The source shows how the pages and project records fit together.',
      zh: '在 GitHub 提交一次，就能构建并发布中英文页面。源码展示了页面结构与项目资料的组织方式。',
    },
    tags: {
      en: ['Next.js', 'TypeScript', 'Cloudflare Pages'],
      zh: ['Next.js', 'TypeScript', 'Cloudflare Pages'],
    },
    links: [
      { kind: 'github', href: contact.repo },
      { kind: 'demo', href: 'https://chonghuali.com/', label: { en: 'Live site', zh: '线上站点' } },
    ],
  },
  {
    id: 'inventory-calculator',
    kind: 'build',
    status: 'live',
    cover: '/assets/projects/cover-inventory.svg',
    coverAlt: {
      en: 'Illustration: a calculator with two inputs and a chart of stock running down over three months',
      zh: '示意图：带两个输入框的计算器，以及库存在三个月内逐月消耗的图表',
    },
    title: { en: 'Inventory coverage calculator', zh: '库存覆盖月数计算器' },
    summary: {
      en: 'Change stock levels and monthly demand to see how long inventory lasts, using illustrative inputs.',
      zh: '改变库存或月需求，观察库存可以维持几个月。使用模拟数据。',
    },
    tags: {
      en: ['Interactive demo', 'Simulated inputs'],
      zh: ['交互示例', '模拟数据'],
    },
    links: [
      { kind: 'demo', href: calculatorHref },
      { kind: 'github', href: contact.repo },
    ],
  },
  {
    id: 'mcp',
    kind: 'build',
    status: 'in-preparation',
    title: { en: 'MCP project', zh: 'MCP 项目' },
    summary: pending,
    tags: { en: [], zh: [] },
    links: [],
  },
  {
    id: 'business-ontology',
    kind: 'build',
    status: 'in-preparation',
    title: { en: 'Business Ontology project', zh: 'Business Ontology 项目' },
    summary: pending,
    tags: { en: [], zh: [] },
    links: [],
  },
];

export const cases = works.filter((work) => work.kind === 'case');
export const builds = works.filter((work) => work.kind === 'build');
// Entries that have their own page at /work/<id>/. Placeholders and link-only builds do not.
export const detailWorks = works.filter((work) => work.detail);

export const findWork = (id: string) => works.find((work) => work.id === id);

// Home page selection: one featured case, a row of three, then anything still in preparation.
export const homeFeature = findWork('management-analytics')!;
export const homeCards = ['global-data-hub', 'risk-workflow', 'inventory-calculator'].map((id) => findWork(id)!);
export const homePending = works.filter((work) => work.status === 'in-preparation');
