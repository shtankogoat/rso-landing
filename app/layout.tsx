import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { RsoFooter } from "@/components/rso/RsoFooter";
import { RevealObserver } from "@/components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Русское спортивное общество — объединяем тех, кто делает российский спорт сильнее",
  description: "Русское спортивное общество (РСО) — некоммерческая организация, объединяющая предпринимателей, руководителей и экспертов индустрии спорта.",
};

export const viewport: Viewport = { themeColor: "#16337f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <RsoFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
