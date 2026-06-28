import Link from "next/link";
import { Logo } from "./Logo";
import { site, legalNav } from "@/lib/site";
import { services } from "@/content/services";
import { locations, locationHref } from "@/content/locations";

/** Dunkler Footer (#1a2e3d). Spalten: NAP, Leistungen, Region + Trust-Zeile. */
export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--ink-dark)",
        color: "var(--footer-text)",
        padding:
          "clamp(30px,4cqw,52px) clamp(18px,4cqw,56px) clamp(24px,3cqw,36px)",
        fontSize: 15,
        lineHeight: 1.55,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(24px,3cqw,48px)",
          marginBottom: 28,
        }}
      >
        {/* NAP */}
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Logo width={34} height={25} tone="light" />
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>
              {site.name} · {site.owner}
            </span>
          </div>
          <div style={{ lineHeight: 1.8 }}>
            {site.street} · {site.zipCity}
            <br />
            <a href={site.phoneHref} style={{ color: "var(--footer-link)", textDecoration: "none", fontWeight: 700 }}>
              {site.phoneDisplay}
            </a>
            <br />
            <a href={site.emailHref} style={{ color: "var(--footer-link)", textDecoration: "none" }}>
              {site.email}
            </a>
          </div>
        </div>

        {/* Leistungen */}
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <div style={footerHeading}>Leistungen</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/leistungen/${s.slug}`} className="footer-link">
                {s.navLabel}
              </Link>
            ))}
          </div>
        </div>

        {/* Region */}
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <div style={footerHeading}>Region</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px 16px" }}>
            {locations.map((l) => (
              <Link key={l.slug} href={locationHref(l.slug)} className="footer-link">
                {l.ort}
              </Link>
            ))}
            <Link href="/einsatzgebiet" style={{ color: "var(--footer-link)", textDecoration: "none", fontWeight: 700 }}>
              und Umgebung →
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.12)",
          paddingTop: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 13.5, color: "#8ba0b2" }}>
          Über 180 Umzüge im Elbland · Transportversichert · Mitglied BG Verkehr
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontWeight: 700 }}>
          {legalNav.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

const footerHeading: React.CSSProperties = {
  color: "#fff",
  fontWeight: 800,
  fontSize: 15,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  marginBottom: 12,
};
