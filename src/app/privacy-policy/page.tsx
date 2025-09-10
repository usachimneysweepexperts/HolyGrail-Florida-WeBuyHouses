import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";
import PrivacyPolicySection from "../components/PrivacyPolicySection";
import Header from "../components/Header";

export const metadata = generateMetadata({
  title: `${siteConfig.pages.privacyPolicy.seoTitle} | ${siteConfig.siteName}`,
  description: siteConfig.pages.privacyPolicy.seoDescription,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicySection />
    </>
  );
}
