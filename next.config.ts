import type { NextConfig } from "next";

const repo = "lab-1-setup";

const isDockerBuild = process.env.NEXT_DOCKER_BUILD === "1";
const isGithubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = (() => {
  // Docker / EC2 (server build)
  if (isDockerBuild) {
    return {
      output: "standalone",
      images: { unoptimized: true },
    };
  }

  // GitHub Pages (static export під /lab-1-setup)
  if (isGithubPages) {
    return {
      output: "export",
      images: { unoptimized: true },
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
    };
  }

  // Vercel / звичайний деплой: стандартний Next (без export/basePath)
  return {
    images: { unoptimized: true },
  };
})();

export default nextConfig;