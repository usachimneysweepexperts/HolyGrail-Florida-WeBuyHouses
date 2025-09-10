"use client";

import { siteConfig } from "@/app/config";
import Link from "next/link";

export default function BuyHero() {
  const hero = siteConfig.pages.buy.hero;

  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {hero.title}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          {hero.subtitle}
        </p>
        <Link
          href={hero.ctaLink}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          {hero.ctaText}
        </Link>
      </div>
    </section>
  );
}
