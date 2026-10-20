/**
 * Source de vérité du portfolio — données vérifiées contre :
 *  - CV PDF : d:/Personnels/JOBS/CV_updated_2025/FR/__ALL__/CV_Yacouba_KONE_Data_Scientist.pdf
 *  - Profil HAL : https://cv.hal.science/yacouba-kone (11 documents)
 *  - CV 2020 : d:/Personnels/CV/CV_à_jour/CV__Yacouba_KONE_ 17-07-2020.pdf (coordonnées)
 */

export const profile = {
  firstName: 'Yacouba',
  lastName: 'KONE',
  fullName: 'Yacouba KONE',
  role: 'Data Scientist',
  photo: '/yacouba-kone.jpg',
  photoAlt: 'Portrait de Yacouba KONE, Data Scientist',
  tagline: 'Data Sciences · Machine Learning · Géolocalisation · IA générative · Big Data',
  summary:
    "Avec 6 ans d'expérience en data science et machine learning, je maîtrise l'ensemble de la chaîne de traitement des données massives. Expert en Python, SQL, Power BI et architectures distribuées (Spark, Dask), je développe des solutions combinant machine learning, deep learning et IA générative (RAG). Mon expertise couvre la géolocalisation indoor/outdoor, la mobilité urbaine, l'analyse des données et l'analyse de séries temporelles, la création et le déploiement d'algorithmes de machine learning et deep learning. Reconnu par le Top 1 du challenge ANR/DGA MALIN 2021, j'apporte une vision complète des chaînes de traitement de données.",
  location: 'Lyon, France',
  email: 'yacouba.k2013@gmail.com',
  phone: '06 99 62 27 87',
  phoneHref: 'tel:+33699622787',
  linkedin: 'https://www.linkedin.com/in/yacouba-kone',
  linkedinLabel: 'linkedin.com/in/yacouba-kone',
  github: 'https://github.com/yacouba-kone',
  githubLabel: 'github.com/yacouba-kone',
  hal: 'https://cv.hal.science/yacouba-kone',
  halLabel: 'cv.hal.science/yacouba-kone',
  yearsOfExperience: 6,
};

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

export const highlights = [
  {
    icon: 'code',
    text: "Expert en Python, SQL, Power BI et architectures distribuées (Spark, Dask)",
  },
  {
    icon: 'brain',
    text: "Machine Learning, Deep Learning, IA générative, RAG et AI Agents",
  },
  {
    icon: 'chart',
    text: "Analyse de séries temporelles, données GPS et contrôle qualité",
  },
  {
    icon: 'deploy',
    text: "Création et déploiement d'algorithmes ML et Deep Learning",
  },
  {
    icon: 'users',
    text: "Formation en IA, co-encadrement d'étudiants, appui aux doctorants, management d'équipe",
  },
  {
    icon: 'award',
    text: "Reconnu par le Top 1 du challenge ANR/DGA MALIN 2021",
  },
];

export const skillSets = [
  {
    title: 'Analyse & traitement',
    badge: 'DATA',
    tags: [
      'Big Data',
      'Séries temporelles',
      'Contrôle qualité',
      'Analyse statistique',
      'Modélisation',
      'Traitement de signal',
      'Données GPS',
    ],
  },
  {
    title: 'Machine Learning & IA',
    badge: 'AI',
    tags: [
      'Machine Learning',
      'Deep Learning',
      'IA générative',
      'RAG',
      'AI Agents',
      'LLMs',
    ],
  },
  {
    title: 'Programmation',
    badge: 'CODE',
    tags: ['Python', 'R', 'C++', 'DAX', 'Mashup', 'Matlab'],
  },
  {
    title: 'Bases de données',
    badge: 'DB',
    tags: ['PostgreSQL', 'DuckDB', 'SQL', 'Oracle', 'MongoDB'],
  },
  {
    title: 'Data Analytics & Reporting',
    badge: 'REPORT',
    tags: ['Power BI', 'R-Shiny', 'Power Query', 'Excel'],
  },
  {
    title: 'Frameworks / MLOps',
    badge: 'MLOPS',
    tags: [
      'Spark',
      'Dask',
      'CI/CD',
      'Azure DevOps',
      'MLflow',
      'Kedro',
      'GitHub',
      'UV',
      'Linux',
    ],
  },
];

/** Certifications IBM / IBM SkillsBuild (CV PDF, page 1). */
export const certifications = [
  'IBM Machine Learning Essentials',
  'Generative AI Essentials: Using LLMs to Work with Data',
  'Retrieval-Augmented Generation for Enhanced AI Outputs',
  'Artificial Intelligence Fundamentals',
  'Data Sciences with Python',
];

/** Formations (CV PDF, page 1). */
export const education = [
  {
    period: '2019',
    degree: 'Master Data Sciences et Modélisation Statistiques',
    school: 'Université Bretagne Sud',
    desc: "Formation en data sciences et modélisation statistique, spécialité Statistiques.",
  },
  {
    period: '2016',
    degree: 'Licence Statistiques et Informatique',
    school: 'Université Nazi Boni',
    desc: 'Formation en statistiques et informatique.',
  },
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Niveau professionnel (publications scientifiques en anglais)' },
];
