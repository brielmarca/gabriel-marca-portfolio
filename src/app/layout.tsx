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

const themeInitializationScript = `(()=>{let saved=null;try{saved=localStorage.getItem("portfolio-theme")}catch{}let theme=saved==="dark"||saved==="light"?saved:"dark";if(saved!=="dark"&&saved!=="light")try{theme=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}catch{}document.documentElement.dataset.theme=theme})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${montserrat.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
