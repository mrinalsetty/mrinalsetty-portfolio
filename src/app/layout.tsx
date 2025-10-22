import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrinal Srinath Setty · Portfolio",
  description:
    "GenAI Engineer & MSCS @ Northeastern. Agentic AI, LangGraph, LangChain, Full-Stack Engineering.",
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
