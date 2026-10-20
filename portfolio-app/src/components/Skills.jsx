import './Skills.css';
import { skillSets } from '../data/profile';

const Skills = () => {
  return (
    <section className="section section-alt" id="competences">
      <div className="section-wrapper">
        <span className="section-eyebrow">Compétences</span>
        <h2 className="section-title">Domaines &amp; technologies</h2>
        <p className="section-subtitle">
          Les domaines dans lesquels je travaille et les technologies que je maîtrise.
        </p>

        <div className="skills-grid">
          {skillSets.map((set) => (
            <div key={set.title} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-card-title">{set.title}</span>
                <span className="skill-card-badge">{set.badge}</span>
              </div>
              <div className="skill-card-body">
                {set.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
