//src\app\layout.jsx
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "./config";
import { generateMetadata } from "./components/utils/metadata";

export const metadata = generateMetadata({
  title: siteConfig.siteName,
  description:
    "Sell your house fast for cash in Wisconsin. No fees, no commissions.",
  path: "",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
