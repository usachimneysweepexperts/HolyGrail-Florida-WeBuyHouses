// src/app/config.tsx
import { locations } from "./locationsDataConfig";

const SiteName = "WeBuyHouses";
const PhoneNumber = "(920) 360-1252";
const CityState = "Florida";
const State = "Florida"; //Wisconsin

export const siteConfig = {
  siteName: `${SiteName} - ${CityState}`,
  phoneNumber: PhoneNumber,
  phoneLink: "tel:9203601252",
  primaryColor: "#1D4ED8",
  secondaryColor: "#F59E0B",
  domian: "WeBuyHouses.com",
  fullDomain: "https://WeBuyHouses.com",
  hero: {
    title: `Sell Your House Fast In ${CityState}`,
    subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
    ctaText: "Get Your Offer Now",
    ctaLink: "/contact",
    backgroundImage: "/hero-backgroundImage.jpg",
  },
  heros: {
    contact: {
      title: `Sell Your House Fast In ${CityState}`,
      subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
      ctaText: "Get Your Offer Now",
      ctaLink: "/contact",
      backgroundImage: "/hero-backgroundImage.jpg",
    },
    buy: {
      title: `We Buy Houses in ${CityState}`,
      subtitle: "Fair Cash Offers. No Repairs. No Commissions. No Hassles.",
      ctaText: "Get Your Offer Now",
      ctaLink: "/contact",
      backgroundImage: "/hero-backgroundImage.jpg",
    },
    sell: {
      title: `Sell Your House Fast In ${CityState}`,
      subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
      ctaText: "Get Your Offer Now",
      ctaLink: "/contact",
      backgroundImage: "/hero-backgroundImage.jpg",
    },
  },
  header: {
    navLinks: [
      { name: "Home", href: "/" },
      { name: "Contact Us", href: "/contact" },
      { name: "Buy", href: "/buy" },
      { name: "Sell", href: "/sell" },
    ],
  },
  contentSection: {
    title: "The Easiest Way To Sell Your House Fast In Green Bay",
    content: [
      `${SiteName} is your trusted local solution for selling your Green Bay home quickly, easily, and for cash—no matter the condition.`,
      "Whether your property is in perfect shape or needs significant repairs, we provide a fair, no-obligation cash offer within 24 hours.",
      "Our process eliminates the stress of traditional sales: no listings, no showings, no waiting months for a buyer, and no last-minute financing fall-throughs.",
      "With over five years of experience in the Green Bay area, we specialize in helping homeowners move forward from difficult situations—",
      "whether it's an inherited property, a burdensome rental, divorce, foreclosure, or simply a house you no longer want to maintain.",
      "We buy houses as-is, so you don’t have to lift a finger for repairs or cleaning.",
    ],
    whyChooseUs: {
      title: "Why choose US?",
      content: [
        "Speed: Close in as little as 21 days (or choose a later date that works for you).",
        "Simplicity: No paperwork headaches—we handle everything.",
        "Fairness: We pride ourselves on transparent, honest offers with no hidden fees.",
        "Flexibility: Sell on *your* timeline, even if your situation is complex.",
      ],
    },
    HowItWorks: {
      title: "How it works:",
      content: [
        "1. Tell us about your property (fill out our form or call).",
        "2. Receive a fair cash offer within 24 hours—no obligation.",
        "3. Pick your closing date and walk away with cash in hand.",

        "No more waiting, no more stress. If you're ready to sell your Green Bay home fast, WeBuyHouses is here to help.",
        "Get started today and experience the easiest way to sell your house!",
      ],
    },
    highlight: {
      title: `${SiteName}  makes it simple:`,
      content: [
        "No repairs – We buy houses in any condition.",
        "No fees – Zero commissions or closing costs.",
        "No showings – Skip the hassle of open houses.",
        "No waiting – Close in as little as 21 days.",
        "No risk – Fair offers with no obligation.",
      ],
    },
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
    year: "2025",
    poweredBy: `HolyGrail-${SiteName}`,
    privacyPolicyLink: "/privacy-policy",
  },
  sellingProcess: [
    {
      title: "Step 1: Get Your Offer",
      description:
        "Avoid the hassles of listing your house. Get a fair, all-cash offer in as little as 24 hours with no obligations and no fees.",
    },
    {
      title: "Step 2: Choose Your Closing Date",
      description:
        "Gain peace of mind by knowing all your options for selling your house as-is. We can even handle repairs for you.",
    },
    {
      title: "Step 3: Sell and Close Quickly",
      description:
        "Have the flexibility to sell on the date you choose. Close in as little as 21 days for qualifying situations.",
    },
  ],
  sellingOptions: [
    {
      title: "List with an Agent",
      description:
        "Traditional route with an agent. Typically takes 45-90+ days with open houses, commissions, and uncertainty.",
      pros: ["Professional marketing", "Potential for higher sale price"],
      cons: [
        "High commissions and fees",
        "Longer timeline (45-90+ days)",
        "Showings and disruptions",
        "Uncertainty if buyer's financing falls through",
      ],
    },
    {
      title: "For Sale By Owner (FSBO)",
      description:
        "Sell the house yourself without an agent. Saves on commissions but requires significant time and effort.",
      pros: ["No agent commissions", "Full control over the process"],
      cons: [
        "Time-consuming (doing all the work yourself)",
        "Limited exposure compared to MLS",
        "Still need to handle showings, negotiations, and paperwork",
      ],
    },
    {
      title: "Sell for Cash",
      description:
        "Fastest and easiest option. Get a fair cash offer, choose your closing date, and avoid all the hassles of traditional selling.",
      pros: [
        "No fees or commissions",
        "Close in as little as 21 days",
        "No repairs or showings needed",
        "Flexible closing date",
      ],
      cons: ["Offer may be lower than market value in some cases"],
    },
  ],
  locations: locations,
  homepage: {
    seoTitle: `Sell Your House Fast In ${CityState}`,
    seoDescription:
      `${SiteName} helps homeowners in Green Bay and across ${State} sell quickly and easily for cash. No fees, no commissions, no repairs.`,
  },
  pages: {
    contact: {
      seoTitle: "Contact Us",
      seoDescription:
        "Get a fair cash offer for your house in 24 hours. Fill out our form or call us!",
      hero: {
        title:`Contact ${SiteName} `,
        subtitle:
          `Ready to sell your house fast? Fill out the form below or call us at ${PhoneNumber}.`,
      },
      trustSection: {
        title: "Why We Are Your Most Trusted Partner",
        items: [
          {
            title: "Seamless Process",
            description:
              "We've stripped away the complexity of selling a home. With us, there are no agents, no commissions, and no months of waiting. Simply provide your property details, get a transparent offer, and choose a closing date that works for you. Our streamlined process ensures a stress-free experience from start to finish.",
          },
          {
            title: "Cash Offer, No Repairs",
            description:
              "Forget about costly renovations or last-minute fixes. We buy your house as-is, in any condition. Our cash offer reflects the true value of your property, allowing you to walk away with cash in hand without spending a dime on repairs. This is the fastest way to get a fair price for your home.",
          },
          {
            title: "Absolute Transparency",
            description:
              "Our commitment to transparency is our guarantee. From the initial offer to the final closing, every step of our process is clear and upfront. We ensure there are no hidden fees or unexpected costs. You'll know exactly what to expect, giving you peace of mind throughout the entire sale.",
          },
        ],
      },
    },
    privacyPolicy: {
      seoTitle: "Privacy Policy",
      seoDescription:
        "Read our privacy policy to understand how we handle your personal information.",
      title: "Privacy Policy",
      content: [
        `At ${SiteName}, we are committed to protecting your privacy.
       This policy outlines how we collect, use, and safeguard your personal information
       when you visit our website or contact us.`,
        `For more details, please contact us at ${PhoneNumber}.`,
      ],
    },
    notFound: {
      seoTitle: "Page Not Found",
      seoDescription:
        `The page you’re looking for doesn’t exist. But if you’re ready to sell your house fast in ${State}, ${SiteName} can help.`,
      title: "404",
      subtitle: "Oops! This page doesn’t exist.",
      message:
        `Looks like you’re searching for a house that’s already been sold 😉. But don’t worry — ${SiteName} buys houses fast, and we can help you too!`,
      ctaPrimary: { text: "Contact Us", href: "/contact" },
      ctaSecondary: { text: "Back to Home", href: "/" },
    },
    location: {
      seoTitleTemplate: "Sell Your House Fast in {{location}}",
      seoDescriptionTemplate:
        "Get a cash offer in 24 hours for your {{location}} property. No fees or commissions.",
      hero: {
        titleTemplate: "Sell Your House Fast In {{location}}",
        subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
        ctaText: "Get Your Offer Now",
        ctaLink: "/contact",
        backgroundImage: "/hero-backgroundImage.jpg",
      },
      contentSection: {
        titleTemplate:
          "The Easiest Way To Sell Your House Fast In {{location}}",
        contentTemplate: [
          `${SiteName} helps homeowners in {{location}} sell quickly and easily, regardless of the property's condition.`,
        ],
      },
    },
    locationContact: {
      seoTitleTemplate: "Contact Us in {{location}}",
      seoDescriptionTemplate:
        "Get a fair cash offer for your {{location}} house in 24 hours. Fill out our form or call us!",
      hero: {
        titleTemplate: `Contact ${SiteName} in {{location}}`,
        subtitleTemplate:
          "Ready to sell your house fast in {{location}}? Fill out the form below or call us at (920) 360-1252.",
      },
      trustSection: {
        title: "Why We Are Your Most Trusted Partner",
        items: [
          {
            title: "Seamless Process",
            description:
              "We've stripped away the complexity of selling a home. With us, there are no agents, no commissions, and no months of waiting. Simply provide your {{location}} property details, get a transparent offer, and choose a closing date that works for you. Our streamlined process ensures a stress-free experience from start to finish.",
          },
          {
            title: "Cash Offer, No Repairs",
            description:
              "Forget about costly renovations or last-minute fixes. We buy your {{location}} house as-is, in any condition. Our cash offer reflects the true value of your property, allowing you to walk away with cash in hand without spending a dime on repairs.",
          },
          {
            title: "Absolute Transparency",
            description:
              "Our commitment to transparency is our guarantee. From the initial offer to the final closing, every step of our process in {{location}} is clear and upfront. No hidden fees, no surprises.",
          },
        ],
      },
    },
    buy: {
      seoTitle: `We Buy Houses in ${State}`,
      seoDescription:
        `Sell your house quickly and hassle-free. We buy houses in any condition across ${State}.`,
      hero: {
        title: `We Buy Houses in ${State}`,
        subtitle: "Fair Cash Offers. No Repairs. No Commissions. No Hassles.",
        ctaText: "Get Your Offer Now",
        ctaLink: "/contact",
        backgroundImage: "/hero-buy.jpg",
      },
    },
    sell: {
      seoTitle: `Sell Your House Fast in ${State}`,
      seoDescription:
        `Get a fair cash offer within 24 hours and sell your house as-is in ${State}.`,
      hero: {
        title: `Sell Your House Fast in ${State}`,
        subtitle: "Get a Cash Offer in 24 Hours with No Fees or Commissions!",
        ctaText: "Get Your Offer Now",
        ctaLink: "/contact",
        backgroundImage: "/hero-sell.jpg",
      },
    },
    locationSell: {
      seoTitleTemplate: "Sell Your House Fast in {{location}}",
      seoDescriptionTemplate:
        "Get a fair cash offer within 24 hours and sell your {{location}} house as-is.",
      hero: {
        titleTemplate: "Sell Your House Fast in {{location}}",
        subtitleTemplate:
          "No fees, no commissions, and no repairs needed. Close in as little as 21 days.",
        ctaText: "Get Your Offer Now",
        ctaLink: "/contact",
        backgroundImage: "/hero-sell.jpg",
      },
      contentSection: {
        titleTemplate: `Why Sell Your {{location}} House With ${SiteName}?`,
        contentTemplate: [
          "Avoid listings, open houses, and waiting months for offers in {{location}}.",
          "Sell your house as-is — no cleaning or repairs required.",
          "Close in as little as 21 days with zero fees or commissions.",
        ],
      },
    },
    locationBuy: {
      seoTitleTemplate: "We Buy Houses in {{location}}",
      seoDescriptionTemplate:
        "Sell your {{location}} house quickly and hassle-free. We buy houses in any condition.",
      hero: {
        titleTemplate: "We Buy Houses in {{location}}",
        subtitleTemplate:
          "Fair Cash Offers. No Repairs. No Commissions. No Hassles.",
        ctaText: "Get Your Offer Now",
        ctaLink: "/contact",
        backgroundImage: "/hero-buy.jpg",
      },
      contentSection: {
        titleTemplate: `Why Choose ${SiteName} in {{location}}?`,
        contentTemplate: [
          "We buy houses in any condition across {{location}}.",
          "No repairs, no commissions, no waiting months for a buyer.",
          "We make fair cash offers and close on your timeline in {{location}}.",
        ],
      },
    },
  },
};
