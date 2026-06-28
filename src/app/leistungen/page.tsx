import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGlyph, MailIcon } from "@/components/icons";
import { Section, Overline } from "@/components/ui";
import { site } from "@/lib/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Leistungen | Umzug, Transport & Montage im Elbland",
  description:
    "Privatumzug, Seniorenumzug, Möbeltransport, Verpackung, Montage & Entrümpelung aus Torgau – alles aus einer Hand zum Festpreis. Jetzt anfragen.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <Section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(20px,3cqw,36px)" }}>
        <Overline>Alles aus einer Hand</Overline>
        <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 16px", maxWidth: "18em" }}>
          Unsere Leistungen – alles für deinen Umzug aus einer Hand
        </h1>
        <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", maxWidth: "44em", margin: 0 }}>
          Ein Umzug besteht aus tausend Kleinigkeiten. Bei uns musst du dich nicht um jede einzeln kümmern – sag uns, was du brauchst, und wir stellen dein Paket zusammen. Vom Verpacken über den Transport bis zum Aufbau in der neuen Wohnung.
        </p>
      </Section>

      <section style={{ padding: "0 clamp(18px,4cqw,56px) clamp(20px,3cqw,40px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,22px)" }}>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="card-link"
              style={{ flex: "1 1 320px", minWidth: 0, background: "#fff", border: "1px solid var(--border)", borderRadius: 24, padding: "clamp(22px,2.6cqw,32px)" }}
            >
              <div style={cardBubble}>
                <ServiceGlyph icon={s.icon} size={27} />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>{s.cardTitle}</h2>
              <p style={{ margin: "0 0 14px", color: "var(--body-text)", fontSize: 16 }}>{s.cardText}</p>
              <span className="text-link" style={{ fontSize: 15 }}>Mehr erfahren →</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "clamp(20px,3cqw,40px) clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)" }}>
        <div style={{ background: "var(--ink)", borderRadius: 26, padding: "clamp(26px,3.5cqw,44px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(22px,3cqw,30px)", fontWeight: 800, margin: "0 0 6px" }}>
              Brauchst du mehrere Leistungen?
            </h2>
            <p style={{ color: "var(--footer-text)", fontSize: 18, margin: 0 }}>
              Kein Problem – wir kombinieren alles zu einem Festpreis.
            </p>
          </div>
          <a href={site.emailHref} className="btn btn--gold" style={{ flex: "none", padding: "16px 28px", fontSize: 18, boxShadow: "none" }}>
            <MailIcon size={20} /> E-Mail schreiben
          </a>
        </div>
      </section>
    </>
  );
}

const cardBubble: React.CSSProperties = {
  width: 54,
  height: 54,
  borderRadius: 16,
  background: "var(--cream-card)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold-dark)",
  marginBottom: 16,
};
