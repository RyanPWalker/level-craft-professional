/**
 * The spirit-level logo mark built from divs, for `ImageResponse` (Satori's SVG support is
 * limited). Mirrors app/icon.svg. `size` is the width and height in pixels.
 */
export default function MarkImage({
  size,
  radius = 0.19,
  background = "#13233a",
}: {
  size: number;
  radius?: number;
  background?: string;
}) {
  const u = size / 32; // icon.svg is drawn on a 32-unit grid
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size * radius,
        background,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 22 * u,
          height: 8 * u,
          padding: `0 ${5.5 * u}px`,
          borderRadius: 4 * u,
          border: `${2 * u}px solid #ffffff`,
        }}
      >
        <div style={{ width: 1.5 * u, height: 6 * u, background: "#ffffff" }} />
        <div style={{ width: 4.5 * u, height: 4.5 * u, borderRadius: 2.25 * u, background: "#e0913f" }} />
        <div style={{ width: 1.5 * u, height: 6 * u, background: "#ffffff" }} />
      </div>
    </div>
  );
}
