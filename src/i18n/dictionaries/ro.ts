import type { LandingDictionary } from "./dictionary-types";

export const roDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Instrumente zilnice private și instantanee. Fără încărcare în cloud.",
    description:
      "Utilitare practice pentru PDF, imagini și media care rulează local pe computerul tău. Editează contracte confidențiale, rapoarte financiare și documente personale fără a trimite fișiere în cloud.",
    keywords: [
      "SlickKit",
      "instrumente pdf private",
      "editor pdf offline",
      "fara upload in cloud",
      "unire pdf securizata",
      "comprimare pdf locala",
      "conformitate gdpr",
      "documente confidentiale",
    ],
    ogTitle: "SlickKit | Instrumente zilnice private și instantanee. Fără încărcare în cloud.",
    ogDescription:
      "Instrumente care respectă confidențialitatea fișierelor tale. Editează PDF-uri confidențiale, rapoarte fiscale și fotografii 100% pe dispozitivul tău, fără abonamente.",
  },
  header: {
    skipToContent: "Sari la conținut",
    brandTag: "Studio",
    nav: {
      tools: "Instrumente",
      howItWorks: "Cum funcționează",
      versus: "Comparații",
      compliance: "Conformitate",
      faq: "Întrebări frecvente",
    },
    switchTheme: "Schimbă tema de culoare",
    themeDaylight: "Comută la modul luminos",
    themeDark: "Comută la modul întunecat",
    openPdfToolkit: "Deschide SlickKit PDF",
    toggleMenu: "Comută meniul",
  },
  hero: {
    eyebrow: "Instrumente Private de Zi cu Zi",
    headlineBefore: "Instrumente de fișiere care pun ",
    headlineHighlight: "confidențialitatea",
    headlineAfter: " pe primul loc.",
    subtext:
      "Editează PDF-uri confidențiale, documente financiare și fotografii direct pe computerul tău. Zero încărcări în cloud și fără abonamente lunare.",
    openPdfToolkit: "Deschide SlickKit PDF",
    exploreSuite: "Explorează suita",
    verifierTitle: "Garanție interactivă de confidențialitate pe dispozitiv",
    testWithFile: "Testează cu orice fișier",
    presets: [
      {
        id: "finance-audit",
        name: "Finante_T4_2026.pdf",
        sizeLabel: "18.4 MB · Finanțe",
        category: "Raport financiar confidențial",
        speedLabel: "0.2 sec",
      },
      {
        id: "legal-nda",
        name: "Contract_Client.pdf",
        sizeLabel: "6.2 MB · Juridic",
        category: "Acord corporativ confidențial",
        speedLabel: "0.1 sec",
      },
      {
        id: "tax-return",
        name: "Declaratie_Venit_2026.pdf",
        sizeLabel: "12.8 MB · Personal",
        category: "Document fiscal sensibil",
        speedLabel: "0.2 sec",
      },
    ],
    docLabel: "Document",
    speedLabel: "Viteză",
    opening: "Se deschide...",
    instantPrefix: "Instantaneu",
    cloudUploadsLabel: "Încărcări în cloud",
    zeroFilesUploaded: "0 fișiere trimise",
    localGuarantee: "Rămâne 100% pe computerul tău.",
    useCasesTitle: "Creat pentru cei care gestionează documente sensibile în fiecare zi",
    useCases: {
      finance: "Finanțe & Bănci",
      legal: "Contracte juridice",
      company: "Companii & Resurse Umane",
      personal: "Taxe & Acte de identitate",
      office: "Activitate zilnică de birou",
    },
  },
  productSuite: {
    sectionTitle: "Un set simplu de instrumente pentru fișierele tale zilnice.",
    sectionSubtext:
      "Utilitare rapide și ușor de utilizat pentru documente, imagini și media. Totul rulează local pe propriul tău computer, astfel încât datele confidențiale nu ajung niciodată pe internet.",
    availableNow: "DISPONIBIL ACUM",
    comingSoon: "ÎN DEZVOLTARE",
    notifyMe: "Anunță-mă când este gata",
    pdf: {
      title: "SlickKit PDF",
      tag: "PDF-uri zilnice și confidențiale",
      description:
        "Unește, separă, comprimă și reordonează PDF-uri în câteva secunde. Ideal pentru bilanțuri, contracte comerciale, facturi și declarații fiscale pe care nu le poți încărca online.",
      openToolkit: "Deschide SlickKit PDF",
      previewModes: {
        compress: {
          label: "Comprimă",
          desc: "Redu dimensiunea fișierului cu până la 80% păstrând claritatea textului.",
          stat: "14.2 MB → 2.8 MB în 0.4s",
        },
        merge: {
          label: "Unește",
          desc: "Combină rapoarte de mai multe pagini, anexe și contracte scanate fără bătăi de cap.",
          stat: "3 documente combinate local",
        },
        rotate: {
          label: "Rotește",
          desc: "Corectează documentele scanate invers și erorile de orientare cu un singur clic.",
          stat: "Reorientare instantanee a paginii",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Optimizare vizuală în browser",
      description:
        "Convertește în serie, elimină metadatele și comprimă PNG, JPEG și WebP direct prin intermediul plăcii grafice.",
      previewTitle: "Compresie WebP și AVIF accelerată hardware",
      qualityLabel: "Calitate dorită",
      reductionLabel: "Spațiu economisit",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Securitate și anonimizare locală",
      description:
        "Curăță documentele sensibile, anonimizează date cu caracter personal, șterge metadatele ascunse și protejează prin parolă înainte de trimiterea pe e-mail.",
      previewTitle: "Igienizare metadate și documente",
      exifLabel: "Elimină etichete GPS & EXIF",
      passphraseLabel: "Criptare direct în browser",
    },
    video: {
      title: "SlickKit Video",
      tag: "Decupare video locală pe dispozitiv",
      description:
        "Decupează înregistrările de ecran, convertește MP4 în WebM compact și elimină pistele audio fără server folosind WebAssembly FFmpeg.",
      previewTitle: "Compresor video fără cloud",
      formatLabel: "Format rezultat",
      trimLabel: "Decupare rapidă fără pierderi",
    },
  },
  benchmark: {
    sectionTitle: "De ce procesarea locală întrece soluțiile cloud.",
    sectionSubtext:
      "Serviciile online clasice îți încarcă fișierele confidențiale pe servere îndepărtate. SlickKit prelucrează totul în memoria RAM a computerului tău.",
    workloads: [
      {
        id: "tax-forms",
        label: "Documente fiscale și bancare",
        cloudTimeSec: "25 sec",
        localTimeSec: "Instantaneu",
        cloudRiskNote: "Încărcat pe serverul unor necunoscuți",
        benefitBadge: "100% Privat",
      },
      {
        id: "finance-report",
        label: "Raport financiar confidențial",
        cloudTimeSec: "45 sec",
        localTimeSec: "Instantaneu",
        cloudRiskNote: "Încalcă politicile interne de confidențialitate",
        benefitBadge: "Sigur la serviciu",
      },
      {
        id: "client-deck",
        label: "Prezentare voluminoasă de 200 de pagini",
        cloudTimeSec: "2+ min",
        localTimeSec: "Sub 1 sec",
        cloudRiskNote: "Blocat frecvent de limite de dimensiune plătite",
        benefitBadge: "Fără limite de mărime",
      },
    ],
    cloudHeading: "Servicii Cloud Convenționale",
    cloudSubheading: "Încărcare → Coadă la distanță → Descărcare",
    localHeading: "Motorul Silicon SlickKit",
    localSubheading: "Zero salturi de rețea · Direct în memorie",
    privacyVerdict: "Zero încărcări garantat",
    privacyVerdictDesc:
      "Documentele tale nu călătoresc niciodată pe internet. Poți opri complet conexiunea la internet, iar SlickKit va continua să funcționeze perfect.",
  },
  manifesto: {
    titleBefore: "Construit pentru ",
    titleHighlight: "liniștea ta deplină.",
    thesisP1:
      "În fiecare an, milioane de contracte juridice confidențiale, dosare fiscale și audituri financiare sunt trimise fără prudență pe diverse site-uri de conversie.",
    thesisP2:
      "Credem că utilitarele esențiale trebuie să fie private, instantanee și în proprietatea ta deplină – nu închiriate pentru 100 lei pe lună.",
    principles: [
      {
        title: "Sigur pentru activități confidențiale și financiare",
        badge: "NU PĂRĂSEȘTE NICIODATĂ DISPOZITIVUL",
        tagline: "Creat pentru fișiere pe care nu ai voie să le încarci nicăieri.",
        description:
          "Fie că întocmești rapoarte financiare, verifici contracte cu clauze de confidențialitate sau compilezi dosare fiscale, fișierele tale rămân exclusiv pe computerul tău. Nu există riscul de a ajunge pe mâna unor terți.",
        points: [
          "De încredere pentru activități bancare, juridice, contabile și personale",
          "Fișierele nu sunt transmise niciodată către vreun server cloud",
          "Oprește Wi-Fi-ul și lucrează mai departe cu deplină siguranță",
        ],
      },
      {
        title: "Licență pe viață unică. Fără abonamente.",
        badge: "PLĂTEȘTE O DATĂ, DEȚINE PENTRU TOTDEAUNA",
        tagline: "Nu mai plăti abonamente lunare doar pentru a edita un PDF.",
        description:
          "Nu ar trebui să închiriezi instrumente elementare de birou. Deoarece dispozitivul tău face toată treaba, noi nu avem cheltuieli uriașe cu servere pe care să le transferăm către tine. Folosește gratuit funcțiile de bază sau alege licența permanentă.",
        points: [
          "Fără taxe recurente și fără capcane de reînnoire automată",
          "Cumpără o singură dată și deține instrumentele pe viață",
          "Funcțiile esențiale pot fi utilizate pe loc, fără a fi nevoie de cont",
        ],
      },
      {
        title: "Viteză imediată fără timpi de așteptare",
        badge: "FĂRĂ COZI DE AȘTEPTARE SAU LIMITE",
        tagline: "Deschide un raport de 300 de pagini la fel de repede ca o simplă notă.",
        description:
          "Adio bare lente de încărcare sau limite frustrante de dimensiune când ești pe ultima sută de metri. Deoarece datele nu circulă prin rețea, chiar și fișierele mari sau scanările detaliate se deschid și se salvează într-o fracțiune de secundă.",
        points: [
          "Funcționează fără probleme pe rețele lente din hoteluri sau trenuri",
          "Gestionează dosare financiare complexe fără întârzieri",
          "Mediu de lucru curat, fără reclame sau ferestre pop-up",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Întrebări frecvente.",
    sectionSubtext: "Tot ce trebuie să știi despre arhitectura noastră de confidențialitate și tehnologia utilizată.",
    items: [
      {
        category: "Confidențialitate & Securitate",
        question: "Sunt fișierele mele trimise pe vreun server la utilizarea SlickKit PDF?",
        answer:
          "Nu. SlickKit PDF funcționează 100% la nivel local pe computerul tău, folosind JavaScript pe client, Web Workers și WebAssembly. Documentele nu părăsesc niciodată dispozitivul și nu sunt încărcate în cloud sau pe alte servere. Poți verifica oricând acest lucru în fila Rețea din Instrumentele pentru Dezvoltatori ale browserului: vei vedea zero octeți transmiși.",
      },
      {
        category: "Utilizare Offline",
        question: "Pot folosi SlickKit PDF fără o conexiune activă la internet?",
        answer:
          "Da. Odată ce aplicația web s-a încărcat în browser sau a fost instalată ca Progressive Web App (PWA), toate componentele de calcul rulează local. Poți opri conexiunea Wi-Fi, poți lucra în avion sau în medii securizate izolate cu funcționalitate deplină.",
      },
      {
        category: "Conformitate & Reglementări",
        question: "Este SlickKit PDF adecvat pentru contracte confidențiale și documente bancare?",
        answer:
          "Da. Deoarece nu există transfer de date în rețea, SlickKit respectă acordurile de confidențialitate (NDA), regulamentele din domeniul financiar și cerințele GDPR, neexistând prelucrare de date de către terți.",
      },
      {
        category: "Comparație & Viteză",
        question: "Cum se compară SlickKit PDF cu platforme precum iLovePDF sau Smallpdf?",
        answer:
          "Platformele clasice din cloud transmit documentele pe servere unde acestea stau la rând și sunt salvate temporar. SlickKit elimină aceste etape de încărcare și descărcare, procesând totul direct în memoria RAM a calculatorului tău: mai sigur, instantaneu și fără abonamente lunare.",
      },
      {
        category: "Limite & Prețuri",
        question: "Există restricții de mărime a fișierelor sau costuri ascunse?",
        answer:
          "Nu există limite artificiale impuse de servere. Deoarece fișierele sunt prelucrate pe echipamentul tău, singura limită este memoria RAM disponibilă a dispozitivului. SlickKit este gratuit, fără abonamente obligatorii și fără a cere date de card.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Gestionează-ți documentele confidențiale cu deplină încredere.",
    launchBannerSubtext:
      "Deschide SlickKit PDF direct în browserul tău. Fără încărcări în cloud, fără creare de cont și fără plăți lunare recurente.",
    openPdfToolkit: "Deschide SlickKit PDF",
    exploreSuite: "Explorează suita",
    brandDescription:
      "Instrumente zilnice private executate pe client, create pentru profesioniștii și persoanele care lucrează cu documente confidențiale.",
    offlineMode: "Pregătit Offline · 100% pe Client",
    onlineMode: "Conectat · Zero Transfer de Date în Cloud",
    globalEditions: "EDIȚII GLOBALE (9 LIMBI):",
    colProducts: "Produse",
    colComparisons: "Comparații",
    colCompliance: "Conformitate & Securitate",
    colCompany: "Legal & Încredere",
    copyright: "SlickKit Studio. Toate drepturile rezervate. Fără telemetrie, fără monitorizare în cloud.",
    terms: "Termeni de utilizare",
    privacy: "Politica de confidențialitate",
    refunds: "Politica de rambursare",
    contact: "Contact & Asistență",
  },
};
