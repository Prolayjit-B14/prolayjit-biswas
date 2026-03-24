import { NextResponse } from "next/server";

// ─── Input validation helpers ────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Record<string, string>): string | null {
    if (!data.name?.trim() || data.name.trim().length < 2)
        return "Name must be at least 2 characters.";
    if (!data.email?.trim() || !EMAIL_RE.test(data.email))
        return "Please enter a valid email address.";
    if (!data.message?.trim() || data.message.trim().length < 10)
        return "Message must be at least 10 characters.";
    if (data.message.length > 2000)
        return "Message is too long (max 2000 characters).";
    return null;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validationError = validate(body);
        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        const { name, email, subject, message } = body;

        // ── Resend integration (requires RESEND_API_KEY env var) ──
        if (process.env.RESEND_API_KEY) {
            const res = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                },
                body: JSON.stringify({
                    from: "Portfolio Contact <onboarding@resend.dev>",
                    to: ["prolayjitbiswas14112004@gmail.com"],
                    reply_to: email,
                    subject: subject || `Portfolio contact from ${name}`,
                    html: `
                        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
                            <h2 style="color:#4ade80;margin-bottom:4px">New Message from Portfolio</h2>
                            <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
                            <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
                            <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
                        </div>
                    `,
                }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                console.error("[Contact] Resend error:", err);
                return NextResponse.json(
                    { error: "Failed to send email. Please try again or contact me directly." },
                    { status: 500 }
                );
            }

            return NextResponse.json({ success: true });
        }

        // ── Fallback: no API key — log and return success for development ──
        console.log("[Contact] No RESEND_API_KEY — message received:", { name, email, subject });
        return NextResponse.json({ success: true, note: "dev-mode" });

    } catch (error) {
        console.error("[Contact] Server error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
