import { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://code-and-cortex.vercel.app";
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/case-study/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
