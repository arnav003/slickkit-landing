import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.slickkit.dev";
  const now = new Date();

  // 9 Supported languages for SlickKit
  const languageCodes = [
    "en",
    "es",
    "de",
    "fr",
    "pt",
    "it",
    "ro",
    "ru",
    "hu",
  ] as const;

  // Language alternates for the landing page editions
  const landingLanguageAlternates: Record<string, string> = {
    en: baseUrl,
    "en-US": baseUrl,
    es: `${baseUrl}/es`,
    fr: `${baseUrl}/fr`,
    de: `${baseUrl}/de`,
    pt: `${baseUrl}/pt`,
    it: `${baseUrl}/it`,
    ro: `${baseUrl}/ro`,
    ru: `${baseUrl}/ru`,
    hu: `${baseUrl}/hu`,
    "x-default": baseUrl,
  };

  // Language alternates for the PDF toolkit editions
  const pdfLanguageAlternates: Record<string, string> = {};
  for (const lang of languageCodes) {
    pdfLanguageAlternates[lang] = `${baseUrl}/pdf/${lang}`;
  }
  pdfLanguageAlternates["x-default"] = `${baseUrl}/pdf/en`;

  // Base entries
  const entries: MetadataRoute.Sitemap = [
    // Main Root Landing Page
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: landingLanguageAlternates,
      },
    },
    // PDF Toolkit Gateway
    {
      url: `${baseUrl}/pdf`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
      alternates: {
        languages: pdfLanguageAlternates,
      },
    },
  ];

  // Multilingual Landing Page entries
  for (const lang of languageCodes) {
    entries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: landingLanguageAlternates,
      },
    });
  }

  // Multilingual PDF entries
  for (const lang of languageCodes) {
    entries.push({
      url: `${baseUrl}/pdf/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: pdfLanguageAlternates,
      },
    });
  }

  // Versus comparison pages
  const versusRoutes = [
    "/vs",
    "/vs/ilovepdf",
    "/vs/smallpdf",
    "/vs/adobe-acrobat",
  ];

  for (const route of versusRoutes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // Compliance & security pages
  const complianceRoutes = [
    "/compliance",
    "/compliance/gdpr-confidentiality",
    "/compliance/local-processing-security",
  ];

  for (const route of complianceRoutes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Competitor safety & privacy evaluations
  const safetyRoutes = ["/is-ilovepdf-safe", "/is-smallpdf-safe"];

  for (const route of safetyRoutes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    });
  }

  // Industry & persona vertical solution pages
  const verticalRoutes = ["/for/legal", "/for/finance", "/for/healthcare"];

  for (const route of verticalRoutes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    });
  }

  return entries;
}
