"use client";

import { siteConfig } from "../config";
import { CheckCircle } from "lucide-react";

export default function SellingProcess() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Simple 3-Step Selling Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.sellingProcess.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
