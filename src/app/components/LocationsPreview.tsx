"use client";

import { siteConfig } from "@/app/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocationsPreview() {
  const pathname = usePathname();
  const cleanPath = pathname === "/" ? "" : pathname;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
          We’ve Helped Homeowners Sell Houses In These Areas
        </h2>

        {/* גריד עם עד 9 מיקומים */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {siteConfig.locations?.slice(0, 9).map((location, index) => {
            const href = `${location.href}${cleanPath}`;
            return (
              <Link
                key={index}
                href={href}
                className="block rounded-xl bg-white shadow-md p-6 text-center hover:shadow-xl hover:bg-blue-50 transition"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600">
                  {location.name}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* כפתור לכל המיקומים */}
        <div className="text-center">
          <Link
            href="/all-locations"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-md transition"
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
