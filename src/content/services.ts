/**
 * Leistungen — Copy 1:1 aus dem Prototyp (LeistungSeite.dc.html data-Objekt).
 * Reihenfolge wie in der Übersicht.
 */
export type ServiceIcon =
  | "home"
  | "heart"
  | "truck"
  | "box"
  | "wrench"
  | "trash";

export type Service = {
  slug: string;
  navLabel: string;
  /** Kurzteaser auf der Startseite. */
  teaser: string;
  /** Etwas längerer Teaser auf der Leistungs-Übersicht. */
  cardText: string;
  /** Titel der Karte auf der Übersicht (kann vom navLabel abweichen). */
  cardTitle: string;
  icon: ServiceIcon;
  title: string;
  intro: string;
  listHeading: string;
  bullets: string[];
  whyHeading: string;
  whyText: string;
  closing: string;
  cta: { label: string; type: "tel" | "mail" };
  slotPlaceholder: string;
};

export const services: Service[] = [
  {
    slug: "privatumzug",
    navLabel: "Privatumzug",
    icon: "home",
    teaser: "Deine ganze Wohnung oder dein Haus, von A nach B. Stressfrei.",
    cardTitle: "Privatumzug",
    cardText:
      "Deine komplette Wohnung oder dein Haus, sicher von A nach B. Wir tragen, fahren und stellen ab, wo du es haben willst.",
    title: "Privatumzug im Elbland – stressfrei in dein neues Zuhause",
    intro:
      "Ein Wohnungswechsel ist aufregend genug – um das Tragen, Fahren und Schleppen musst du dich nicht auch noch kümmern. Wir übernehmen deinen kompletten Privatumzug: von der ersten Kiste bis zum letzten Stuhl in der neuen Wohnung.",
    listHeading: "Was wir für dich übernehmen:",
    bullets: [
      "Möbel und Kartons sicher verladen und transportieren",
      "Schweres Tragen durchs Treppenhaus – auch ohne Aufzug",
      "Empfindliche Stücke besonders geschützt verpacken",
      "Auf Wunsch: Möbel ab- und wieder aufbauen",
      "Alles zum vorher vereinbarten Festpreis",
    ],
    whyHeading: "Warum Elbland Umzüge?",
    whyText:
      "Weil wir aus der Region kommen und die Wege kennen. Weil bei uns der Chef selbst dabei ist. Und weil du vorher genau weißt, was es kostet – ohne böse Überraschung am Umzugstag.",
    closing:
      "Egal ob die erste eigene Wohnung, das Familienhaus oder der Schritt in den neuen Lebensabschnitt: Wir machen deinen Umzug zu einer Sache, an die du dich gern erinnerst.",
    cta: { label: "Festpreis für deinen Umzug holen", type: "mail" },
    slotPlaceholder: "Foto: Privatumzug in Aktion",
  },
  {
    slug: "seniorenumzug",
    navLabel: "Seniorenumzug",
    icon: "heart",
    teaser: "Behutsam, geduldig und mit Zeit für dich.",
    cardTitle: "Seniorenumzug",
    cardText:
      "Ein Umzug im Alter ist mehr als ein Transport. Wir nehmen uns Zeit, gehen behutsam mit deinen Erinnerungen um und helfen auch beim Sortieren.",
    title: "Seniorenumzug – mit Ruhe, Geduld und einem offenen Ohr",
    intro:
      "Wenn man im Alter noch einmal umzieht – in eine kleinere Wohnung, ins betreute Wohnen oder näher zur Familie – ist das oft mehr als nur ein Transport. Da hängen Erinnerungen an jedem Möbelstück. Genau deshalb nehmen wir uns für dich besonders viel Zeit.",
    listHeading: "Wobei wir dich unterstützen:",
    bullets: [
      "In Ruhe sortieren: Was kommt mit, was nicht?",
      "Behutsamer Umgang mit liebgewonnenen Stücken",
      "Möbel abbauen und in der neuen Wohnung wieder aufstellen",
      "Verpacken und Auspacken, damit du nichts heben musst",
      "Auf Wunsch: alte Wohnung besenrein übergeben",
    ],
    whyHeading: "Du bist bei uns keine Nummer.",
    whyText:
      "Nico nimmt sich Zeit für ein ruhiges Gespräch, erklärt jeden Schritt und richtet sich nach deinem Tempo. Gern sind auch Angehörige beim Beratungstermin dabei – dann fühlen sich alle gut aufgehoben.",
    closing: "Ein Umzug im Alter darf sich sicher anfühlen. Dafür sorgen wir.",
    cta: { label: "Ruf uns einfach an: 0174 9371317", type: "tel" },
    slotPlaceholder: "Foto: Seniorenumzug",
  },
  {
    slug: "moebeltransport",
    navLabel: "Möbeltransport",
    icon: "truck",
    teaser: "Einzelne Stücke, das neue Sofa, das Erbstück von Oma.",
    cardTitle: "Möbeltransport",
    cardText:
      "Du brauchst nicht die ganze Wohnung umgezogen, sondern nur einzelne Stücke transportiert? Sofa, Schrank, Klavier oder das Erbstück – wir bringen es heil ans Ziel.",
    title: "Möbeltransport im Elbland – einzelne Stücke sicher ans Ziel",
    intro:
      "Nicht immer steht ein ganzer Umzug an. Manchmal ist es das neue Sofa, der Kleiderschrank vom Online-Kleinanzeigen-Fund oder das Erbstück, das von der einen in die andere Familie wandert. Auch dafür sind wir da – schnell, sorgsam und ohne dass du dir einen Transporter leihen und allein schleppen musst.",
    listHeading: "Das transportieren wir für dich:",
    bullets: [
      "Einzelne Möbelstücke und Großgeräte",
      "Sperriges wie Sofas, Schränke, Couchgarnituren",
      "Empfindliche Stücke (z. B. antike Möbel, Spiegel, Glasvitrinen)",
      "Lieferungen aus dem Möbelhaus, die du selbst nicht stemmen kannst",
    ],
    whyHeading: "Heil ankommen ist Ehrensache.",
    whyText:
      "Wir verzurren und polstern richtig, tragen zu zweit statt zu riskant – und sind transportversichert. So kommt dein gutes Stück ohne Kratzer an.",
    closing: "Sag uns, was wohin soll – wir machen dir einen fairen Festpreis.",
    cta: { label: "Transport anfragen", type: "mail" },
    slotPlaceholder: "Foto: Möbeltransport",
  },
  {
    slug: "verpackungsservice",
    navLabel: "Verpackungsservice",
    icon: "box",
    teaser: "Wir packen ein, du musst keinen Karton anfassen.",
    cardTitle: "Verpackungsservice",
    cardText:
      "Kartons packen kostet Zeit und Nerven. Übernimm das nicht selbst – wir packen sorgsam ein, beschriften und packen am Ziel wieder aus, wenn du magst.",
    title: "Verpackungsservice – du musst keinen Karton anfassen",
    intro:
      "Das Einpacken ist für viele der nervigste Teil am Umzug. Wochenlang Kartons schleppen, einwickeln, beschriften – und am Ende fehlt doch das Klebeband. Überlass das einfach uns.",
    listHeading: "Was wir übernehmen:",
    bullets: [
      "Fachgerechtes Verpacken deines Hausrats",
      "Besonderer Schutz für Geschirr, Gläser, Elektronik und Empfindliches",
      "Klare Beschriftung, damit am Ziel alles dorthin kommt, wo es hingehört",
      "Auf Wunsch: Auspacken in der neuen Wohnung",
      "Material wie Kartons und Polster bringen wir mit",
    ],
    whyHeading: "Spar dir Zeit und Rücken.",
    whyText:
      "Während wir packen, kannst du dich um den Rest kümmern – Ummeldungen, Kinder, Job. Am Umzugstag steht alles bereit, und nichts geht zu Bruch.",
    closing:
      "Den Verpackungsservice gibt’s einzeln oder als Teil deines Komplettumzugs – ganz wie du magst.",
    cta: { label: "Verpackungsservice anfragen", type: "mail" },
    slotPlaceholder: "Foto: Verpackungsservice",
  },
  {
    slug: "montage",
    navLabel: "Montage",
    icon: "wrench",
    teaser: "Schränke, Betten, Küchen: ab- und wieder aufgebaut.",
    cardTitle: "Montagetätigkeiten (Auf- & Abbau)",
    cardText:
      "Schränke, Betten, Küchen, Regale: Wir bauen sie in der alten Wohnung ab und in der neuen wieder fachgerecht auf.",
    title: "Möbelmontage – ab- und wieder aufgebaut, fachgerecht",
    intro:
      "Der Schrank passt nicht durchs Treppenhaus, das Bett muss zerlegt werden, die Küche soll in der neuen Wohnung wieder stehen? Genau das ist unser Job. Wir bauen deine Möbel sauber ab und am Ziel fachgerecht wieder auf – mit dem richtigen Werkzeug und ohne herumliegende Restschrauben.",
    listHeading: "Das bauen wir für dich ab und auf:",
    bullets: [
      "Schränke, Regale und Kommoden",
      "Betten und Lattenroste",
      "Tische und sperrige Sitzmöbel",
      "Einbau- und Einzelküchen (Standardmontage)",
    ],
    whyHeading: "Damit nichts wackelt.",
    whyText:
      "Wir merken uns, was wohin gehört, sortieren die Beschläge und setzen alles wieder passgenau zusammen. So steht dein Mobiliar in der neuen Wohnung genauso fest wie vorher – nur eben am neuen Platz.",
    closing:
      "Montage gibt’s bei uns einzeln oder direkt im Rahmen deines Umzugs.",
    cta: { label: "Montage anfragen", type: "mail" },
    slotPlaceholder: "Foto: Möbelmontage",
  },
  {
    slug: "entruempelung",
    navLabel: "Entrümpelung",
    icon: "trash",
    teaser: "Besenrein übergeben, ohne Aufwand für dich.",
    cardTitle: "Entrümpelung & Haushaltsauflösung",
    cardText:
      "Wenn eine Wohnung leer und besenrein übergeben werden muss – auch in schweren Momenten. Wir räumen, entsorgen fachgerecht und nehmen dir die Last ab.",
    title:
      "Entrümpelung & Haushaltsauflösung – wir nehmen dir die Last ab",
    intro:
      "Ob nach einem Umzug, beim Ausräumen eines Kellers oder wenn ein ganzer Haushalt aufgelöst werden muss: Das ist oft kräftezehrend – körperlich und manchmal auch emotional. Wir gehen die Sache zuverlässig und respektvoll an und übergeben dir am Ende leere, besenreine Räume.",
    listHeading: "Das übernehmen wir:",
    bullets: [
      "Ausräumen von Wohnungen, Häusern, Kellern und Dachböden",
      "Fachgerechte Entsorgung und Trennung",
      "Besenreine Übergabe an Vermieter oder Käufer",
      "Auf Wunsch: Wertgegenstände und Erinnerungsstücke aussortieren und beiseitelegen",
    ],
    whyHeading: "Mit Fingerspitzengefühl.",
    whyText:
      "Gerade bei einer Haushaltsauflösung – etwa nach einem Trauerfall – wissen wir, dass mehr dahintersteckt als Möbel. Wir arbeiten ruhig, diskret und nehmen Rücksicht. Du sagst, was bleibt, wir kümmern uns um den Rest.",
    closing: "",
    cta: { label: "Sprich mit uns: 0174 9371317", type: "tel" },
    slotPlaceholder: "Foto: Entrümpelung & Haushaltsauflösung",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** SEO 1:1 aus dem Prototyp (applyMeta). */
export function serviceMeta(s: Service) {
  return {
    title: `${s.navLabel} Torgau & Elbland | Elbland Umzüge`,
    description: `${s.navLabel} aus Torgau & Umgebung – sorgfältig, transportversichert, Festpreis nach Besichtigung. Jetzt anfragen.`,
  };
}
