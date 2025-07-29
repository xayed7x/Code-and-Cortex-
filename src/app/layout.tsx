import type { Metadata } from "next";
import { satoshi, ibmPlexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  // --- CORE METADATA ---
  metadataBase: new URL("https://your-domain.com"),
  title: "Code & Cortex | AI-Powered Digital Experiences",
  description:
    "Code & Cortex is a bespoke digital studio fusing meticulous design with intelligent AI to build Websites that captivate and perform.",

  // --- BRANDING & KEYWORDS ---
  applicationName: "Code & Cortex",
  keywords: [
    "zayed bin hamid",
    "AI Development",
    "Web Development Bangladesh",
    "Web Developer",
    "Next.js Developer",
    "AI Chatbots",
    "Bespoke Websites",
    "UI/UX Design",
    "Full-Stack Developer",
    "Zayed",
  ],
  authors: [
    { name: "Zayed", url: "https://www.linkedin.com/in/zayed-web-developer" },
  ],
  creator: "Zayed",

  verification: {
    google: "hWY_M3uBePeRTT9uESKKM-lIlLHCvF7-9tluj1sB_Jw",
    
    // You can add other verification codes here in the future if needed
  },

  // --- OPEN GRAPH (FOR SOCIAL MEDIA) ---
  openGraph: {
    type: "website",
    url: "https://code-and-cortex.vercel.app/", // Replace with your actual domain later
    title: "Code & Cortex | AI-Powered Digital Experiences",
    description:
      "Fusing meticulous design with intelligent AI to build unforgettable websites.",
    siteName: "Code & Cortex",
    images: [
      {
        url: "/og-image.png", // This is the file you will create
      },
    ],
  },

  // --- TWITTER (X) CARD ---
  twitter: {
    card: "summary_large_image",
    title: "Code & Cortex | AI-Powered Digital Experiences",
    description: "We build intelligent, bespoke websites and AI tools.",
    images: ["/og-image.png"], // Re-use the same Open Graph image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${ibmPlexMono.variable}`}>
      <body>
        {/* This '{children}' is your page.tsx. There is nothing else. */}
        {children}
      </body>
    </html>
  );
}
