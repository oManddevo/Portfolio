import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "James Stearns — Senior Software Engineer, Health Tech & Full-Stack",
  description:
    "Senior full-stack engineer with 12 years designing, building and operating cloud-native healthcare systems, unified patient portals and distributed data engines. Python/Flask, React/NextJS, PostgreSQL, AWS.",
  authors: [{ name: "James Stearns" }],
  openGraph: {
    type: "website",
    title: "James Stearns — Senior Software Engineer",
    description:
      "Turning fragmented clinical workflows into secure, empathetic, integrated digital health experiences.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1916",
};

// Runs before first paint: marks JS as available and hides the page while the intro is about to play,
// so visitors never see a flash of the site behind the film.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');
var reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(location.search.indexOf('nointro')<0&&!reduced&&sessionStorage.getItem('intro-seen')!=='1')d.classList.add('intro-pending');
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
