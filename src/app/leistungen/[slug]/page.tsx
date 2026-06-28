import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { CtaBand, CheckRow, Overline } from "@/components/ui";
import { ServiceScene } from "@/components/Illustrations";
import { site } from "@/lib/site";
import { services, getService, serviceMeta } from "@/content/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/leistungen/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  const meta = serviceMeta(service);
  return { ...meta, alternates: { canonical: `/leistungen/${slug}` } };
}

export default async function LeistungPage(props: PageProps<"/leistungen/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const isTel = service.cta.type === "tel";
  const ctaHref = isTel ? site.phoneHref : site.emailHref;

  return (
    <>
      {/* BREADCRUMB */}
      <nav
        aria-label="Brotkrümel"
        style={{ padding: "clamp(16px,2.4cqw,26px) clamp(18px,4cqw,56px) 0", fontSize: 14, fontWeight: 700, color: "var(--muted)" }}
      >
        <Link href="/leistungen" style={{ color: "var(--muted)", textDecoration: "none" }}>
          Leistungen
        </Link>{" "}
        <span style={{ opacity: 0.6 }}>/</span>{" "}
        <span style={{ color: "var(--body-text)" }}>{service.navLabel}</span>
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
          <Overline>{service.navLabel}</Overline>
          <h1 style={{ fontSize: "clamp(30px,5cqw,52px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 18px" }}>
            {service.title}
          </h1>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: "0 0 24px" }}>
            {service.intro}
          </p>
          <a href={ctaHref} className="btn btn--gold" style={{ padding: "15px 26px", fontSize: 18 }}>
            {isTel ? <PhoneIcon size={20} /> : <MailIcon size={20} />}
            {service.cta.label}
          </a>
        </div>
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <ServiceScene slug={service.slug} label={service.slotPlaceholder} />
        </div>
      </section>

      {/* LISTE */}
      <section style={{ background: "#fff", padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <h2 style={listHeading}>{service.listHeading}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,1.6cqw,18px)", maxWidth: 920 }}>
          {service.bullets.map((b) => (
            <CheckRow key={b}>{b}</CheckRow>
          ))}
        </div>
      </section>

      {/* WARUM */}
      <section style={{ padding: "clamp(34px,5cqw,64px) clamp(18px,4cqw,56px)" }}>
        <div style={{ maxWidth: 720 }}>
          <h2 style={{ ...listHeading, margin: "0 0 14px" }}>{service.whyHeading}</h2>
          <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: service.closing ? "0 0 18px" : 0 }}>
            {service.whyText}
          </p>
          {service.closing && (
            <p style={{ fontSize: "clamp(16px,1.85cqw,20px)", color: "var(--body-text)", margin: 0 }}>{service.closing}</p>
          )}
        </div>
      </section>

      <CtaBand heading="Lass uns über deinen Umzug sprechen" />
    </>
  );
}

const listHeading: React.CSSProperties = {
  fontSize: "clamp(23px,3.2cqw,32px)",
  fontWeight: 800,
  letterSpacing: "-.01em",
  margin: "0 0 clamp(20px,2.6cqw,30px)",
};
