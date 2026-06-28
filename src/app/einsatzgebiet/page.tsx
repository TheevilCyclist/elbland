import type { Metadata } from "next";
import Link from "next/link";
import { Section, CtaBand, Overline } from "@/components/ui";
import { RegionMap } from "@/components/Illustrations";
import { locations, locationHref } from "@/content/locations";

export const metadata: Metadata = {
  title: "Einsatzgebiet | Umzüge in Torgau & Umgebung",
  description:
    "Umzüge in Torgau, Dommitzsch, Belgern, Dahlen, Eilenburg, Doberschütz & Mockrehna. Regional, rund 60 km um Torgau. Finde deinen Ort.",
  alternates: { canonical: "/einsatzgebiet" },
};

export default function EinsatzgebietPage() {
  return (
    <>
      <Section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(24px,3cqw,40px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,3.5cqw,52px)", alignItems: "center" }}>
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <Overline>preiswert und kompetent</Overline>
            <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 18px" }}>
              Dein Umzugsunternehmen für Torgau und Umgebung
            </h1>
            <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: 0 }}>
              Unser Zuhause ist Torgau. Von hier aus sind wir in einem Umkreis von rund 60 Kilometern für dich unterwegs – in der Stadt, im Dorf nebenan oder im nächsten Landkreis. Wir kennen die Region, die Wege und auch das eine oder andere enge Treppenhaus.
            </p>
          </div>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <RegionMap label="Karte: Einsatzgebiet rund um Torgau im Elbland" />
          </div>
        </div>
      </Section>

      <Section white style={{ padding: "clamp(30px,4cqw,56px) clamp(18px,4cqw,56px)" }}>
        <div style={{ maxWidth: 760 }}>
          <h2 style={h2}>Warum eine Umzugsfirma aus der Region?</h2>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: 0 }}>
            Weil dein Geld hier bleibt, wo du lebst. Weil wir kurze Wege haben und schnell bei dir sind. Und weil wir uns hier nicht verstecken können – unser Name steht für unsere Arbeit, im ganzen Elbland.
          </p>
        </div>
      </Section>

      <Section style={{ padding: "clamp(32px,4.5cqw,60px) clamp(18px,4cqw,56px)" }}>
        <h2 style={{ ...h2, margin: "0 0 clamp(20px,2.6cqw,30px)" }}>Wir ziehen um in:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,1.6cqw,18px)" }}>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={locationHref(l.slug)}
              className="card-link"
              style={{
                flex: "1 1 240px",
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "18px 22px",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              {l.ort} <span style={{ color: "var(--gold)" }}>→</span>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "clamp(16px,1.85cqw,19px)", color: "var(--body-text)", margin: "clamp(22px,2.6cqw,32px) 0 0" }}>
          Dein Ort ist nicht dabei, liegt aber in der Nähe? Ruf einfach an – wir schauen, ob’s passt.
        </p>
      </Section>

      <CtaBand heading="Ist dein Ort dabei? Lass uns sprechen." sub={null} />
    </>
  );
}

const h2: React.CSSProperties = {
  fontSize: "clamp(23px,3.2cqw,32px)",
  fontWeight: 800,
  letterSpacing: "-.01em",
  margin: "0 0 14px",
};
