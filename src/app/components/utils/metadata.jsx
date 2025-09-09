import { siteConfig } from "../../config";

export function generateMetadata({ title, description, path = "" }) {
  const baseUrl = "https://yourdomain.com";
  return {
    title: title || `${siteConfig.siteName} | Sell Your House Fast`,
    description:
      description ||
      "Sell your house fast for cash in Wisconsin. No fees, no commissions.",
    openGraph: {
      title: title || siteConfig.siteName,
      description: description || "Get a fair cash offer in 24 hours.",
      url: `${baseUrl}${path}`,
      siteName: siteConfig.siteName,
      images: [{ url: `${baseUrl}/og-image.jpg` }],
    },
    robots: "index, follow",
    canonical: `${baseUrl}${path}`,
  };
}
