import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Caramelo | Camisetas brasileiras sem fantasia",
    template: "%s | Caramelo",
  },
  description:
    "Loja de camisetas brasileiras inspiradas na rua, futebol, cultura popular e identidade nacional.",
  keywords: [
    "Caramelo",
    "camisetas brasileiras",
    "moda brasileira",
    "streetwear brasileiro",
    "camisetas de futebol",
  ],
  openGraph: {
    title: "Caramelo | Camisetas brasileiras sem fantasia",
    description:
      "Camisetas brasileiras com estética urbana, cultura popular e identidade nacional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Caramelo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
