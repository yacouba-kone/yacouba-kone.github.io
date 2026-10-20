import { useState } from 'react';
import './Contact.css';
import { profile } from '../data/profile';

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const MailIcon = () => (
  <svg {...svgProps}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.093-4 0v5.604h-3v-11h3v1.765c1.397-1.524 4-1.705 4 1.582v7.651z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const HalIcon = () => (
  <svg {...svgProps}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M9 7h7M9 11h7" />
  </svg>
);

const LocationIcon = () => (
  <svg {...svgProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contactChannels = [
  { key: 'email', label: 'Email', Icon: MailIcon, value: profile.email, href: `mailto:${profile.email}` },
  { key: 'phone', label: 'Téléphone', Icon: PhoneIcon, value: profile.phone, href: profile.phoneHref },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon, value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { key: 'github', label: 'GitHub', Icon: GithubIcon, value: profile.githubLabel, href: profile.github, external: true },
  { key: 'hal', label: 'Publications HAL', Icon: HalIcon, value: profile.halLabel, href: profile.hal, external: true },
  { key: 'location', label: 'Localisation', Icon: LocationIcon, value: profile.location, href: null },
];


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Ouvre le client mail de l'utilisateur avec le message pré-rempli
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message de ${form.name || 'votre visite'}`;
    const body = `${form.message}\n\n---\nDe : ${form.name}\nEmail : ${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-wrapper">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Parlons de votre projet</h2>
        <p className="section-subtitle">
          Une question, un projet, une collaboration ? Je suis joignable par e-mail, téléphone
          ou LinkedIn.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-identity">
              <div className="contact-identity-photo">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
              <div className="contact-identity-text">
                <div className="contact-identity-name">{profile.fullName}</div>
                <div className="contact-identity-role">{profile.role}</div>
              </div>
            </div>

            {contactChannels.map(({ key, label, Icon, value, href, external }) => (
              <div key={key} className="contact-item">
                <div className="contact-item-icon">
                  <Icon />
                </div>
                <div className="contact-item-info">
                  <div className="contact-item-label">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="contact-item-value"
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="contact-item-value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Votre nom</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Jean Dupont"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Votre email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="jean.dupont@exemple.fr"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Votre message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Décrivez votre besoin…"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
            <p className="contact-form-note">
              Le formulaire ouvre votre logiciel de messagerie avec le message pré-rempli.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
