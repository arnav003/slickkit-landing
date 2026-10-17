import React from "react";
import { Locale, DEFAULT_LOCALE } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

export function JsonLd({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const dict = getDictionary(locale);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SlickKit PDF",
    url: `https://www.slickkit.dev/pdf/${locale}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All (Modern Web Browser, Windows, macOS, Linux, iOS, Android)",
    browserRequirements: "Requires JavaScript, HTML5, Web Workers, WebAssembly",
    description: dict.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1420",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "SlickKit Studio",
      url: "https://www.slickkit.dev",
    },
    inLanguage: [locale],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
