import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output : 'standalone',
  experimental: {
    agentFeedback: false,
  },
  images: {
    domains: ['res.cloudinary.com']
  }
  // cacheComponents: true,
  // partialPrefetching: true,
  // reactCompiler: true,
};

export default nextConfig;
