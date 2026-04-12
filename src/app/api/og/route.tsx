import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top, rgba(59,130,246,0.35), transparent 30%), linear-gradient(180deg, #050816 0%, #08111a 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
          >
            LB
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            LegacyBridge
          </div>
        </div>

        <div style={{ maxWidth: 900 }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            AI for the code
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              color: "rgba(255,255,255,0.62)",
              marginTop: 8,
            }}
          >
            that still runs the world.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Legacy code intelligence · safer modernization · enterprise pilots
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
