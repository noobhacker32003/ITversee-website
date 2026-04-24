import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITversee — Digital Agency",
  description:
    "Web Development, UI/UX, Cyber Security & Marketing. We transform your ideas into high-performance digital products.",
  keywords: [
    "web development",
    "UI/UX design",
    "cyber security",
    "digital marketing",
    "ITversee",
  ],
  openGraph: {
    title: "ITversee — Digital Agency",
    description:
      "We transform your ideas into high-performance digital products.",
    url: "https://itversee.vercel.app",
    siteName: "ITversee",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
