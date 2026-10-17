export interface SamplePreset {
  id: string;
  name: string;
  sizeLabel: string;
  category: string;
  speedLabel: string;
}

export interface WorkloadOption {
  id: string;
  label: string;
  cloudTimeSec: string;
  localTimeSec: string;
  cloudRiskNote: string;
  benefitBadge: string;
}

export interface ManifestoPrinciple {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface FAQItemData {
  question: string;
  answer: string;
  category: string;
}

export interface LandingDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  header: {
    skipToContent: string;
    brandTag: string;
    nav: {
      tools: string;
      howItWorks: string;
      versus: string;
      compliance: string;
      faq: string;
    };
    switchTheme: string;
    themeDaylight: string;
    themeDark: string;
    openPdfToolkit: string;
    toggleMenu: string;
  };
  hero: {
    eyebrow: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    subtext: string;
    openPdfToolkit: string;
    exploreSuite: string;
    verifierTitle: string;
    testWithFile: string;
    presets: SamplePreset[];
    docLabel: string;
    speedLabel: string;
    opening: string;
    instantPrefix: string;
    cloudUploadsLabel: string;
    zeroFilesUploaded: string;
    localGuarantee: string;
    useCasesTitle: string;
    useCases: {
      finance: string;
      legal: string;
      company: string;
      personal: string;
      office: string;
    };
  };
  productSuite: {
    sectionTitle: string;
    sectionSubtext: string;
    availableNow: string;
    comingSoon: string;
    notifyMe: string;
    pdf: {
      title: string;
      tag: string;
      description: string;
      openToolkit: string;
      previewModes: {
        compress: { label: string; desc: string; stat: string };
        merge: { label: string; desc: string; stat: string };
        rotate: { label: string; desc: string; stat: string };
      };
    };
    image: {
      title: string;
      tag: string;
      description: string;
      previewTitle: string;
      qualityLabel: string;
      reductionLabel: string;
    };
    vault: {
      title: string;
      tag: string;
      description: string;
      previewTitle: string;
      exifLabel: string;
      passphraseLabel: string;
    };
    video: {
      title: string;
      tag: string;
      description: string;
      previewTitle: string;
      formatLabel: string;
      trimLabel: string;
    };
  };
  benchmark: {
    sectionTitle: string;
    sectionSubtext: string;
    workloads: WorkloadOption[];
    cloudHeading: string;
    cloudSubheading: string;
    localHeading: string;
    localSubheading: string;
    privacyVerdict: string;
    privacyVerdictDesc: string;
  };
  manifesto: {
    titleBefore: string;
    titleHighlight: string;
    thesisP1: string;
    thesisP2: string;
    principles: ManifestoPrinciple[];
  };
  faq: {
    sectionTitle: string;
    sectionSubtext: string;
    items: FAQItemData[];
  };
  footer: {
    launchBannerTitle: string;
    launchBannerSubtext: string;
    openPdfToolkit: string;
    exploreSuite: string;
    brandDescription: string;
    offlineMode: string;
    onlineMode: string;
    globalEditions: string;
    colProducts: string;
    colComparisons: string;
    colCompliance: string;
    colCompany: string;
    copyright: string;
    terms: string;
    privacy: string;
    refunds: string;
    contact: string;
  };
}
