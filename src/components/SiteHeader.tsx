import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneIcon, MailIcon } from "./icons";
import { site, mainNav } from "@/lib/site";

/**
 * Sticky Header, creme + Blur. Desktop (≥840px): Top-Bar, Logo, 4-Punkt-Nav,
 * Telefon-Link + Gold-E-Mail-Pill. Mobil (<840px): nur Logo – die Navigation
 * läuft über die daumenfreundliche Thumb-Bar + Bottom-Sheet (siehe MobileNav).
 */
export function SiteHeader() {
  return (
    <>
      <div
        className="topbar"
        style={{
          background: "var(--ink)",
          color: "#cdd9e3",
          fontSize: 13,
          fontWeight: 600,
          textAlign: "center",
          padding: "7px 16px",
        }}
      >
        Kostenlos &amp; unverbindlich – meist Antwort am selben Tag.
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "clamp(12px,1.8cqw,18px) clamp(16px,3.2cqw,40px)",
          flexWrap: "wrap",
          background: "rgba(251,245,234,.94)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          aria-label="Elbland Umzüge – Startseite"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            color: "var(--ink)",
          }}
        >
          <Logo />
          <span
            style={{
              fontWeight: 800,
              fontSize: "clamp(18px,2.3cqw,22px)",
              letterSpacing: "-.01em",
              lineHeight: 1,
            }}
          >
            {site.name}
          </span>
        </Link>

        <nav
          className="desktop-only"
          aria-label="Hauptnavigation"
          style={{
            gap: "clamp(14px,2cqw,28px)",
            flexWrap: "wrap",
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="desktop-only" style={{ alignItems: "center", gap: 10 }}>
          <a
            href={site.phoneHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--ink)",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 15,
            }}
          >
            <PhoneIcon size={17} strokeWidth={2.4} stroke="#D99A2B" />
            {site.phoneDisplay}
          </a>
          <a href={site.emailHref} className="btn btn--gold" style={{ padding: "11px 18px", fontSize: 15 }}>
            <MailIcon size={17} />
            E-Mail
          </a>
        </span>
      </header>
    </>
  );
}
