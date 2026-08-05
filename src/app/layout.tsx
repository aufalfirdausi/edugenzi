import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SkipLink } from "@/components/site/SkipLink";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edugenzi.com"),
  // keywords: [SEO (tanyain mas apa yang harus diisi di sini)],`
  title: {
    default: "Edugenzi | Kursus Teknologi untuk Anak & Remaja",
    template: "%s | Edugenzi",
  },
  description:
    "Edugenzi adalah lembaga kursus berbasis STEAM untuk anak usia 7–17 tahun. Program: Coding & AI, Desain Grafis & 3D, Robotika & IoT, dan Public Speaking.",
  openGraph: {
    title: "Edugenzi | Kursus Teknologi untuk Anak & Remaja",
    description:
      "Belajar interaktif dan menyenangkan untuk SD–SMP–SMA. Program: Coding & AI, Desain Grafis & 3D, Robotika & IoT, dan Public Speaking.",
    url: "https://edugenzi.com/",
    siteName: "Edugenzi",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
