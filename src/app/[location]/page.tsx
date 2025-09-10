import { notFound } from "next/navigation";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";
import SellingProcess from "../components/SellingProcess";
import SellingOptions from "../components/SellingOptions";
import Testimonial from "../components/Testimonial";
import ComparisonTable from "../components/ComparisonTable";
import { siteConfig } from "../config";
import { generateMetadata as buildMetadata } from "../components/utils/metadata";
import Header from "../components/Header";

type PageProps = {
  params: {
    location: string;
  };
};

function getValidLocations() {
  return siteConfig.locations.map((loc) => loc.href.replace(/^\//, ""));
}

export function generateStaticParams() {
  return getValidLocations().map((loc) => ({
    location: loc,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { location } = await params; // destructure with await
  const validLocations = getValidLocations();

  if (!location || !validLocations.includes(location)) {
    return {};
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location
  );

  const locationName = locData?.name || location;

  return buildMetadata({
    title:
      siteConfig.pages.location.seoTitleTemplate.replace(
        "{{location}}",
        locationName
      ) + ` | ${siteConfig.siteName}`,
    description: siteConfig.pages.location.seoDescriptionTemplate.replace(
      "{{location}}",
      locationName
    ),
    path: `/${location}`,
  });
}

function getBasePath(locationSlug: string) {
  const loc = siteConfig.locations.find(
    (l) => l.href.replace("/", "") === locationSlug
  );
  return loc ? loc.href : "";
}

export default async function LocationPage({ params }: PageProps) {
  const { location } = await params;
  const validLocations = getValidLocations();

  if (!validLocations.includes(location)) {
    notFound();
  }

  const locData = siteConfig.locations.find(
    (loc) => loc.href.replace(/^\//, "") === location
  );

  const locationName = locData?.name || location;

  return (
    <>
      <Header basePath={getBasePath(location)} />
      <Hero
        title={siteConfig.pages.location.hero.titleTemplate.replace(
          "{{location}}",
          locationName
        )}
        subtitle={siteConfig.pages.location.hero.subtitle}
        ctaText={siteConfig.pages.location.hero.ctaText}
        ctaLink={siteConfig.pages.location.hero.ctaLink}
      />
      <ContentSection
        title={siteConfig.pages.location.contentSection.titleTemplate.replace(
          "{{location}}",
          locationName
        )}
        content={siteConfig.pages.location.contentSection.contentTemplate.map(
          (c) => c.replace("{{location}}", locationName)
        )}
      />
      <SellingProcess />
      <SellingOptions />
      <ContactForm side="left" />
      <Testimonial />
      <ComparisonTable />
      <ContactForm />
    </>
  );
}
