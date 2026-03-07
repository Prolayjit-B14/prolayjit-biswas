import { NextResponse } from "next/server";
import { getGithubData } from "@/lib/github";

export async function GET() {
    try {
        const data = await getGithubData("Prolayjit-B14");
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
    }
}
