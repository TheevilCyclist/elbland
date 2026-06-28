import type { Metadata } from "next";
import { LogoWatermark } from "@/components/Logo";
import { EyeIcon, EuroIcon, MapPinIcon, CheckIcon, PhoneIcon, MailIcon } from "@/components/icons";
import { Section, Overline } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns | Nico Berner & Elbland Umzüge aus Torgau",
  description:
    "Lern Nico Berner und sein Team kennen: Umzugsunternehmen aus Torgau, seit 2007, über 180 Umzüge in der Region, ehrlich & fair.",
  alternates: { canonical: "/ueber-uns" },
};

const werte = [
  { icon: <EyeIcon size={26} />, h: "Offen und ehrlich.", p: "Wir reden Klartext – beim Preis, beim Termin, bei dem, was geht und was nicht. Keine Schönrederei, kein Kleingedrucktes." },
  { icon: <EuroIcon size={26} />, h: "Fair im Preis.", p: "Du bekommst einen Festpreis nach Besichtigung. Was wir vereinbaren, steht. Auch wenn der Tag länger dauert als gedacht." },
  { icon: <MapPinIcon size={26} strokeWidth={2} />, h: "Aus der Region, für die Region.", p: "Wir leben hier. Dein Auftrag hält das Geld im Elbland – und sorgt dafür, dass es uns auch morgen noch gibt, wenn du uns wieder brauchst." },
];

const fakten = [
  "Über 180 Umzüge in der Region durchgeführt",
  "5-köpfiges, eingespieltes Team",
  "Transportversichert – deine Sachen sind abgesichert",
  "Mitglied der BG Verkehr",
];

export default function UeberUnsPage() {
  return (
    <>
      <Section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(28px,4cqw,56px)" }}>
        <div style={{ maxWidth: 820 }}>
          <Overline size="clamp(24px,3.2cqw,34px)">Hallo, ich bin Nico.</Overline>
          <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 18px" }}>
            Hinter Elbland Umzüge steckt eine Familie aus dem Elbland
          </h1>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: 0 }}>
            Hallo, ich bin Nico Berner. Seit 2007 ziehe ich mit meinem Team Menschen aus der Region um – inzwischen weit über 180 Mal. Was als Idee begann, ist heute ein eingespieltes Unternehmen mit fünf Leuten, die wissen, wie man anpackt. Und das Schöne: Wir machen das immer noch genau hier, in unserer Heimat an der Elbe.
          </p>
        </div>
      </Section>

      <Section white style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <div style={{ maxWidth: 760 }}>
          <h2 style={h2}>Warum ich das mache</h2>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: 0 }}>
            Ich wollte nie eine anonyme Firma sein, bei der du am Telefon eine Nummer ziehst und dann irgendwen geschickt bekommst. Bei uns ist das anders. Wenn du anrufst, redest du mit mir. Wenn ich dir einen Preis nenne, dann gilt der. Und wenn dann der Umzugstag kommt, stehe ich mit meinem Team selbst bei dir vor der Tür. Mein Name steht über dieser Firma – also gebe ich mir Mühe, dass du zufrieden bist.
          </p>
        </div>
      </Section>

      <Section style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <h2 style={{ ...h2, margin: "0 0 clamp(20px,2.6cqw,30px)" }}>Wofür wir stehen</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,22px)" }}>
          {werte.map((w) => (
            <div key={w.h} style={{ flex: "1 1 280px", minWidth: 0, background: "#fff", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(22px,2.6cqw,30px)" }}>
              <div style={valueBubble}>{w.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 8px" }}>{w.h}</h3>
              <p style={{ margin: 0, color: "var(--body-text)", fontSize: 16 }}>{w.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section white style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <h2 style={{ ...h2, margin: "0 0 clamp(20px,2.6cqw,30px)" }}>Auf einen Blick</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,1.6cqw,18px)", maxWidth: 920 }}>
          {fakten.map((f) => (
            <div key={f} style={{ flex: "1 1 280px", minWidth: 0, display: "flex", gap: 14, alignItems: "center", background: "var(--cream-bg)", border: "1px solid var(--border)", borderRadius: 16, padding: "16px 20px" }}>
              <span style={checkBubble}>
                <CheckIcon size={17} />
              </span>
              <span style={{ fontSize: 17, fontWeight: 700 }}>{f}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <div style={{ background: "var(--ink)", borderRadius: 26, padding: "clamp(28px,4cqw,48px)", position: "relative", overflow: "hidden" }}>
          <LogoWatermark />
          <p style={{ color: "#fff", fontSize: "clamp(18px,2.2cqw,24px)", fontWeight: 600, margin: "0 0 6px", position: "relative", maxWidth: "42em" }}>
            Ich freue mich darauf, dich kennenzulernen – und deinen Umzug zu einer entspannten Sache zu machen.
          </p>
          <div className="overline" style={{ color: "var(--gold)", fontSize: "clamp(28px,3.6cqw,40px)", marginBottom: 22, position: "relative" }}>
            Nico Berner
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, position: "relative" }}>
            <a href={site.phoneHref} className="btn btn--gold" style={{ padding: "15px 26px", fontSize: 18 }}>
              <PhoneIcon size={20} /> Ruf mich an: {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="btn btn--ghost" style={{ padding: "15px 26px", fontSize: 18 }}>
              <MailIcon size={20} /> E-Mail schreiben
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

const h2: React.CSSProperties = {
  fontSize: "clamp(23px,3.2cqw,32px)",
  fontWeight: 800,
  letterSpacing: "-.01em",
  margin: "0 0 14px",
};

const valueBubble: React.CSSProperties = {
  width: 50,
  height: 50,
  borderRadius: 15,
  background: "var(--cream-card)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold-dark)",
  marginBottom: 14,
};

const checkBubble: React.CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "var(--success-bubble)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--success)",
  flex: "none",
};
