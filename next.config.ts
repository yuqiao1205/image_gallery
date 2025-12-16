import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Allow larger uploads through Server Actions (admin dashboard image upload)
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
