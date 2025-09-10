import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import SellingProcess from "../components/SellingProcess";
import SellingOptions from "../components/SellingOptions";
import Locations from "../components/Locations";

// SEO
export const metadata = generateMetadata({
  title: `${siteConfig.homepage.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.homepage.seoDescription,
  path: "/all-locations",
});

export default function AllLocations() {
  return (
    <>
      <Header />
      <ContactForm side="left" />
      <Locations />
      <SellingProcess />
      <SellingOptions />

      {/* Content */}
      <ContentSection
        title={siteConfig.contentSection.whyChooseUs.title}
        content={siteConfig.contentSection.whyChooseUs.content}
      />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
