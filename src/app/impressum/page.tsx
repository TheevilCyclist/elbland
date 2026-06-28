import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | Elbland Umzüge Torgau",
  description: "Impressum von Elbland Umzüge – Nico Berner, Oberhafentor 1, 04860 Torgau.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)", maxWidth: 820, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "clamp(30px,5cqw,48px)", fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 8px" }}>
        Impressum
      </h1>
      <p style={{ fontSize: 14, color: "var(--muted)", fontWeight: 700, margin: "0 0 28px" }}>
        Entwurf · vor Veröffentlichung auf Vollständigkeit prüfen
      </p>

      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(22px,2.8cqw,34px)" }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 12px" }}>
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 17 }}>
          {site.name}
          <br />
          {site.owner}
          <br />
          {site.street}
          <br />
          {site.zipCity}
        </p>

        <h3 style={legalH3}>Kontakt</h3>
        <p style={{ margin: "0 0 20px", fontSize: 17 }}>
          Telefon: <a href={site.phoneHref} style={legalLink}>{site.phoneDisplay}</a>
          <br />
          E-Mail: <a href={site.emailHref} style={legalLink}>{site.email}</a>
        </p>

        <h3 style={legalH3}>Umsatzsteuer-ID</h3>
        <p style={{ margin: "0 0 20px", fontSize: 17, color: "var(--body-text)" }}>51032918461</p>

        <h3 style={legalH3}>Berufsgenossenschaft</h3>
        <p style={{ margin: "0 0 20px", fontSize: 17 }}>BG Verkehr</p>

        <h3 style={legalH3}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
        <p style={{ margin: 0, fontSize: 17 }}>Nico Berner, Anschrift wie oben</p>
      </div>
    </section>
  );
}

const legalH3: React.CSSProperties = { fontSize: 17, fontWeight: 800, margin: "0 0 6px" };
const legalLink: React.CSSProperties = { color: "var(--gold-dark)", textDecoration: "none", fontWeight: 700 };
