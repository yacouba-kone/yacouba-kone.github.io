/**
 * Expériences professionnelles — source : CV PDF 2025 (pages 2-4) + CV 2020.
 * Ordre antéchronologique.
 */
export const experiences = [
  {
    company: 'ENTPE & EGIS GROUP',
    period: 'Octobre 2022 – Aujourd’hui',
    role: 'R&D Data Analyst',
    desc: "Hybrider les données et modèles pour mieux comprendre la mobilité.",
    missions: [
      "Développer des méthodologies de fusion de données provenant de sources multiples : enquêtes, téléphonie mobile, applications mobiles, traces GPS et numériques.",
      'Traiter et analyser des données massives.',
      'Développer des modèles explicatifs de prédiction pour comprendre le comportement de mobilité et la logistique urbaine.',
    ],
    tech: [
      'Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'GeoPandas',
      'DuckDB', 'Power BI', 'Matplotlib', 'Seaborn', 'Multiprocessing',
      'Git', 'Linux', 'QGIS', 'UV',
    ],
  },
  {
    company: 'Université Gustave Eiffel & Okeenea Digital',
    period: 'Juin 2021 – Septembre 2022',
    role: 'Data Scientist — ML Engineer',
    desc: 'Mise en place d\'algorithmes de traçabilité indoor/outdoor basés sur les données de smartphones.',
    missions: [
      'Collecter, traiter et stocker les bases d’entraînement et de validation des modèles IA.',
      'Développer des algorithmes de détection d\'instant de pas (ZUPT) pour tous types de mouvements et smartphones (Android, iOS) : +97 % de précision.',
      'Optimiser le temps d\'inférence avec ONNX Runtime (10× moins de temps) et intégrer le résultat dans une application Android dédiée.',
      'Benchmarker avec les meilleurs modèles existants (RONIN) et le modèle de montre connectée Xiaomi.',
    ],
    tech: [
      'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'HistGradientBoosting',
      'Optuna', 'ONNX Runtime', 'Jupyter', 'Linux', 'Git', 'Android Studio',
      'iOS', 'C++',
    ],
  },
  {
    company: 'IFSTTAR',
    period: 'Octobre 2019 – Mai 2021',
    role: 'ML Engineer',
    desc: 'Mise en place d\'algorithmes de traçabilité indoor/outdoor basés sur les données de capteurs inertiels embarqués.',
    missions: [
      'Collecter, nettoyer et stocker les bases d\'entraînement et de validation des modèles IA.',
      'Développer des algorithmes (ML) de détection des types de mouvements pour les compétitions de géolocalisation intérieure organisées par l\'ANR/DGA : +99 % de précision.',
      'Benchmarker avec les meilleurs modèles de la littérature scientifique.',
      'Superviser un stagiaire et co-encadrer un doctorant en machine learning.',
    ],
    tech: [
      'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'HistGradientBoosting',
      'Optuna', 'ONNX Runtime', 'Jupyter', 'Linux', 'Git',
    ],
  },
  {
    company: 'Yulcom Technologies',
    period: 'Août 2021 – 1 mois',
    role: 'Consultant Data Scientist',
    desc: "Mettre en place une preuve de concept (POC) pour valoriser les données du ministère du commerce et des transports.",
    missions: [
      'Extraire les données depuis la plateforme web, les nettoyer et les valoriser via des tableaux de bord.',
      'Réaliser des analyses prédictives.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Power BI'],
  },
  {
    company: 'IUT de Nantes',
    period: 'Janvier 2019 – Juin 2019',
    role: 'Data Analyst',
    desc: "Analyse de données issues de machines-outils connectées (Nouvelles Industries 4.0).",
    missions: [
      'Automatiser les analyses de données de machines-outils connectées.',
      'Développer un algorithme d\'intelligence artificielle pour la détection de profondeur de passe.',
    ],
    tech: ['R', 'RStudio', 'Tidyverse', 'dplyr', 'tidyr', 'ggplot2', 'Git'],
  },
  {
    company: 'Center Muraz & Banque Mondiale',
    period: 'Janvier 2017 – Décembre 2017',
    role: 'Data Manager / Data Analyst',
    desc: 'Mettre en place des questionnaires électroniques et des batchs d\'apurement automatique.',
    missions: [
      'Contrôle qualité : programmer les outils de collecte avec CSPro.',
      'Contrôle qualité : programmer les batchs de conformité des données attendues avec STATA.',
      'Synchronisation : programmer les batchs d’envoi de données (circuit tablette – serveur local – serveur cloud).',
    ],
    tech: ['CSPro', 'STATA'],
  },
  {
    company: 'Center Muraz',
    period: 'Juin 2016 – Septembre 2016',
    role: 'Stagiaire Data Analyst',
    desc: "Mettre en place un indicateur de morbidité et de mortalité infantile au Burkina Faso.",
    missions: [
      'Exploiter des données démographiques et spatiales issues des EDS (paludisme, moustiquières, violences conjugales, nutrition…).',
      "Construire un indicateur synthétique de morbidité et de mortalité infantile par analyse factorielle multiple (AFM).",
    ],
    tech: ['STATA', 'SPAD'],
  },
  {
    company: 'GEOLOC — Université Gustave Eiffel',
    period: 'Septembre 2017 – Décembre 2017',
    role: 'Data Scientist — ML Engineer',
    desc: "Développer et déployer des algorithmes de traçabilité indoor/outdoor à partir de données de capteurs inertiels embarqués.",
    missions: [
      'Développer des algorithmes d\'IA pour la navigation pédestre dans le cadre du projet de recherche ANR/DGA MALIN.',
      'Former les membres du laboratoire GEOLOC à l\'intelligence artificielle.',
      "Co-encadrer un étudiant en stage (Sanjana G. – MSc 1).",
      'Rédiger les scénarios de validation des algorithmes et de maintenance des applications.',
    ],
    tech: ['Python', 'R', 'Matlab', 'Git'],
  },
  {
    company: 'UBS — France',
    period: '2018',
    role: 'Développeur application web',
    desc: 'Développer une application SHINY pour l\'analyse statistique des données de défaillance de cause commune.',
    missions: [
      'Développer une application Shiny et automatiser les analyses statistiques.',
      'Sélectionner les modèles (Poisson, Weibull…).',
      'Présenter l\'application lors de la « 7ème Rencontre R » à Rennes.',
    ],
    tech: ['R', 'R-Shiny', 'Git'],
  },
  {
    company: 'UBS — Kaggle Challenge (France)',
    period: '2019',
    role: 'Data Scientist — Machine Learning',
    desc: 'Machine Learning : Predicting the Flu — participation à l\'UBS Kaggle Challenge (prévision du taux de grippe en France par région).',
    missions: [
      'Prédire le taux de grippe par fusion de méthodes de machine learning.',
      'Feature engineering : sélection des features corrélées avec la grippe.',
      'Data cleaning : nettoyage et structuration de données multi-sources.',
    ],
    tech: ['R', 'Tidyverse', 'Sparklyr'],
  },
  {
    company: 'Business intelligent — UBS, France',
    period: '2017',
    role: 'Data Analyst / BI Developer',
    desc: 'Création d\'un entrepôt de données et modélisation des données de PME Moremovies.',
    missions: [
      'Mettre en place le reporting et créer un Data Warehouse.',
      'Programmer les requêtes et les tableaux de bord.',
    ],
    tech: ['Oracle', 'Power BI', 'SQL'],
  },
  {
    company: 'Université Bretagne Sud',
    period: 'Janvier 2018 – Mai 2018',
    role: 'Web Application Developer',
    desc: 'Développer une application SHINY pour l\'analyse statistique des données de défaillance de cause commune.',
    missions: [
      'Automatiser des analyses statistiques.',
      'Sélectionner des modèles Poisson, Weibull, etc.',
      'Présenter l\'application Shiny lors de la « 7ème Rencontre R » à Rennes (4-6 juillet 2018).',
    ],
    tech: ['R', 'R-Shiny', 'Git'],
  },

];
