"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundSection from "./components/NotFoundSection";
import { siteConfig } from "./config";

export const metadata = {
  title: `${siteConfig.pages.notFound.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.pages.notFound.seoDescription,
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundSection />
    </>
  );
}
