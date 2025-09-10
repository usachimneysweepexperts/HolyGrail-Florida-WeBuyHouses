"use client";

import { siteConfig } from "../config";
import { CheckCircle, XCircle } from "lucide-react";

export default function SellingOptions() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Compare Your Selling Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.sellingOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>

              <div className="mb-4">
                <h4 className="font-medium text-green-700 mb-2">Pros</h4>
                <ul className="space-y-2">
                  {option.pros.map((pro, i) => (
                    <li key={i} className="flex items-start text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-red-600 mb-2">Cons</h4>
                <ul className="space-y-2">
                  {option.cons.map((con, i) => (
                    <li key={i} className="flex items-start text-red-600">
                      <XCircle className="w-5 h-5 mr-2 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
