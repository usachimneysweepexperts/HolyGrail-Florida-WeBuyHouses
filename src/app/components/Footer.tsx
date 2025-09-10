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

  // חצי ראשון וחצי שני של רשימת המיקומים
  const half = Math.ceil(siteConfig.locations.length / 2);
  const col1 = siteConfig.locations.slice(0, half);
  const col2 = siteConfig.locations.slice(half);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* טקסט כללי */}
        <div>
          <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
          <p>
            © {siteConfig.footer.year} {siteConfig.siteName} - Powered by{" "}
            {siteConfig.footer.poweredBy}
          </p>
          <Link
            href={buildHref(siteConfig.footer.privacyPolicyLink)}
            className="underline"
          >
            Privacy Policy
          </Link>
        </div>

        {/* מיקומים */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Locations</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2">
              {col1.map((loc, index) => (
                <li key={index}>
                  <Link href={loc.href} className="hover:underline">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {col2.map((loc, index) => (
                <li key={index}>
                  <Link href={loc.href} className="hover:underline">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* יצירת קשר */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>
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
