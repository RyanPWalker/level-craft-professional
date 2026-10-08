import Link from "next/link";
import Icon from "./Icon";
import { site } from "../site";

export default function ContactCTA({ title = "Let's talk about your project." }: { title?: string }) {
  return (
    <section id="contact" className="section cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">Free Estimates</p>
          <h2>{title}</h2>
          <p className="cta-text">
            Tell us about the scope, location, and timing. We&apos;ll follow up to schedule a site
            visit and prepare a written estimate.
          </p>
        </div>
        <div className="cta-actions">
          <a href={site.phone.href} className="cta-item">
            <Icon name="phone" />
            <span>
              <span className="cta-label">Call</span>
              {site.phone.display}
            </span>
          </a>
          <Link href="/contact" className="cta-item">
            <Icon name="mail" />
            <span>
              <span className="cta-label">Message</span>
              Request an estimate online
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
