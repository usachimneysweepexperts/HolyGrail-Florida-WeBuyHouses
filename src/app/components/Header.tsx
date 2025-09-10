// src/components/Header.tsx
"use client";

import Link from "next/link";
import { siteConfig } from "../config";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  basePath?: string; // אם לא נשלח – ברירת מחדל ריקה
};

export default function Header({ basePath = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  // פונקציה שתבנה קישור נכון
  const buildHref = (href: string) => {
    if (href === "/") return "/"; // דף הבית תמיד ראשי
    return basePath ? `${basePath}${href}` : href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg bg-gradient-to-b from-white to-transparent">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold flex items-center gap-2"
          style={{ color: siteConfig.primaryColor }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-700 transition-colors duration-200"
            style={{ color: siteConfig.primaryColor }}
          >
            <Image
              src="/logo.jpg"
              alt="Company Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span>{siteConfig.siteName}</span>
          </Link>
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {siteConfig.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={buildHref(link.href)}
                className="text-lg font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${siteConfig.phoneNumber}`}
            className="text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200 flex items-center gap-2"
            style={{ backgroundColor: siteConfig.secondaryColor }}
          >
            <Phone size={20} /> <span>Call Now</span>
          </a>

          <form
            onSubmit={handlePhoneSubmit}
            className="flex items-center gap-2"
          >
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200"
              aria-label="Submit"
              style={{ backgroundColor: siteConfig.secondaryColor }}
            >
              Send
            </button>
          </form>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-md p-6 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-600 focus:outline-none"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-8 w-full text-center">
            {siteConfig.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={buildHref(link.href)}
                className="text-3xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="mt-8 text-white px-8 py-5 rounded-full text-center font-bold text-2xl shadow-md"
              style={{ backgroundColor: siteConfig.secondaryColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              Call: {siteConfig.phoneNumber}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
