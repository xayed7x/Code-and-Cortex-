/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This configuration allows Next.js to optimize images from the same domain.
    // It's the standard setup for images stored in the /public folder.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app", // Allows images from your Vercel deployment URL
      },
      {
        protocol: "http",
        hostname: "localhost", // Allows images for local development
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
