import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Tim Stearns — Senior AI Full Stack Engineer, Healthcare & LLM Products",
  description:
    "AI-native senior full-stack engineer with 11+ years building LLM-powered products, HIPAA-compliant healthcare platforms and high-traffic e-commerce systems. Python/FastAPI, TypeScript/Node.js, React/Next.js, AWS.",
  authors: [{ name: "Tim Stearns" }],
  openGraph: {
    type: "website",
    title: "Tim Stearns — Senior AI Full Stack Engineer",
    description:
      "LLM-powered, HIPAA-compliant healthcare products — RAG pipelines, AI agents and HL7 FHIR/EHR integration.",
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
