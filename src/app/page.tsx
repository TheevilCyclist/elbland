import Link from "next/link";
import { LogoWatermark } from "@/components/Logo";
import { ServiceGlyph, CheckIcon, PhoneIcon, MailIcon } from "@/components/icons";
import { Section, Overline } from "@/components/ui";
import { RegionMap } from "@/components/Illustrations";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { locations, locationHref } from "@/content/locations";

const h2: React.CSSProperties = {
  fontSize: "clamp(26px,4cqw,42px)",
  fontWeight: 800,
  letterSpacing: "-.01em",
  margin: "0 0 8px",
};
const lead: React.CSSProperties = { color: "var(--body-text)", fontSize: 18, margin: "0 0 clamp(24px,3cqw,40px)" };

const ablauf = [
  { n: 1, h: "Du meldest dich.", p: "Per Telefon oder E-Mail. Erzähl uns kurz, was ansteht – wohin, wie groß, bis wann." },
  { n: 2, h: "Wir schauen es uns an.", p: "Nico kommt vorbei und sieht sich an, was zu tun ist. Kostenlos und unverbindlich." },
  { n: 3, h: "Du bekommst deinen Festpreis.", p: "Schwarz auf weiß, einmal vereinbart. Was draufsteht, gilt – auch wenn der Umzugstag länger dauert." },
  { n: 4, h: "Wir ziehen dich um.", p: "Pünktlich, sorgsam, eingespielt. Du sagst uns, wo’s hingeht, den Rest machen wir." },
];

