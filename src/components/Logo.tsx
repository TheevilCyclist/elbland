/**
 * Elbland-Logo: aufgehende Sonne in Gold über Navy-Strahlen/Horizont.
 * Inline-SVG aus dem Prototyp extrahiert. `tone` schaltet zwischen
 * Navy-Strahlen (Header) und weißen Strahlen (Footer auf Dunkel).
 */
export function Logo({
  width = 42,
  height = 31,
  tone = "ink",
}: {
  width?: number;
  height?: number;
  tone?: "ink" | "light";
}) {
  const stroke = tone === "light" ? "#fff" : "#21384B";
  const sw = tone === "light" ? 5 : 4.5;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 74"
      fill="none"
      style={{ flex: "none" }}
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round">
        <line x1="50" y1="3" x2="50" y2="19" />
        <line x1="27" y1="9" x2="34" y2="23" />
        <line x1="73" y1="9" x2="66" y2="23" />
        {tone === "ink" && <line x1="11" y1="23" x2="22" y2="33" />}
        {tone === "ink" && <line x1="89" y1="23" x2="78" y2="33" />}
      </g>
      <path d="M22 56 a28 28 0 0 1 56 0 z" fill="#D99A2B" />
      <line x1="9" y1="60" x2="91" y2="60" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

/** Gold-getöntes Wasserzeichen für die dunklen CTA-Bänder. */
export function LogoWatermark({ width = 120, height = 90 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 74"
      fill="none"
      style={{ position: "absolute", right: -12, top: -16, opacity: 0.14 }}
      aria-hidden="true"
    >
      <path d="M22 56 a28 28 0 0 1 56 0 z" fill="#D99A2B" />
      <g stroke="#D99A2B" strokeWidth="5" strokeLinecap="round">
        <line x1="50" y1="3" x2="50" y2="19" />
        <line x1="27" y1="9" x2="34" y2="23" />
        <line x1="73" y1="9" x2="66" y2="23" />
      </g>
    </svg>
  );
}
