import { experiences } from 'file:///D:/portfolio/portfolio-app/src/data/experience.js';
import { publications } from 'file:///D:/portfolio/portfolio-app/src/data/publications.js';
import { projects } from 'file:///D:/portfolio/portfolio-app/src/data/projects.js';
import {
  profile,
  certifications,
  education,
  navLinks,
  highlights,
  skillSets,
  languages,
} from 'file:///D:/portfolio/portfolio-app/src/data/profile.js';

console.log('experiences  :', experiences.length);
console.log('publications :', publications.length);
console.log('projects     :', projects.length);
console.log('certifications:', certifications.length);
console.log('education    :', education.length);
console.log('navLinks     :', navLinks.length);
console.log('highlights   :', highlights.length);
console.log('skillSets    :', skillSets.length);
console.log('languages    :', languages.length);
console.log('email        :', profile.email);
console.log('phone        :', profile.phone);
console.log('linkedin     :', profile.linkedin);
console.log('github       :', profile.github);

const badLinks = [
  ...publications.filter((p) => !p.link || !p.doi && !p.hal),
];
console.log('publications sans lien :', badLinks.length);

// Verifie que chaque DOI est bien au format attendu
const badDoi = publications.filter(
  (p) => p.doi && !/^10\.\d{4,9}\/\S+$/.test(p.doi)
);
console.log('DOI mal formes :', badDoi.map((p) => p.doi));

// Verifie les ancres de navigation contre les id de section du site
const ids = ['accueil', 'a-propos', 'competences', 'experience', 'projets', 'publications', 'contact'];
const missing = navLinks.map((l) => l.href).filter((h) => !ids.includes(h.replace('#', '')));
console.log('ancres inconnues :', missing);
