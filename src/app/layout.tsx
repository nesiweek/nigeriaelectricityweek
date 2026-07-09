import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nigeria Electricity Week",
  description: "Nigeria's premier annual electricity and energy ecosystem platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}