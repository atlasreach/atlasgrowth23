import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasGrowth - Local Business Websites",
  description: "Professional websites for local businesses",
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
