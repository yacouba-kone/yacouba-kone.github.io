import './Experience.css';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-wrapper">
        <span className="section-eyebrow">Expérience</span>
        <h2 className="section-title">Parcours professionnel</h2>
        <p className="section-subtitle">
          Les entreprises et structures où les données ont structuré ma trajectoire.
        </p>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <article key={`${exp.company}-${exp.period}-${idx}`} className="exp-item">
              <div className="exp-marker" aria-hidden="true">
                <span className="exp-marker-dot" />
              </div>

              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-company">{exp.company}</h3>
                    <div className="exp-role">{exp.role}</div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <p className="exp-desc">{exp.desc}</p>

                {exp.missions && exp.missions.length > 0 && (
                  <ul className="exp-missions">
                    {exp.missions.map((mission, i) => (
                      <li key={i} className="exp-mission">
                        {mission}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="exp-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
