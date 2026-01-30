import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/src/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via Resend
    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unable to submit message" },
      { status: 500 }
    );
  }
}