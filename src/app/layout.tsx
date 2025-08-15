import type { Metadata } from "next";
import { satoshi, ibmPlexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  // --- CORE METADATA ---
  metadataBase: new URL("https://code-and-cortex.vercel.app"),
  title: "Code & Cortex | AI-Powered Digital Experiences",
  description:
    "Code & Cortex is a bespoke digital studio fusing meticulous design with intelligent AI to build Websites that captivate and perform. Based in Bangladesh, specializing in Next.js, AI integration, and custom web solutions.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

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
    "Bangladesh Web Developer",
    "Custom Web Development",
    "AI Integration",
    "React Developer",
    "Digital Studio",
  ],
  authors: [
    { name: "Zayed Bin Hamid", url: "https://www.linkedin.com/in/zayed-web-developer" },
  ],
  creator: "Zayed Bin Hamid",
  publisher: "Code & Cortex",

  verification: {
    google: "hWY_M3uBePeRTT9uESKKM-lIlLHCvF7-9tluj1sB_Jw",
  },

  // --- OPEN GRAPH (FOR SOCIAL MEDIA) ---
  openGraph: {
    type: "website",
    url: "https://code-and-cortex.vercel.app/",
    title: "Code & Cortex | AI-Powered Digital Experiences",
    description:
      "Fusing meticulous design with intelligent AI to build unforgettable websites. Based in Bangladesh, specializing in custom web solutions and AI integration.",
    siteName: "Code & Cortex",
    locale: "en_US",
    images: [
      {
        url: 'https://code-and-cortex.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code & Cortex Agency Logo and Tagline',
        type: 'image/png',
      },
    ],
  },

  // --- TWITTER (X) CARD ---
  twitter: {
    card: "summary_large_image",
    title: "Code & Cortex | AI-Powered Digital Experiences",
    description: "We build intelligent, bespoke websites and AI tools. Based in Bangladesh.",
    images: ["https://code-and-cortex.vercel.app/og-image.png"],
    creator: "@zayed_web_dev",
    site: "@code_andcortex",
  },

  // --- ADDITIONAL SEO TAGS ---
  alternates: {
    canonical: "https://code-and-cortex.vercel.app/",
  },
  
  category: "technology",
  
  other: {
    "theme-color": "#0f0f23",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f0f23",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Code & Cortex",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Code & Cortex",
              "url": "https://code-and-cortex.vercel.app",
              "logo": "https://code-and-cortex.vercel.app/logo.png",
              "description": "Code & Cortex is a bespoke digital studio fusing meticulous design with intelligent AI to build Websites that captivate and perform.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD",
                "addressRegion": "Bangladesh"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@codeandcortex.com"
              },
              "sameAs": [
                "https://www.linkedin.com/in/zayed-web-developer"
              ],
              "founder": {
                "@type": "Person",
                "name": "Zayed Bin Hamid",
                "jobTitle": "Founder & Lead Developer",
                "url": "https://www.linkedin.com/in/zayed-web-developer"
              },
              "serviceType": [
                "Web Development",
                "AI Integration",
                "UI/UX Design",
                "Custom Software Development"
              ],
              "areaServed": "Worldwide"
            })
          }}
        />
      </head>
      <body>
        {/* This '{children}' is your page.tsx. There is nothing else. */}
        {children}
      </body>
    </html>
  );
}
