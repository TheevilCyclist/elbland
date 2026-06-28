/**
 * Orte / Einsatzgebiet — Copy 1:1 aus dem Prototyp (OrtSeite.dc.html data-Objekt).
 * Echte SEO-Routen: /umzug-<slug> (z. B. /umzug-torgau).
 */
export type Location = {
  slug: string;
  ort: string;
  title: string;
  intro: string;
  listHeading: string;
  bullets: string[];
  closing: string;
  ctaLabel: string;
};

export const locations: Location[] = [
  {
    slug: "torgau",
    ort: "Torgau",
    title: "Umzugsunternehmen Torgau – wir sind deine Nachbarn",
    intro:
      "Torgau ist unser Zuhause. Vom Oberhafentor an der Elbe bis hinauf zum Schloss Hartenfels, von der Innenstadt bis in die Ortsteile – wir kennen die Straßen, die Altbauten mit ihren engen Treppenhäusern und die Ecken, an denen der LKW eng wird. Genau das ist unser Vorteil: Wenn du in Torgau umziehst, hast du eine Umzugsfirma vor der Tür, die hier verwurzelt ist.",
    listHeading: "Dein Umzug in Torgau – alles dabei:",
    bullets: [
      "Privatumzüge innerhalb Torgaus oder ins Umland",
      "Seniorenumzüge mit viel Zeit und Ruhe",
      "Möbeltransport für einzelne Stücke",
      "Verpackung, Montage und Entrümpelung",
    ],
    closing:
      "Ob es vom Repitzer Weg in die Innenstadt geht oder von Torgau hinaus aufs Land – wir sind schnell bei dir, weil wir nicht erst anreisen müssen. Und weil wir hier leben, ist uns dein Eindruck von unserer Arbeit besonders wichtig.",
    ctaLabel: "Festpreis für deinen Umzug in Torgau holen",
  },
  {
    slug: "dommitzsch",
    ort: "Dommitzsch",
    title: "Umzugsunternehmen Dommitzsch – kurze Wege, faire Preise",
    intro:
      "Dommitzsch liegt nur ein Stück nördlich von uns an der Elbe – nah genug, dass wir oft in der Gegend sind. Das beschauliche Städtchen mit seinen ruhigen Straßen ist genau die Art Ort, für die sich eine regionale Umzugsfirma lohnt: Wir sind schnell da, kennen den Weg und müssen keine lange Anfahrt auf deine Rechnung setzen.",
    listHeading: "Dein Umzug in Dommitzsch:",
    bullets: [
      "Privatumzüge und behutsame Seniorenumzüge",
      "Möbeltransport für einzelne Stücke",
      "Verpackungsservice, Montage und Entrümpelung",
    ],
    closing:
      "Sag uns, was ansteht – wir kommen vorbei, schauen es uns an und machen dir einen ehrlichen Festpreis.",
    ctaLabel: "Angebot für Dommitzsch holen",
  },
  {
    slug: "belgern",
    ort: "Belgern",
    title: "Umzugsunternehmen Belgern – von Nachbar zu Nachbar an der Elbe",
    intro:
      "Belgern mit seinem Roland am Markt liegt nur ein Stück südlich von Torgau, direkt an der Elbe. Diese Ecke kennen wir gut – von uns aus ist es nur ein Katzensprung zu dir. Das merkst du an kurzen Wegen, schnellen Terminen und einem Team, das die Gegend kennt.",
    listHeading: "Was wir in Belgern für dich tun:",
    bullets: [
      "Komplette Privat- und Seniorenumzüge",
      "Einzelne Möbel sicher transportieren",
      "Verpacken, Auf- und Abbau, Entrümpelung",
    ],
    closing:
      "Ob mitten in Belgern oder in einem der Ortsteile drumherum – wir ziehen dich zuverlässig um, zum Festpreis und ohne, dass du dich um die Logistik kümmern musst.",
    ctaLabel: "Angebot für Belgern holen",
  },
  {
    slug: "dahlen",
    ort: "Dahlen",
    title: "Umzugsunternehmen Dahlen – regional, ruhig, zuverlässig",
    intro:
      "Dahlen mit seinem Schloss und der nahen Dahlener Heide ist ein ruhiger, grüner Fleck südwestlich von Torgau – und für uns gut erreichbar. Gerade in kleineren Orten lohnt sich eine Umzugsfirma aus der Nähe: kurze Anfahrt, schneller Termin, faire Rechnung.",
    listHeading: "Was wir in Dahlen für dich tun:",
    bullets: [
      "Privatumzüge und behutsame Seniorenumzüge",
      "Möbeltransport einzelner Stücke",
      "Verpackung, Montage und Entrümpelung",
    ],
    closing:
      "Sag uns, was ansteht – Nico schaut vorbei und macht dir einen ehrlichen Festpreis.",
    ctaLabel: "Angebot für Dahlen holen",
  },
  {
    slug: "eilenburg",
    ort: "Eilenburg",
    title: "Umzugsunternehmen Eilenburg – verlässlich an der Mulde",
    intro:
      "Eilenburg an der Mulde, mit dem Burgberg über der Stadt, gehört für uns fest zum Einsatzgebiet. Ob in der Altstadt, im Berg oder in den Wohngebieten am Rand – wir ziehen dich zuverlässig um und nehmen dir das Schwere ab.",
    listHeading: "Was wir in Eilenburg anbieten:",
    bullets: [
      "Komplette Privatumzüge, auch ins Umland",
      "Seniorenumzüge mit Geduld und Zeit",
      "Einzeltransporte von Möbeln und Großgeräten",
      "Verpackung, Möbelmontage und Entrümpelung",
    ],
    closing:
      "Als Firma aus dem benachbarten Torgau sind wir schnell bei dir und kennen die Region. Du bekommst einen Festpreis, der hält, und ein Team, das anpackt.",
    ctaLabel: "Festpreis für Eilenburg holen",
  },
  {
    slug: "doberschuetz",
    ort: "Doberschütz",
    title: "Umzugsunternehmen Doberschütz – regional zwischen Mulde und Heide",
    intro:
      "Doberschütz liegt mit seinen Ortsteilen zwischen Eilenburg und der Dübener Heide – ländlich, ruhig und für uns gut erreichbar. Gerade hier lohnt sich eine Umzugsfirma aus der Nähe: kurze Anfahrt von Torgau, schnelle Termine und faire Rechnungen ohne lange Anfahrtskosten.",
    listHeading: "Dein Umzug in Doberschütz:",
    bullets: [
      "Privatumzüge und behutsame Seniorenumzüge",
      "Möbeltransport für einzelne Stücke",
      "Verpackungsservice, Montage und Entrümpelung",
    ],
    closing:
      "Sag uns, was ansteht – wir kommen vorbei, schauen es uns an und machen dir einen ehrlichen Festpreis, der hält.",
    ctaLabel: "Angebot für Doberschütz holen",
  },
  {
    slug: "mockrehna",
    ort: "Mockrehna",
    title: "Umzugsunternehmen Mockrehna – verlässlich am Rand der Dübener Heide",
    intro:
      "Mockrehna liegt zwischen Eilenburg und Torgau, am südlichen Rand der Dübener Heide. Ob im Ortskern oder in einem der umliegenden Ortsteile – wir sind von Torgau aus schnell bei dir und nehmen dir das Schwere ab, vom ersten Karton bis zum aufgebauten Schrank.",
    listHeading: "Unsere Leistungen in Mockrehna:",
    bullets: [
      "Komplette Privat- und Seniorenumzüge",
      "Möbeltransport für einzelne Stücke",
      "Verpackung, Möbelmontage und Entrümpelung",
    ],
    closing:
      "Du musst keine überregionale Spedition anfragen – mit uns hast du eine Umzugsfirma aus der Region, die schnell da ist und fair abrechnet.",
    ctaLabel: "Festpreis für Mockrehna holen",
  },
];

/** Route-Präfix für Ortsseiten: /umzug-torgau usw. */
export const LOCATION_PREFIX = "umzug-";

export function locationHref(slug: string): string {
  return `/${LOCATION_PREFIX}${slug}`;
}

export function getLocationByParam(param: string): Location | undefined {
  if (!param.startsWith(LOCATION_PREFIX)) return undefined;
  const slug = param.slice(LOCATION_PREFIX.length);
  return locations.find((l) => l.slug === slug);
}

/** SEO 1:1 aus dem Prototyp (applyMeta). */
export function locationMeta(l: Location) {
  return {
    title: `Umzugsunternehmen ${l.ort} | Elbland Umzüge`,
    description: `Dein Umzug in ${l.ort}: Privat- & Seniorenumzüge, Möbeltransport, Montage & Entrümpelung. Regional aus Torgau, Festpreis nach Besichtigung.`,
  };
}
