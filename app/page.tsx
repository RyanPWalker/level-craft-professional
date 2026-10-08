import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "./components/ContactCTA";
import Icon, { type IconName } from "./components/Icon";
import PhotoCarousel from "./components/PhotoCarousel";
import { getGalleryPhotos } from "./gallery";
import { pageMetadata } from "./seo";
import { site } from "./site";

const homeTitle = `${site.name} | General Contractor in ${site.city}, ${site.state}`;

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/",
    title: homeTitle,
    description:
      "Licensed, insured general contractor in Orem, Utah. Remodels, additions, and commercial tenant improvements in Utah County and across Utah. Free estimates.",
  }),
  // Already includes the brand, so skip the "%s | Level Craft Construction" template.
  title: { absolute: homeTitle },
};

const credentials: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Licensed", text: site.license.type },
  { icon: "clipboard", title: "Insured", text: "General liability coverage" },
  { icon: "building", title: "Residential & Commercial", text: "Remodels to build-outs" },
  { icon: "pin", title: "Statewide Service", text: `Based in ${site.city}, serving all of ${site.serviceArea}` },
];

const services: { icon: IconName; title: string; text: string; href?: string }[] = [
  {
    icon: "building",
    title: "Commercial Construction",
    text: "Tenant improvements, office build-outs, and commercial remodels, managed start to finish.",
    href: "/commercial",
  },
  {
    icon: "home",
    title: "Remodels & Additions",
    text: "Home remodels, additions, basement finishing, repairs, and improvements, built to last.",
    href: "/home-renovation",
  },
  {
    icon: "frame",
    title: "Framing & Carpentry",
    text: "Wood and metal framing, plus doors, trim, and custom carpentry.",
  },
  {
    icon: "layers",
    title: "Drywall, Paint & Tile",
    text: "Drywall hanging, finishing, and repairs; interior and exterior painting; tile floors, showers, and walls.",
  },
  {
    icon: "grid",
    title: "Concrete",
    text: "Driveways, patios, walkways, and pads.",
    href: "/concrete",
  },
  {
    icon: "thermometer",
    title: "HVAC, Plumbing & Electrical",
    text: "Coordinated through qualified trades and managed as part of your project.",
    href: "/hvac",
  },
];

const sectors = [
  {
    href: "/home-renovation",
    eyebrow: "Residential",
    title: "Remodels, additions, and repairs for your home",
    text: "Kitchens, bathrooms, basement finishing, additions, and the finish work that ties them together.",
  },
  {
    href: "/commercial",
    eyebrow: "Commercial",
    title: "Tenant improvements and office build-outs",
    text: "Shell space to finished space, planned around your business and its schedule.",
  },
];

const steps = [
  { title: "Consultation", text: "We visit your site, listen to your goals, and scope the work." },
  { title: "Proposal", text: "A clear written proposal with timeline and pricing." },
  { title: "Construction", text: "Our crew builds while we manage the schedule and the trades, with regular updates." },
  { title: "Walkthrough", text: "We walk the finished project with you to make sure it's right." },
];

const values = [
  { title: "Licensed & insured", text: `${site.license.type}, fully insured with general liability coverage.` },
  { title: "Precise workmanship", text: "Square, level, and plumb, with attention to the details that last." },
  { title: "One point of contact", text: "Full general contracting. We coordinate every trade so you don't have to." },
  { title: "Clear communication", text: "A written scope, a realistic schedule, and updates along the way." },
];

export default function Home() {
  const photos = getGalleryPhotos();
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">General Contractor · {site.city}, {site.state}</p>
            <h1>Residential and commercial construction, built to last.</h1>
            <p className="lead">
              Remodels, additions, and commercial build-outs across {site.serviceArea}. One
              licensed contractor managing your project from estimate to final walkthrough.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn">Request a Free Estimate</Link>
              <a href="#services" className="btn btn-outline-light">View Services</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Contact">
            <p className="hero-card-title">Start your project</p>
            <p>Call to schedule a site visit and a free, written estimate.</p>
            <a href={site.phone.href} className="hero-card-phone">
              <Icon name="phone" />
              {site.phone.display}
            </a>
            <ul className="checklist">
              <li><Icon name="check" size={18} />Licensed {site.license.type}</li>
              <li><Icon name="check" size={18} />Insured with general liability coverage</li>
              <li><Icon name="check" size={18} />Serving all of {site.serviceArea} from {site.city}</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="credentials" aria-label="Credentials">
        <div className="container credentials-grid">
          {credentials.map((c) => (
            <div key={c.title} className="credential">
              <Icon name={c.icon} size={28} />
              <div>
                <p className="credential-title">{c.title}</p>
                <p className="credential-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {photos.length > 0 && (
        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Recent Projects</p>
                <h2>Our recent work</h2>
              </div>
              <p className="section-intro">
                A look at projects from around {site.serviceArea}. Follow along on Instagram at{" "}
                <a href={site.instagram.url} rel="noopener">@{site.instagram.handle}</a>.
              </p>
            </div>
            <PhotoCarousel photos={photos} label="Recent project photos" />
          </div>
        </section>
      )}

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Full-service general contracting</h2>
            </div>
            <p className="section-intro">
              Our crew handles framing, drywall, paint, tile, concrete, and carpentry in-house, and we
              coordinate qualified trades for the rest, so your project runs on one schedule.
            </p>
          </div>
          <div className="grid">
            {services.map((s) => (
              <article key={s.title} className="card">
                <span className="card-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.href && (
                  <Link href={s.href} className="card-link">
                    Learn more <Icon name="arrow" size={16} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container sectors">
          {sectors.map((s) => (
            <Link key={s.href} href={s.href} className="sector">
              <p className="eyebrow">{s.eyebrow}</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="card-link">
                Explore {s.eyebrow.toLowerCase()} <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Our Process</p>
              <h2>A clear path from estimate to completion</h2>
            </div>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about">
          <div>
            <p className="eyebrow">About</p>
            <h2>A local contractor accountable for the whole job</h2>
            <p>
              Level Craft Construction is owned by {site.owner} and based in {site.city},{" "}
              {site.state}. We work on homes and businesses across {site.serviceArea}, acting as your
              general contractor from framing and drywall to tile, concrete, and finish carpentry, and
              coordinating the specialty trades along the way.
            </p>
          </div>
          <ul className="values">
            {values.map((v) => (
              <li key={v.title} className="value-row">
                <span className="value-check">
                  <Icon name="check" size={18} />
                </span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </li>
            ))}
            <li className="cities-more">and anywhere else in {site.serviceArea}</li>
          </ul>
        </div>
      </section>

      <section id="areas" className="section">
        <div className="container areas">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2>Serving all of {site.serviceArea}</h2>
            <p className="section-intro">
              Based in {site.city}, in the heart of {site.county}, we build for homeowners and businesses
              across the state. Have a project outside {site.serviceArea}?{" "}
              <Link href="/contact">Get in touch</Link>. We consider out-of-state work case by case.
            </p>
          </div>
          <ul className="cities" aria-label="Cities we serve">
            {site.serviceCities.map((city) => (
              <li key={city}>
                <Icon name="pin" size={16} />
                {city}
              </li>
            ))}
            <li className="cities-more">and anywhere else in {site.serviceArea}</li>
          </ul>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
