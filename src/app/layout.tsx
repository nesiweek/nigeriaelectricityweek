import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-inter",
});

const title = "NESI Week 2026 | Powering the Future";
const description =
  "Nigeria Electricity Week (NESI Week) 2026 — 15–22 November, Abuja, Nigeria.";
const ogImage = "/images/hero/Cover_electricite.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "NESI Week",
    "Nigeria Electricity Week",
    "Nigeria Electricity Supply Industry",
    "electricity conference Nigeria",
    "energy conference Abuja",
    "power sector Nigeria",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title,
    description,
    url: siteConfig.url,
    locale: "en_NG",
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}