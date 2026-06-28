import type { CSSProperties, ReactNode } from "react";

/**
 * Marken-Illustrationen & Inline-SVG-Karten im Elbland-Stil (Line-Art,
 * Navy + Gold auf Creme). Bewusst ohne externe Karten-/Bild-Dienste –
 * passt zur Datenschutzerklärung („keine Inhalte von Drittanbietern").
 */

const INK = "#21384B";
const GOLD = "#D99A2B";
const CREAM = "#FBF5EA";
const CARD = "#FBF0DA";
const BORDER = "#EADDC6";
const WATER = "#cdd9e3";
const WATER_HI = "#e6eef4";
const WHITE = "#ffffff";
const NUN = "var(--font-nunito), system-ui, sans-serif";

/* --------------------------------------------------------------------------
   Gemeinsamer Rahmen (gerundet, Schatten) + SVG-Shell
   -------------------------------------------------------------------------- */
function Figure({
  label,
  ratio = "4 / 3",
  radius = 26,
  viewBox = "0 0 400 300",
  bgHeight = 300,
  children,
  style,
}: {
  label: string;
  ratio?: string;
  radius?: number;
  viewBox?: string;
  bgHeight?: number;
  children: ReactNode;
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
        overflow: "hidden",
        border: `1px solid ${BORDER}`,
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      <svg viewBox={viewBox} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
        <rect x="0" y="0" width="400" height={bgHeight} fill={CREAM} />
        {children}
      </svg>
    </div>
  );
}

/* Punkt-Textur (Map-/Poster-Feeling) */
function Dots({ w = 400, h = 300, step = 26, opacity = 0.55 }: { w?: number; h?: number; step?: number; opacity?: number }) {
  const dots: ReactNode[] = [];
  for (let y = step / 2; y < h; y += step) {
    for (let x = step / 2; x < w; x += step) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={1.4} fill={BORDER} />);
    }
  }
  return <g opacity={opacity}>{dots}</g>;
}

/* Aufgehende Sonne (Logo-Motiv) als dezenter Akzent */
function SunMotif({ x = 286, y = -18, scale = 1.45, opacity = 0.5 }: { x?: number; y?: number; scale?: number; opacity?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
      <path d="M22 56 a28 28 0 0 1 56 0 z" fill={GOLD} />
      <g stroke={GOLD} strokeWidth="5" strokeLinecap="round">
        <line x1="50" y1="3" x2="50" y2="19" />
        <line x1="27" y1="9" x2="34" y2="23" />
        <line x1="73" y1="9" x2="66" y2="23" />
        <line x1="11" y1="23" x2="22" y2="33" />
        <line x1="89" y1="23" x2="78" y2="33" />
      </g>
    </g>
  );
}

/* ==========================================================================
   SERVICE-ILLUSTRATIONEN (eine Szene je Leistung)
   ========================================================================== */
function Scene({ children }: { children: ReactNode }) {
  return (
    <g stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  );
}

function PrivatumzugArt() {
  return (
    <Scene>
      <path d="M118 150 L178 104 L238 150 Z" fill={GOLD} stroke="none" />
      <path d="M108 150 L178 100 L248 150" />
      <rect x="132" y="150" width="92" height="85" fill={WHITE} />
      <rect x="150" y="188" width="34" height="47" fill={CARD} />
      <circle cx="178" cy="212" r="2.6" fill={INK} stroke="none" />
      <rect x="196" y="166" width="22" height="22" fill={CREAM} />
      <rect x="248" y="185" width="58" height="50" fill={WHITE} />
      <path d="M248 200 H306" />
      <path d="M277 185 V235" stroke={GOLD} />
    </Scene>
  );
}

function SeniorenumzugArt() {
  return (
    <Scene>
      <rect x="118" y="150" width="170" height="40" rx="14" fill={CARD} />
      <rect x="110" y="178" width="186" height="42" rx="16" fill={WHITE} />
      <path d="M122 220 V235" />
      <path d="M284 220 V235" />
      <path d="M203 178 V192" />
      <path
        d="M250 78 c-9 -13 -31 -7 -31 10 c0 15 19 23 31 35 c12 -12 31 -20 31 -35 c0 -17 -22 -23 -31 -10 z"
        fill={GOLD}
        stroke={INK}
        strokeWidth={5}
      />
    </Scene>
  );
}

function MoebeltransportArt() {
  return (
    <Scene>
      <rect x="68" y="138" width="152" height="82" fill={WHITE} />
      <path d="M68 176 H220" stroke={GOLD} />
      <path d="M92 138 V220" />
      <path d="M220 162 H262 a8 8 0 0 1 8 8 V220 H220 Z" fill={CARD} />
      <rect x="228" y="172" width="30" height="24" rx="4" fill={CREAM} />
      <circle cx="112" cy="220" r="17" fill={WHITE} />
      <circle cx="240" cy="220" r="17" fill={WHITE} />
      <circle cx="112" cy="220" r="4.5" fill={INK} stroke="none" />
      <circle cx="240" cy="220" r="4.5" fill={INK} stroke="none" />
    </Scene>
  );
}

