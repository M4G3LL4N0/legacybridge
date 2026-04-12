import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegacyBridge | AI for the code that still runs the world",
  description:
    "LegacyBridge transforms legacy codebases into searchable intelligence, safer change workflows, and modernization clarity.",
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
