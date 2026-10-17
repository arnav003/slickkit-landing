import type { LandingDictionary } from "./dictionary-types";

export const itDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Strumenti quotidiani privati e istantanei. Zero caricamenti cloud.",
    description:
      "Strumenti pratici per PDF, immagini e media che funzionano localmente sul tuo computer. Modifica contratti riservati, bilanci e documenti personali senza caricare nulla sul cloud.",
    keywords: [
      "SlickKit",
      "strumenti pdf privati",
      "editor pdf offline",
      "senza caricamento cloud",
      "unire pdf sicuro",
      "comprimere pdf locale",
      "conforme gdpr",
      "documenti riservati",
    ],
    ogTitle: "SlickKit | Strumenti quotidiani privati e istantanei. Zero caricamenti cloud.",
    ogDescription:
      "Strumenti per file che rispettano la tua privacy. Modifica PDF riservati, relazioni finanziarie e foto al 100% sul tuo dispositivo senza abbonamenti.",
  },
  header: {
    skipToContent: "Salta al contenuto",
    brandTag: "Studio",
    nav: {
      tools: "I Nostri Strumenti",
      howItWorks: "Come Funziona",
      versus: "Confronti",
      compliance: "Conformità",
      faq: "FAQ",
    },
    switchTheme: "Cambia tema colori",
    themeDaylight: "Passa alla modalità giorno",
    themeDark: "Passa alla modalità notte",
    openPdfToolkit: "Apri SlickKit PDF",
    toggleMenu: "Attiva/disattiva menu",
  },
  hero: {
    eyebrow: "Strumenti Privati per la Vita Quotidiana",
    headlineBefore: "Strumenti per i tuoi file che mettono la tua ",
    headlineHighlight: "privacy",
    headlineAfter: " al primo posto.",
    subtext:
      "Modifica PDF riservati, bilanci e foto direttamente sul tuo computer. Nessun caricamento su server cloud e nessun abbonamento mensile.",
    openPdfToolkit: "Apri SlickKit PDF",
    exploreSuite: "Esplora Strumenti",
    verifierTitle: "Garanzia Interattiva di Privacy sul Dispositivo",
    testWithFile: "Verifica con Qualsiasi File",
    presets: [
      {
        id: "finance-audit",
        name: "Finanza_Q4_2026.pdf",
        sizeLabel: "18.4 MB · Finanza",
        category: "Bilancio Finanziario Riservato",
        speedLabel: "0.2 sec",
      },
      {
        id: "legal-nda",
        name: "Contratto_Cliente.pdf",
        sizeLabel: "6.2 MB · Legale",
        category: "Accordo Aziendale Riservato",
        speedLabel: "0.1 sec",
      },
      {
        id: "tax-return",
        name: "Dichiarazione_Redditi_2026.pdf",
        sizeLabel: "12.8 MB · Personale",
        category: "Documento Fiscale Sensibile",
        speedLabel: "0.2 sec",
      },
    ],
    docLabel: "Documento",
    speedLabel: "Velocità",
    opening: "Apertura...",
    instantPrefix: "Istantaneo",
    cloudUploadsLabel: "Caricamenti Cloud",
    zeroFilesUploaded: "0 File Caricati",
    localGuarantee: "Resta al 100% sul tuo computer.",
    useCasesTitle: "Creato per chi gestisce quotidianamente documenti riservati",
    useCases: {
      finance: "Finanza & Banche",
      legal: "Contratti Legali",
      company: "Aziende & Risorse Umane",
      personal: "Fisco & Documenti di Identità",
      office: "Lavoro d'Ufficio Quotidiano",
    },
  },
  productSuite: {
    sectionTitle: "Una suite semplice per tutti i tuoi file di lavoro.",
    sectionSubtext:
      "Strumenti rapidi e intuitivi per documenti, immagini e media. Tutto viene elaborato direttamente sul tuo dispositivo per evitare che i dati confidenziali finiscano online.",
    availableNow: "DISPONIBILE ORA",
    comingSoon: "IN ARRIVO",
    notifyMe: "Avvisami quando pronto",
    pdf: {
      title: "SlickKit PDF",
      tag: "PDF Quotidiani & Riservati",
      description:
        "Unisci, dividi, comprimi e riorganizza PDF in pochi secondi. Perfetto per bilanci, contratti di clienti, fatture e dichiarazioni dei redditi che non puoi caricare su siti pubblici.",
      openToolkit: "Apri SlickKit PDF",
      previewModes: {
        compress: {
          label: "Comprimi",
          desc: "Riduci il peso del file fino all'80% mantenendo massima leggibilità.",
          stat: "14.2 MB → 2.8 MB in 0.4s",
        },
        merge: {
          label: "Unisci",
          desc: "Combina fascicoli multipagina, allegati e contratti scansionati.",
          stat: "3 documenti combinati localmente",
        },
        rotate: {
          label: "Ruota",
          desc: "Correggi documenti capovolti ed errori di orientamento con un click.",
          stat: "Riorientamento istantaneo",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Ottimizzazione Grafica sul Client",
      description:
        "Converti in blocco, ripulisci i metadati e comprimi immagini PNG, JPEG e WebP sfruttando l'hardware grafico del tuo dispositivo.",
      previewTitle: "Compressione Hardware WebP & AVIF",
      qualityLabel: "Qualità Obiettivo",
      reductionLabel: "Spazio Risparmiato",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Sicurezza Locale & Rimozione Dati",
      description:
        "Ripulisci documenti sensibili, oscura codici fiscali, rimuovi metadati nascosti e proteggi con password prima di inviare via email.",
      previewTitle: "Bonifica Metadati & Documenti",
      exifLabel: "Rimuovi Tag GPS & EXIF",
      passphraseLabel: "Crittografia sul Browser",
    },
    video: {
      title: "SlickKit Video",
      tag: "Ritaglio Video sul Dispositivo",
      description:
        "Ritaglia registrazioni dello schermo, converti MP4 in leggeri WebM e rimuovi tracce audio senza inviare nulla in rete grazie a WebAssembly FFmpeg.",
      previewTitle: "Compressore Video Senza Cloud",
      formatLabel: "Formato Output",
      trimLabel: "Taglio Veloce Senza Perdita",
    },
  },
  benchmark: {
    sectionTitle: "Perché l'elaborazione locale batte il cloud.",
    sectionSubtext:
      "I tradizionali strumenti PDF online caricano i tuoi documenti su server remoti. SlickKit elabora tutto all'interno della memoria RAM del tuo computer.",
    workloads: [
      {
        id: "tax-forms",
        label: "Moduli Fiscali & Bancari",
        cloudTimeSec: "25 sec",
        localTimeSec: "Istantaneo",
        cloudRiskNote: "Caricato sui server di sconosciuti",
        benefitBadge: "100% Privato",
      },
      {
        id: "finance-report",
        label: "Rapporto Finanziario Riservato",
        cloudTimeSec: "45 sec",
        localTimeSec: "Istantaneo",
        cloudRiskNote: "Viola le normative aziendali di riservatezza",
        benefitBadge: "Sicuro per il Lavoro",
      },
      {
        id: "client-deck",
        label: "Presentazione di 200 Pagine",
        cloudTimeSec: "2+ min",
        localTimeSec: "Meno di 1 sec",
        cloudRiskNote: "Spesso bloccato da limiti di dimensione",
        benefitBadge: "Nessun Limite di Peso",
      },
    ],
    cloudHeading: "Servizi Cloud Tradizionali",
    cloudSubheading: "Caricamento → Coda Remota → Download",
    localHeading: "Motore al Silicio SlickKit",
    localSubheading: "Zero Latenza di Rete · Diretto in Memoria",
    privacyVerdict: "Zero Caricamenti Garantito",
    privacyVerdictDesc:
      "I tuoi documenti non viaggiano mai su internet. Puoi disattivare completamente la connessione Wi-Fi e SlickKit continuerà a funzionare senza interruzioni.",
  },
  manifesto: {
    titleBefore: "Creato per la tua ",
    titleHighlight: "completa serenità.",
    thesisP1:
      "Ogni anno, milioni di contratti legali riservati, modelli fiscali e bilanci societari vengono caricati con leggerezza su siti di conversione sconosciuti.",
    thesisP2:
      "Crediamo che gli strumenti per i file quotidiani debbano essere privati, istantanei e di tua proprietà, non noleggiati per 20 € al mese.",
    principles: [
      {
        title: "Sicuro per Lavori Riservati & Finanziari",
        badge: "NON LASCIA MAI IL TUO DISPOSITIVO",
        tagline: "Progettato per file che non hai il permesso di caricare online.",
        description:
          "Sia che tu stia elaborando rendiconti trimestrali, esaminando accordi di riservatezza o unendo documenti fiscali personali, i tuoi file rimangono rigorosamente sul tuo computer. Nessuna fuga verso terzi.",
        points: [
          "Affidabile per documenti bancari, finanziari, legali e personali",
          "I tuoi file non vengono mai caricati su server cloud",
          "Spegni il Wi-Fi e lavora con la massima tranquillità",
        ],
      },
      {
        title: "Licenza a Vita Unica. Nessun Abbonamento.",
        badge: "PAGA UNA VOLTA, POSSIEDI PER SEMPRE",
        tagline: "Basta pagare 20 € ogni mese solo per modificare un PDF.",
        description:
          "Non dovresti pagare un canone mensile per strumenti di base. Poiché è il tuo computer a compiere il lavoro, non abbiamo enormi costi di server da addebitarti. Usa le funzioni base gratis o acquista la licenza a vita.",
        points: [
          "Nessun costo ricorrente né trappole di rinnovo automatico",
          "Acquista una volta e possiedi i tuoi strumenti per sempre",
          "Funzionalità principali pronte subito senza bisogno di registrarsi",
        ],
      },
      {
        title: "Velocità Istantanea Senza Code di Caricamento",
        badge: "NESSUNA ATTESA NÉ LIMITI",
        tagline: "Apri un documento di 300 pagine alla velocità di una sola riga.",
        description:
          "Dì addio a lente barre di caricamento o a fastidiosi limiti di peso quando sei sotto scadenza. Poiché nulla viaggia via internet, anche i file pesanti e le scansioni ad alta risoluzione si aprono e salvano in una frazione di secondo.",
        points: [
          "Funziona senza problemi su connessioni Wi-Fi lente di hotel o aerei",
          "Gestisci fascicoli voluminosi senza alcun rallentamento",
          "Ambiente di lavoro pulito, senza annunci pubblicitari o pop-up",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Domande frequenti.",
    sectionSubtext: "Tutto quello che c'è da sapere sulla nostra architettura di privacy e tecnologia.",
    items: [
      {
        category: "Privacy & Sicurezza",
        question: "I miei documenti vengono caricati su qualche server durante l'uso di SlickKit PDF?",
        answer:
          "No. SlickKit PDF opera al 100% in locale sul tuo computer utilizzando JavaScript lato client, Web Workers e WebAssembly. I tuoi documenti non lasciano mai il dispositivo e non vengono mai salvati su server cloud o memorie terze. Puoi verificarlo in qualsiasi istante nella scheda Rete degli Strumenti di Sviluppo del tuo browser: vedrai zero byte trasmessi.",
      },
      {
        category: "Utilizzo Offline",
        question: "Posso utilizzare SlickKit PDF completamente senza connessione internet?",
        answer:
          "Sì. Una volta caricata l'applicazione nel browser o installata come Progressive Web App (PWA), tutti i motori di elaborazione funzionano localmente. Puoi staccare il Wi-Fi, lavorare in aereo o in contesti ad alta sicurezza con piena operatività.",
      },
      {
        category: "Conformità & Legale",
        question: "SlickKit PDF è sicuro per accordi di riservatezza (NDA) e dati fiscali?",
        answer:
          "Sì. Non avvenendo alcun trasferimento di dati via rete, SlickKit rispetta gli standard aziendali di riservatezza, le normative sulla protezione dei dati finanziari e i principi del GDPR, dato che non sussiste trattamento da parte di terzi.",
      },
      {
        category: "Confronto & Prestazioni",
        question: "In cosa si differenzia SlickKit PDF da servizi online come iLovePDF o Smallpdf?",
        answer:
          "I servizi online tradizionali caricano i tuoi documenti su server remoti dove restano in coda e vengono conservati temporaneamente. SlickKit elimina i passaggi di upload e download elaborando i file direttamente nella memoria RAM del computer, risultando molto più sicuro, istantaneo per file pesanti e privo di abbonamenti.",
      },
      {
        category: "Limiti & Costi",
        question: "Ci sono limiti di dimensione dei file o costi nascosti?",
        answer:
          "Non esistono limiti artificiali imposti da server. I file vengono elaborati dalla CPU e dalla memoria del tuo dispositivo, per cui l'unico vincolo è la memoria RAM disponibile sul tuo computer. SlickKit è gratuito, senza registrazione obbligatoria e senza addebiti su carta.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Elabora i tuoi documenti riservati con totale fiducia.",
    launchBannerSubtext:
      "Apri SlickKit PDF direttamente nel tuo browser. Zero caricamenti su cloud, nessuna registrazione richiesta e nessun abbonamento mensile.",
    openPdfToolkit: "Apri SlickKit PDF",
    exploreSuite: "Esplora Strumenti",
    brandDescription:
      "Strumenti pratici e privati eseguiti sul client, creati per professionisti e privati che gestiscono documenti riservati.",
    offlineMode: "Pronto Offline · 100% Lato Client",
    onlineMode: "Connesso · Zero Trasferimento Dati Cloud",
    globalEditions: "EDIZIONI GLOBALI (9 LINGUE):",
    colProducts: "Prodotti",
    colComparisons: "Confronti",
    colCompliance: "Conformità & Sicurezza",
    colCompany: "Legale & Fiducia",
    copyright: "SlickKit Studio. Tutti i diritti riservati. Zero telemetria, zero tracciamento cloud.",
    terms: "Termini di Servizio",
    privacy: "Informativa sulla Privacy",
    refunds: "Politica di Rimborso",
    contact: "Contatto & Assistenza",
  },
};
