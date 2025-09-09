import { notFound } from "next/navigation";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";

// The locations from your config file
const validLocations = siteConfig.footer.locations.map((loc) =>
  loc.toLowerCase().replace(/, /g, "-").replace(/\s+/g, "-"),
);

export async function generateStaticParams() {
  return validLocations.map((loc) => ({
    location: loc,
  }));
}

export const metadata = async ({ params }) => {
  // This line is the crucial fix. It checks if `params` exists first.
  if (
    !params ||
    !params.location ||
    !validLocations.includes(params.location)
  ) {
    return {}; // Returns empty metadata to prevent a crash.
  }

  const location = params.location.replace(/-/g, " ").toUpperCase();
  return generateMetadata({
    title: `Sell Your House Fast in ${location} | ${siteConfig.siteName}`,
    description: `Get a cash offer in 24 hours for your ${location} property. No fees or commissions.`,
    path: `/${params.location}`,
  });
};

export default async function LocationPage({ params }) {
  // Check if the URL location is a valid one
  if (!validLocations.includes(params.location)) {
    notFound(); // Redirects to the 404 page
  }

  const location = params.location.replace(/-/g, " ").toUpperCase();
  return (
    <>
      <Hero
        title={`Sell Your House Fast In ${location}`}
        subtitle={siteConfig.hero.subtitle}
        ctaText={siteConfig.hero.ctaText}
        ctaLink={siteConfig.hero.ctaLink}
      />
      <ContentSection
        title={`The Easiest Way To Sell Your House Fast In ${location}`}
        content={`WIHomeBuyers helps ${location} homeowners sell quickly and easily, regardless of the property's condition.`}
      />
      <ContactForm />
    </>
  );
}
