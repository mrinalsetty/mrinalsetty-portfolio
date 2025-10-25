import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrinal Setty · Portfolio",
  description:
    "Full-Stack GenAI Engineer & MSCS @ Northeastern. Seeking 2026 Summer Internships in AI/ML, Full-Stack Engineering.",
  metadataBase: new URL("https://mrinalsetty.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
