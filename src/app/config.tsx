// src/app/config.tsx
export const siteConfig = {
  siteName: "WIHomeBuyers",
  phoneNumber: "(920) 360-1252",
  phoneLink: "tel:9203601252",
  primaryColor: "#1D4ED8",
  secondaryColor: "#F59E0B",
  hero: {
    title: "Sell Your House Fast In Green Bay, Wisconsin",
    subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
    ctaText: "Get Your Offer Now",
    ctaLink: "/contact",
    backgroundImage: "/hero-backgroundImage.jpg",
  },
  header: {
    navLinks: [
      { name: "Home", href: "/" },
      { name: "Contact Us", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  contentSection: {
    title: "The Easiest Way To Sell Your House Fast In Green Bay",
    content:
      "WIHomeBuyers helps Green Bay homeowners sell quickly and easily, regardless of the property's condition.",
  },
  testimonials: [
    {
      quote:
        "Kevin was wonderful to work with. The sale went smoothly and I'm very happy with the results.",
      author: "Mary S.",
    },
    {
      quote:
        "Kevin and his team were great to work with, the transition went smoothly and closing was a breeze.",
      author: "Carrie N.",
    },
    {
      quote:
        "Had nothing but a great experience selling my duplex. They were fair, honest, and open throughout the process.",
      author: "Steve M.",
    },
  ],
  contactForm: {
    title: "Get a Cash Offer in 24 Hours",
    fields: [
      {
        name: "address",
        placeholder: "Property Address*",
        type: "text",
        required: true,
      },
      { name: "phone", placeholder: "Phone", type: "tel", required: false },
      { name: "email", placeholder: "Email*", type: "email", required: true },
    ],
    submitText: "Submit",
  },
  footer: {
    companyName: "WIHomeBuyers",
    year: "2025",
    poweredBy: "Carrot",
    privacyPolicyLink: "/privacy-policy",
    locations: [
      "Appleton, WI",
      "De Pere, WI",
      "Fond du Lac, WI",
      "Kewaunee, WI",
      "Manitowoc, WI",
      "Oconto, WI",
      "Oshkosh, WI",
      "Shawano, WI",
      "Sheboygan, WI",
      "Sturgeon Bay, WI",
    ],
  },
};
