import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Elbland Umzüge Torgau",
  description: "Allgemeine Geschäftsbedingungen von Elbland Umzüge aus Torgau.",
  alternates: { canonical: "/agb" },
};

const bestandteile = ["Leistungsumfang", "Haftung / Versicherung", "Zahlungsbedingungen", "Stornierung"];

export default function AgbPage() {
  return (
    <section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)", maxWidth: 820, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "clamp(30px,5cqw,48px)", fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 8px" }}>AGB</h1>
      <p style={{ fontSize: 14, color: "var(--muted)", fontWeight: 700, margin: "0 0 28px" }}>
        Platzhalter · optional, vor Veröffentlichung prüfen lassen
      </p>

      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(22px,2.8cqw,34px)" }}>
        <p style={{ margin: "0 0 16px", fontSize: 17, color: "var(--body-text)" }}>
          Hier stehen die Allgemeinen Geschäftsbedingungen. Für Umzugsverträge sind sie sinnvoll und sollten vor dem Livegang erstellt bzw. geprüft werden.
        </p>
        <p style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700 }}>Sinnvolle Bestandteile:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {bestandteile.map((b) => (
            <div key={b} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", flex: "none" }} />
              <span style={{ fontSize: 17 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "var(--cream-card)", border: "1px solid var(--border)", borderRadius: 18, padding: "18px 22px", marginTop: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
        <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-dark)", flex: "none", fontWeight: 800 }}>
          !
        </span>
        <p style={{ margin: 0, fontSize: 15, color: "#7a6a45" }}>
          Dieser Platzhalter ersetzt keine rechtliche Beratung – bitte vor Veröffentlichung anwaltlich prüfen lassen.
        </p>
      </div>
    </section>
  );
}
