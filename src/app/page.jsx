import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Testimonial from "./components/Testimonial";
import ComparisonTable from "./components/ComparisonTable";
import ContactForm from "./components/ContactForm";
import { siteConfig } from "./config";
import { generateMetadata } from "./components/utils/metadata";

export const metadata = generateMetadata({
  title: `${siteConfig.hero.title} | ${siteConfig.siteName}`,
  description: siteConfig.contentSection.content,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ContentSection />
      <ContactForm side="left" />
      <Testimonial />
      <ComparisonTable />
      <ContactForm />
    </>
  );
}
