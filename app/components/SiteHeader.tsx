import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { site } from "../site";

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <p className="topbar-note">
            Licensed {site.license.type} · Insured · Serving all of {site.serviceArea}
          </p>
          <a href={site.phone.href} className="topbar-phone">
            <Icon name="phone" size={16} />
            {site.phone.display}
          </a>
        </div>
      </div>
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <NavLinks />
          <Link href="/contact" className="btn btn-small nav-cta">Request an Estimate</Link>
        </div>
      </header>
    </>
  );
}
