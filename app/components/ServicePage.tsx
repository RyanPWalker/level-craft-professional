import Link from "next/link";
import ContactCTA from "./ContactCTA";
import Icon, { type IconName } from "./Icon";
import type { Faq } from "../faqs";
import { areaServedJsonLd, businessId, JsonLd } from "../seo";
import { servicePages, site } from "../site";

export type ServicePageProps = {
  /** The page's path, title, and description, shared with its metadata. Used for structured data. */
  page: { path: string; title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  icon: IconName;
  offeringsTitle: string;
  offeringsIntro?: string;
  offerings: { title: string; text: string }[];
  highlightsTitle: string;
  highlights: { title: string; text: string }[];
  faqs: Faq[];
  ctaTitle: string;
};

/** Shared layout for service landing pages. Pages can diverge from this as they grow. */
export default function ServicePage(props: ServicePageProps) {
  const url = `${site.url}${props.page.path}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.page.title,
    description: props.page.description,
    url,
    serviceType: props.offerings.map((o) => o.title),
    provider: { "@id": businessId },
    areaServed: areaServedJsonLd,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const otherServices = servicePages.filter((p) => `${p.href}/` !== props.page.path);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: props.page.title, item: url },
    ],
  };

  return (
    <main>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{props.eyebrow}</span>
            </nav>
            <h1>{props.title}</h1>
            <p className="lead">{props.lead}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn">Request an Estimate</a>
              <a href={site.phone.href} className="btn btn-outline-light">Call {site.phone.display}</a>
            </div>
          </div>
          <aside className="glance" aria-label="At a glance">
            <span className="glance-icon">
              <Icon name={props.icon} size={28} />
            </span>
            <p className="glance-title">At a glance</p>
            <ul className="checklist">
              {props.offerings.map((o) => (
                <li key={o.title}>
                  <Icon name="check" size={18} />
                  {o.title}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Scope of Work</p>
              <h2>{props.offeringsTitle}</h2>
            </div>
            {props.offeringsIntro && <p className="section-intro">{props.offeringsIntro}</p>}
          </div>
          <div className="grid">
            {props.offerings.map((o, i) => (
              <article key={o.title} className="card">
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Why Level Craft</p>
              <h2>{props.highlightsTitle}</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {props.highlights.map((h) => (
              <div key={h.title} className="value">
                <span className="value-icon">
                  <Icon name="shield" />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
            <p className="section-intro">
              Don&apos;t see your question? Call <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
          </div>
          <div className="faq-list">
            {props.faqs.map((f) => (
              <details key={f.question} className="faq">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt related">
        <div className="container">
          <h2 className="related-title">Other services</h2>
          <ul className="related-list">
            {otherServices.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="related-link">
                  {p.title} <Icon name="arrow" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA title={props.ctaTitle} />
    </main>
  );
}
