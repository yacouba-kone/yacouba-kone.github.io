import { useEffect, useState } from 'react';
import './Header.css';
import { navLinks, profile } from '../data/profile';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ferme le menu mobile au changement de taille de fenêtre
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Ferme le menu avec la touche Échap et bloque le scroll de la page
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const lockScroll = open && window.innerWidth <= 900;
    document.body.style.overflow = lockScroll ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Effet "header compacté" au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu quand on clique sur un lien
  const closeMenu = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="nav-wrapper">
        <a href="#accueil" className="nav-brand" onClick={closeMenu}>
          <span className="nav-brand-avatar">
            <img
              src={profile.photo}
              alt=""
              width="100"
              height="100"
              aria-hidden="true"
            />
          </span>
          {profile.firstName} {profile.lastName}
        </a>

        <div
          className={`nav-overlay${open ? ' nav-overlay-open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav id="nav-menu" className={`nav${open ? ' nav-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
                onClick={closeMenu}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle${open ? ' active' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
