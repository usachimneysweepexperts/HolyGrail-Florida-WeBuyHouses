import ContactForm from "../components/ContactForm";
import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";

export const metadata = generateMetadata({
  title: `Contact Us | ${siteConfig.siteName}`,
  description:
    "Get a fair cash offer for your house in 24 hours. Fill out our form or call us!",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Contact {siteConfig.siteName}
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Ready to sell your house fast? Fill out the form below or call us at{" "}
            <span className="font-semibold">{siteConfig.phoneNumber}</span>.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Static Content */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why We Are Your Most Trusted Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3
                className="text-2xl font-bold mb-3 text-center"
                style={{ color: siteConfig.primaryColor }}
              >
                Seamless Process
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                We've stripped away the complexity of selling a home. With us,
                there are no agents, no commissions, and no months of waiting.
                Simply provide your property details, get a transparent offer,
                and choose a closing date that works for you. Our streamlined
                process ensures a stress-free experience from start to finish.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3
                className="text-2xl font-bold mb-3 text-center"
                style={{ color: siteConfig.primaryColor }}
              >
                Cash Offer, No Repairs
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Forget about costly renovations or last-minute fixes. We buy
                your house as-is, in any condition. Our cash offer reflects the
                true value of your property, allowing you to walk away with cash
                in hand without spending a dime on repairs. This is the fastest
                way to get a fair price for your home.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3
                className="text-2xl font-bold mb-3 text-center"
                style={{ color: siteConfig.primaryColor }}
              >
                Absolute Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Our commitment to transparency is our guarantee. From the
                initial offer to the final closing, every step of our process is
                clear and upfront. We ensure there are no hidden fees or
                unexpected costs. You'll know exactly what to expect, giving you
                peace of mind throughout the entire sale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
