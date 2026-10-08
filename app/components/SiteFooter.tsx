import Link from "next/link";
import Logo from "./Logo";
import { servicePages, site } from "../site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>
            Residential and commercial general contractor based in {site.city}, {site.state},
            serving {site.serviceArea} and surrounding areas.
          </p>
        </div>
        <nav className="footer-col" aria-label="Services">
          <h2 className="footer-heading">Services</h2>
          {servicePages.map((page) => (
            <Link key={page.href} href={page.href}>{page.title}</Link>
          ))}
        </nav>
        <div className="footer-col">
          <h2 className="footer-heading">Contact</h2>
          <Link href="/contact">Request an estimate</Link>
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.city}, {site.state}</span>
        </div>
        <div className="footer-col">
          <h2 className="footer-heading">Credentials</h2>
          <span>{site.license.type}</span>
          {site.license.number && <span>License #{site.license.number}</span>}
          <span>Insured, with general liability coverage</span>
        </div>
      </div>
      <div className="container footer-legal">
        <p>&copy; {year} {site.legalName}. All rights reserved.</p>
        <p>{site.name}</p>
      </div>
    </footer>
  );
}
