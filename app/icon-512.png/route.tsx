import { ImageResponse } from "next/og";
import MarkImage from "../components/MarkImage";

// Large PNG icon for the web app manifest (Android home screen, some link previews).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(<MarkImage size={512} radius={0} />, { width: 512, height: 512 });
}
