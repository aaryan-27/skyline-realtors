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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1F3A",
          color: "#CDA45E",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1 }}>GE</div>
        <div style={{ fontSize: 14, letterSpacing: 3, color: "#E9D3A6", marginTop: 8 }}>
          GOPAL ESTATES
        </div>
      </div>
    ),
    { ...size }
  );
}