const faq = [
  { q: "Was kostet ein Umzug bei euch?", a: "Das hängt von Wohnungsgröße, Entfernung und Aufwand ab. Nach einer kurzen, kostenlosen Besichtigung bekommst du einen Festpreis – ohne versteckte Kosten." },
  { q: "Ist die Besichtigung wirklich kostenlos?", a: "Ja. Du gehst keinerlei Verpflichtung ein. Erst wenn dir Preis und Termin passen, machen wir weiter." },
  { q: "Wie schnell habt ihr Zeit?", a: "Melde dich am besten früh – gerade zum Monatsende ist viel los. Oft finden wir aber auch kurzfristig eine Lösung." },
  { q: "Sind meine Möbel versichert?", a: "Ja, wir transportieren mit Transportversicherung. Sollte doch mal etwas passieren, bist du abgesichert." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        id="top"
        style={{
          padding: "clamp(40px,6cqw,84px) clamp(18px,4cqw,56px) clamp(40px,6cqw,72px)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(34px,6cqw,64px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-.02em", margin: "0 auto 20px", maxWidth: "17em" }}>
          Dein Umzugsunternehmen für Torgau und Umgebung
        </h1>
        <p style={{ fontSize: "clamp(17px,1.9cqw,21px)", color: "var(--body-text)", maxWidth: "42em", margin: "0 auto 28px" }}>
          Du ziehst um und willst dich auf die Menschen verlassen, die deine Möbel tragen? Bei Elbland Umzüge bekommst du keine anonyme Spedition, sondern Nico und sein Team aus Torgau. Wir packen an, wir fahren, wir bauen auf – fair, pünktlich und zum festen Preis, den wir vorher zusammen vereinbaren.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
          <a href={site.phoneHref} className="btn btn--gold" style={{ padding: "clamp(15px,1.7cqw,18px) clamp(22px,2.5cqw,30px)", fontSize: "clamp(17px,1.9cqw,20px)" }}>
            <PhoneIcon size={21} /> Anrufen
          </a>
          <a href={site.emailHref} className="btn btn--outline" style={{ padding: "clamp(15px,1.7cqw,18px) clamp(20px,2.3cqw,26px)", fontSize: "clamp(16px,1.8cqw,19px)" }}>
            <MailIcon size={20} /> E-Mail schreiben
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, justifyContent: "center" }}>
          {["Über 180 Umzüge in der Region", "Transportversichert"].map((t) => (
            <span key={t} style={trustPill}>
              <CheckIcon size={16} strokeWidth={2.6} stroke="#1F8A5B" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN-TEASER */}
      <Section white id="leistungen" style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <h2 style={h2}>Das machen wir für dich</h2>
        <p style={{ ...lead, maxWidth: "40em" }}>
          Vom einzelnen Schrank bis zur kompletten Wohnung – sag uns, was ansteht, und wir kümmern uns drum.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,22px)" }}>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="card-link"
              style={{ flex: "1 1 300px", minWidth: 0, background: "var(--cream-bg)", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(20px,2.4cqw,28px)", display: "flex", gap: 16, alignItems: "flex-start" }}
            >
              <div style={teaserBubble}>
                <ServiceGlyph icon={s.icon} />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 5px" }}>
                  {s.slug === "entruempelung" ? "Entrümpelung & Haushaltsauflösung" : s.navLabel}
                </h3>
                <p style={{ margin: 0, color: "var(--body-text)", fontSize: 16 }}>{s.teaser}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "clamp(22px,2.6cqw,32px)" }}>
          <Link href="/leistungen" className="text-link" style={{ fontSize: 17 }}>
            Alle Leistungen ansehen →
          </Link>
        </div>
      </Section>

      {/* ABLAUF */}
      <Section style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <h2 style={h2}>So einfach läuft dein Umzug mit uns</h2>
        <p style={{ ...lead, maxWidth: "42em" }}>
          Kein Papierkram-Dschungel, keine Überraschungen. In vier Schritten bist du umgezogen.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,2cqw,24px)" }}>
          {ablauf.map((step) => (
            <div key={step.n} style={{ flex: "1 1 220px", minWidth: 0, background: "#fff", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(20px,2.4cqw,28px)" }}>
              <div style={stepBadge}>{step.n}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>{step.h}</h3>
              <p style={{ margin: 0, color: "var(--body-text)", fontSize: 16 }}>{step.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PREISE & TRANSPARENZ */}
      <Section white style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <div style={{ maxWidth: "46em", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(25px,3.8cqw,40px)", fontWeight: 800, letterSpacing: "-.01em", margin: "0 0 16px" }}>
            Was kostet das? Ehrliche Antwort: Wir sagen es dir vorher.
          </h2>
          <p style={{ color: "var(--body-text)", fontSize: 18, margin: "0 0 16px" }}>
            Wir arbeiten mit <strong style={{ color: "var(--ink)" }}>Festpreisen nach einer Besichtigung</strong>. Kein Stundenzähler, der am Umzugstag nervös macht. Erst schauen wir uns gemeinsam an, was zu tun ist – dann bekommst du einen Preis, der steht. So weißt du von Anfang an, woran du bist.
          </p>
          <p style={{ color: "var(--body-text)", fontSize: 18, margin: "0 0 24px" }}>
            <strong style={{ color: "var(--ink)" }}>Warum kein Preis pauschal auf der Website?</strong> Weil jeder Umzug anders ist. Ein Single-Apartment im Erdgeschoss ist eben etwas anderes als das Reihenhaus mit Dachboden. Einen ehrlichen Preis bekommst du nur, wenn wir wissen, was wirklich ansteht – und genau dafür ist die kostenlose Besichtigung da.
          </p>
          <a href={site.emailHref} className="btn btn--gold" style={{ padding: "16px 28px", fontSize: 18 }}>
            <MailIcon size={20} /> Schreib uns eine E-Mail
          </a>
        </div>
        <h3 style={{ textAlign: "center", fontSize: "clamp(20px,2.6cqw,26px)", fontWeight: 800, margin: "clamp(34px,4cqw,52px) 0 clamp(18px,2.4cqw,28px)" }}>
          Häufige Fragen rund um Preis &amp; Ablauf
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", maxWidth: 980, margin: "0 auto" }}>
          {faq.map((item) => (
            <div key={item.q} style={{ flex: "1 1 300px", minWidth: 0, background: "var(--cream-bg)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(20px,2.4cqw,28px)" }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>{item.q}</h4>
              <p style={{ margin: 0, color: "var(--body-text)", fontSize: 16 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EINSATZGEBIET-TEASER */}
      <Section id="einsatzgebiet" style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,3cqw,48px)", alignItems: "center" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <h2 style={{ fontSize: "clamp(25px,3.8cqw,40px)", fontWeight: 800, letterSpacing: "-.01em", margin: "0 0 14px" }}>
              In der ganzen Region für dich unterwegs
            </h2>
            <p style={{ color: "var(--body-text)", fontSize: 18, margin: "0 0 20px" }}>
              Unser Zuhause ist Torgau – und von hier sind wir im Umkreis von rund 60 Kilometern für dich da. Egal ob es nur ein paar Straßen weiter geht oder in den Nachbarort.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 22 }}>
              {locations.map((l, i) => (
                <Link
                  key={l.slug}
                  href={locationHref(l.slug)}
                  style={{
                    background: "#fff",
                    border: i === 0 ? "2px solid var(--gold)" : "1px solid var(--border)",
                    borderRadius: 999,
                    padding: "8px 16px",
                    fontWeight: i === 0 ? 800 : 700,
                    fontSize: 15,
                    textDecoration: "none",
                    color: "var(--ink)",
                  }}
                >
                  {l.ort}
                </Link>
              ))}
            </div>
            <Link href="/einsatzgebiet" className="text-link" style={{ fontSize: 17 }}>
              Ist dein Ort dabei? Einsatzgebiet ansehen →
            </Link>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <RegionMap label="Karte: Einsatzgebiet rund um Torgau" radius={24} />
          </div>
        </div>
      </Section>

      {/* ÜBER-UNS-TEASER */}
      <Section white id="ueberuns" style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <div style={{ maxWidth: 780 }}>
          <Overline size="clamp(22px,2.8cqw,30px)">Hallo, ich bin Nico.</Overline>
          <h2 style={{ fontSize: "clamp(25px,3.6cqw,38px)", fontWeight: 800, letterSpacing: "-.01em", margin: "0 0 14px" }}>
            Hinter Elbland Umzüge steht ein echter Mensch
          </h2>
          <p style={{ color: "var(--body-text)", fontSize: 18, margin: "0 0 20px" }}>
            Mein Name ist Nico Berner. Seit 2007 helfe ich gemeinsam mit meinem Team Menschen beim Umzug in der Region Torgau. In dieser Zeit haben wir schon über 180 Umzüge durchgeführt. Mir ist wichtig, dass jeder Umzug reibungslos abläuft und du dich von Anfang an gut betreut fühlst
          </p>
          <Link href="/ueber-uns" className="text-link" style={{ fontSize: 17 }}>
            Lern uns kennen →
          </Link>
        </div>
      </Section>

      {/* SCHLUSS-CTA */}
      <Section id="kontakt" style={{ padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)" }}>
        <div style={{ background: "var(--ink)", borderRadius: 28, padding: "clamp(28px,4cqw,52px)", position: "relative", overflow: "hidden" }}>
          <LogoWatermark width={130} height={98} />
          <div style={{ position: "relative", maxWidth: 680 }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,4cqw,42px)", fontWeight: 800, letterSpacing: "-.01em", margin: "0 0 12px" }}>
              Bereit für deinen Umzug?
            </h2>
            <p style={{ color: "var(--footer-text)", fontSize: 18, margin: "0 0 24px" }}>
              Erzähl uns kurz, was ansteht – wir melden uns meist noch am selben Tag mit einem kostenlosen Angebot.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
              <a href={site.phoneHref} className="btn btn--gold" style={{ padding: "15px 24px", fontSize: 18 }}>
                <PhoneIcon size={20} /> {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="btn btn--ghost" style={{ padding: "15px 24px", fontSize: 18 }}>
                <MailIcon size={20} /> E-Mail schreiben
              </a>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 20, color: "var(--footer-text)", fontSize: 15, lineHeight: 1.7 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 17, marginBottom: 4 }}>
                {site.name} – {site.owner}
              </div>
              {site.street} · {site.zipCity}
              <br />
              <a href={site.phoneHref} style={{ color: "var(--footer-link)", textDecoration: "none" }}>{site.phoneDisplay}</a>
              {" · "}
              <a href={site.emailHref} style={{ color: "var(--footer-link)", textDecoration: "none" }}>{site.email}</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

const trustPill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 999,
  padding: "8px 14px",
  fontWeight: 700,
  fontSize: 14,
};

const teaserBubble: React.CSSProperties = {
  width: 50,
  height: 50,
  borderRadius: 15,
  background: "#fff",
  border: "1px solid var(--border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold-dark)",
  flex: "none",
};

const stepBadge: React.CSSProperties = {
  width: 54,
  height: 54,
  borderRadius: "50%",
  background: "var(--gold)",
  color: "var(--ink)",
  fontWeight: 800,
  fontSize: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 14,
};
