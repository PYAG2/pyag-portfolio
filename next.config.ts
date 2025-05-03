import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    domains: [
      "api.microlink.io",
      "www.google.com",
      "images.unsplash.com",
      "cdn.discordapp.com",
      "avatars.githubusercontent.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
