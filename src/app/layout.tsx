import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "LegacyBridge | AI for the code that still runs the world",
  description:
    "LegacyBridge transforms legacy codebases into searchable intelligence, safer change workflows, and modernization clarity.",
  openGraph: {
    title: "LegacyBridge",
    description:
      "AI for the code that still runs the world.",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LegacyBridge",
    description: "AI for the code that still runs the world.",
    images: ["/api/og"],
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
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
