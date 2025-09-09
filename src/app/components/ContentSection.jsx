import { siteConfig } from "../config";

export default function ContentSection({
  title = siteConfig.contentSection.title,
  content = siteConfig.contentSection.content,
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <p className="text-lg text-center">{content}</p>
      </div>
    </section>
  );
}
