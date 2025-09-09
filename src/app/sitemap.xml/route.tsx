//wihomebuyers\src\app\sitemap.xml\route.tsx
import { siteConfig } from "../config";

export async function GET() {
  const baseUrl = "https://yourdomain.com";
  const locations = siteConfig.footer.locations.map((loc: string) =>
    loc.toLowerCase().replace(/, /g, "-").replace(/\s+/g, "-"),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc><lastmod>${new Date().toISOString()}</lastmod><priority>1.0</priority></url>
  <url><loc>${baseUrl}/contact</loc><priority>0.8</priority></url>
  <url><loc>${baseUrl}/blog</loc><priority>0.7</priority></url>
  <url><loc>${baseUrl}/privacy-policy</loc><priority>0.5</priority></url>
  ${locations.map((loc: string) => `<url><loc>${baseUrl}/${loc}</loc><priority>0.9</priority></url>`).join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
