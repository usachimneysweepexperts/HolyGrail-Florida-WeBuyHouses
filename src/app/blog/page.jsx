import { siteConfig } from "../config";
import { generateMetadata } from "../components/utils/metadata";

export const metadata = generateMetadata({
  title: `Blog | ${siteConfig.siteName}`,
  description:
    "Read the latest tips and insights on selling your house fast in Wisconsin.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{siteConfig.siteName} Blog</h1>
        <p className="text-lg">
          Coming soon: Tips and insights on selling your house fast!
        </p>
      </div>
    </section>
  );
}
