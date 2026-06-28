import type { Metadata } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileNav } from "@/components/MobileNav";
import { site } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Umzugsunternehmen Torgau & Elbland | Elbland Umzüge",
    template: "%s",
  },
  description:
    "Umzugsfirma aus Torgau: Privat- & Seniorenumzüge, Möbeltransport, Montage & Entrümpelung. Festpreis ohne Überraschungen, über 180 Umzüge in der Region.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${nunito.variable} ${caveat.variable}`}>
      <body>
        <div className="site">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        {/* Außerhalb von `.site`: fixierte Thumb-Bar + Bottom-Sheet brauchen den
            Viewport als Containing Block (container-type auf `.site` würde fixed binden). */}
        <MobileNav />
      </body>
    </html>
  );
}
