import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";
import SellHero from "../components/SellHero";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";
import SellingProcess from "../components/SellingProcess";
import SellingOptions from "../components/SellingOptions";
import ComparisonTable from "../components/ComparisonTable";
import Locations from "../components/Locations";
import Header from "../components/Header";

// SEO
export const metadata = generateMetadata({
  title: `${siteConfig.pages.sell.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.pages.sell.seoDescription,
  path: "/sell",
});

export default function SellPage() {
  return (
    <>
      <Header />
      <SellHero />
      <SellingProcess />
      <ContactForm side="left" />
      <SellingOptions />
      <ContactForm />
      <Locations />
      <ComparisonTable />
      <ContactForm side="left" /> {/* Content */}
      <ContentSection
        title={siteConfig.contentSection.highlight.title}
        content={siteConfig.contentSection.highlight.content}
      />
      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
