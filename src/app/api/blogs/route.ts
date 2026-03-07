import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export async function GET() {
    const posts = await getBlogPosts();

    if (posts.length === 0) {
        return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(posts);
}
