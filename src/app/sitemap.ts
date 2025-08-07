import { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://code-and-cortex.vercel.app"; // ✅ Fixed

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/case-study/${project.slug}`, // ✅ No double slash
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
