"use client";

import { useState } from "react";
import { siteConfig } from "../config";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({
  title = siteConfig.hero.title,
  subtitle = siteConfig.hero.subtitle,
  ctaText = siteConfig.hero.ctaText,
  ctaLink = siteConfig.hero.ctaLink,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      // Here you would typically send the data to your backend or a service like Formspree
      setMessage("Thank you! We will get back to you shortly.");
      setIsSuccess(true);
      setFormData({ name: "", phone: "", address: "" });
    } else {
      setMessage("Please fill in all required fields.");
      setIsSuccess(false);
    }
  };

  const arrows = Array.from({ length: 24 });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image container with a dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${siteConfig.hero.backgroundImage})` }}
        ></div>
        {/* Lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            {title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black leading-relaxed">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-block px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ backgroundColor: siteConfig.secondaryColor }}
          >
            {ctaText}
          </a>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl animate-fade-in-right border border-white/20">
          <h3 className="text-3xl font-bold mb-6 text-center text-black">
            Want to get in touch?
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/20 text-black placeholder-gray-800"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/20 text-black placeholder-gray-800"
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Property Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Property Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/20 text-black placeholder-gray-800"
              />
            </div>

            <div
              className="relative flex justify-center items-center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Spinning arrows around the button */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                animate={{ rotate: hovered ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <div className="relative w-48 h-48">
                  {arrows.map((_, i) => {
                    const angle = (i / arrows.length) * 360;
                    return (
                      <motion.span
                        key={i}
                        className="absolute text-sm"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
                          color: siteConfig.secondaryColor,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ➤
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>

              {/* The "Send" button */}
              <button
                type="submit"
                className="relative w-full px-8 py-4 rounded-full font-bold text-lg text-white shadow-lg z-10 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                style={{ backgroundColor: siteConfig.secondaryColor }}
              >
                Send
              </button>
            </div>
          </form>
          {message && (
            <p
              className={`mt-4 text-center font-bold text-sm ${isSuccess ? "text-green-600" : "text-red-600"}`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
