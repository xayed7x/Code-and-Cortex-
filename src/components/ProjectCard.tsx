"use client";

import React from "react";
import Image from "next/image";
import AnimatedBorderCard from "./AnimatedBorderCard";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Link from "next/link";

interface ProjectType {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyUrl: string;
  liveUrl?: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { slug, title, description, imageUrl, liveUrl, techStack } = project;

  return (
    <AnimatedBorderCard>
      <div className="bg-brand-surface rounded-[15px] h-full w-full p-6 flex flex-col">
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-satoshi text-brand-text mb-2">
            {title}
          </h3>
          <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-4">
            {description}
          </p>
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
          <div className="flex flex-nowrap gap-3 justify-between items-center mt-auto pt-4">
            <Link
              href={`/case-study/${slug}`}
              passHref
              className="flex-1 text-center px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-brand-accent rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/40 whitespace-nowrap"
            >
              Case Study
            </Link>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-text bg-transparent border-2 border-brand-text/20 rounded-full hover:bg-brand-text/5 hover:border-brand-text/40 transition-all duration-300 whitespace-nowrap"
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