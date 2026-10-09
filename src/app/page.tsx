import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProductSuite } from "../components/ProductSuite";
import { Manifesto } from "../components/Manifesto";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas dark:bg-[#09090b] relative">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top Header */}
      <Header />

      {/* Main Content Hub */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Product Suite Grid */}
        <ProductSuite />

        {/* 3. The Studio Manifesto / Why Local-First */}
        <Manifesto />
      </main>

      {/* Footer & Bottom Status Bar */}
      <Footer />
    </div>
  );
}
