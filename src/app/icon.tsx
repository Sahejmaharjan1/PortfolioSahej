import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080810",
          borderRadius: 8,
          border: "1px solid rgba(124, 58, 237, 0.4)",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#06b6d4",
            fontFamily: "monospace",
          }}
        >
          ~
        </span>
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#a78bfa",
            fontFamily: "monospace",
          }}
        >
          /
        </span>
      </div>
    ),
    { ...size },
  );
}
