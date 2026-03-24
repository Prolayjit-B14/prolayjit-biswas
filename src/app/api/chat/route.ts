import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy",
});

const SYSTEM_PROMPT = `
You are an AI Assistant integrated into the personal portfolio of Prolayjit Biswas, an Electronics Engineering Student at MAKAUT specializing in VLSI Design, IoT, and embedded systems.

Key Profile Information:
- Location: Kolkata, India
- Tagline: From Hello World to Hardware — Building Smart Systems with Code and Circuits
- Skills: ESP32, Arduino, Microcontrollers, PCB Design (KiCAD), C/C++, Python, React, Next.js, VHDL, Verilog
- Projects: SargamAI (AI music platform), She Shield (wearable safety device), ESP32 GPS Tracker, Delta (IoT platform), Smart Blind Stick, Smart Agriculture Monitoring
- Hackathons: National Level at Smart India Hackathon 2024 (She Shield), MAKATHON'25

Answer visitor questions accurately based ONLY on this context. Keep responses concise (2-3 sentences max), professional, and directly related to Prolayjit's skills, projects, and experiences. Do not hallucinate capabilities. If you don't know, suggest they contact him directly at prolayjitbiswas14112004@gmail.com.
`;

// --- Simple in-memory rate limiter (sliding window) ---
// Resets when the serverless function cold-starts (good enough for free tier)
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 10;        // max requests
const WINDOW_MS  = 60_000;    // per 60 seconds

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now - entry.windowStart > WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, windowStart: now });
        return false;
    }

    if (entry.count >= RATE_LIMIT) return true;

    entry.count++;
    return false;
}

export async function POST(req: Request) {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { message: "Too many requests — give me a moment to cool down! Try again in a minute." },
            { status: 429 }
        );
    }

    try {
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({
                message: "I'm running in offline mode right now, but I'd love to tell you about Prolayjit's ESP32 and IoT projects — email him directly!"
            });
        }

        const { messages } = await req.json();

        // Validate input
        if (!Array.isArray(messages)) {
            return NextResponse.json({ message: "Invalid request format." }, { status: 400 });
        }

        const sanitized = messages
            .slice(-6)                                           // max 6 messages of history
            .filter((m: { role: string; content: string }) =>
                typeof m.content === "string" &&
                m.content.trim().length > 0 &&
                m.content.length <= 500                          // max 500 chars per message
            );

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",                                // upgraded from deprecated gpt-4-turbo-preview
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...sanitized,
            ],
            temperature: 0.6,
            max_tokens: 200,
        });

        return NextResponse.json({ message: response.choices[0].message.content });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({
            message: "Sorry, my neural network had a hiccup! Please reach out directly at prolayjitbiswas14112004@gmail.com."
        }, { status: 500 });
    }
}
