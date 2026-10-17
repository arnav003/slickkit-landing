import type { LandingDictionary } from "./dictionary-types";

export const deDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Private, sofortige Werkzeuge für den Alltag. Ohne Cloud-Uploads.",
    description:
      "Alltägliche PDF-, Bild- und Medienwerkzeuge, die privat direkt auf Ihrem Computer laufen. Bearbeiten Sie vertrauliche Verträge, Finanzberichte und persönliche Dokumente ohne Cloud-Uploads und ohne Abonnements.",
    keywords: [
      "SlickKit",
      "private pdf werkzeuge",
      "offline pdf bearbeiten",
      "ohne cloud upload",
      "pdf zusammenfügen datenschutz",
      "pdf komprimieren lokal",
      "dsgvo konform",
      "vertrauliche dokumente",
    ],
    ogTitle: "SlickKit | Private, sofortige Werkzeuge für den Alltag. Ohne Cloud-Uploads.",
    ogDescription:
      "Werkzeuge, die Ihre Privatsphäre schützen. Bearbeiten Sie vertrauliche PDFs, Finanzdokumente und Bilder lokal auf Ihrem Gerät ohne Abonnements.",
  },
  header: {
    skipToContent: "Zum Inhalt springen",
    brandTag: "Studio",
    nav: {
      tools: "Unsere Werkzeuge",
      howItWorks: "Funktionsweise",
      versus: "Vergleich",
      compliance: "Konformität",
      faq: "FAQ",
    },
    switchTheme: "Farbthema wechseln",
    themeDaylight: "Zu Tagmodus wechseln",
    themeDark: "Zu Nachtmodus wechseln",
    openPdfToolkit: "SlickKit PDF öffnen",
    toggleMenu: "Navigationsmenü umschalten",
  },
  hero: {
    eyebrow: "Private Alltagswerkzeuge",
    headlineBefore: "Alltägliche Dateiwerkzeuge mit Fokus auf Ihre ",
    headlineHighlight: "Privatsphäre",
    headlineAfter: ".",
    subtext:
      "Bearbeiten Sie vertrauliche PDFs, Finanzberichte und Fotos direkt auf Ihrem Computer. Keine Cloud-Uploads und keine monatlichen Abonnements.",
    openPdfToolkit: "SlickKit PDF öffnen",
    exploreSuite: "Werkzeuge entdecken",
    verifierTitle: "Interaktive Datenschutz-Garantie auf Ihrem Gerät",
    testWithFile: "Mit beliebiger Datei testen",
    presets: [
      {
        id: "finance-audit",
        name: "Q4_Finanzbericht_2026.pdf",
        sizeLabel: "18.4 MB · Finanzen",
        category: "Vertraulicher Finanzbericht",
        speedLabel: "0.2 Sek.",
      },
      {
        id: "legal-nda",
        name: "Mandanten_Vertrag.pdf",
        sizeLabel: "6.2 MB · Recht",
        category: "Vertrauliche Firmenvereinbarung",
        speedLabel: "0.1 Sek.",
      },
      {
        id: "tax-return",
        name: "Steuererklaerung_2026.pdf",
        sizeLabel: "12.8 MB · Privat",
        category: "Sensibles Steuerdokument",
        speedLabel: "0.2 Sek.",
      },
    ],
    docLabel: "Dokument",
    speedLabel: "Geschwindigkeit",
    opening: "Öffnen...",
    instantPrefix: "Sofort",
    cloudUploadsLabel: "Cloud-Uploads",
    zeroFilesUploaded: "0 Dateien hochgeladen",
    localGuarantee: "Bleibt zu 100% auf Ihrem Computer.",
    useCasesTitle: "Entwickelt für Menschen, die täglich mit sensiblen Dokumenten arbeiten",
    useCases: {
      finance: "Finanzen & Banken",
      legal: "Rechtsverträge",
      company: "Unternehmen & Personal",
      personal: "Steuern & Ausweise",
      office: "Tägliche Büroarbeit",
    },
  },
  productSuite: {
    sectionTitle: "Ein einfaches Toolkit für Ihre täglichen Dateien.",
    sectionSubtext:
      "Schnelle und unkomplizierte Werkzeuge für Ihre Dokumente, Fotos und Medien. Alles geschieht direkt auf Ihrem eigenen Computer, sodass vertrauliche Dateien niemals hochgeladen werden.",
    availableNow: "JETZT VERFÜGBAR",
    comingSoon: "IN ENTWICKLUNG",
    notifyMe: "Benachrichtigen, wenn fertig",
    pdf: {
      title: "SlickKit PDF",
      tag: "Alltägliche & vertrauliche PDFs",
      description:
        "Fügen Sie PDFs zusammen, teilen, komprimieren und sortieren Sie sie in Sekunden. Ideal für Finanzberichte, Verträge, Rechnungen und Steuerformulare, die nicht ins Internet gehören.",
      openToolkit: "SlickKit PDF öffnen",
      previewModes: {
        compress: {
          label: "Komprimieren",
          desc: "Reduzieren Sie Dateigrößen um bis zu 80% bei voller Lesbarkeit.",
          stat: "14.2 MB → 2.8 MB in 0.4s",
        },
        merge: {
          label: "Zusammenführen",
          desc: "Verbinden Sie Berichte, Anlagen und Scans nahtlos miteinander.",
          stat: "3 Dokumente lokal vereint",
        },
        rotate: {
          label: "Drehen",
          desc: "Korrigieren Sie falsch gescannte Steuerformulare mit einem Klick.",
          stat: "Sofortige Ausrichtung",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Clientseitige Bildoptimierung",
      description:
        "Stapelverarbeitung, Metadaten-Bereinigung und Kompression von PNG, JPEG und WebP direkt über Ihre Grafikhardware.",
      previewTitle: "Hardware-basierte WebP- & AVIF-Kompression",
      qualityLabel: "Zielqualität",
      reductionLabel: "Eingesparter Speicher",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Lokale Dokumentensicherheit & Schwärzung",
      description:
        "Bereinigen Sie Dokumente, schwärzen Sie sensible Angaben, löschen Sie versteckte Metadaten und schützen Sie PDFs vor dem E-Mail-Versand mit Passwörtern.",
      previewTitle: "Metadaten- & Dokumenten-Sanitizing",
      exifLabel: "GPS- & EXIF-Daten entfernen",
      passphraseLabel: "Clientseitige Verschlüsselung",
    },
    video: {
      title: "SlickKit Video",
      tag: "Lokaler Bildschirm- & Video-Trimmer",
      description:
        "Schneiden Sie Bildschirmaufnahmen, konvertieren Sie MP4 zu WebM und entfernen Sie Audiospuren lokal via WebAssembly FFmpeg.",
      previewTitle: "Cloud-freier Videokompressor",
      formatLabel: "Ausgabeformat",
      trimLabel: "Verlustfreier Schnitt",
    },
  },
  benchmark: {
    sectionTitle: "Warum lokale Verarbeitung die Cloud übertrifft.",
    sectionSubtext:
      "Herkömmliche Online-PDF-Tools laden Ihre vertraulichen Dateien auf fremde Server. SlickKit verarbeitet alles sicher im Arbeitsspeicher Ihres Computers.",
    workloads: [
      {
        id: "tax-forms",
        label: "Steuer- & Bankunterlagen",
        cloudTimeSec: "25 Sek.",
        localTimeSec: "Sofort",
        cloudRiskNote: "Auf fremde Server hochgeladen",
        benefitBadge: "100% Privat",
      },
      {
        id: "finance-report",
        label: "Vertraulicher Finanzbericht",
        cloudTimeSec: "45 Sek.",
        localTimeSec: "Sofort",
        cloudRiskNote: "Verletzt interne Datenschutzrichtlinien",
        benefitBadge: "Sicher im Beruf",
      },
      {
        id: "client-deck",
        label: "Große 200-Seiten-Präsentation",
        cloudTimeSec: "2+ Min.",
        localTimeSec: "Unter 1 Sek.",
        cloudRiskNote: "Häufig durch Dateigrößen-Limits blockiert",
        benefitBadge: "Keine Größenlimits",
      },
    ],
    cloudHeading: "Klassische Cloud-Dienste",
    cloudSubheading: "Upload → Warteschlange → Download",
    localHeading: "SlickKit Silicon-Engine",
    localSubheading: "Keine Netzwerklatenz · Direkt im RAM",
    privacyVerdict: "Garantierte Null-Uploads",
    privacyVerdictDesc:
      "Ihre Dokumente werden niemals über das Internet übertragen. Schalten Sie Ihr WLAN ab und SlickKit funktioniert uneingeschränkt weiter.",
  },
  manifesto: {
    titleBefore: "Entwickelt für Ihre ",
    titleHighlight: "vollkommene Ruhe.",
    thesisP1:
      "Jedes Jahr werden Millionen vertraulicher Verträge, Steuererklärungen und Finanzprüfungen unbedacht auf beliebige Online-Konverter hochgeladen.",
    thesisP2:
      "Wir glauben, dass alltägliche Dateiwerkzeuge privat, blitzschnell und Ihr Eigentum sein sollten – nicht für 20 € im Monat gemietet.",
    principles: [
      {
        title: "Sicher für vertrauliche & finanzielle Aufgaben",
        badge: "VERLÄSST NIEMALS IHR GERÄT",
        tagline: "Für Dateien, die Sie nirgendwo hochladen dürfen.",
        description:
          "Ob Quartalsbilanzen, NDA-Verträge, Personalakten oder Steuerunterlagen: Ihre Dokumente bleiben ausnahmslos auf Ihrem Rechner. Ein Datenabfluss an Dritte ist technisch ausgeschlossen.",
        points: [
          "Geschätzt für Banken, Finanzen, Recht und private Unterlagen",
          "Dateien werden zu keinem Zeitpunkt in eine Cloud geladen",
          "WLAN trennen und mit vollem Seelenfrieden weiterarbeiten",
        ],
      },
      {
        title: "Einmaliger Lebenszeit-Pass. Keine Abos.",
        badge: "EINMAL ZAHLEN, EWIG NUTZEN",
        tagline: "Keine 20 € pro Monat mehr, nur um ein PDF zu bearbeiten.",
        description:
          "Niemand sollte grundlegende Werkzeuge mieten müssen. Da Ihr eigener Computer rechnet, haben wir keine gigantischen Serverkosten abzuwälzen. Nutzen Sie Kernfunktionen gratis oder sichern Sie sich die Vollversion dauerhaft.",
        points: [
          "Keine wiederkehrenden Gebühren oder Abo-Fallen",
          "Einmal kaufen und das Werkzeug für immer besitzen",
          "Wesentliche Funktionen sofort und ohne Registrierung nutzbar",
        ],
      },
      {
        title: "Sofortige Geschwindigkeit ohne Wartezeit",
        badge: "KEINE WARTESCHLANGEN ODER LIMITS",
        tagline: "Öffnen Sie einen 300-Seiten-Bericht so schnell wie eine Notiz.",
        description:
          "Schluss mit zähen Ladebalken oder nervigen Upload-Limits vor Abgabefristen. Da nichts durch das Internet reist, öffnen und speichern selbst riesige Scans im Bruchteil einer Sekunde.",
        points: [
          "Funktioniert zuverlässig in langsamem Hotel- oder Bahn-WLAN",
          "Große Finanzberichte und Scans ohne Verzögerung handhaben",
          "Ruhige, übersichtliche Arbeitsumgebung ohne Werbung",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Häufig gestellte Fragen.",
    sectionSubtext: "Alles, was Sie über unsere Datenschutzarchitektur und Technik wissen müssen.",
    items: [
      {
        category: "Datenschutz & Sicherheit",
        question: "Werden meine Dokumente bei der Nutzung von SlickKit PDF auf Server übertragen?",
        answer:
          "Nein. SlickKit PDF arbeitet zu 100% lokal auf Ihrem Rechner mittels clientseitigem JavaScript, Web Workern und WebAssembly. Ihre Dokumente verlassen niemals Ihr Gerät. Sie können dies jederzeit über die Netzwerk-Registerkarte der Entwicklertools Ihres Browsers überprüfen: Es werden 0 Byte übertragen.",
      },
      {
        category: "Offline-Nutzung",
        question: "Kann ich SlickKit PDF komplett ohne Internetverbindung nutzen?",
        answer:
          "Ja. Sobald die Webanwendung im Browser geladen oder als Progressive Web App (PWA) installiert ist, laufen alle Verarbeitungsmodule lokal. Sie können das WLAN ausschalten, im Flugzeug arbeiten oder in hochsicheren isolierten Umgebungen arbeiten.",
      },
      {
        category: "Recht & Compliance",
        question: "Ist SlickKit PDF sicher für vertrauliche Verträge, NDAs und Finanzen?",
        answer:
          "Ja. Da keinerlei Daten über das Netzwerk übertragen werden, erfüllt SlickKit strenge Vertraulichkeitsvereinbarungen, Finanzregulierungen und DSGVO-Grundsätze, da keine Datenverarbeitung durch Dritte stattfindet.",
      },
      {
        category: "Vergleich & Leistung",
        question: "Wie schneidet SlickKit PDF im Vergleich zu Online-Diensten wie iLovePDF ab?",
        answer:
          "Herkömmliche Online-Dienste laden Ihre sensiblen Dokumente auf entfernte Server hoch, wo sie in Warteschlangen landen und zwischengespeichert werden. SlickKit eliminiert Uploads und Downloads vollständig, indem es Dateien direkt im Speicher Ihres Computers verarbeitet – sicherer, blitzschnell und ohne Abo-Zwang.",
      },
      {
        category: "Limits & Kosten",
        question: "Gibt es Dateigrößenbeschränkungen oder versteckte Kosten?",
        answer:
          "Es gibt keine künstlichen Serverlimits. Da Dateien lokal mit Ihrer Hardware berechnet werden, setzt nur der verfügbare Arbeitsspeicher Ihres Geräts die Grenze. SlickKit ist kostenfrei, ohne Pflichtabos und ohne Kontozwang nutzbar.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Bearbeiten Sie vertrauliche Dokumente mit vollem Vertrauen.",
    launchBannerSubtext:
      "Öffnen Sie SlickKit PDF direkt im Browser. Keine Cloud-Uploads, keine Registrierung und keine monatlichen Abonnements.",
    openPdfToolkit: "SlickKit PDF öffnen",
    exploreSuite: "Werkzeuge entdecken",
    brandDescription:
      "Private, clientseitige Alltagswerkzeuge für alle, die täglich mit sensiblen Dokumenten arbeiten.",
    offlineMode: "Offline-bereit · 100% Clientseitig",
    onlineMode: "Verbunden · Kein Datentransfer in die Cloud",
    globalEditions: "GLOBALE EDITIONEN (9 SPRACHEN):",
    colProducts: "Produkte",
    colComparisons: "Vergleiche",
    colCompliance: "Compliance & Sicherheit",
    colCompany: "Rechtliches & Vertrauen",
    copyright: "SlickKit Studio. Alle Rechte vorbehalten. Keine Telemetrie, kein Cloud-Tracking.",
    terms: "Nutzungsbedingungen",
    privacy: "Datenschutzerklärung",
    refunds: "Erstattungsrichtlinie",
    contact: "Kontakt & Hilfe",
  },
};
