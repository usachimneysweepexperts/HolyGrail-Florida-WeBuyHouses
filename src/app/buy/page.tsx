import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";
import BuyHero from "../components/BuyHero";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

// SEO
export const metadata = generateMetadata({
  title: `${siteConfig.pages.buy.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.pages.buy.seoDescription,
  path: "/buy",
});

export default function BuyPage() {
  const hero = siteConfig.pages.buy.hero;

  return (
    <>
      <Header />
      {/* Hero */}
      <BuyHero />

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
