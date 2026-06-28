# Handoff: Elbland Umzüge — Komplette Website

## Overview
Marketing-Website für **Elbland Umzüge** (Inhaber: Nico Berner), ein regionales Umzugsunternehmen mit Sitz in Torgau. Ziel der Seite: Vertrauen aufbauen und Anfragen über **Telefon** und **E-Mail** generieren. Es gibt **kein Backend** — alle Handlungsaufrufe sind `tel:`- und `mailto:`-Links. Kein Formular, kein Tracking, keine Datenerfassung.

Ton: durchgehend **Du-Ansprache**, warm, nahbar, regional. Kein Fachjargon.

## About the Design Files
Die Dateien in diesem Bundle sind **Design-Referenzen, erstellt in HTML** — Prototypen, die Aussehen und Verhalten zeigen, **kein produktionsfertiger Code zum 1:1-Kopieren**. Aufgabe ist, diese Designs in der Zielumgebung sauber **nachzubauen** (z. B. Next.js/Astro/SvelteKit + echtes Routing), mit den dort etablierten Mustern. Falls noch keine Umgebung existiert: ein für eine statische Marketing-Site mit guter SEO geeignetes Framework wählen (Astro oder Next.js empfehlenswert) und die Designs dort umsetzen.

Technischer Hinweis zum Prototyp: Die Seiten sind als „Design Components" (`.dc.html`) gebaut. Header, Footer und mobile Kontaktleiste sind geteilte Bausteine; Leistungs- und Ortsseiten sind **datengetrieben** über eine Vorlage (`?slug=`). In der echten Implementierung gehören diese in echte Komponenten + dynamische Routen.

## Fidelity
**High-fidelity (hifi).** Finale Farben, Typografie, Abstände, Copy und Interaktionen. Pixelgenau nachbauen. Einzige Platzhalter: Fotos/Karten (als `<image-slot>` markiert) — durch echte Assets ersetzen.

## Informationsarchitektur / Seiten

Globale Navigation (4 Punkte): **Leistungen · Einsatzgebiet · Über uns · Kontakt**. Logo links → Startseite. Rechts: Telefonnummer-Link + E-Mail-Pill (Desktop).

| Seite | Datei | Zweck |
|---|---|---|
| Startseite | `Startseite.dc.html` | Hero, Leistungs-Teaser, Ablauf, Preise/Q&A, Einsatzgebiet-Teaser, Über-uns-Teaser, Schluss-CTA |
| Leistungen (Übersicht) | `Leistungen.dc.html` | 6 Leistungs-Karten → Detailseiten |
| Leistung (Detail) | `LeistungSeite.dc.html?slug=…` | 1 Vorlage, 6 Datensätze |
| Einsatzgebiet (Übersicht) | `Einsatzgebiet.dc.html` | 7 Orts-Karten → Detailseiten |
| Ort (Detail) | `OrtSeite.dc.html?slug=…` | 1 Vorlage, 7 Datensätze |
| Über uns | `UeberUns.dc.html` | Nico/Team, Werte, Fakten |
| Kontakt | `Kontakt.dc.html` | Telefon/E-Mail/Adresse + CTA-Karte |
| Impressum | `Impressum.dc.html` | Pflichtangaben (Entwurf) |
| Datenschutz | `Datenschutz.dc.html` | DSGVO-Text (statische Site, Server-Logs) |
| AGB | `AGB.dc.html` | Platzhalter |

### Slugs

**Leistungen:** `privatumzug`, `seniorenumzug`, `moebeltransport`, `verpackungsservice`, `montage`, `entruempelung`
**Orte:** `torgau`, `dommitzsch`, `belgern`, `dahlen`, `eilenburg`, `doberschuetz`, `mockrehna`

> Für echte SEO sollten diese als eigene statische Routen ausgeliefert werden (z. B. `/leistungen/privatumzug`, `/umzug-torgau`), nicht als Query-Parameter.

## Design Tokens

