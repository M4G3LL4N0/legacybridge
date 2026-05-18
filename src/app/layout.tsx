import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import TrustBanner from "@/components/site/TrustBanner";

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}
