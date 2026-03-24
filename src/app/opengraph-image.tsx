import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prolayjit Biswas - Hardware & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #020810, #0a0f1c)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Accent Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-20%",
                        width: "100%",
                        height: "100%",
                        background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 20,
                        zIndex: 10,
                    }}
                >
                    <h1
                        style={{
                            fontSize: 80,
                            fontWeight: 800,
                            color: "#ffffff",
                            margin: 0,
                            letterSpacing: "-0.05em",
                        }}
                    >
                        Prolayjit Biswas
                    </h1>
                    <p
                        style={{
                            fontSize: 32,
                            color: "#4ade80",
                            margin: 0,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Hardware & Software Engineer
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: 30,
                            marginTop: 40,
                        }}
                    >
                        <span style={{ color: "#94a3b8", fontSize: 24, padding: "10px 20px", background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>Embedded Systems</span>
                        <span style={{ color: "#94a3b8", fontSize: 24, padding: "10px 20px", background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>Full Stack Web</span>
                        <span style={{ color: "#94a3b8", fontSize: 24, padding: "10px 20px", background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>VLSI</span>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
