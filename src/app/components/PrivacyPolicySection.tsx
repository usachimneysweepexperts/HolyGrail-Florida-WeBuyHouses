"use client";
import { siteConfig } from "@/app/config";

export default function PrivacyPolicySection() {
  const policy = siteConfig.pages.privacyPolicy;

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{policy.title}</h1>
        {policy.content.map((paragraph, idx) => (
          <p key={idx} className="text-lg mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
