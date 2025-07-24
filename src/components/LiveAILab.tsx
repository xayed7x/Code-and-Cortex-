"use client";

import React, { useRef, useState } from "react";
import ShimmerButton from "./ShimmerButton";
import BrainCircuitIcon from "./BrainCircuitIcon";
import gsap from "gsap";

// Define the structure of our AI's response
interface AnalysisResult {
  brand_voice: string;
  suggested_tagline: string;
}

const LiveAILab: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const brainIconRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const handleAnalyze = async () => {
    if (isLoading || !textInputRef.current?.value) return;

    setIsLoading(true);
    setResult(null);
    setError(null);

    // Animate the brain icon while we fetch the data
    gsap.to(brainIconRef.current, {
      rotation: "+=1080",
      duration: 3,
      ease: "power1.inOut",
    });

    try {
      // Call our own backend API
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textInputRef.current.value }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data: AnalysisResult = await response.json();
      setResult(data);
    } catch (err) {
      setError("Analysis failed. Please try again.");
      console.error(err);
    } finally {
      // Ensure the loading state is turned off even if the API call is fast
      // We use a GSAP delay to match the animation duration
      gsap.delayedCall(3, () => setIsLoading(false));
    }
  };

  return (
    <section
      id="ai-lab"
      className="relative bg-brand-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-brand-text">
            The Innovation Core
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/70 font-satoshi">
            Experience our AI capabilities firsthand. Analyze your brand's tone
            instantly.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8 items-center">
          <div className="relative z-10 bg-brand-surface p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="font-satoshi font-bold text-brand-text mb-4 text-lg">
              Your Brand's Essence
            </h3>
            <textarea
              ref={textInputRef}
              placeholder="e.g., We are a boutique coffee roaster focused on sustainable, single-origin beans and a minimalist aesthetic."
              className="w-full h-32 p-3 bg-brand-background rounded-md text-brand-text font-satoshi placeholder:text-white/40 focus:ring-2 focus:ring-brand-accent transition-all duration-300 border border-white/20"
              disabled={isLoading}
            />
            <div className="mt-6">
              <ShimmerButton onClick={handleAnalyze}>
                {isLoading ? "Analyzing..." : "Analyze My Brand"}
              </ShimmerButton>
            </div>
          </div>

          <div
            ref={brainIconRef}
            className="relative z-10 flex justify-center items-center"
          >
            <div className="absolute w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl"></div>
            <BrainCircuitIcon className="w-24 h-24 text-brand-accent" />
          </div>

          <div className="relative z-10 bg-brand-surface p-6 rounded-lg shadow-lg min-h-[244px] flex flex-col justify-center">
            <h3 className="font-satoshi font-bold text-brand-text mb-2 text-lg">
              AI Analysis
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-ibm-plex-mono text-sm text-brand-accent mb-1">
                  BRAND VOICE:
                </p>
                <p className="font-satoshi text-brand-text">
                  {isLoading
                    ? "..."
                    : result?.brand_voice || error || "Awaiting analysis..."}
                </p>
              </div>
              <div>
                <p className="font-ibm-plex-mono text-sm text-brand-accent mb-1">
                  SUGGESTED TAGLINE:
                </p>
                <p className="font-satoshi text-brand-text">
                  {isLoading
                    ? "..."
                    : result?.suggested_tagline ||
                      error ||
                      "Awaiting analysis..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAILab;
