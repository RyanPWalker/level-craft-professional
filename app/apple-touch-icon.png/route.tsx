import { ImageResponse } from "next/og";
import MarkImage from "../components/MarkImage";

// Home-screen and link-preview icon for iOS (iMessage shows it beside shared links). Served at
// /apple-touch-icon.png, the path iOS also requests on its own. iOS rounds the corners itself,
// so the mark is drawn square.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(<MarkImage size={180} radius={0} />, { width: 180, height: 180 });
}
