import React from "react";
import type { Metadata } from "next";
import { enDictionary } from "../i18n/dictionaries/en";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { JsonLd } from "../components/JsonLd";
import { LandingPageContent } from "../components/LandingPageContent";

const landingLanguageAlternates: Record<string, string> = {
  en: "https://www.slickkit.dev",
  "en-US": "https://www.slickkit.dev",
  es: "https://www.slickkit.dev/es",
  fr: "https://www.slickkit.dev/fr",
  de: "https://www.slickkit.dev/de",
  pt: "https://www.slickkit.dev/pt",
  it: "https://www.slickkit.dev/it",
  ro: "https://www.slickkit.dev/ro",
  ru: "https://www.slickkit.dev/ru",
  hu: "https://www.slickkit.dev/hu",
  "x-default": "https://www.slickkit.dev",
};

export const metadata: Metadata = {
  title: enDictionary.meta.title,
  description: enDictionary.meta.description,
  keywords: enDictionary.meta.keywords,
  alternates: {
    canonical: "https://www.slickkit.dev",
    languages: landingLanguageAlternates,
  },
  openGraph: {
    title: enDictionary.meta.ogTitle || enDictionary.meta.title,
    description: enDictionary.meta.ogDescription || enDictionary.meta.description,
    url: "https://www.slickkit.dev",
    siteName: "SlickKit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: enDictionary.meta.ogTitle || enDictionary.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: enDictionary.meta.ogTitle || enDictionary.meta.title,
    description: enDictionary.meta.ogDescription || enDictionary.meta.description,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <LocaleProvider locale="en" dictionary={enDictionary}>
      <JsonLd locale="en" />
      <LandingPageContent />
    </LocaleProvider>
  );
}
