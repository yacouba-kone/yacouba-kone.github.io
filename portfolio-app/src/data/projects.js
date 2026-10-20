/**
 * Projets — sources : CV PDF 2025 (page 2, projet personnel) + CV PDF 2025 (pages 2-4, projets professionnels).
 */
export const projects = [
  {
    name: 'Raspberry Temperature',
    tag: 'Projet personnel',
    desc: "Chaîne MLOps complète autour d'un capteur Raspberry Pi : réception des mesures (température, humidité, intensité lumineuse) depuis Azure Event Hub, nettoyage des données, entraînement d'un modèle de régression linéaire prédisant la température, puis écriture des prédictions dans une base de données (SQL / DuckDB).",
    points: [
      'Orchestration des traitements (nettoyage, transformation, entraînement) avec Kedro.',
      'Suivi des expériences ML avec MLflow.',
      'Industrialisation et CI/CD avec Azure DevOps ; gestion des environnements avec uv.',
      'Visualisation Power BI branchée sur DuckDB (dev) et SQL Database (prod).',
      'Tests unitaires pytest pour un workflow cohérent et reproductible.',
      'Déploiement de services ML sur Azure Kubernetes Services (AKS).',
    ],
    tech: [
      'Python', 'Kedro', 'MLflow', 'Celery', 'Azure DevOps', 'uv', 'Power BI',
      'AKS', 'Docker', 'Scikit-learn', 'Azure Event Hub', 'PostgreSQL', 'pytest',
    ],
    link: 'https://github.com/yacouba-kone/raspberry_temperature',
    linkLabel: 'Voir sur GitHub',
  },
  {
    name: 'Analyse Mobilité Urbaine',
    tag: 'ENTPE & EGIS',
    desc: "Développement de méthodologies de fusion de données provenant de sources multiples (enquêtes, téléphonie mobile, applications mobiles, traces GPS) et de modèles explicatifs pour comprendre le comportement de mobilité et la logistique urbaine.",
    points: [
      'Traitement et analyse de données massives multi-sources.',
      'Modèles de prédiction explicatifs pour la mobilité urbaine.',
    ],
    tech: [
      'Python', 'SQL', 'GeoPandas', 'DuckDB', 'Power BI', 'QGIS', 'Matplotlib',
      'Seaborn', 'Multiprocessing', 'UV',
    ],
  },
  {
    name: 'Géolocalisation Indoor-Outdoor',
    tag: 'Université Gustave Eiffel / Okeenea',
    desc: "Algorithmes de détection d'instant de pas (ZUPT) pour tous types de mouvements et tous types de smartphones (Android, iOS) : +97 % de précision. Optimisation de l'inférence avec ONNX Runtime (10× plus rapide) et intégration dans une application Android dédiée.",
    points: [
      'Workflow complet : acquisition, nettoyage, feature engineering, split train/validation/test.',
      'Choix des modèles (HGBoosting), validation croisée et tunning (Random Search, Optuna).',
      'Benchmark avec RONIN et le modèle de montre connectée Xiaomi.',
    ],
    tech: [
      'Python', 'Scikit-learn', 'HistGradientBoosting', 'Optuna', 'ONNX Runtime',
      'C++', 'Android', 'iOS', 'Jupyter',
    ],
  },
  {
    name: 'Industry 4.0 — Machines-Outils',
    tag: 'IUT de Nantes',
    desc: "Automatisation des analyses de données de machines-outils connectées (Nouvelles Industries 4.0) et développement d'un algorithme d'intelligence artificielle pour la détection de profondeur de passe.",
    points: [
      'Automatisation des analyses de données machines-outils.',
      "Développement d'un algorithme d'IA pour la détection de profondeur de passe.",
    ],
    tech: ['R', 'RStudio', 'Tidyverse', 'dplyr', 'tidyr', 'ggplot2', 'Git'],
  },
  {
    name: 'Analyse Statistique — Rencontre R',
    tag: 'Université Bretagne Sud',
    desc: "Développement d'une application SHINY pour l'analyse statistique des données de défaillance de cause commune, avec sélection de modèles (Poisson, Weibull) et automatisation des analyses.",
    points: [
      "Présentation de l'application Shiny lors de la « 7ème Rencontre R » à Rennes (4-6 juillet 2018).",
    ],
    tech: ['R', 'R-Shiny', 'Poisson', 'Weibull', 'Git'],
  },
  {
    name: 'Surveillance Sanitaire — Burkina Faso',
    tag: 'Center Muraz / Banque Mondiale',
    desc: "Construction d'un indicateur synthétique de morbidité et de mortalité infantile au Burkina Faso, par modélisation en analyse factorielle multiple (AFM) sur des données démographiques et spatiales issues des Enquêtes Démographiques et de Santé (EDS).",
    points: [
      'Classification non supervisée (CAH) et data mining (AFM).',
      'Données démographiques, spatiales et épidémiologiques.',
    ],
    tech: ['STATA', 'SPAD', 'AFM', 'CSPro'],
  },
  {
    name: 'Mobilité & Transport Urbain',
    tag: 'ENTPE / LAET',
    desc: "Estimation de la fréquentation des bus par apprentissage automatique à partir de données Wi-Fi, pour mieux connaître la demande de transport.",
    points: [
      'Approche ML pour estimer la fréquentation à partir de données Wi-Fi.',
      'Travail présenté aux RFTM 2023 et au symposium HEART 2024.',
    ],
    tech: ['Python', 'Machine Learning', 'Wi-Fi', 'SQL'],
  },
];
