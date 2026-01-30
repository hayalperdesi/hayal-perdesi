import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hayalperdesi.com"),
  title: {
    default: "Hayal Perdesi Organizasyon | Buzul Ekspresi Çocuk Tiyatrosu",
    template: "%s | Hayal Perdesi Organizasyon",
  },
  description:
    "Buzul Ekspresi çocuk tiyatrosu ile çocuklarınıza unutulmaz anlar yaşatıyoruz. Türkiye genelinde AVM ve Kültür Merkezi etkinlikleri.",
  keywords: [
    "buzul ekspresi",
    "çocuk tiyatrosu",
    "hayal perdesi",
    "çocuk etkinlikleri",
    "AVM etkinlik",
    "kültür merkezi",
    "çocuk oyunu",
    "aile etkinliği",
    "interaktif tiyatro",
    "çocuk gösterisi",
  ],
  authors: [{ name: "Hayal Perdesi Organizasyon" }],
  creator: "Hayal Perdesi Organizasyon",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hayalperdesi.com",
    siteName: "Hayal Perdesi Organizasyon",
    title: "Hayal Perdesi Organizasyon | Buzul Ekspresi Çocuk Tiyatrosu",
    description:
      "Buzul Ekspresi çocuk tiyatrosu ile çocuklarınıza unutulmaz anlar yaşatıyoruz.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hayal Perdesi Organizasyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayal Perdesi Organizasyon",
    description:
      "Buzul Ekspresi çocuk tiyatrosu ile çocuklarınıza unutulmaz anlar yaşatıyoruz.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
