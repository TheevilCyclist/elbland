import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "clamp(48px,8cqw,120px) clamp(18px,4cqw,56px)", textAlign: "center" }}>
      <p className="overline" style={{ fontSize: "clamp(22px,3cqw,32px)" }}>Hoppla</p>
      <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 16px" }}>
        Diese Seite gibt es nicht
      </h1>
      <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", maxWidth: "38em", margin: "0 auto 24px" }}>
        Vielleicht hat sich ein Tippfehler eingeschlichen. Zurück zur Startseite – oder ruf uns einfach an, wir helfen dir gern weiter.
      </p>
      <Link href="/" className="btn btn--gold" style={{ padding: "15px 26px", fontSize: 18 }}>
        Zur Startseite
      </Link>
    </section>
  );
}