function VerpackungArt() {
  return (
    <Scene>
      <rect x="120" y="150" width="120" height="85" fill={WHITE} />
      <path d="M120 150 L146 128" />
      <path d="M240 150 L214 128" />
      <path d="M146 128 H214" />
      <path d="M180 150 V235" stroke={GOLD} />
      <rect x="78" y="196" width="62" height="39" fill={CARD} />
      <path d="M78 210 H140" />
      <circle cx="282" cy="118" r="26" fill="none" stroke={GOLD} strokeWidth={12} />
      <circle cx="282" cy="118" r="8" fill={CREAM} stroke={INK} strokeWidth={4} />
    </Scene>
  );
}

function MontageArt() {
  return (
    <Scene>
      <rect x="116" y="108" width="98" height="127" fill={WHITE} />
      <path d="M165 108 V235" />
      <circle cx="157" cy="172" r="3" fill={INK} stroke="none" />
      <circle cx="173" cy="172" r="3" fill={INK} stroke="none" />
      <g transform="translate(232 118) rotate(26) scale(4.4)">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"
          fill={GOLD}
          stroke={INK}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </g>
    </Scene>
  );
}

function EntruempelungArt() {
  return (
    <Scene>
      <rect x="92" y="170" width="92" height="65" fill={WHITE} />
      <path d="M92 188 H184" />
      <path d="M138 170 V235" stroke={GOLD} />
      <path d="M210 235 C196 235 196 198 214 190 C209 179 227 177 229 188 C248 197 240 235 230 235 Z" fill={GOLD} stroke={INK} strokeWidth={6} />
      <path d="M214 190 L222 179 L230 190" strokeWidth={5} />
      <path d="M302 108 L252 200" strokeWidth={8} />
      <path d="M252 200 L233 228 L271 228 Z" fill={CARD} />
      <path d="M242 228 V237" />
      <path d="M252 228 V239" />
      <path d="M262 228 V237" />
    </Scene>
  );
}

const SCENES: Record<string, () => ReactNode> = {
  privatumzug: PrivatumzugArt,
  seniorenumzug: SeniorenumzugArt,
  moebeltransport: MoebeltransportArt,
  verpackungsservice: VerpackungArt,
  montage: MontageArt,
  entruempelung: EntruempelungArt,
};

export function ServiceScene({ slug, label, radius = 26 }: { slug: string; label: string; radius?: number }) {
  const Art = SCENES[slug] ?? PrivatumzugArt;
  return (
    <Figure label={label} radius={radius}>
      <Dots />
      <SunMotif />
      {/* Boden / Horizont */}
      <line x1="40" y1="235" x2="360" y2="235" stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <Art />
    </Figure>
  );
}

/* ==========================================================================
   REGIONSKARTE (Elbland) – mit optional hervorgehobenem Ort
   ========================================================================== */
type Town = { slug: string; name: string; x: number; y: number; lx: number; ly: number; anchor: "start" | "middle" | "end" };

const TOWNS: Town[] = [
  { slug: "torgau", name: "Torgau", x: 226, y: 150, lx: 16, ly: 6, anchor: "start" },
  { slug: "dommitzsch", name: "Dommitzsch", x: 262, y: 62, lx: 0, ly: -36, anchor: "middle" },
  { slug: "belgern", name: "Belgern", x: 266, y: 250, lx: 0, ly: 34, anchor: "middle" },
  { slug: "eilenburg", name: "Eilenburg", x: 58, y: 108, lx: 0, ly: 32, anchor: "middle" },
  { slug: "mockrehna", name: "Mockrehna", x: 150, y: 120, lx: 0, ly: -38, anchor: "middle" },
  { slug: "doberschuetz", name: "Doberschütz", x: 78, y: 198, lx: 0, ly: 34, anchor: "middle" },
  { slug: "dahlen", name: "Dahlen", x: 150, y: 226, lx: 0, ly: 34, anchor: "middle" },
];

function Pin({ x, y, sc = 1.5 }: { x: number; y: number; sc?: number }) {
  return (
    <g transform={`translate(${x - 12 * sc} ${y - 22 * sc}) scale(${sc})`}>
      <path
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        fill={GOLD}
        stroke={INK}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3.3" fill={CREAM} stroke={INK} strokeWidth={1.5} />
    </g>
  );
}

