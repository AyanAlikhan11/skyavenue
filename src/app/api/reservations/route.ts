import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, date, time, guests, phone, notes } = body;

    if (!fullName || !date || !time || !phone || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your real booking system here:
    // - Save to database
    // - Send email to reservations team (SendGrid/Resend/etc.)
    // - Call third-party booking API

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unable to process reservation" },
      { status: 500 }
    );
  }
}