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