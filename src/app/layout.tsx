import type { Metadata } from "next";
import { VentureSignature } from "@/components/VentureSignature";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import TrustBanner from "@/components/site/TrustBanner";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2" }],
  },

  manifest: "/site.webmanifest?v=2",

  metadataBase: new URL("https://legacybridge.ai"),
  title: "LegacyBridge | AI for the software nobody can casually replace",
  description:
    "LegacyBridge transforms legacy systems into a system intelligence layer for safer change, clearer modernization sequencing, and pilot-led enterprise adoption.",
  keywords: [
    "legacy modernization",
    "COBOL AI",
    "RPG modernization",
    "Fortran modernization",
    "legacy code intelligence",
    "enterprise AI",
    "workflow risk analysis",
    "brownfield systems",
  ],
  openGraph: {
    title: "LegacyBridge",
    description:
      "AI for the software nobody can casually replace.",
    images: ["/api/og"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegacyBridge",
    description: "AI for the software nobody can casually replace.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_18%)]" />
          <SiteHeader />
          <TrustBanner />
          {children}
          <SiteFooter />
        </div>
      
        <VentureSignature tone="dark" variant="default" />
      </body>
    </html>
  );
}