export function RegionMap({ highlight, label, radius = 26 }: { highlight?: string; label: string; radius?: number }) {
  const active = highlight ?? "torgau";
  const torgau = TOWNS[0];

  return (
    <Figure label={label} radius={radius}>
      <Dots opacity={0.4} />

      {/* Elbe */}
      <path d="M258 26 C274 72 214 110 226 150 C238 196 256 214 270 288" fill="none" stroke={WATER} strokeWidth={18} strokeLinecap="round" />
      <path d="M258 26 C274 72 214 110 226 150 C238 196 256 214 270 288" fill="none" stroke={WATER_HI} strokeWidth={5} strokeLinecap="round" />
      <text x="242" y="98" fontFamily={NUN} fontSize="12" fontStyle="italic" fontWeight={700} fill="#7e93a3" transform="rotate(58 242 98)">
        Elbe
      </text>

      {/* Routen ab Torgau */}
      <g stroke={INK} strokeWidth={2.2} strokeLinecap="round" strokeDasharray="1 7" opacity={0.32}>
        {TOWNS.filter((t) => t.slug !== "torgau").map((t) => (
          <line key={t.slug} x1={torgau.x} y1={torgau.y} x2={t.x} y2={t.y} />
        ))}
      </g>

      {/* Marker + Labels */}
      {TOWNS.map((t) => {
        const isActive = t.slug === active;
        const isSeat = t.slug === "torgau";
        return (
          <g key={t.slug}>
            {isActive ? (
              <Pin x={t.x} y={t.y} />
            ) : (
              <>
                <circle cx={t.x} cy={t.y} r={6.5} fill={isSeat ? GOLD : INK} stroke={isSeat ? INK : "none"} strokeWidth={isSeat ? 1.6 : 0} />
                <circle cx={t.x} cy={t.y} r={2.5} fill={CREAM} />
              </>
            )}
            <text
              x={t.x + t.lx}
              y={t.y + t.ly}
              textAnchor={t.anchor}
              fontFamily={NUN}
              fontSize="13"
              fontWeight={isActive ? 800 : 700}
              fill={INK}
            >
              {t.name}
            </text>
          </g>
        );
      })}
    </Figure>
  );
}

/* ==========================================================================
   STANDORT-KARTE (Kontakt) – stilisierter Stadtplan mit Pin
   ========================================================================== */
export function ContactMap({ label, radius = 20 }: { label: string; radius?: number }) {
  return (
    <Figure label={label} ratio="16 / 10" radius={radius} viewBox="0 0 400 250" bgHeight={250}>
      <Dots h={250} opacity={0.32} />

      {/* Elbe / Hafen unten rechts */}
      <path d="M400 150 C372 160 372 196 344 206 C322 214 322 250 302 250 L400 250 Z" fill={WATER} />
      <path d="M400 150 C372 160 372 196 344 206 C322 214 322 250 302 250" fill="none" stroke={WATER_HI} strokeWidth={4} />
      <text x="356" y="230" fontFamily={NUN} fontSize="12" fontStyle="italic" fontWeight={700} fill="#7e93a3" transform="rotate(-34 356 230)">
        Elbe
      </text>

      {/* Straßen */}
      <g stroke={BORDER} strokeLinecap="round" fill="none">
        <path d="M-10 150 H410" strokeWidth={18} />
        <path d="M205 -10 V260" strokeWidth={18} />
        <path d="M-10 64 H250" strokeWidth={9} />
        <path d="M70 -10 V260" strokeWidth={9} />
        <path d="M300 -10 L150 260" strokeWidth={9} />
        <path d="M205 206 H410" strokeWidth={9} />
      </g>

      {/* Häuserblöcke */}
      <g fill={WHITE} stroke={BORDER} strokeWidth={3}>
        <rect x="92" y="90" width="84" height="42" rx="6" />
        <rect x="234" y="90" width="66" height="42" rx="6" />
        <rect x="92" y="170" width="84" height="52" rx="6" />
      </g>

      {/* Pin am Standort (Kreuzung) */}
      <circle cx="205" cy="112" r="30" fill={GOLD} opacity={0.16} />
      <g transform="translate(169 81) scale(3)">
        <path d="M18 10c0 6-6 13-6 13s-6-7-6-13a6 6 0 0 1 12 0Z" fill={GOLD} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.6" fill={CREAM} stroke={INK} strokeWidth={1.4} />
      </g>

      {/* Adress-Chip */}
      <g>
        <rect x="120" y="168" width="166" height="30" rx="15" fill={WHITE} stroke={BORDER} strokeWidth={2} />
        <text x="203" y="188" textAnchor="middle" fontFamily={NUN} fontSize="13" fontWeight={800} fill={INK}>
          Oberhafentor 1 · Torgau
        </text>
      </g>
    </Figure>
  );
}
