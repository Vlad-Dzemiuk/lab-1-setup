import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "lab-1-setup";

const isDockerBuild = process.env.NEXT_DOCKER_BUILD === "1";

const nextConfig: NextConfig = isDockerBuild
  ? {
      output: "standalone",
      images: { unoptimized: true },
    }
  : {
      output: "export",
      images: { unoptimized: true },
      basePath: isProd ? `/${repo}` : "",
      assetPrefix: isProd ? `/${repo}/` : "",
    };

export default nextConfig;