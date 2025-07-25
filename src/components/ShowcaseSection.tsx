"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import AnimatedBorderCard from './AnimatedBorderCard';

// THE DATA STRUCTURE: Mock data array for our projects
const projects = [
  {
    slug: "personalized-ecommerce-experience",
    title: "AURA - A Bespoke Digital Flagship for a Luxury Perfume Brand",
    description:
      "Fusing interactive 3D with a Personalized recommendation engine.",
    imageUrl: "/aura.png",
    caseStudyUrl: "#", // This is the case study link
    liveUrl: "https://aura-frontend-gamma.vercel.app" ,// <-- ADD THIS
    techStack: ["Next.js","React","Typescript","Tailwind css","Python", "Django","REST Framework", "GSAP",  "React Three Fiber", "Drei", "JWT", "PostgreSQL",],
  },
  {
    slug: "ai-brand-tone-analyzer",
    title: "The Mentor in the Machine: Architecting QBrain AI",
    description: "Engineering a hyper-local, curriculum-aware AI tutor to revolutionize exam preparation for a nation of students.",
    imageUrl: "/qbrain.png",
    caseStudyUrl: "#", // This is the case study link
    liveUrl: "https://qbrain-ai.vercel.app/", // <-- ADD THIS
    techStack: ["HTML","CSS", "JS", "FastAPI", "Python", "React", "GSAP" ],
  },
];

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
          {projects.map((project) => (
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
