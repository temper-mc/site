import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactCompiler: true,
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
