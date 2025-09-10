import { notFound } from "next/navigation";
import { siteConfig } from "../../config";
import { generateMetadata as buildMetadata } from "../../components/utils/metadata";
import SellHero from "../../components/SellHero";
import ContentSection from "../../components/ContentSection";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

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
export async function generateMetadata({ params }: PageProps) {
  const { location } = await params;
  const validLocations = getValidLocations();

  if (!location || !validLocations.includes(location)) {
    return {};
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  return buildMetadata({
    title: siteConfig.pages.locationSell.seoTitleTemplate.replace(
      "{{location}}",
      locationName,
    ),
    description: siteConfig.pages.locationSell.seoDescriptionTemplate.replace(
      "{{location}}",
      locationName,
    ),
    path: `/${location}/sell`,
  });
}

function getBasePath(locationSlug: string) {
  const loc = siteConfig.locations.find(
    (l) => l.href.replace("/", "") === locationSlug,
  );
  return loc ? loc.href : "";
}

export default async function LocationSellPage({ params }: PageProps) {
  const { location } = await params;
  const validLocations = getValidLocations();

  if (!validLocations.includes(location)) {
    notFound();
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location,
  );
  const locationName = locData?.name || location;

  const content = siteConfig.pages.locationSell.contentSection;

  return (
    <>
      <Header basePath={getBasePath(location)} />

      {/* Hero */}
      <SellHero />

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
