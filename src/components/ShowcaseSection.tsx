"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projects as caseStudies } from "@/lib/projects-data";

const imageOverrideBySlug: Record<string, string> = {
  "personalized-ecommerce-experience": "/aura.png",
  "ai-brand-tone-analyzer": "/qbrain.png",
  "telecom-fair-ecommerce": "/images/telecomfair-1.png",
  // Progresso doesn't have images under /public/images; use top-level fallback
  "progresso-productivity-app": "/progresso.png",
  "nexacart-fullstack-platform": "/nexa-cart.png",
};

const liveUrlBySlug: Record<string, string> = {
  "personalized-ecommerce-experience": "https://aura-perfume.vercel.app",
  "ai-brand-tone-analyzer": "https://qbrain-ai.vercel.app/",
  "telecom-fair-ecommerce": "https://telecomfair.vercel.app/",
  "progresso-productivity-app": "https://progressly-com.vercel.app/",
  "nexacart-fullstack-platform": "https://nexa-cart.vercel.app/",
};

const techStackBySlug: Record<string, string[]> = {
  "personalized-ecommerce-experience": [
    "Next.js",
    "React",
    "Typescript",
    "Tailwind css",
    "Python",
    "Django",
    "REST Framework",
    "GSAP",
    "React Three Fiber",
    "Drei",
    "JWT",
    "PostgreSQL",
  ],
  "ai-brand-tone-analyzer": ["HTML", "CSS", "JS", "FastAPI", "Python", "React", "GSAP"],
  "telecom-fair-ecommerce": ["Next.js", "Tailwind CSS"],
  "progresso-productivity-app": ["Next.js", "Tailwind CSS"],
};

const cards = caseStudies.map((p) => {
  const fallbackFromFeature = p.code?.features?.[0]?.visual ?? "";
  const imageUrl = imageOverrideBySlug[p.slug] || fallbackFromFeature || "/og-image.png";
  return {
    slug: p.slug,
    title: p.hero.title,
    description: p.hero.tagline,
    imageUrl,
    caseStudyUrl: "#",
    liveUrl: liveUrlBySlug[p.slug],
    techStack: techStackBySlug[p.slug] || [],
  };
});

const ShowcaseSection: React.FC = () => {
  return (
    <section
      id="showcase-section"
      className="relative bg-brand-background py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* The mouse-following spotlight effect can remain if desired */}
      {/* ... spotlight div code would go here ... */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-brand-text">
            Proof of Excellence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/70 font-satoshi">
            Explore a curated selection of projects where meticulous design
            meets intelligent engineering.
          </p>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project} // Pass the entire project object as a prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
