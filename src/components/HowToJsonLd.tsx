import React from "react";

export interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToJsonLdProps {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStepItem[];
  toolName?: string;
}

export function HowToJsonLd({
  name,
  description,
  totalTime = "PT15S",
  steps,
  toolName = "SlickKit PDF (In-Browser WebAssembly Engine)",
}: HowToJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    tool: [
      {
        "@type": "HowToTool",
        name: toolName,
      },
    ],
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url
        ? step.url.startsWith("http")
          ? step.url
          : `https://www.slickkit.dev${step.url}`
        : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
