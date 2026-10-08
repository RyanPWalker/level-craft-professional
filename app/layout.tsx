import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import LeadSourceTracker from "./components/LeadSourceTracker";
import SiteHeader from "./components/SiteHeader";
import { areaServedJsonLd, businessId, JsonLd, ogImage } from "./seo";
import { servicePages, site } from "./site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | General Contractor in ${site.city}, ${site.state}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Licensed, insured general contractor in Orem, Utah. Remodels, additions, and commercial tenant improvements in Utah County and across Utah. Free estimates.",
  applicationName: site.name,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
  // Listing icons here replaces the automatic app/icon.svg link, so name every icon.
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Colors the mobile browser bar (and some link previews) navy to match the header.
export const viewport: Viewport = { themeColor: "#13233a" };

// Structured data so search engines can show the business in local results.
// Pages reference this node by `businessId`. Leave out placeholder details (an empty license number).
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": businessId,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  image: `${site.url}${ogImage.url}`,
  telephone: site.phone.href.replace("tel:", ""),
  founder: { "@type": "Person", name: site.owner },
  // Profiles elsewhere that belong to the business. Add Google Business Profile, Facebook, etc.
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "UT",
    addressCountry: "US",
  },
  areaServed: areaServedJsonLd,
  knowsAbout: [
    "Home remodeling",
    "Home additions",
    "Tenant improvements",
    "Office build-outs",
    "Commercial remodeling",
    "Wood and metal framing",
    "Drywall",
    "Interior and exterior painting",
    "Tile",
    "Basement finishing",
    "Concrete driveways and patios",
    "Carpentry",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction services",
    itemListElement: servicePages.map((page) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: page.title, url: `${site.url}${page.href}/` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <JsonLd data={businessJsonLd} />
        <LeadSourceTracker />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
