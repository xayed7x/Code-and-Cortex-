import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the shape of the project data we expect
interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    // CRITICAL: The entire card is now a clickable link to the case study page
    <Link
      href={`/case-study/${project.slug}`}
      className="group block animated-border p-1 rounded-2xl" // Use block to make the link fill space
    >
      <div className="relative bg-brand-surface rounded-xl p-6 h-full transition-colors duration-300 group-hover:bg-brand-surface/80">
        {/* Visual: Project Image */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold font-satoshi text-brand-text mb-2">
            {project.title}
          </h3>
          <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-6">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-brand-background text-brand-accent font-ibm-plex-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA (now just a visual cue) */}
          <div className="text-brand-accent font-ibm-plex-mono text-sm self-start transition-transform duration-300 group-hover:translate-x-1">
            View Case Study →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
