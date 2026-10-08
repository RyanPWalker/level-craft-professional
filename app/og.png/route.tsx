import { ImageResponse } from "next/og";
import MarkImage from "../components/MarkImage";
import { site } from "../site";

// Social share image (Facebook, iMessage, LinkedIn, X), written to out/og.png at build time.
// A route handler rather than the `opengraph-image` convention, which exports a file with no
// extension that GitHub Pages wouldn't serve as image/png. Referenced from `pageMetadata`.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#13233a",
          color: "#ffffff",
          padding: 80,
          borderTop: "16px solid #b85c1c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <MarkImage size={128} background="#1c3150" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 34, color: "#b9c3d1" }}>
              {`General Contractor · ${site.city}, ${site.state}`}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 36 }}>
          <div>Remodels · Additions · Commercial Tenant Improvements</div>
          <div style={{ color: "#e0913f" }}>
            {`Licensed & insured · Serving all of ${site.serviceArea}`}
          </div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#b9c3d1" }}>{new URL(site.url).host}</div>
        </div>
      </div>
    ),
    size,
  );
}
