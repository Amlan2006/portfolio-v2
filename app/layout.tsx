import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amlan Roy | Blockchain Engineer",
  description:
    "Single-page portfolio for Amlan Roy, Blockchain Engineer and CS undergrad building smart contracts, dApps, DEXes, and EVM indexers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
