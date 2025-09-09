import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";

export const metadata = generateMetadata({
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description:
    "Read our privacy policy to understand how we handle your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-lg mb-4">
          At {siteConfig.siteName}, we are committed to protecting your privacy.
          This policy outlines how we collect, use, and safeguard your personal
          information when you visit our website or contact us.
        </p>
        <p className="text-lg">
          For more details, please contact us at {siteConfig.phoneNumber}.
        </p>
      </div>
    </section>
  );
}
