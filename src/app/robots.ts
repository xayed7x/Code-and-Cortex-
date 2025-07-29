import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Make sure this is your final production domain
  const sitemapUrl = 'https://code-and-cortex.vercel.app/sitemap.xml'

  return {
    rules: {
      userAgent: '*',      // This rule applies to all crawlers (including Googlebot)
      allow: '/',          // This tells them they are allowed to crawl your entire site
      // disallow: '/private/', // Example: Use this later if you have private pages to hide
    },
    sitemap: sitemapUrl, // This tells all crawlers where to find your sitemap
  }
}