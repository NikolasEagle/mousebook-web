import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `http://localhost:8001/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `http://localhost:8002/:path*`,
      },
    ];
  },
};

export default nextConfig;
