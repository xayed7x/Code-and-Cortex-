"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A new, large Play Icon for the center of the video
const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.536 0 3.284L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const ProcessVideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // NEW State to track if the video has started playing
  const [hasStarted, setHasStarted] = useState(false);

  useLayoutEffect(() => {
    const videoFrame = videoFrameRef.current;
    if (!videoFrame) return;

    // The scroll animation remains the same, revealing the video frame
    gsap.set(videoFrame, { opacity: 0, scale: 0.95 });

    gsap.to(videoFrame, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  // NEW: Function to handle the play button click
  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasStarted(true);
    video.play();
    video.muted = false; // Unmute the video on play
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-brand-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-brand-text">
            Our Digital Alchemy: The Method Behind the Magic
          </h2>
        </div>

        <div ref={videoFrameRef} className="animated-border p-1">
          <div className="relative rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/process-manifesto.mp4"
              poster="/videos/process-manifesto-thumbnail.png" // <-- THE FIX: Add this line
              loop
              playsInline
              controls={hasStarted}
              className="w-full h-full object-cover"
            />

            {/* THE OVERLAY: This covers the video until play is clicked */}
            {!hasStarted && (
              // This is the updated, on-brand play button overlay
              <div
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 cursor-pointer group"
                onClick={handlePlay}
              >
                {/* THE FIX: The background is now a semi-transparent purple */}
                <div className="p-4 rounded-full bg-brand-accent/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-accent/50 group-hover:scale-110">
                  {/* THE FIX: The icon's text color is now our primary text color for high contrast */}
                  <PlayIcon className="w-12 h-12 text-brand-text" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideoSection;
