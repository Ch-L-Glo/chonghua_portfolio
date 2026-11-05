const groups = [
  {
    en: 'Dashboards & reporting', zh: '报表与可视化',
    items: ['Power BI', 'Tableau', 'Qlik Sense'],
  },
  {
    en: 'Data analysis & machine learning', zh: '数据分析与机器学习',
    items: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'JMP', 'MATLAB'],
  },
  {
    en: 'Cloud & workflow automation', zh: '云服务与流程自动化',
    items: ['Microsoft Azure', 'Power Automate', 'Nintex K2'],
  },
  {
    en: 'Project delivery & process improvement', zh: '项目交付与流程改善',
    items: ['Agile', 'Lean', 'JIT', 'TPM'],
  },
];

export default function Skills({ zh }: { zh: boolean }) {
  return (
    <section id="skills">
      <h2>{zh ? '技能与工具' : 'Skills & tools'}</h2>
      <div className="skills-grid">
        {groups.map(group => (
          <div className="skill-group" key={group.en}>
            <h3>{zh ? group.zh : group.en}</h3>
            <div className="skill-tags">
              {group.items.map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
