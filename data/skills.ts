// Skills shown on /about/, grouped as in CV_LiChonghua.pdf. The home page shows the shorter `toolkit`.

import type { Localized } from './site';

export const skillGroups: { name: Localized; items: string[] }[] = [
  {
    name: { en: 'Dashboards and reporting', zh: '报表与可视化' },
    items: ['Power BI', 'Tableau', 'Qlik Sense'],
  },
  {
    name: { en: 'Data analysis and machine learning', zh: '数据分析与机器学习' },
    items: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'JMP', 'MATLAB'],
  },
  {
    name: { en: 'Cloud and workflow automation', zh: '云服务与流程自动化' },
    items: ['Microsoft Azure', 'Power Automate', 'Nintex K2'],
  },
  {
    name: { en: 'Project delivery and process improvement', zh: '项目交付与流程改善' },
    items: ['Agile', 'Lean', 'JIT', 'TPM'],
  },
];

export const toolkit = ['Python', 'SQL', 'Power BI', 'Tableau', 'Qlik Sense', 'Microsoft Azure', 'Power Automate', 'PyTorch'];
