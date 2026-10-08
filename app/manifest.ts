import type { MetadataRoute } from "next";
import { site } from "./site";

// Required for `output: "export"`: generate manifest.webmanifest at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Level Craft",
    description: `General contractor in ${site.city}, ${site.state}.`,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#13233a",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
