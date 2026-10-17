import type { LandingDictionary } from "./dictionary-types";

export const frDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Outils privés et instantanés du quotidien. Zéro upload vers le cloud.",
    description:
      "Outils PDF, image et multimédia fonctionnant localement sur votre ordinateur. Modifiez des contrats confidentiels, des bilans financiers et des documents personnels sans aucun envoi vers des serveurs distants.",
    keywords: [
      "SlickKit",
      "outils pdf privés",
      "éditeur pdf hors ligne",
      "sans upload cloud",
      "fusionner pdf sécurisé",
      "compresser pdf local",
      "conforme rgpd",
      "documents confidentiels",
    ],
    ogTitle: "SlickKit | Outils privés et instantanés du quotidien. Zéro upload vers le cloud.",
    ogDescription:
      "Des outils qui protègent votre vie privée. Modifiez des PDF confidentiels, des rapports financiers et des photos de manière 100% privée sur votre appareil.",
  },
  header: {
    skipToContent: "Passer au contenu",
    brandTag: "Studio",
    nav: {
      tools: "Nos outils",
      howItWorks: "Fonctionnement",
      versus: "Comparatifs",
      compliance: "Conformité",
      faq: "FAQ",
    },
    switchTheme: "Changer de thème",
    themeDaylight: "Passer au mode clair",
    themeDark: "Passer au mode sombre",
    openPdfToolkit: "Ouvrir SlickKit PDF",
    toggleMenu: "Basculer le menu",
  },
  hero: {
    eyebrow: "Outils privés pour le quotidien",
    headlineBefore: "Des outils qui placent votre ",
    headlineHighlight: "vie privée",
    headlineAfter: " au premier plan.",
    subtext:
      "Éditez des PDF confidentiels, des documents financiers et des photos directement sur votre ordinateur. Zéro téléversement dans le cloud et sans abonnement.",
    openPdfToolkit: "Ouvrir SlickKit PDF",
    exploreSuite: "Découvrir la suite",
    verifierTitle: "Garantie interactive de confidentialité locale",
    testWithFile: "Tester avec un fichier",
    presets: [
      {
        id: "finance-audit",
        name: "Finances_T4_2026.pdf",
        sizeLabel: "18.4 Mo · Finance",
        category: "Rapport financier confidentiel",
        speedLabel: "0.2 sec",
      },
      {
        id: "legal-nda",
        name: "Contrat_Client.pdf",
        sizeLabel: "6.2 Mo · Juridique",
        category: "Accord d'entreprise privé",
        speedLabel: "0.1 sec",
      },
      {
        id: "tax-return",
        name: "Declaration_Impots_2026.pdf",
        sizeLabel: "12.8 Mo · Personnel",
        category: "Document fiscal sensible",
        speedLabel: "0.2 sec",
      },
    ],
    docLabel: "Document",
    speedLabel: "Vitesse",
    opening: "Ouverture...",
    instantPrefix: "Instantané",
    cloudUploadsLabel: "Envois vers le cloud",
    zeroFilesUploaded: "0 fichier téléversé",
    localGuarantee: "Reste à 100% sur votre ordinateur.",
    useCasesTitle: "Conçu pour ceux qui manipulent des documents sensibles au quotidien",
    useCases: {
      finance: "Finance & Banque",
      legal: "Contrats juridiques",
      company: "Entreprise & RH",
      personal: "Impôts & Pièces d'identité",
      office: "Travail quotidien de bureau",
    },
  },
  productSuite: {
    sectionTitle: "Une boîte à outils simple pour vos fichiers quotidiens.",
    sectionSubtext:
      "Des utilitaires rapides et simples pour vos documents, photos et médias. Tout se déroule sur votre propre machine afin que vos documents confidentiels ne soient jamais exposés.",
    availableNow: "DISPONIBLE DÈS MAINTENANT",
    comingSoon: "EN DÉVELOPPEMENT",
    notifyMe: "Être informé de la sortie",
    pdf: {
      title: "SlickKit PDF",
      tag: "PDFs quotidiens et confidentiels",
      description:
        "Assemblez, séparez, compressez et réorganisez vos PDF en quelques secondes. Idéal pour les bilans, contrats, factures et déclarations que vous ne devez pas envoyer sur le web.",
      openToolkit: "Ouvrir SlickKit PDF",
      previewModes: {
        compress: {
          label: "Compresser",
          desc: "Réduisez la taille jusqu'à 80% sans perdre en lisibilité.",
          stat: "14.2 Mo → 2.8 Mo en 0.4s",
        },
        merge: {
          label: "Fusionner",
          desc: "Rassemblez rapports, annexes et contrats numérisés sans effort.",
          stat: "3 documents combinés localement",
        },
        rotate: {
          label: "Pivoter",
          desc: "Corrigez l'orientation des pages numérisées à l'envers en 1 clic.",
          stat: "Réorientation instantanée",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Optimisation visuelle côté client",
      description:
        "Convertissez par lots, supprimez les métadonnées et compressez vos fichiers PNG, JPEG et WebP directement avec votre processeur graphique.",
      previewTitle: "Compression WebP et AVIF matérielle",
      qualityLabel: "Qualité visée",
      reductionLabel: "Espace économisé",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Sécurité & caviardage local",
      description:
        "Nettoyez les documents confidentiels, masquez les numéros sensibles, supprimez les métadonnées cachées et protégez par mot de passe avant tout envoi.",
      previewTitle: "Purge des métadonnées et sécurité",
      exifLabel: "Supprimer balises GPS & EXIF",
      passphraseLabel: "Chiffrement côté client",
    },
    video: {
      title: "SlickKit Video",
      tag: "Découpeur vidéo & média sur l'appareil",
      description:
        "Découpez des captures d'écran, convertissez des vidéos MP4 en WebM légers et supprimez les pistes audio sans aucun envoi réseau avec WebAssembly FFmpeg.",
      previewTitle: "Compresseur vidéo 100% hors cloud",
      formatLabel: "Format de sortie",
      trimLabel: "Découpe rapide sans perte",
    },
  },
  benchmark: {
    sectionTitle: "Pourquoi le traitement local surpasse le cloud.",
    sectionSubtext:
      "Les outils en ligne traditionnels téléversent vos fichiers confidentiels sur des serveurs distants. SlickKit traite tout directement dans la mémoire de votre machine.",
    workloads: [
      {
        id: "tax-forms",
        label: "Documents fiscaux et bancaires",
        cloudTimeSec: "25 sec",
        localTimeSec: "Instantané",
        cloudRiskNote: "Téléversé sur les serveurs d'un tiers",
        benefitBadge: "100% Privé",
      },
      {
        id: "finance-report",
        label: "Rapport financier confidentiel",
        cloudTimeSec: "45 sec",
        localTimeSec: "Instantané",
        cloudRiskNote: "Enfreint les politiques de confidentialité",
        benefitBadge: "Sûr pour l'entreprise",
      },
      {
        id: "client-deck",
        label: "Gros document de 200 pages",
        cloudTimeSec: "2+ min",
        localTimeSec: "Moins de 1 sec",
        cloudRiskNote: "Souvent bloqué par des limites de taille payantes",
        benefitBadge: "Aucune limite de taille",
      },
    ],
    cloudHeading: "Services Cloud Traditionnels",
    cloudSubheading: "Upload → File d'attente → Téléchargement",
    localHeading: "Moteur Silicium SlickKit",
    localSubheading: "Zéro transit réseau · Traitement direct en RAM",
    privacyVerdict: "Zéro téléversement garanti",
    privacyVerdictDesc:
      "Vos documents ne transitent jamais sur internet. Vous pouvez couper totalement votre connexion Wi-Fi et SlickKit continuera de fonctionner parfaitement.",
  },
  manifesto: {
    titleBefore: "Conçu pour votre ",
    titleHighlight: "tranquillité d'esprit.",
    thesisP1:
      "Chaque année, des millions de contrats légaux, déclarations d'impôts et audits financiers sont envoyés sur des sites de conversion en ligne sans précaution.",
    thesisP2:
      "Nous pensons que les outils essentiels doivent être privés, instantanés et vous appartenir, sans abonnement mensuel de 20 €.",
    principles: [
      {
        title: "Sûr pour les fichiers confidentiels & financiers",
        badge: "NE QUITTE JAMAIS VOTRE APPAREIL",
        tagline: "Pensé pour les fichiers que vous ne pouvez envoyer nulle part.",
        description:
          "Que vous prépariez des bilans trimestriels, vérifiiez un contrat sous NDA ou compiliez des dossiers RH et fiscaux, vos documents restent exclusivement sur votre ordinateur. Aucune fuite vers des tiers n'est possible.",
        points: [
          "Recommandé pour les dossiers bancaires, juridiques et personnels",
          "Vos fichiers ne sont jamais téléversés sur aucun serveur distant",
          "Coupez votre Wi-Fi et travaillez en toute sérénité",
        ],
      },
      {
        title: "Licence à vie unique. Zéro abonnement.",
        badge: "PAYEZ UNE FOIS, POSSÉDEZ POUR TOUJOURS",
        tagline: "Arrêtez de payer 20 € par mois juste pour modifier un PDF.",
        description:
          "Vous ne devriez pas avoir à louer des outils informatiques basiques. Comme votre propre machine effectue le travail, nous n'avons pas de factures de serveurs massives à répercuter. Utilisez nos outils gratuitement ou profitez d'une licence permanente.",
        points: [
          "Aucun prélèvement récurrent ni renouvellement automatique caché",
          "Achetez une seule fois et conservez votre outil pour toujours",
          "Fonctions essentielles accessibles instantanément sans inscription",
        ],
      },
      {
        title: "Vitesse immédiate sans attendre d'envoi",
        badge: "SANS FILE D'ATTENTE NI LIMITE",
        tagline: "Ouvrez un rapport de 300 pages aussi vite qu'une note d'une page.",
        description:
          "Fini les barres de chargement interminables ou les blocages de taille de fichier lors d'échéances urgentes. Comme rien ne circule sur internet, même les gros documents et scans haute résolution s'ouvrent en une fraction de seconde.",
        points: [
          "Fonctionne sans ralentissement sur les Wi-Fi lents d'hôtels ou de trains",
          "Gérez de volumineux dossiers financiers sans latence",
          "Environnement de travail serein sans publicité ni pop-ups",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Foire aux questions.",
    sectionSubtext: "Tout ce que vous devez savoir sur notre architecture de sécurité et notre technologie.",
    items: [
      {
        category: "Confidentialité & Sécurité",
        question: "Mes documents sont-ils envoyés sur des serveurs lors de l'utilisation de SlickKit PDF ?",
        answer:
          "Non. SlickKit PDF fonctionne à 100% en local sur votre ordinateur grâce à JavaScript, aux Web Workers et à WebAssembly. Vos documents ne quittent jamais votre machine et ne sont jamais enregistrés sur des serveurs distants. Vous pouvez le constater à tout moment dans l'onglet Réseau des outils de développement de votre navigateur : aucun octet de document n'est transmis.",
      },
      {
        category: "Exécution hors ligne",
        question: "Puis-je utiliser SlickKit PDF sans connexion internet ?",
        answer:
          "Oui. Dès que l'application est chargée dans votre navigateur ou installée en tant que Progressive Web App (PWA), tous les modules s'exécutent localement. Vous pouvez couper votre Wi-Fi, travailler en avion ou dans des environnements sécurisés en toute autonomie.",
      },
      {
        category: "Légalité & Conformité",
        question: "SlickKit PDF est-il adapté aux contrats confidentiels et bilans comptables ?",
        answer:
          "Oui. Zéro donnée ne circulant sur le réseau, SlickKit respecte scrupuleusement les accords de confidentialité d'entreprise, les normes financières et les exigences du RGPD puisqu'aucun traitement par un sous-traitant n'a lieu.",
      },
      {
        category: "Comparatif & Performances",
        question: "Quelle différence entre SlickKit PDF et des services comme iLovePDF ou Smallpdf ?",
        answer:
          "Les services en ligne classiques envoient vos fichiers sur des serveurs distants où ils patientent en file d'attente et sont stockés temporairement. SlickKit supprime complètement les étapes de téléversement et de téléchargement en traitant tout directement dans la mémoire de votre ordinateur, garantissant rapidité, sécurité et absence d'abonnements mensuels.",
      },
      {
        category: "Limites & Tarifs",
        question: "Existe-t-il des limites de taille de fichier ou des frais cachés ?",
        answer:
          "Il n'y a aucune limite artificielle de serveur. Les fichiers étant traités par les ressources de votre appareil, la seule limite est la mémoire vive disponible sur votre équipement. SlickKit est utilisable sans inscription, sans carte bancaire et sans abonnement.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Traitez vos documents confidentiels en toute sérénité.",
    launchBannerSubtext:
      "Ouvrez SlickKit PDF directement dans votre navigateur. Aucun envoi dans le cloud, aucune création de compte requise et aucun abonnement mensuel.",
    openPdfToolkit: "Ouvrir SlickKit PDF",
    exploreSuite: "Découvrir la suite",
    brandDescription:
      "Des outils privés et exécutés côté client, conçus pour les particuliers et professionnels manipulant des documents sensibles.",
    offlineMode: "Prêt hors-ligne · 100% Côté Client",
    onlineMode: "Connecté · Zéro transfert de données cloud",
    globalEditions: "ÉDITIONS INTERNATIONALES (9 LANGUES) :",
    colProducts: "Produits",
    colComparisons: "Comparatifs",
    colCompliance: "Conformité & Sécurité",
    colCompany: "Légal & Confiance",
    copyright: "SlickKit Studio. Tous droits réservés. Aucune télémétrie, aucun pistage cloud.",
    terms: "Conditions d'utilisation",
    privacy: "Politique de confidentialité",
    refunds: "Politique de remboursement",
    contact: "Contact & Support",
  },
};
