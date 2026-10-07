import type { NextConfig } from "next";

// Set by the deploy workflow from actions/configure-pages. Empty when the site is served from a
// custom domain, "/<repo>" when served from <user>.github.io/<repo>.
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
