import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { JsonLd, pageMetadata } from "../seo";
import { site } from "../site";

const page = {
  path: "/contact/",
  title: "Request a Free Estimate in Utah County",
  description:
    "Contact Level Craft Construction in Orem, Utah. Free estimates for remodels, additions, and commercial build-outs in Utah County and across Utah.",
};

export const metadata: Metadata = pageMetadata(page);

const nextSteps = [
  "We call you back to talk through the project.",
  "We schedule a site visit to see the space and scope the work.",
  "You get a written estimate with pricing and timeline.",
];

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}${page.path}` },
    ],
  };

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="page-hero">
        <div className="container page-hero-inner page-hero-compact">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <h1>Request a free estimate.</h1>
            <p className="lead">
              Tell us a little about your project and how to reach you. We&apos;ll follow up to
              schedule a site visit.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-layout">
          <div className="form-card">
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <div className="contact-block">
              <h2 className="contact-heading">Prefer to call?</h2>
              <a href={site.phone.href} className="hero-card-phone">
                <Icon name="phone" />
                {site.phone.display}
              </a>
              <p className="contact-detail">
                <Icon name="pin" size={18} />
                {site.city}, {site.state} · Serving all of {site.serviceArea}
              </p>
            </div>
            <div className="contact-block">
              <h2 className="contact-heading">What happens next</h2>
              <ol className="next-steps">
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <ul className="checklist">
              <li><Icon name="check" size={18} />Licensed {site.license.type}</li>
              <li><Icon name="check" size={18} />Insured with general liability coverage</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
