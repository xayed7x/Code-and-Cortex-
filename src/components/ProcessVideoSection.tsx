"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom Play Icon (re-usable)
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
  // --- CONFIGURATION ---
  const VIMEO_VIDEO_ID = "1104430198"; // <-- Just the numeric ID
  const POSTER_IMAGE_PATH = "/videos/poster.png"; // <-- Create a high-quality poster image

  const sectionRef = useRef<HTMLElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);

  // State to control when the iframe is loaded and shown
  const [showVideo, setShowVideo] = useState(false);

  useLayoutEffect(() => {
    // The reveal animation for the frame remains the same
    const videoFrame = videoFrameRef.current;
    if (!videoFrame) return;

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

  const handlePlayClick = () => {
    setShowVideo(true); // This will trigger the iframe to render
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
          {/* This container handles the responsive aspect ratio */}
          <div className="relative rounded-xl overflow-hidden aspect-video">
            {!showVideo && (
              // Poster and Custom Play Button
              <div
                className="absolute inset-0 w-full h-full group"
                onClick={handlePlayClick}
              >
                <Image
                  src={POSTER_IMAGE_PATH}
                  alt="Process Manifesto Poster"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 cursor-pointer">
                  <div className="p-4 rounded-full bg-brand-accent/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-accent/70 group-hover:scale-110">
                    <PlayIcon className="w-12 h-12 text-brand-text" />
                  </div>
                </div>
              </div>
            )}

            {showVideo && (
              // The Vimeo Iframe Player
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&dnt=1&byline=0&portrait=0&title=0`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="AURA"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideoSection;
