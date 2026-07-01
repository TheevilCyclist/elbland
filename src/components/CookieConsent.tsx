"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Cookie-Consent-Banner (DSGVO). Google Analytics (gtag.js) wird erst nach
 * ausdrücklicher Einwilligung geladen — vorher fließen keine Daten zu Google.
 *
 * Entscheidung liegt in localStorage (`CONSENT_KEY`). Über das Custom-Event
 * `open-cookie-settings` (Footer-Link „Cookie-Einstellungen") lässt sich der
 * Banner jederzeit erneut öffnen, um die Auswahl zu ändern.
 */
const CONSENT_KEY = "elbland-cookie-consent";
const GA_ID = "G-EZFJEMV7YY";

type Decision = "accepted" | "rejected";

export function CookieConsent() {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setDecision(stored);
    } else {
      setOpen(true);
    }

    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  function choose(value: Decision) {
    localStorage.setItem(CONSENT_KEY, value);
    setDecision(value);
    setOpen(false);
  }

  return (
    <>
      {decision === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie-Einstellungen"
          className="cookie-banner"
        >
          <div className="cookie-banner__card">
            <p className="cookie-banner__title">Datenschutz &amp; Cookies</p>
            <p className="cookie-banner__text">
              Wir verwenden Cookies, um mit Google Analytics anonymisiert zu
              verstehen, wie unsere Website genutzt wird. Diese Cookies werden
              nur mit Ihrer Einwilligung gesetzt. Details finden Sie in unserer{" "}
              <a href="/datenschutz" className="cookie-banner__link">
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="cookie-banner__actions">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="cookie-banner__btn cookie-banner__btn--ghost"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="cookie-banner__btn cookie-banner__btn--gold"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
