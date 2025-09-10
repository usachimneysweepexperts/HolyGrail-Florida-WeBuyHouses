"use client";

import { siteConfig } from "../config";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          style={{ color: siteConfig.primaryColor }}
        >
          Why Choose {siteConfig.siteName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Our Program Card */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Our Cash Offer Program
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Experience a fast, hassle-free sale on your terms.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-800">
                <CheckCircle2
                  size={24}
                  className="flex-shrink-0"
                  style={{ color: siteConfig.secondaryColor }}
                />
                <span>Competitive cash offer within 24 hours</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckCircle2
                  size={24}
                  className="flex-shrink-0"
                  style={{ color: siteConfig.secondaryColor }}
                />
                <span>Zero fees, commissions, or closing costs</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckCircle2
                  size={24}
                  className="flex-shrink-0"
                  style={{ color: siteConfig.secondaryColor }}
                />
                <span>No showings or disruptions</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckCircle2
                  size={24}
                  className="flex-shrink-0"
                  style={{ color: siteConfig.secondaryColor }}
                />
                <span>We handle all repairs and cleaning</span>
              </li>
            </ul>
          </div>

          {/* Traditional Sale Card */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Traditional Sale
            </h3>
            <p className="text-gray-600 text-center mb-6">
              A standard sale process that can be lengthy and unpredictable.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-800">
                <XCircle size={24} className="text-red-500 flex-shrink-0" />
                <span>Takes months to sell</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <XCircle size={24} className="text-red-500 flex-shrink-0" />
                <span>Requires agent fees and commissions</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <XCircle size={24} className="text-red-500 flex-shrink-0" />
                <span>Multiple showings and open houses</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <XCircle size={24} className="text-red-500 flex-shrink-0" />
                <span>You cover repairs and staging costs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
