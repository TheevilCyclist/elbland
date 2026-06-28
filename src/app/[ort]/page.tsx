import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { CtaBand, CheckRow } from "@/components/ui";
import { RegionMap } from "@/components/Illustrations";
import { site } from "@/lib/site";
import {
  locations,
  getLocationByParam,
  locationMeta,
  LOCATION_PREFIX,
} from "@/content/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ ort: `${LOCATION_PREFIX}${l.slug}` }));
}

export async function generateMetadata(props: PageProps<"/[ort]">): Promise<Metadata> {
  const { ort } = await props.params;
  const location = getLocationByParam(ort);
  if (!location) return {};
  const meta = locationMeta(location);
  return { ...meta, alternates: { canonical: `/${ort}` } };
}

export default async function OrtPage(props: PageProps<"/[ort]">) {
  const { ort } = await props.params;
  const location = getLocationByParam(ort);
  if (!location) notFound();

  return (
    <>
      {/* BREADCRUMB */}
      <nav
        aria-label="Brotkrümel"
        style={{ padding: "clamp(16px,2.4cqw,26px) clamp(18px,4cqw,56px) 0", fontSize: 14, fontWeight: 700, color: "var(--muted)" }}
      >
        <Link href="/einsatzgebiet" style={{ color: "var(--muted)", textDecoration: "none" }}>
          Einsatzgebiet
        </Link>{" "}
        <span style={{ opacity: 0.6 }}>/</span>{" "}
        <span style={{ color: "var(--body-text)" }}>{location.ort}</span>
      </nav>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(24px,3.5cqw,52px)",
          alignItems: "center",
          padding: "clamp(20px,3cqw,40px) clamp(18px,4cqw,56px) clamp(28px,4cqw,56px)",
        }}
      >
        <div style={{ flex: "1 1 360px", minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "7px 14px",
              fontWeight: 800,
              fontSize: 14,
              color: "var(--gold-dark)",
              marginBottom: 14,
            }}
          >
            <MapPinIcon size={15} /> Einsatzgebiet Elbland
          </div>
          <h1 style={{ fontSize: "clamp(28px,4.6cqw,48px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 18px" }}>
            {location.title}
          </h1>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: "0 0 24px" }}>
            {location.intro}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href={site.emailHref} className="btn btn--gold" style={{ padding: "15px 26px", fontSize: 18 }}>
              <MailIcon size={20} /> {location.ctaLabel}
            </a>
            <a href={site.phoneHref} className="btn btn--outline" style={{ padding: "15px 24px", fontSize: 17 }}>
              <PhoneIcon size={19} stroke="#C2851B" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <RegionMap highlight={location.slug} label={`Karte: Umzüge in ${location.ort} und Umgebung`} />
        </div>
      </section>

      {/* LISTE */}
      <section style={{ background: "#fff", padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <h2 style={listHeading}>{location.listHeading}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,1.6cqw,18px)", maxWidth: 920 }}>
          {location.bullets.map((b) => (
            <CheckRow key={b}>{b}</CheckRow>
          ))}
        </div>
      </section>

      {/* ABSCHLUSS-TEXT */}
      <section style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <p style={{ fontSize: "clamp(17px,2cqw,22px)", color: "var(--ink)", fontWeight: 600, margin: 0, maxWidth: 760, lineHeight: 1.5 }}>
          {location.closing}
        </p>
      </section>

      <CtaBand heading={location.ctaLabel} />
    </>
  );
}

const listHeading: React.CSSProperties = {
  fontSize: "clamp(23px,3.2cqw,32px)",
  fontWeight: 800,
  letterSpacing: "-.01em",
  margin: "0 0 clamp(20px,2.6cqw,30px)",
};
