import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Portfólio de Gael Leite Guzman, desenvolvedor de software com foco em backend, sistemas e engenharia de software.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaelguzman.vercel.app"),
  title: "Gael Leite Guzman | Desenvolvedor de Software",
  description: siteDescription,
  openGraph: {
    title: "Gael Leite Guzman | Desenvolvedor de Software",
    description: siteDescription,
    url: "/",
    siteName: "Gael Guzman",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gael Leite Guzman | Desenvolvedor de Software",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
