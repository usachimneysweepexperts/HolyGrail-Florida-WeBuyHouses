import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import TrustSection from "../components/TrustSection";
import Header from "../components/Header";

export const metadata = generateMetadata({
  title: `${siteConfig.pages.contact.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.pages.contact.seoDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <TrustSection />
    </>
  );
}
