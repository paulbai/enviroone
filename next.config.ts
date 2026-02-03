import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
    ],
    // Allow local images from public folder
    unoptimized: false,
  },
};

export default nextConfig;
