import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects-data'; // Import project data

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://code-and-cortex.vercel.app/';

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Dynamic routes from project data
  const dynamicRoutes = projects.map((project) => ({
    url: `${baseUrl}/case-study/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
