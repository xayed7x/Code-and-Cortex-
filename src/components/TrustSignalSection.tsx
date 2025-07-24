"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "./TestimonialCard";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const TrustSignalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-card");

      gsap.to(cards, {
        // Use gsap.to since we set opacity-0 in CSS
        opacity: 1, // Animate TO opacity 1
        y: 0, // Animate TO y 0
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // <-- TRIGGERS EARLIER
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Add the ref to the main section element
    <section
      ref={sectionRef}
      className="bg-[#0D0D10] text-[#EAEAEB] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-sans sm:text-4xl lg:text-5xl">
            Forging Partnerships, Building Success.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400 font-sans">
            Our success is defined by the success of our partners. We're looking
            for the first visionaries to build the future with.
          </p>
        </div>

        {/* Responsive Grid for Testimonial Cards */}
        <div className="mt-16 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          {/* Add the 'testimonial-card' class for GSAP to target */}
          <TestimonialCard
            className="testimonial-card"
            quote="This spot is reserved for a visionary founding partner. We are seeking a brand ready to collaborate on a landmark project that will set a new standard. In return for your trust, you will receive our most dedicated service and preferential founding partner rates."
            attribution="— Your Future Success Story"
          />
          <TestimonialCard
            className="testimonial-card"
            quote="Every project is a deep partnership. Our success is measured by yours. We are committed to crafting not just a beautiful product, but a powerful engine for your growth, and we can't wait to tell your story here."
            attribution="— A Future Market Leader"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSignalSection;
