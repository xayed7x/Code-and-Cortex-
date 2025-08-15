import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection'
import ProcessVideoSection from '@/components/ProcessVideoSection';
import LiveAILab from '@/components/LiveAILab'; 
import TrustSignalSection from '@/components/TrustSignalSection'; 
import NexusSection from '@/components/NexusSection';

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Code & Cortex",
            "url": "https://code-and-cortex.vercel.app",
            "description": "Code & Cortex is a bespoke digital studio fusing meticulous design with intelligent AI to build Websites that captivate and perform.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://code-and-cortex.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Code & Cortex",
              "url": "https://code-and-cortex.vercel.app"
            }
          })
        }}
      />
      
      <Navbar/>
      <HeroSection />
      <ShowcaseSection />
      <ProcessVideoSection/>
      <TrustSignalSection />
      <LiveAILab />
      <NexusSection /> 
    </>
  );
}