import type { Metadata } from "next";
import { LogoWatermark } from "@/components/Logo";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { Overline } from "@/components/ui";
import { ContactMap } from "@/components/Illustrations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Angebot | Elbland Umzüge Torgau",
  description:
    "Kontaktiere Elbland Umzüge aus Torgau: 0174 9371317 oder per E-Mail. Kostenloses Festpreis-Angebot für deinen Umzug im Elbland.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(20px,3cqw,32px)" }}>
        <Overline>Wir freuen uns auf dich</Overline>
        <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 16px" }}>
          Lass uns über deinen Umzug sprechen
        </h1>
        <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", maxWidth: "44em", margin: 0 }}>
          Erzähl uns kurz, was ansteht – wir melden uns meist noch am selben Tag mit einem kostenlosen, unverbindlichen Angebot. Am liebsten persönlich. Ruf einfach an oder schreib uns eine E-Mail.
        </p>
      </section>

      <section style={{ padding: "0 clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,3cqw,48px)", alignItems: "flex-start" }}>
          {/* Kontaktwege */}
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <h2 style={{ fontSize: "clamp(21px,2.8cqw,28px)", fontWeight: 800, letterSpacing: "-.01em", margin: "0 0 18px" }}>
              So erreichst du uns
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              <a href={site.phoneHref} style={contactCard}>
                <span style={contactIcon}>
                  <PhoneIcon size={22} strokeWidth={2.2} />
                </span>
                <span>
                  <span style={contactLabel}>Telefon</span>
                  <span style={contactValue}>{site.phoneDisplay}</span>
                </span>
              </a>
              <a href={site.emailHref} style={contactCard}>
                <span style={contactIcon}>
                  <MailIcon size={22} strokeWidth={2} />
                </span>
                <span>
                  <span style={contactLabel}>E-Mail</span>
                  <span style={contactValue}>{site.email}</span>
                </span>
              </a>
              <div style={{ ...contactCard, alignItems: "flex-start", cursor: "default" }}>
                <span style={contactIcon}>
                  <MapPinIcon size={22} strokeWidth={2} />
                </span>
                <span>
                  <span style={contactLabel}>Adresse</span>
                  <span style={{ ...contactValue, fontSize: 18, lineHeight: 1.4 }}>
                    {site.name} – {site.owner}
                    <br />
                    {site.street} · {site.zipCity}
                  </span>
                </span>
              </div>
            </div>
            <ContactMap label="Karte: Standort Oberhafentor 1, 04860 Torgau" radius={20} />
          </div>

          {/* CTA-Karte */}
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <div style={{ background: "var(--ink)", borderRadius: 22, padding: "clamp(24px,3cqw,36px)", color: "#fff", position: "relative", overflow: "hidden" }}>
              <LogoWatermark />
              <h2 style={{ fontSize: "clamp(21px,2.6cqw,28px)", fontWeight: 800, margin: "0 0 12px", position: "relative" }}>
                Erzähl uns kurz, was ansteht
              </h2>
              <p style={{ color: "var(--footer-text)", fontSize: 17, margin: "0 0 24px", position: "relative", lineHeight: 1.6 }}>
                Schreib uns eine E-Mail mit dem Wichtigsten – von wo nach wo, wie groß und bis wann. Wir melden uns meist noch am selben Tag mit einem kostenlosen Festpreis-Angebot. Oder ruf einfach an.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <a href={site.emailHref} className="btn btn--gold" style={{ padding: "16px 24px", borderRadius: 14, fontSize: 18, boxShadow: "none" }}>
                  <MailIcon size={20} /> E-Mail schreiben
                </a>
                <a href={site.phoneHref} className="btn btn--ghost" style={{ padding: "16px 24px", borderRadius: 14, fontSize: 18 }}>
                  <PhoneIcon size={20} stroke="#D99A2B" /> {site.phoneDisplay} anrufen
                </a>
              </div>
              <p style={{ color: "#8ba0b2", fontSize: 13, margin: "18px 0 0", position: "relative" }}>
                Kostenlos &amp; unverbindlich. Wir verkaufen deine Daten nicht – versprochen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const contactCard: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 20px",
  textDecoration: "none",
  color: "var(--ink)",
};

const contactIcon: React.CSSProperties = {
  width: 46,
  height: 46,
  borderRadius: 13,
  background: "var(--cream-card)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold-dark)",
  flex: "none",
};

const contactLabel: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "var(--muted)",
};

const contactValue: React.CSSProperties = {
  display: "block",
  fontSize: 19,
  fontWeight: 800,
};
