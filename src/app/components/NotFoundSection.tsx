"use client";

import Link from "next/link";
import { siteConfig } from "@/app/config";

export default function NotFoundSection() {
  const nf = siteConfig.pages.notFound;

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">{nf.title}</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        {nf.subtitle}
      </h2>
      <p className="text-gray-600 max-w-xl mb-8">{nf.message}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href={nf.ctaPrimary.href}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow hover:bg-blue-700 transition"
        >
          {nf.ctaPrimary.text}
        </Link>
        <Link
          href={nf.ctaSecondary.href}
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-medium shadow hover:bg-gray-200 transition"
        >
          {nf.ctaSecondary.text}
        </Link>
      </div>
    </main>
  );
}
