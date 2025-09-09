"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../config";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg bg-gradient-to-b from-white to-transparent">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and Site Name */}
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

        {/* Desktop Navigation, Phone Form, and Call Now button */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {siteConfig.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors duration-200 ${
                  pathname === link.href ? "font-bold border-b-2" : ""
                }`}
                style={{
                  color:
                    pathname === link.href
                      ? siteConfig.primaryColor
                      : "#4b5563", // Fallback for gray-700
                  borderColor:
                    pathname === link.href
                      ? siteConfig.primaryColor
                      : "transparent",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Separate Call Now button for immediate action */}
          <a
            href={`tel:${siteConfig.phoneNumber}`}
            className="text-white px-4 py-2 rounded-full shadow-md transition-colors duration-200 flex items-center gap-2"
            style={{ backgroundColor: siteConfig.secondaryColor }}
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>

          {/* Phone Form for submitting number */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-md transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-600 focus:outline-none"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-8 w-full">
            {siteConfig.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-3xl font-semibold transition-colors duration-200 ${
                  pathname === link.href ? "" : "text-gray-900"
                }`}
                style={{
                  color:
                    pathname === link.href
                      ? siteConfig.primaryColor
                      : "#111827",
                }} // Fallback for gray-900
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="mt-8 text-white px-8 py-5 rounded-full text-center font-bold text-2xl shadow-md transition-colors duration-200"
              style={{
                backgroundColor: siteConfig.secondaryColor,
                hover: { backgroundColor: siteConfig.secondaryColor + "99" },
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Call: {siteConfig.phoneNumber}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
