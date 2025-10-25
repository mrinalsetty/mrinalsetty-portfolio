import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrinal Setty · Portfolio",
  description:
    "Full-Stack GenAI Engineer & MSCS @ Northeastern. Seeking 2026 Summer Internships in AI/ML, Full-Stack Engineering.",
  metadataBase: new URL("https://mrinalsetty.com"),
  authors: [{ name: "Mrinal Setty" }],
  keywords: [
    "GenAI Engineer",
    "Full-Stack Developer",
    "AI/ML",
    "Northeastern University",
    "Deloitte",
    "Software Engineering",
    "Internships 2026",
  ],
  openGraph: {
    title: "Mrinal Setty · Portfolio",
    description:
      "Full-Stack GenAI Engineer & MSCS @ Northeastern. Seeking 2026 Summer Internships in AI/ML, Full-Stack Engineering.",
    url: "https://mrinalsetty.com",
    siteName: "Mrinal Setty Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrinal Setty · Portfolio",
    description:
      "Full-Stack GenAI Engineer & MSCS @ Northeastern. Seeking 2026 Summer Internships in AI/ML, Full-Stack Engineering.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
