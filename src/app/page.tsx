// src\app\page.jsx

import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Testimonial from "./components/Testimonial";
import ComparisonTable from "./components/ComparisonTable";
import ContactForm from "./components/ContactForm";
import { siteConfig } from "./config";
import { generateMetadata } from "./components/utils/metadata";
import SellingProcess from "./components/SellingProcess";
import SellingOptions from "./components/SellingOptions";
import Locations from "./components/Locations";
import Header from "./components/Header";

export const metadata = generateMetadata({
  title: `${siteConfig.homepage.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.homepage.seoDescription,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ContentSection />
      <Locations />
      <ContactForm side="left" />
      <SellingProcess />
      <SellingOptions />
      <ContactForm />
      <Testimonial />
      <ComparisonTable />
      <ContactForm side="left" />{" "}
    </>
  );
}
