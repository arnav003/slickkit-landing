import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pdf",
        destination: "https://slickkit-pdf.vercel.app/pdf",
      },
      {
        source: "/pdf/:path*",
        destination: "https://slickkit-pdf.vercel.app/pdf/:path*",
      },
    ];
  },
};

export default nextConfig;