**Farben**
| Token | Hex | Verwendung |
|---|---|---|
| Ink (Navy) | `#21384B` | Text, dunkle CTA-Flächen, Footer-Akzent |
| Ink dunkel | `#1a2e3d` | Footer-Hintergrund |
| Akzent Gold | `#D99A2B` | Primär-CTA, Sonne im Logo, Highlights |
| Gold dunkel (Text/Script) | `#C2851B` | Caveat-Akzentzeilen, Icons |
| Seiten-Hintergrund creme | `#FBF5EA` | Body-Hintergrund |
| Sektion weiß | `#FFFFFF` | abwechselnde Sektionen, Karten |
| Creme-Karte | `#FBF0DA` | Icon-Bubbles, Hinweisboxen |
| Rahmen / Border | `#EADDC6` | Karten, Inputs, Trennlinien |
| Fließtext grau | `#5b6b78` | Absätze |
| Sekundärtext | `#9a8154` | Overlines, Captions |
| Erfolg grün | `#1F8A5B` | Häkchen / Trust-Listen |
| Grün-Bubble | `#E9F4EE` | Hintergrund Häkchen-Kreise |

**Typografie**
- Schrift: **Nunito** (400/500/600/700/800/900), Google Fonts. Headlines 800, Fließtext 400–600.
- Akzentschrift: **Caveat** (700), nur für die handschriftlichen Overlines, `transform: rotate(-2deg)`, Farbe `#C2851B`.
- H1: `clamp(32px, 5.6cqw, 58px)`, `line-height: 1.05`, `letter-spacing: -.02em`, weight 800.
- H2: `clamp(25px, 4cqw, 42px)`, weight 800.
- Fließtext: `clamp(16px, 1.85cqw, 20px)`, `line-height: 1.55`, Farbe `#5b6b78`.
- Overline (Caveat): `clamp(22px, 3cqw, 32px)`.

**Form / Radius / Schatten**
- Buttons: **Pill** (`border-radius: 999px`), weight 800.
- Karten: `border-radius: 22–28px`; kleine Boxen 16–20px; Icon-Bubbles 15px.
- Schatten Gold-CTA: `0 12px 26px rgba(217,154,43,.32)`.
- Karten-Schatten: `0 18px 40px rgba(33,56,75,.14)`.
- Sektions-Padding: `clamp(34px,5cqw,68px)` vertikal, `clamp(18px,4cqw,56px)` horizontal.

**Icons:** Lucide-Stil, Linien, `stroke-width` 2–2.4, `currentColor`. Keine Emojis.

## Komponenten (geteilt)

