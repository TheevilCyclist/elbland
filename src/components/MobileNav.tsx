"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  MapPinIcon,
  GridIcon,
  UsersIcon,
  MessageIcon,
  ChevronRightIcon,
} from "./icons";
import { site } from "@/lib/site";

/**
 * Thumb-Bar + Bottom-Sheet Navigation (mobil, < 840px).
 * Daumenfreundliche Leiste am unteren Rand: links „Menü" (öffnet das
 * Bottom-Sheet mit den Nav-Links), rechts der Haupt-CTA „Anrufen".
 * Das Sheet enthält bewusst KEINEN CTA – nur die Navigation.
 *
 * Wird im Layout außerhalb von `.site` gerendert, weil `.site` durch
 * `container-type: inline-size` ein Containing Block für `position: fixed`
 * wäre und die Leiste sonst nicht am Viewport klebt.
 */

type NavItem = {
  label: string;
  href: string;
  Icon: typeof GridIcon;
  isActive: (pathname: string) => boolean;
};

const items: NavItem[] = [
  { label: "Leistungen", href: "/leistungen", Icon: GridIcon, isActive: (p) => p === "/leistungen" || p.startsWith("/leistungen/") },
  { label: "Einsatzgebiet", href: "/einsatzgebiet", Icon: MapPinIcon, isActive: (p) => p === "/einsatzgebiet" || p.startsWith("/umzug-") },
  { label: "Über uns", href: "/ueber-uns", Icon: UsersIcon, isActive: (p) => p === "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt", Icon: MessageIcon, isActive: (p) => p === "/kontakt" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  // Bei Routenwechsel schließen (z. B. Back/Forward, während das Sheet offen ist).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Overlay bei Navigation schließen
    setOpen(false);
  }, [pathname]);

  // Bei geöffnetem Sheet: Scroll sperren, ESC schließt, Wechsel auf Desktop schließt.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 840px)");
    const onMq = () => {
      if (mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      {/* SCRIM */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "rgba(33,56,75,.5)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .28s ease",
        }}
      />

      {/* BOTTOM SHEET */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!open}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 51,
          background: "var(--cream-bg)",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          boxShadow: "0 -16px 44px rgba(33,56,75,.22)",
          padding: "10px 16px calc(20px + env(safe-area-inset-bottom))",
          maxHeight: "86vh",
          overflowY: "auto",
          transform: open ? "translateY(0)" : "translateY(110%)",
          transition: "transform .34s cubic-bezier(.32,.72,0,1)",
          visibility: open ? "visible" : "hidden",
          transitionProperty: "transform, visibility",
        }}
      >
        {/* Grabber */}
        <div style={{ width: 40, height: 5, borderRadius: 999, background: "var(--border)", margin: "0 auto 16px" }} />

        {/* Kopf */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(33,56,75,.07)",
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {/* Nav-Links */}
        <nav aria-label="Mobile Navigation" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map(({ label, href, Icon, isActive }) => {
            const active = isActive(pathname);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 20px",
                  borderRadius: 16,
                  textDecoration: "none",
                  color: "var(--ink)",
                  fontWeight: 800,
                  fontSize: 20,
                  background: active ? "var(--cream-card)" : "#fff",
                  border: "1px solid var(--border)",
                  borderLeft: active ? "4px solid var(--ink)" : "1px solid var(--border)",
                }}
              >
                <Icon size={24} strokeWidth={2} />
                <span style={{ flex: 1 }}>{label}</span>
                {active ? (
                  <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".08em", color: "var(--gold-dark)" }}>AKTIV</span>
                ) : (
                  <ChevronRightIcon size={22} stroke="var(--muted)" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* THUMB BAR */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          display: "flex",
          gap: 10,
          padding: "10px 12px calc(10px + env(safe-area-inset-bottom))",
          pointerEvents: "none",
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="Menü öffnen"
          style={{
            pointerEvents: "auto",
            flex: "1.3 1 0",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "16px 22px",
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "#fff",
            color: "var(--ink)",
            fontWeight: 800,
            fontSize: 17,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(33,56,75,.16)",
          }}
        >
          <MenuIcon size={22} /> Menü
        </button>
        <a
          href={site.phoneHref}
          className="btn btn--gold"
          aria-label="Anrufen"
          style={{ pointerEvents: "auto", flex: "1 1 0", padding: "16px 22px", borderRadius: 18, fontSize: 17 }}
        >
          <PhoneIcon size={22} /> Anrufen
        </a>
      </div>
    </div>
  );
}
