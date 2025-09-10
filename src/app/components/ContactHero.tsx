"use client";
import { siteConfig } from "@/app/config";

export default function ContactHero() {
  const hero = siteConfig.pages.contact.hero;

  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">{hero.subtitle}</p>
      </div>
    </section>
  );
}
