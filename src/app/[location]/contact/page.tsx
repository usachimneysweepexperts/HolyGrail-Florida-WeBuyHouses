// src/app/[location]/contact/page.tsx

import { notFound } from "next/navigation";
import { siteConfig } from "../../config";
import { generateMetadata as buildMetadata } from "../../components/utils/metadata";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import type { Metadata } from "next";

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
  const { location } = await params; // ✅ חייב await כי זה Promise
  const validLocations = getValidLocations();

  if (!location || !validLocations.includes(location)) {
    return {};
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  return buildMetadata({
    title: siteConfig.pages.locationContact.seoTitleTemplate.replace(
      "{{location}}",
      locationName,
    ),
    description:
      siteConfig.pages.locationContact.seoDescriptionTemplate.replace(
        "{{location}}",
        locationName,
      ),
    path: `/${location}/contact`,
  });
}

function getBasePath(locationSlug: string) {
  const loc = siteConfig.locations.find(
    (l) => l.href.replace("/", "") === locationSlug,
  );
  return loc ? loc.href : "";
}

export default async function LocationContactPage({ params }: PageProps) {
  const { location } = await params; // ✅ גם כאן await
  const validLocations = getValidLocations();

  if (!validLocations.includes(location)) {
    notFound();
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  const hero = siteConfig.pages.locationContact.hero;
  const trust = siteConfig.pages.locationContact.trustSection;

  return (
    <>
      <Header basePath={getBasePath(location)} />

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            {hero.titleTemplate.replace("{{location}}", locationName)}
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {hero.subtitleTemplate.replace("{{location}}", locationName)}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Trust Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            {trust.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {trust.items.map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                <h3
                  className="text-2xl font-bold mb-3 text-center"
                  style={{ color: siteConfig.primaryColor }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description.replace("{{location}}", locationName)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
