import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TDM Church — Templo dos Milagres",
    template: "%s | TDM Church",
  },
  description:
    "Uma comunidade de fé, cura e restauração espiritual. Fundada em 1996 em Malden, MA. Cultos aos domingos às 9:30 e quartas às 20h.",
  keywords: [
    "TDM Church",
    "Templo dos Milagres",
    "igreja brasileira",
    "Malden MA",
    "Pastor Alexandre",
    "igreja evangélica",
    "culto ao vivo",
  ],
  openGraph: {
    title: "TDM Church — Templo dos Milagres",
    description:
      "Uma comunidade de fé, cura e restauração espiritual desde 1996. Malden, MA.",
    url: "https://tdmchurch.com",
    siteName: "TDM Church",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/tdm-logo.png",
        width: 512,
        height: 512,
        alt: "TDM Church — Templo dos Milagres",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TDM Church — Templo dos Milagres",
    description:
      "Uma comunidade de fé, cura e restauração espiritual desde 1996. Malden, MA.",
    images: ["/images/tdm-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
