/**
 * Globale Konstanten — überall identisch (siehe Handoff README).
 * Kein Backend: alle CTAs sind tel:/mailto:-Links.
 */
export const site = {
  name: "Elbland Umzüge",
  owner: "Nico Berner",
  phoneDisplay: "0174 9371317",
  phoneHref: "tel:+4901749371317",
  email: "info@elbland-umzuege.de",
  emailHref: "mailto:info@elbland-umzuege.de",
  street: "Oberhafentor 1",
  zipCity: "04860 Torgau",
  baseUrl: "https://www.elbland-umzuege.de",
} as const;

/** Globale Navigation (4 Punkte). */
export const mainNav = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einsatzgebiet", href: "/einsatzgebiet" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
] as const;
