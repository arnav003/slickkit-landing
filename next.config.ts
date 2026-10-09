import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pdf",
        destination: "https://slickkit-pdf.vercel.app",
      },
      {
        source: "/pdf/:path*",
        destination: "https://slickkit-pdf.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
