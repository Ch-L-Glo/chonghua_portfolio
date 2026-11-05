import Mark from './Mark';

const groups = [
  {
    icon: 'chart',
    en: 'Dashboards & reporting', zh: '报表与可视化',
    items: ['Power BI', 'Tableau', 'Qlik Sense'],
  },
  {
    icon: 'database',
    en: 'Data analysis & machine learning', zh: '数据分析与机器学习',
    items: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'JMP', 'MATLAB'],
  },
  {
    icon: 'network',
    en: 'Cloud & workflow automation', zh: '云服务与流程自动化',
    items: ['Microsoft Azure', 'Power Automate', 'Nintex K2'],
  },
  {
    icon: 'workflow',
    en: 'Project delivery & process improvement', zh: '项目交付与流程改善',
    items: ['Agile', 'Lean', 'JIT', 'TPM'],
  },
];

export default function Skills({ zh }: { zh: boolean }) {
  return (
    <section id="skills" className="resume-section" aria-labelledby="skills-title">
      <h2 id="skills-title">{zh ? '技能与工具' : 'Skills & tools'}</h2>
      <div className="skills-grid">
        {groups.map(group => (
          <article className="skill-group" key={group.en}>
            <div className="skill-category-icon"><Mark name={group.icon} /></div>
            <h3>{zh ? group.zh : group.en}</h3>
            <div className="skill-tags">
              {group.items.map(item => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
