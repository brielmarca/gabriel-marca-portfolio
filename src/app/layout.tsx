import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import "./enhancements.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Gabriel Marca | Full-Stack Developer",
  description: "Gabriel Marca builds secure, production-ready web systems for businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${geist.variable} ${montserrat.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
