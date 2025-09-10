// src/app/[location]/buy/page.tsx

import { notFound } from "next/navigation";
import { siteConfig } from "../../config";
import { generateMetadata as buildMetadata } from "../../components/utils/metadata";
import BuyHero from "../../components/BuyHero";
import ContentSection from "../../components/ContentSection";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import type { Metadata } from "next";

// ✅ שים לב: כאן params מוגדר כ-Promise
type PageProps = {
  params: Promise<{ location: string }>;
};

function getValidLocations() {
  return siteConfig.locations.map((loc) => loc.href.replace(/^\//, ""));
}

export function generateStaticParams() {
  return getValidLocations().map((loc) => ({ location: loc }));
}

// SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { location } = await params; // כאן חייבים await כי params זה Promise
  const validLocations = getValidLocations();

  if (!location || !validLocations.includes(location)) {
    return {};
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  return buildMetadata({
    title: siteConfig.pages.locationBuy.seoTitleTemplate.replace(
      "{{location}}",
      locationName,
    ),
    description: siteConfig.pages.locationBuy.seoDescriptionTemplate.replace(
      "{{location}}",
      locationName,
    ),
    path: `/${location}/buy`,
  });
}

function getBasePath(locationSlug: string) {
  const loc = siteConfig.locations.find(
    (l) => l.href.replace("/", "") === locationSlug,
  );
  return loc ? loc.href : "";
}

export default async function LocationBuyPage({ params }: PageProps) {
  const { location } = await params; // גם כאן חייבים await
  const validLocations = getValidLocations();

  if (!validLocations.includes(location)) {
    notFound();
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  const content = siteConfig.pages.locationBuy.contentSection;

  return (
    <>
      <Header basePath={getBasePath(location)} />
      {/* Hero */}
      <BuyHero />

      {/* Content */}
      <ContentSection
        title={content.titleTemplate.replace("{{location}}", locationName)}
        content={content.contentTemplate.map((c) =>
          c.replace("{{location}}", locationName),
        )}
      />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
