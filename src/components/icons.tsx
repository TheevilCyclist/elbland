/**
 * Lucide-Stil Icons (Linien, currentColor) — 1:1 aus dem Prototyp übernommen.
 * Keine Emojis.
 */
import type { SVGProps } from "react";
import type { ServiceIcon } from "@/content/services";

type IconProps = Omit<SVGProps<SVGSVGElement>, "strokeWidth"> & {
  size?: number;
  strokeWidth?: number;
};

function base({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function PhoneIcon({ strokeWidth = 2.3, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ strokeWidth = 2.1, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}

export function CheckIcon({ strokeWidth = 3, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MapPinIcon({ strokeWidth = 2.2, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MenuIcon({ strokeWidth = 2.4, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ strokeWidth = 2.4, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ChevronRightIcon({ strokeWidth = 2.4, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function GridIcon({ strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function UsersIcon({ strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function MessageIcon({ strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg {...base({ strokeWidth, ...props })} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EuroIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

/* --- Leistungs-Icons --- */
function HomeIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function TruckIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function BoxIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function WrenchIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  );
}

function TrashIcon(props: IconProps) {
  return (
    <svg {...base({ ...props })} aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

const serviceIcons: Record<ServiceIcon, (p: IconProps) => React.ReactElement> = {
  home: HomeIcon,
  heart: HeartIcon,
  truck: TruckIcon,
  box: BoxIcon,
  wrench: WrenchIcon,
  trash: TrashIcon,
};

export function ServiceGlyph({ icon, size = 26 }: { icon: ServiceIcon; size?: number }) {
  const Comp = serviceIcons[icon];
  return <Comp size={size} />;
}
