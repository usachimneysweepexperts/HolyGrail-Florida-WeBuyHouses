"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "../config";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials || [];
  const totalTestimonials = testimonials.length;

  const isCarousel = totalTestimonials > 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials,
    );
  };

  if (totalTestimonials === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-center mb-12"
          style={{ color: siteConfig.primaryColor }}
        >
          What Our Clients Say
        </h2>

        {isCarousel ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl"
              >
                <blockquote className="text-xl italic text-center mb-6 text-gray-700 dark:text-gray-300">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>
                <p
                  className="font-bold text-center"
                  style={{ color: siteConfig.secondaryColor }}
                >
                  - {testimonials[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-lg hover:scale-110 transition-transform"
              style={{ color: siteConfig.secondaryColor }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-lg hover:scale-110 transition-transform"
              style={{ color: siteConfig.secondaryColor }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl"
              >
                <blockquote className="text-lg italic text-center mb-4 text-gray-700 dark:text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <p
                  className="font-bold text-center"
                  style={{ color: siteConfig.secondaryColor }}
                >
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
