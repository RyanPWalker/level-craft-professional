import Link from "next/link";

/** Stand-in mark (a spirit-level vial) until the owner's logo is provided. Mirrors app/icon.svg. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="6" fill="#13233a" />
      <rect x="5" y="12" width="22" height="8" rx="4" fill="none" stroke="#ffffff" strokeWidth="2" />
      <path d="M12.5 12v8M19.5 12v8" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.25" fill="#e0913f" />
    </svg>
  );
}

export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={inverse ? "logo logo-inverse" : "logo"} aria-label="Level Craft Construction, home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">Level Craft</span>
        <span className="logo-sub">Construction</span>
      </span>
    </Link>
  );
}
