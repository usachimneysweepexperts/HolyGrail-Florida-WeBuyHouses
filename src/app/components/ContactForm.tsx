"use client";

import { useState } from "react";
import { siteConfig } from "../config";

export default function ContactForm({ side = "right" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
    { name: "address", type: "text", placeholder: "Address", required: false },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setMessage("Thank you! We will get back to you shortly.");
      setIsSuccess(true);
      setFormData({ name: "", phone: "", address: "" });
    } else {
      setMessage("Please fill in all required fields.");
      setIsSuccess(false);
    }
  };

  const textContent = (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-bold mb-4">
        {siteConfig.contentSection.title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {siteConfig.contentSection.content}
      </p>
    </div>
  );

  const contactForm = (
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto relative">
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required={field.required}
            name={field.name}
          />
        ))}
        <button
          type="submit"
          className="relative px-6 py-3 rounded-lg w-full z-10 font-bold"
          style={{
            backgroundColor: siteConfig.secondaryColor,
            color: siteConfig.primaryColor,
          }}
        >
          Send Message
        </button>
        {message && (
          <p
            className={`mt-4 text-center font-semibold text-sm ${isSuccess ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {side === "left" ? (
          <>
            {contactForm}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {contactForm}
          </>
        )}
      </div>
    </section>
  );
}
