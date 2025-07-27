"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import EmailIcon from "./EmailIcon";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const NexusSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const headline = headlineRef.current;
    const section = sectionRef.current;
    if (!headline || !section) return;

    // --- Conditional Animation Logic ---
    if (!isMobile) {
      // --- DESKTOP: Full GSAP Character Animation ---
      const text = headline.textContent || "";
      headline.innerHTML = "";
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        headline.appendChild(span);
        return span;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to(headline, {
        opacity: 0.75,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    } else {
      // --- MOBILE: Simple, Performant Fade-in Animation ---
      gsap.set(headline, { opacity: 0, y: 10 });
      gsap.to(headline, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
    }
  }, [isMobile]); // Re-run effect only if isMobile changes, to handle resize.

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mission Briefing Sent! (Placeholder)");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-brand-background flex flex-col justify-center items-center py-24 px-8 overflow-hidden"
    >
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 flex-grow flex flex-col justify-center items-center w-full max-w-2xl text-center">
        <h2
          ref={headlineRef}
          // --- Conditional Layout Classes ---
          className={`text-5xl md:text-7xl font-bold text-brand-text font-satoshi tracking-wide mb-6 ${
            !isMobile ? "whitespace-nowrap" : ""
          }`}
        >
          {isMobile ? (
            // --- Mobile Text with Line Break ---
            <>
              Ready to build
              <br />
              your legacy?
            </>
          ) : (
            // --- Desktop Text as a Single String ---
            "Ready to build your legacy?"
          )}
        </h2>
        <p className="max-w-xl text-lg text-brand-text/80 font-satoshi mb-12">
          Our studio is ready to architect your next digital masterpiece. Let's
          start the conversation.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
          {/* ... your form JSX remains unchanged ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-ibm-plex-mono text-brand-text/70 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-slate-200 rounded-lg px-4 py-3 text-slate-900 font-satoshi focus:ring-2 focus:ring-brand-accent transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-ibm-plex-mono text-brand-text/70 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-slate-200 rounded-lg px-4 py-3 text-slate-900 font-satoshi focus:ring-2 focus:ring-brand-accent transition-all duration-300 outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-ibm-plex-mono text-brand-text/70 mb-2"
            >
              Your Mission
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full bg-brand-surface border border-brand-text/20 rounded-lg px-4 py-3 text-brand-text font-satoshi placeholder:text-brand-text/50 focus:ring-2 focus:ring-brand-accent transition-all duration-300 outline-none"
              placeholder="Tell us about the project you want to build..."
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="group relative inline-block text-lg font-ibm-plex-mono text-white bg-gradient-to-r from-brand-secondary-accent to-brand-accent rounded-full py-4 px-10 transition-all duration-300 animate-[pulse-glow_4s_ease-in-out_infinite] hover:shadow-2xl hover:shadow-brand-accent/40"
            >
              Send Mission Briefing
            </button>
          </div>
        </form>
      </div>

      <footer className="relative z-10 w-full pt-20">
        {/* ... your footer JSX remains unchanged ... */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:zayed.b.hamid@gmail.com"
            className="flex items-center gap-2 text-brand-text/60 hover:text-brand-accent transition-colors duration-300"
          >
            <EmailIcon className="w-5 h-5" />
            <span className="font-ibm-plex-mono text-sm">
              zayed.b.hamid@gmail.com
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/xayed7x"
              className="text-brand-text/60 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/zayed-web-developer"
              className="text-brand-text/60 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="font-ibm-plex-mono text-xs text-brand-text/50 pt-2">
            © 2024 Studio Zayed. Crafted with AI and Passion.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default NexusSection;
