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
- Skills: ESP32, Arduino, Microcontrollers, PCB Design, C/C++, Python, React, Next.js.
- Projects: SargamAI, She Shield, ESP32 GPS Tracker, Delta (IoT Platform), Smart Blind Stick.
- Hackathons: Winner at Summer Hack, MAKATHON'25.

Answer visitor questions accurately based ONLY on this context. Keep responses concise, professional, and directly related to Prolayjit's skills, projects, and experiences as an engineer. Do not hallucinate capabilities. If you don't know, suggest they contact him directly at prolayjitbiswas14112004@gmail.com.
`;

export async function POST(req: Request) {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ message: "I am currently running in offline simulation mode without an API key, but I'd love to tell you about Prolayjit's ESP32 and IoT projects if you email him directly!" });
        }

        const { messages } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo-preview", // Or gpt-3.5-turbo 
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 250,
        });

        return NextResponse.json({ message: response.choices[0].message.content });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({
            message: "Sorry, my neural network had a hiccup! Please reach out directly at prolayjitbiswas14112004@gmail.com."
        });
    }
}
