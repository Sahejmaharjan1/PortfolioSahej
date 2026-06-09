import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #080810 0%, #131320 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 72,
            fontWeight: 700,
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#06b6d4" }}>~</span>
          <span style={{ color: "#a78bfa" }}>/</span>
          <span style={{ color: "#eeeef8", marginLeft: 4 }}>s</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