- **SiteHeader** (`SiteHeader.dc.html`): Sticky, creme + Blur, Bottom-Border `#EADDC6`. Desktop: Top-Bar („Kostenlos & unverbindlich – meist Antwort am selben Tag."), Logo, 4-Punkt-Nav (zentriert), Telefon-Link + Gold-E-Mail-Pill. **Responsive Umschaltung per gemessener Breite (ResizeObserver):** unter **840px** Burger-Button (46×46, Rahmen `#EADDC6`); offen = Vollbild-Drawer mit Nav-Links (min-height 48px) + Anrufen/E-Mail-Buttons + X zum Schließen. Wichtig: Umschaltung an **tatsächlicher Breite**, nicht an User-Agent — auch beim Verkleinern des Desktop-Fensters muss der Burger erscheinen.
- **SiteFooter** (`SiteFooter.dc.html`): Dunkel `#1a2e3d`. Spalten: NAP (Name/Adresse/Telefon/E-Mail), Leistungen, Region. Untere Zeile: Trust-Claim („Inhabergeführt seit 2007 · Über 180 Umzüge im Elbland · Transportversichert · Mitglied BG Verkehr") + Impressum/Datenschutz/AGB.
- **MobileContactBar** (`MobileContactBar.dc.html`): Sticky unten, nur Mobil. Zwei Buttons: „Anrufen" (Navy) + „E-Mail" (Gold).

## Kontaktdaten (überall identisch)
- Telefon: **0174 9371317** → `tel:+4901749371317`
- E-Mail: **info@elbland-umzuege.de** → `mailto:info@elbland-umzuege.de`
- Adresse: **Elbland Umzüge – Nico Berner, Oberhafentor 1, 04860 Torgau**

## Interaktionen & Verhalten
- **Keine** Formular-/Backend-Logik. Alle CTAs sind `tel:`/`mailto:`.
- Hover auf Buttons: minimal abdunkeln + leichter Lift (translateY(-1/-2px)); nur Fades.
- Sticky Header (Desktop + Mobil).
- Mobile Burger: Toggle öffnet/schließt Drawer; X-Icon im offenen Zustand.
- Anker-Links innerhalb Seiten (z. B. Hero-CTA → Kontaktbereich) — in echtem Routing ggf. auf Kontaktseite verlinken.
- Responsiv: Flex-Wrap-Layouts, Container-Queries (`cqw`) im Prototyp → in echtem Code per normalen Media-/Container-Queries umsetzen. Breakpoint Header: 840px.

## Inhalte / Copy
Alle Texte sind final und stammen aus der Kundenvorlage (Du-Ansprache). **Leistungs- und Ortstexte** stehen im Prototyp als Daten-Objekte:
- `LeistungSeite.dc.html` → `data`-Objekt in der Logik-Klasse (Titel, Intro, Bullet-Liste, „Warum"-Block, Abschluss, CTA-Typ tel/mail).
- `OrtSeite.dc.html` → `data`-Objekt je Ort (Titel, Intro, Leistungs-Bullets, Abschlusstext, CTA-Label).
Diese Objekte 1:1 als Content-Quelle übernehmen (CMS, MDX oder JSON).

> Hinweis: Die Orte **Doberschütz** und **Mockrehna** wurden im selben Stil ergänzt (waren nicht in der Originalvorlage) — Texte enthalten bewusst keine erfundenen harten Fakten.

## SEO
Jede Seite hat eigenen `<title>` und `<meta name="description">` (im `<head>` der jeweiligen `.dc.html`). Diese Werte übernehmen. Für Ort-/Leistungsseiten pro Slug eigene Titles/Descriptions setzen.

## Assets
- **Logo:** Inline-SVG (aufgehende Sonne in Gold `#D99A2B` über Navy-Strahlen/Horizont). Im Header, Footer und CTA-Watermark verwendet. Als echtes SVG extrahieren.
- **Fotos & Karten:** Platzhalter via `<image-slot>` (`image-slot.js`) — z. B. Hero-Foto Team/LKW, Leistungs-/Ortsfotos, Einsatzgebiet-Karte. Durch echte Bilder ersetzen. (Aktueller Stand: einige Foto-Slots wurden auf Kundenwunsch bereits entfernt, da keine Fotos vorliegen — Hero ist full-width ohne Bild.)
- **Schriften:** Nunito + Caveat via Google Fonts. Für DSGVO-Konformität ggf. selbst hosten (siehe Datenschutz-Hinweis).

## Files (in diesem Bundle)
- `Startseite.dc.html`, `Leistungen.dc.html`, `LeistungSeite.dc.html`, `Einsatzgebiet.dc.html`, `OrtSeite.dc.html`, `UeberUns.dc.html`, `Kontakt.dc.html`, `Impressum.dc.html`, `Datenschutz.dc.html`, `AGB.dc.html`
- Geteilt: `SiteHeader.dc.html`, `SiteFooter.dc.html`, `MobileContactBar.dc.html`
- `image-slot.js` (Platzhalter-Web-Component), `support.js` (Laufzeit des Prototyps — **nicht** in Produktion übernehmen; nur zum lokalen Ansehen der `.dc.html`)

## So sieht man sich den Prototyp an
Die `.dc.html`-Dateien zusammen mit `support.js` und `image-slot.js` in einem Ordner über einen lokalen Webserver öffnen. Für die Implementierung dienen sie nur als visuelle Referenz.
