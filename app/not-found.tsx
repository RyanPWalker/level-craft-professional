import type { Metadata } from "next";
import Link from "next/link";
import OtherSiteLink from "./components/OtherSiteLink";
import { site } from "./site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

// Exported as 404.html, which GitHub Pages serves for any missing path.
export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner page-hero-compact not-found-hero">
          <div>
            <p className="eyebrow eyebrow-light">Error 404</p>
            <h1>Page not found.</h1>
            <p className="lead">
              We couldn&apos;t find that page. It may have moved, or the link may be mistyped.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="btn">Back to Home</Link>
              <Link href="/contact" className="btn btn-outline-light">Request an Estimate</Link>
            </div>
            <OtherSiteLink origin={site.otherSiteUrl} className="not-found-other" />
          </div>
        </div>
      </section>
    </main>
  );
}
