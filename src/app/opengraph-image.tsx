import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Auto-generated social preview card (LinkedIn/Twitter/Slack link
// previews). No image file to maintain, edit the JSX below, or replace
// this whole file with a static /public/og-image.png + `images: [...]` in
// layout.tsx metadata if you'd rather use a designed image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "linear-gradient(135deg, #fafafa 0%, #f0f2f5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#2f5fdb",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {site.title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 76,
            fontWeight: 700,
            color: "#111",
            letterSpacing: -2,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#555", maxWidth: 900 }}>
          {site.shortBio}
        </div>
      </div>
    ),
    { ...size }
  );
}
