"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { servicePages } from "../site";

export default function NavLinks() {
  // With trailingSlash the pathname may end in "/".
  const pathname = usePathname().replace(/\/$/, "");
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav className="nav-links" aria-label="Main">
        {servicePages.map((page) => (
          <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined}>
            {page.navLabel}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="menu-icon" aria-hidden="true" />
        Menu
      </button>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
        {servicePages.map((page) => (
          <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined}>
            {page.title}
          </Link>
        ))}
        <a href="#contact" className="btn" onClick={() => setOpen(false)}>Request an Estimate</a>
      </nav>
    </>
  );
}
