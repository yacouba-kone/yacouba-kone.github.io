import './About.css';
import { highlights, profile, certifications, education, languages } from '../data/profile';

const icons = {
  code: (
    <>
      <path d="M8 6 3 12l5 6" />
      <path d="m16 6 5 6-5 6" />
    </>
  ),
  brain: (
    <>
      <path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.8V14a3 3 0 0 0 4 2.8V21" />
      <path d="M12 3a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.8V14a3 3 0 0 1-4 2.8V21" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 2 3 7l9 5 9-5-9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.2 13.9-1.4 7 5.2-3 5.2 3-1.4-7" />
    </>
  ),
};

const Icon = ({ name }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {icons[name]}
  </svg>
);

const About = () => {
  return (
    <section className="section" id="a-propos">
      <div className="section-wrapper">
        <span className="section-eyebrow">À propos</span>
        <h2 className="section-title">Qui suis-je ?</h2>
        <p className="section-subtitle">
          Voici mon parcours, mes expertises et ce qui me motive au quotidien.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-identity">
              <div className="about-identity-photo">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
              <div className="about-identity-text">
                <div className="about-identity-name">{profile.fullName}</div>
                <div className="about-identity-role">{profile.role}</div>
                <div className="about-identity-meta">
                  <span className="about-identity-meta-item">{profile.location}</span>
                  <span className="about-identity-meta-dot" aria-hidden="true" />
                  <span className="about-identity-meta-item">{profile.yearsOfExperience}+ ans d'expérience</span>
                </div>
              </div>
            </div>

            <p className="about-desc">{profile.summary}</p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div key={h.icon + h.text} className="about-highlight">
                  <span className="about-highlight-icon">
                    <Icon name={h.icon} />
                  </span>
                  <span className="about-highlight-text">{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side">
            <div className="about-card">
              <h3 className="about-card-title">Certifications</h3>
              <ul className="about-cert-list">
                {certifications.map((cert) => (
                  <li key={cert} className="about-cert">
                    <span className="about-cert-check" aria-hidden="true">
                      ✓
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Formations</h3>
              <div className="about-edu-list">
                {education.map((edu) => (
                  <div key={edu.degree} className="about-edu">
                    <span className="about-edu-period">{edu.period}</span>
                    <div className="about-edu-body">
                      <div className="about-edu-degree">{edu.degree}</div>
                      <div className="about-edu-school">{edu.school}</div>
                      <p className="about-edu-desc">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Langues</h3>
              <ul className="about-langs">
                {languages.map((lang) => (
                  <li key={lang.name} className="about-lang">
                    <span className="about-lang-name">{lang.name}</span>
                    <span className="about-lang-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
