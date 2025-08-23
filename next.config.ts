import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Vercel deployment
  output: 'standalone',
  images: {
    domains: ['lh3.googleusercontent.com'],
    unoptimized: false,
  },
  // Enable static optimization
  trailingSlash: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Compress output
  compress: true,
  // Headers for better performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
