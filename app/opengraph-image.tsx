import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — Builder Floors, Flats & Plots in Gurgaon`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #071226 0%, #0B1F3A 55%, #1E3559 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "linear-gradient(135deg, #CDA45E, #BC8C3F)",
              color: "#0B1F3A",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            SR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, color: "#FFFFFF", fontWeight: 700 }}>
              Skyline Realtors
            </div>
            <div style={{ fontSize: 16, color: "#9FB3D1", letterSpacing: 4 }}>
              PROPERTY DEALER · GURGAON
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#CDA45E", letterSpacing: 6, marginBottom: 16 }}>
            PALAM VIHAR · SECTOR 21 · 22 · 23
          </div>
          <div style={{ fontSize: 68, color: "#FFFFFF", fontWeight: 800, lineHeight: 1.05 }}>
            Builder Floors, Flats &amp; Plots
          </div>
          <div style={{ fontSize: 68, color: "#CDA45E", fontWeight: 800, lineHeight: 1.05 }}>
            in Gurgaon
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: "#C9D6E8" }}>
            350+ Properties Sold · 500+ Families · Since 2021
          </div>
          <div style={{ fontSize: 24, color: "#E9D3A6", fontWeight: 700 }}>
            {SITE.phone}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
