"use client";
import { siteConfig } from "@/app/config";

export default function TrustSection() {
  const trust = siteConfig.pages.contact.trustSection;

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">{trust.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trust.items.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
              <h3
                className="text-2xl font-bold mb-3 text-center"
                style={{ color: siteConfig.primaryColor }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
