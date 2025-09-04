"use client";

import React, { useState, useEffect } from "react"; // <--- CORRECTED THIS LINE
import { motion, AnimatePresence } from "framer-motion";

// --- Data for the Slideshow ---
const projects = [
  { id: 1, image: "/aura.png" },
  { id: 2, image: "/nexa-cart.png" },
  { id: 3, image: "/qbrain.png" },
  { id: 4, image: "/progresso.png" },
];

const SLIDE_DURATION = 4000; // 4 seconds per slide

// --- Reusable AnimatedBorderCard Component ---
const AnimatedBorderCard = ({ children }: { children: React.ReactNode }) => (
  <div className="animated-border p-1 w-full h-full">
    <div className="bg-brand-background rounded-[15px] w-full h-full">
      {children}
    </div>
  </div>
);

// --- The New Hero Section: "The Digital Atelier" ---
const NewHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleScroll = () => {
    const showcaseSection = document.getElementById("showcase-section");
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const timelineProgressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: { duration: SLIDE_DURATION / 1000, ease: "linear" },
    },
  };

  return (
    <section className="relative w-full h-auto flex items-start justify-center bg-brand-background text-brand-text overflow-hidden pt-8">
      <div className="w-full z-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-16 gap-y-12 items-center">
          {/* Left Column: The Narrative (30% width on desktop) */}
          <div className="md:col-span-4 flex flex-col justify-center h-full text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-bold font-satoshi text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">
                Elevate Your Digital Presence with Elegant, High-Performance Websites.
              </h1>
              <p className="mt-6 text-lg text-gray-400 max-w-sm font-satoshi">
                Your business deserves more than just a website – it deserves a digital presence that converts.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleScroll}
                  className="inline-block rounded-full bg-gradient-to-r from-[#58338a] to-[#9D4EDD] px-8 py-3 text-sm font-satoshi font-normal text-white/90 tracking-wide shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(157,78,221,0.7)]"
                >
                  Explore Our Work
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Proof (70% width on desktop) */}
          <div className="md:col-span-6 flex flex-col justify-center w-full h-full order-1 md:order-2 pr-4">
            <motion.div
              className="aspect-[16/10] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedBorderCard>
                <div className="w-full h-full p-2">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={projects[currentIndex].image}
                      alt="Showcased Project"
                      variants={slideVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </AnimatePresence>
                </div>
              </AnimatedBorderCard>
            </motion.div>

            {/* The Refined Timeline Indicator */}
            <div className="w-full mt-8 px-1">
              <div className="relative h-2 flex items-center">
                {/* Background Track */}
                <div className="absolute w-full h-[1px] bg-brand-surface" />

                {/* Progress Fill Track */}
                <div className="absolute w-full h-[1px] left-0 top-1/2 -translate-y-1/2">
                  <motion.div
                    key={currentIndex}
                    className="h-full bg-brand-accent"
                    variants={timelineProgressVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>

                {/* Dots */}
                <div className="absolute w-full flex justify-between items-center">
                  {projects.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        currentIndex === index
                          ? "bg-brand-accent scale-150"
                          : "bg-brand-surface"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
