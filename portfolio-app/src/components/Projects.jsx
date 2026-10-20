import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="section section-alt" id="projets">
      <div className="section-wrapper">
        <span className="section-eyebrow">Projets</span>
        <h2 className="section-title">Projets réalisés</h2>
        <p className="section-subtitle">
          Des solutions concrètes où les données rencontrent l'innovation.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              {p.points && p.points.length > 0 && (
                <ul className="project-points">
                  {p.points.map((point, i) => (
                    <li key={i} className="project-point">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {p.linkLabel || 'Voir le projet'} &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
