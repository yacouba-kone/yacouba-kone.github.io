import './Publications.css';
import { publications } from '../data/publications';

const Publications = () => {
  return (
    <section className="section" id="publications">
      <div className="section-wrapper">
        <span className="section-eyebrow">Publications</span>
        <h2 className="section-title">Publications scientifiques</h2>
        <p className="section-subtitle">
          11 publications dans des revues et conférences internationales, dont IEEE Sensors
          Journal et IEEE Transactions on Intelligent Transportation Systems.
        </p>

        <div className="publications-list">
          {publications.map((p) => (
            <article key={p.title} className="publication-item">
              <div className="publication-head">
                <span className="publication-year">{p.year}</span>
                <span className="publication-type">{p.type}</span>
              </div>

              <h3 className="publication-title">{p.title}</h3>

              <p className="publication-authors">{p.authors}</p>

              <p className="publication-meta">
                <span className="publication-venue">{p.venue}</span>
              </p>

              <div className="publication-links">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  {p.doi ? 'DOI' : 'HAL'} &rarr;
                </a>
                {p.doi && (
                  <span className="publication-doi">{p.doi}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://cv.hal.science/yacouba-kone"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline publications-cta"
        >
          Voir toutes mes publications sur HAL
        </a>
      </div>
    </section>
  );
};

export default Publications;
