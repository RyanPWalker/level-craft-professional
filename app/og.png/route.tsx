import { ImageResponse } from "next/og";
import { site } from "../site";

// Social share image (Facebook, iMessage, LinkedIn, X), written to out/og.png at build time.
// A route handler rather than the `opengraph-image` convention, which exports a file with no
// extension that GitHub Pages wouldn't serve as image/png. Referenced from `pageMetadata`.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

/** The spirit-level logo mark, drawn with divs (Satori's SVG support is limited). */
function Mark() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 128, height: 128, borderRadius: 24, background: "#1c3150" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 92, height: 34, borderRadius: 17, border: "6px solid #ffffff" }}>
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#e0913f" }} />
      </div>
    </div>
  );
}

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
          <Mark />
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
            {`Licensed & insured · Serving ${site.serviceArea}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
