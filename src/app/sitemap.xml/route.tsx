import { siteConfig } from "../config";

export async function GET() {
  const baseUrl = siteConfig.fullDomain.replace(/\/$/, "");

  // Static pages
  const staticPages = ["/", "/buy", "/sell", "/contact", "/privacy-policy"];

  // Location-based pages
  const locationPages = siteConfig.locations.flatMap((loc) => {
    const path = loc.href;
    return [`${path}`, `${path}/buy`, `${path}/sell`, `${path}/contact`];
  });

  const allPages = [...staticPages, ...locationPages];

  // Build XML string
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (url) => `<url>
  <loc>${baseUrl}${url}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
