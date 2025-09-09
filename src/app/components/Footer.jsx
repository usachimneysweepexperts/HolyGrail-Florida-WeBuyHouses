import Link from "next/link";
import { siteConfig } from "../config";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            {siteConfig.footer.companyName}
          </h3>
          <p>
            © {siteConfig.footer.year} {siteConfig.footer.companyName} -
            Powered by {siteConfig.footer.poweredBy}
          </p>
          <Link
            href={siteConfig.footer.privacyPolicyLink}
            className="underline"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Locations</h4>
          <ul>
            {siteConfig.footer.locations.map((loc, index) => (
              <li key={index}>
                <Link
                  href={`/${loc
                    .toLowerCase()
                    .replace(/, /g, "-")
                    .replace(/\s+/g, "-")}`}
                  className="hover:underline"
                >
                  {loc}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>
            <a href={siteConfig.phoneLink} className="hover:underline">
              Call: {siteConfig.phoneNumber}
            </a>
          </p>
          <p>
            <Link href="/contact" className="hover:underline">
              Get Your Cash Offer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
