import './Hero.css';
import { profile } from '../data/profile';

const Icon = ({ name }) => {
  const paths = {
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
        <path d="M12 7v10" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
      </>
    ),
    trophy: (
      <>
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 6H4v1a3 3 0 0 0 3 3" />
        <path d="M17 6h3v1a3 3 0 0 1-3 3" />
        <path d="M9 20h6" />
        <path d="M12 14v6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    document: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="accueil">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Disponible pour de nouvelles opportunités
          </div>

          <h1 className="hero-title">
            Salut, je suis {profile.firstName}{' '}
            <span>{profile.lastName}</span>
          </h1>

          <div className="hero-role">{profile.role}</div>

          <p className="hero-desc">{profile.tagline}</p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-icon">
                <Icon name="location" />
              </span>
              <span>{profile.location}</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-icon">
                <Icon name="globe" />
              </span>
              <span>Français · Anglais (professionnel)</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-icon">
                <Icon name="document" />
              </span>
              <span>11 publications scientifiques</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projets" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">{profile.yearsOfExperience}+</div>
              <div className="hero-stat-label">Ans d'expérience</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">11</div>
              <div className="hero-stat-label">Publications</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">Top 1</div>
              <div className="hero-stat-label">Challenge MALIN 2021</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-box">
            <div className="hero-image-avatar">
              <div className="hero-image-photo-frame">
                <img
                  className="hero-image-photo"
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width="100"
                  height="100"
                  loading="eager"
                />
              </div>
              <div className="hero-image-label">{profile.fullName}</div>
              <div className="hero-image-sub">IA · ML · Big Data</div>
            </div>

            <div className="hero-image-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <Icon name="code" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Icon name="brain" />
              </a>
              <a href={profile.hal} target="_blank" rel="noopener noreferrer" title="Publications HAL">
                <Icon name="document" />
              </a>
              <a href={`mailto:${profile.email}`} title="Email">
                <Icon name="trophy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
