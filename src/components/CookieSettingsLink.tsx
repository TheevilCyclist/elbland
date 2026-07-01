"use client";

/**
 * Footer-Link, der den Cookie-Banner erneut öffnet. Sendet das Custom-Event,
 * auf das <CookieConsent> lauscht. Als <button>, damit es keine Route ist.
 */
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="footer-link"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        font: "inherit",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      Cookie-Einstellungen
    </button>
  );
}
