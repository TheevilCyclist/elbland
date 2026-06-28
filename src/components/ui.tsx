import type { CSSProperties, ReactNode } from "react";
import { LogoWatermark } from "./Logo";
import { PhoneIcon, MailIcon } from "./icons";
import { site } from "@/lib/site";

/** Standard-Sektion mit dem Padding-Rhythmus aus dem Handoff. */
export function Section({
  children,
  white = false,
  id,
  style,
}: {
  children: ReactNode;
  white?: boolean;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(34px,5cqw,68px) clamp(18px,4cqw,56px)",
        background: white ? "#fff" : "transparent",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/** Gold-CTA-Button (Telefon). */
export function PhoneButton({
  label = site.phoneDisplay,
  className = "btn btn--gold",
  size = 20,
  style,
}: {
  label?: string;
  className?: string;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <a href={site.phoneHref} className={className} style={{ padding: "15px 26px", fontSize: 18, ...style }}>
      <PhoneIcon size={size} strokeWidth={2.3} />
      {label}
    </a>
  );
}

/** E-Mail-Button. */
export function MailButton({
  label = "E-Mail schreiben",
  className = "btn btn--gold",
  size = 20,
  style,
}: {
  label?: string;
  className?: string;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <a href={site.emailHref} className={className} style={{ padding: "15px 26px", fontSize: 18, ...style }}>
      <MailIcon size={size} />
      {label}
    </a>
  );
}

/**
 * Dunkles CTA-Band (Navy, abgerundet, Logo-Wasserzeichen). Zentriert,
 * Telefon (Gold) + E-Mail (Ghost). `sub` optional.
 */
export function CtaBand({
  heading,
  sub = "Kostenlos & unverbindlich – meist Antwort am selben Tag.",
}: {
  heading: string;
  sub?: string | null;
}) {
  return (
    <section style={{ padding: "0 clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)" }}>
      <div
        style={{
          background: "var(--ink)",
          borderRadius: 26,
          padding: "clamp(28px,4cqw,48px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <LogoWatermark />
        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(24px,3.4cqw,36px)",
            fontWeight: 800,
            margin: `0 0 ${sub ? 10 : 20}px`,
            position: "relative",
          }}
        >
          {heading}
        </h2>
        {sub && (
          <p style={{ color: "var(--footer-text)", fontSize: 17, margin: "0 0 24px", position: "relative" }}>
            {sub}
          </p>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            position: "relative",
          }}
        >
          <PhoneButton />
          <MailButton className="btn btn--ghost" style={{ boxShadow: "none" }} />
        </div>
      </div>
    </section>
  );
}

/**
 * Platzhalter für Fotos/Karten (ersetzt das Prototyp-<image-slot>).
 * Vor dem Livegang durch echte Assets ersetzen.
 */
export function ImageSlot({
  label,
  radius = 26,
  ratio = "4 / 3",
  style,
}: {
  label: string;
  radius?: number;
  ratio?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{
        width: "100%",
        aspectRatio: ratio,
        borderRadius: radius,
        background:
          "repeating-linear-gradient(135deg, #FBF0DA, #FBF0DA 14px, #f6e8cd 14px, #f6e8cd 28px)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
        color: "var(--muted)",
        fontWeight: 700,
        fontSize: 14,
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      {label}
    </div>
  );
}

/** Häkchen-Bubble + Text (Trust-Listen, Leistungs-Bullets). */
export function CheckRow({ children, align = "flex-start" }: { children: ReactNode; align?: "flex-start" | "center" }) {
  return (
    <div
      style={{
        flex: "1 1 380px",
        minWidth: 0,
        display: "flex",
        gap: 14,
        alignItems: align,
        background: "var(--cream-bg)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "16px 20px",
      }}
    >
      <Bubble />
      <span style={{ fontSize: 17, fontWeight: 600 }}>{children}</span>
    </div>
  );
}

function Bubble() {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "var(--success-bubble)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--success)",
        flex: "none",
        marginTop: 1,
      }}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

/** Caveat-Overline (handschriftlich, rotiert). */
export function Overline({ children, size = "clamp(22px,3cqw,32px)" }: { children: ReactNode; size?: string }) {
  return (
    <div className="overline" style={{ fontSize: size, marginBottom: 4 }}>
      {children}
    </div>
  );
}
