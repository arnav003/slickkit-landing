import type { LandingDictionary } from "./dictionary-types";

export const enDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
    description:
      "Everyday PDF, image, and media tools that work privately on your own computer. Edit confidential contracts, financial statements, and personal files with zero cloud uploads and no monthly subscriptions.",
    keywords: [
      "SlickKit",
      "private pdf tools",
      "offline pdf editor",
      "zero cloud uploads",
      "merge pdf without upload",
      "client-side pdf compressor",
      "gdpr compliant pdf tools",
      "confidential document editor",
      "no subscription pdf",
      "local file tools",
    ],
    ogTitle: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
    ogDescription:
      "Everyday file tools that keep your documents yours. Edit confidential PDFs, financial reports, and photos privately on your device with no subscriptions.",
  },
  header: {
    skipToContent: "Skip to content",
    brandTag: "Studio",
    nav: {
      tools: "Our Tools",
      howItWorks: "How It Works",
      versus: "Versus",
      compliance: "Compliance",
      faq: "FAQ",
    },
    switchTheme: "Switch color theme",
    themeDaylight: "Switch to daylight mode",
    themeDark: "Switch to dark mode",
    openPdfToolkit: "Open PDF Toolkit",
    toggleMenu: "Toggle navigation menu",
  },
  hero: {
    eyebrow: "Private Everyday Tools",
    headlineBefore: "Everyday file tools that ",
    headlineHighlight: "privacy",
    headlineAfter: " first.",
    subtext:
      "Edit confidential PDFs, financial documents, and photos right on your computer. Zero cloud uploads and no monthly subscriptions.",
    openPdfToolkit: "Open PDF Toolkit",
    exploreSuite: "Explore Suite",
    verifierTitle: "Interactive On-Device Privacy Guarantee",
    testWithFile: "Test With Any File",
    presets: [
      {
        id: "finance-audit",
        name: "Q4_Financials_2026.pdf",
        sizeLabel: "18.4 MB · Finance",
        category: "Confidential Financial Report",
        speedLabel: "0.2 sec",
      },
      {
        id: "legal-nda",
        name: "Client_Contract.pdf",
        sizeLabel: "6.2 MB · Legal",
        category: "Private Company Agreement",
        speedLabel: "0.1 sec",
      },
      {
        id: "tax-return",
        name: "Tax_Return_2026.pdf",
        sizeLabel: "12.8 MB · Personal",
        category: "Sensitive Personal Record",
        speedLabel: "0.2 sec",
      },
    ],
    docLabel: "Document",
    speedLabel: "Speed",
    opening: "Opening...",
    instantPrefix: "Instant",
    cloudUploadsLabel: "Cloud Uploads",
    zeroFilesUploaded: "0 Files Uploaded",
    localGuarantee: "Stays 100% on your computer.",
    useCasesTitle: "Built for people who handle sensitive documents every day",
    useCases: {
      finance: "Finance & Banking",
      legal: "Legal Contracts",
      company: "Company & HR Files",
      personal: "Personal Tax & IDs",
      office: "Daily Office Work",
    },
  },
  productSuite: {
    sectionTitle: "One simple toolkit for your daily files.",
    sectionSubtext:
      "Fast, easy-to-use utilities for your everyday documents, photos, and media. Everything happens right on your own computer so your confidential files never get uploaded anywhere.",
    availableNow: "AVAILABLE NOW",
    comingSoon: "IN PROGRESS",
    notifyMe: "Get notified when ready",
    pdf: {
      title: "SlickKit PDF",
      tag: "Everyday & Confidential PDFs",
      description:
        "Combine, split, shrink, and rearrange PDFs in seconds. Perfect for financial statements, client contracts, invoices, and tax forms that you cannot upload to public websites.",
      openToolkit: "Open PDF Toolkit",
      previewModes: {
        compress: {
          label: "Compress",
          desc: "Reduce file sizes up to 80% without losing readable clarity.",
          stat: "14.2 MB → 2.8 MB in 0.4s",
        },
        merge: {
          label: "Merge",
          desc: "Join multi-page reports, exhibits, and scanned contracts seamlessly.",
          stat: "3 documents combined locally",
        },
        rotate: {
          label: "Rotate",
          desc: "Fix upside-down scanned tax records and orientation errors in 1 click.",
          stat: "Instant page reorientation",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Client-Side Visual Optimization",
      description:
        "Batch convert raw captures, strip metadata, and compress PNG, JPEG, and WebP assets right on your graphics hardware.",
      previewTitle: "Hardware WebP & AVIF Compression",
      qualityLabel: "Target Quality",
      reductionLabel: "Storage Saved",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Local Document Security & Redaction",
      description:
        "Sanitize sensitive documents, redact social security numbers, erase hidden metadata, and password-protect PDFs before emailing.",
      previewTitle: "Metadata & Document Sanitization",
      exifLabel: "Strip GPS & EXIF Tags",
      passphraseLabel: "Client-Side Encryption",
    },
    video: {
      title: "SlickKit Video",
      tag: "On-Device Screen & Media Trimmer",
      description:
        "Quickly trim screen recordings, convert MP4 to lightweight WebM clips, and strip audio tracks locally using WebAssembly FFmpeg.",
      previewTitle: "Zero-Cloud Video Compressor",
      formatLabel: "Container Output",
      trimLabel: "Fast Lossless Trim",
    },
  },
  benchmark: {
    sectionTitle: "Why local processing beats the cloud.",
    sectionSubtext:
      "Traditional online PDF tools upload your confidential files to remote servers. SlickKit processes everything right inside your computer's memory.",
    workloads: [
      {
        id: "tax-forms",
        label: "Personal Tax & Bank Forms",
        cloudTimeSec: "25 sec",
        localTimeSec: "Instant",
        cloudRiskNote: "Uploaded to a stranger's cloud server",
        benefitBadge: "100% Private",
      },
      {
        id: "finance-report",
        label: "Confidential Financial Report",
        cloudTimeSec: "45 sec",
        localTimeSec: "Instant",
        cloudRiskNote: "Violates company & client privacy policies",
        benefitBadge: "Safe for Work",
      },
      {
        id: "client-deck",
        label: "Large 200-Page Presentation",
        cloudTimeSec: "2+ min",
        localTimeSec: "Under 1 sec",
        cloudRiskNote: "Often blocked by 'File Too Large' paywalls",
        benefitBadge: "No Size Limits",
      },
    ],
    cloudHeading: "Legacy Cloud Services",
    cloudSubheading: "Upload → Remote Queue → Download",
    localHeading: "SlickKit Silicon Engine",
    localSubheading: "Zero Network Hops · Direct In-Memory",
    privacyVerdict: "Zero Uploads Guaranteed",
    privacyVerdictDesc:
      "Your documents are never transmitted across the internet. You can turn off your internet connection completely and SlickKit will continue to work flawlessly.",
  },
  manifesto: {
    titleBefore: "Built for your ",
    titleHighlight: "peace of mind.",
    thesisP1:
      "Every year, millions of confidential legal contracts, personal tax filings, and company financial audits are uploaded to random conversion websites without a second thought.",
    thesisP2:
      "We believe that basic everyday file tools should be private, instantaneous, and owned outright — not rented for $20 every month.",
    principles: [
      {
        title: "Safe for Confidential & Financial Work",
        badge: "NEVER LEAVES YOUR DEVICE",
        tagline: "Built for files you aren't allowed to upload anywhere.",
        description:
          "Whether you are preparing quarterly financial statements, reviewing a confidential company contract, organizing HR records, or combining personal tax forms, your documents stay strictly on your own computer. They can never leak to a third-party server.",
        points: [
          "Trusted for banking, finance, legal, corporate, and personal documents",
          "Your files are never uploaded to any cloud server at any point",
          "Turn off your Wi-Fi and keep working with complete peace of mind",
        ],
      },
      {
        title: "One-Time Lifetime Pass. Zero Subscriptions.",
        badge: "PAY ONCE, OWN FOREVER",
        tagline: "Stop paying $20 every month just to edit a PDF.",
        description:
          "You should not have to rent basic everyday file tools. Because your own computer handles the work, we don't have massive cloud server bills to pass on to you. Use our core daily tools for free, or get a simple one-time lifetime pass.",
        points: [
          "No monthly recurring bills or sneaky auto-renewal traps",
          "Pay once for a lifetime pass and own your tools forever",
          "Core everyday features work right away without even creating an account",
        ],
      },
      {
        title: "Instant Speed With No Upload Waiting",
        badge: "NO FILE SIZE QUEUES",
        tagline: "Open a 300-page report as fast as a 1-page note.",
        description:
          "Stop staring at slow upload bars or hitting frustrating file-size limits when you are on a deadline. Because nothing travels back and forth over the internet, even huge documents and high-resolution scans open and save in a split second.",
        points: [
          "Works effortlessly even on slow hotel, airport, or café Wi-Fi",
          "Handle large multi-page financial decks and scans without lag",
          "Calm, clutter-free workspace with zero ads or pop-ups",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Frequently asked questions.",
    sectionSubtext: "Everything you need to know about our privacy architecture and technology.",
    items: [
      {
        category: "Privacy & Security",
        question: "Are my documents uploaded to any server when using SlickKit PDF?",
        answer:
          "No. SlickKit PDF operates 100% locally on your computer using client-side JavaScript, Web Workers, and WebAssembly. Your documents never leave your device and are never uploaded to any cloud server or third-party storage. You can verify this at any time by opening your browser's Developer Tools Network Tab — you will see zero document bytes transmitted.",
      },
      {
        category: "Offline Execution",
        question: "Can I use SlickKit PDF completely offline without an internet connection?",
        answer:
          "Yes. Once the web application is loaded in your browser or installed as a Progressive Web App (PWA), all processing engines run locally on your device. You can turn off your Wi-Fi, work on an airplane, or operate in high-security air-gapped environments with complete functionality.",
      },
      {
        category: "Compliance & Legal",
        question: "Is SlickKit PDF safe for confidential contracts, NDAs, and financial records?",
        answer:
          "Yes. Because zero bytes are transmitted across the network, SlickKit complies with strict corporate NDA standards, financial data security regulations, and GDPR principles for zero third-party data processing. Your legal contracts, bank statements, and tax documents stay completely within your local custody.",
      },
      {
        category: "Comparison & Speed",
        question: "How does SlickKit PDF compare to online tools like iLovePDF or Smallpdf?",
        answer:
          "Traditional online PDF services upload your sensitive documents to remote servers where they are queued, processed, and temporarily stored. SlickKit eliminates the upload and download steps entirely by processing files directly in your computer's local memory, making it safer, instantaneous for large files, and free from monthly subscription paywalls.",
      },
      {
        category: "Limits & Cost",
        question: "Are there any file size limits or paywalled restrictions?",
        answer:
          "There are no artificial server payload limits. Because files are processed locally using your device's CPU and memory, the only limit is the available RAM of your device. SlickKit is completely free with no subscriptions, no account sign-ups, and no recurring credit card charges.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Handle your confidential documents with confidence.",
    launchBannerSubtext:
      "Open SlickKit PDF right in your browser. Zero cloud uploads, no account sign-up required, and no recurring monthly subscriptions.",
    openPdfToolkit: "Open PDF Toolkit",
    exploreSuite: "Explore Suite",
    brandDescription:
      "Private, client-side everyday tools built for individuals and professionals who handle confidential documents.",
    offlineMode: "Offline Ready · 100% Client-Side",
    onlineMode: "Connected · Zero Cloud Data Transit",
    globalEditions: "GLOBAL EDITIONS (9 LANGUAGES):",
    colProducts: "Products",
    colComparisons: "Comparisons",
    colCompliance: "Compliance & Security",
    colCompany: "Legal & Trust",
    copyright: "SlickKit Studio. All rights reserved. Zero telemetry, zero cloud tracking.",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    refunds: "Refund Policy",
    contact: "Contact & Support",
  },
};
