import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NESI Week 2026 | Powering the Future",
  description:
    "Nigeria Electricity Week (NESI Week) 2026 — 15–22 November, Abuja, Nigeria.",
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