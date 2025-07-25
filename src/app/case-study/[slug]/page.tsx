import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects-data";
import Navbar from "@/components/Navbar"; // Import data from our new central file

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  // Find the correct project from our data file using the slug from the URL
  const project = projects.find((p) => p.slug === params.slug);

  // If no project matches the slug, show the 404 page
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar /> {/* The new, persistent navigation header */}
      <main className="bg-brand-background text-brand-text font-satoshi">
        {/* All sections below will now be populated by the dynamic 'project' object */}

        {/* Section 1: Hero */}
        <section className="pt-24 pb-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              {project.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/80 mb-12">
              {project.hero.tagline}
            </p>
            <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
              {project.hero.atAGlance.map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-brand-accent font-ibm-plex-mono uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.showcaseVideoUrl && (
          <section className="pb-24 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="animated-border p-1 rounded-2xl">
                <div className="relative bg-brand-background rounded-xl overflow-hidden shadow-2xl shadow-brand-accent/20">
                  {project.showcaseVideoUrl.startsWith(
                    "https://player.vimeo.com/"
                  ) ? (
                    <iframe
                      src={project.showcaseVideoUrl}
                      className="w-full aspect-video"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={project.hero.title}
                    />
                  ) : (
                    <video
                      src={project.showcaseVideoUrl}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other sections (Brief, Cortex, Code, Impact) remain structurally the same, */}
        {/* but are now populated dynamically from the 'project' variable. */}
        {/* ... Paste the rest of the sections from the previous version here ... */}
        <section className="py-24 border-y border-brand-surface">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <h2 className="text-4xl font-bold md:text-right">
              {project.brief.title}
            </h2>
            <div className="md:col-span-2 space-y-6 text-lg text-brand-text/90">
              <p>{project.brief.challenge}</p>
              <p>{project.brief.vision}</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <h2 className="text-4xl font-bold md:text-right">
              {project.cortex.title}
            </h2>
            <ul className="md:col-span-2 space-y-6 text-lg list-disc list-outside pl-5">
              {project.cortex.approach.map((point, index) => (
                <li key={index} className="text-brand-text/90">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="py-24 bg-brand-surface">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                {project.code.title}
              </h2>
            </div>
            <div className="space-y-24">
              {project.code.features.map((feature, index) => (
                <div key={index} className="space-y-6">
                  <div className="aspect-video bg-brand-background rounded-lg overflow-hidden">
                    <Image
                      src={feature.visual}
                      alt={feature.title}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold pt-4">
                    0{index + 1}. {feature.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-text/80">
                    <div>
                      <p className="font-ibm-plex-mono text-sm uppercase text-brand-accent mb-2">
                        The User Experience
                      </p>
                      <p>{feature.ux}</p>
                    </div>
                    <div>
                      <p className="font-ibm-plex-mono text-sm uppercase text-brand-accent mb-2">
                        The Technical Implementation
                      </p>
                      <p>{feature.tech}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <h2 className="text-4xl font-bold md:text-right">
              {project.impact.title}
            </h2>
            <div className="md:col-span-2 space-y-12">
              <p className="text-lg text-brand-text/90">
                {project.impact.result}
              </p>
              <div className="bg-brand-surface p-8 rounded-lg border border-brand-accent/20">
                <p className="text-2xl italic mb-6">
                  "{project.impact.testimonial.quote}"
                </p>
                <p className="font-bold">
                  {project.impact.testimonial.author},{" "}
                  <span className="font-normal text-brand-text/70">
                    {project.impact.testimonial.role}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
