import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "linear-gradient(135deg, #CDA45E 0%, #BC8C3F 100%)",
          color: "#0B1F3A",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "Georgia, serif",
          borderRadius: 12,
        }}
      >
        AI
      </div>
    ),
    { ...size }
  );
}
