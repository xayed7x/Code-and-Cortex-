"use client";

import React from "react";
import Image from "next/image";
import AnimatedBorderCard from "./AnimatedBorderCard"; // Assuming you want the border
import ExternalLinkIcon from "./ExternalLinkIcon"; // Import the new icon
import Link from "next/link"; // Import Link from next/link

// Define the structure of the project object to match your data
interface ProjectType {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyUrl: string;
  liveUrl?: string;
  techStack: string[];
}

// Define the props for this component
interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Destructure the project object for easier access
  const {
    slug,
    title,
    description,
    imageUrl,
    caseStudyUrl,
    liveUrl,
    techStack,
  } = project;

  return (
    <AnimatedBorderCard>
      <div className="bg-brand-surface rounded-[15px] h-full w-full p-6 flex flex-col">
        {/* Visual */}
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-satoshi text-brand-text mb-2">
            {title}
          </h3>
          <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-4">
            {description}
          </p>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-brand-background text-brand-accent font-ibm-plex-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* --- THIS IS THE CORRECTED ACTION ROW --- */}
          <div className="flex justify-between items-center mt-auto pt-4">
            {/* --- THIS IS THE FIX --- */}
            {/* Use the Next.js Link component for client-side routing */}
            <Link
              href={`/case-study/${slug}`} // Dynamic URL using the project's slug
              passHref
              className="text-brand-accent font-ibm-plex-mono text-sm self-center hover:underline transition-all"
            >
              View Case Study →
            </Link>

            {/* Live Site Button */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-brand-accent font-ibm-plex-mono text-sm hover:underline transition-all"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedBorderCard>
  );
};

export default ProjectCard;
