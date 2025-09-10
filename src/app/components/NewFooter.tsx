import Link from "next/link";
import { siteConfig } from "../config";

type FooterProps = {
  basePath?: string; // אם נשלח – כל הקישורים יתאימו אליו
};

export default function Footer({ basePath = "" }: FooterProps) {
  // פונקציה לבניית קישור נכון
  const buildHref = (href: string) => {
    if (href === "/") return basePath || "/";
    return basePath ? `${basePath}${href}` : href;
  };

  // עד 12 מיקומים סה״כ (6 לכל צד)
  const maxPerSide = 6;
  const preview = siteConfig.locations.slice(0, maxPerSide * 2);
  const col1 = preview.slice(0, maxPerSide);
  const col2 = preview.slice(maxPerSide, maxPerSide * 2);

  // קישורי ניווט מובילים מהקונפיג + פרטיות + מפת אתר
  const primaryNav = [
    ...(siteConfig.header?.navLinks || []), // { name, href }
    {
      name: "Privacy Policy",
      href: siteConfig.footer.privacyPolicyLink || "/privacy-policy",
    },
    { name: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* עמודה ימנית – ניווט ראשי */}
        <div className="order-1">
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            {primaryNav.map((item, i) => (
              <li key={i}>
                <Link href={buildHref(item.href)} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* עמודת אמצע – מיקומים + קישור לכל המיקומים באמצע */}
        <div className="order-2">
          <h4 className="text-lg font-semibold mb-4">Locations</h4>

          <div className="grid grid-cols-2 gap-4">
            {/* צד ימין של המיקומים */}
            <ul className="space-y-2">
              {col1.map((loc, index) => (
                <li key={`loc-r-${index}`}>
                  <Link href={buildHref(loc.href)} className="hover:underline">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* צד שמאל של המיקומים */}
            <ul className="space-y-2">
              {col2.map((loc, index) => (
                <li key={`loc-l-${index}`}>
                  <Link href={buildHref(loc.href)} className="hover:underline">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* קישור לכל המיקומים – תופס שני טורים באמצע */}
            <div className="col-span-2 pt-4 text-center">
              <Link
                href={buildHref("/all-locations")}
                className="inline-block px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition shadow-md font-medium"
              >
                View All Locations
              </Link>
            </div>
          </div>
        </div>

        {/* עמודה שמאלית – טקסט כללי (מועבר מתחת לעמודה הימנית בדסקטופ) */}
        <div className="order-3">
          <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
          <p className="mb-2">
            © {siteConfig.footer.year} {siteConfig.siteName} — Powered by{" "}
            {siteConfig.footer.poweredBy}
          </p>
          <p className="mb-2">
            <a href={siteConfig.phoneLink} className="hover:underline">
              Call: {siteConfig.phoneNumber}
            </a>
          </p>
          <p>
            <Link href={buildHref("/contact")} className="hover:underline">
              Get Your Cash Offer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
