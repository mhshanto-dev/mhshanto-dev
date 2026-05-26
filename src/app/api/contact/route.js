import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, msg } = body;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("⚠️ WEB3FORMS_ACCESS_KEY is missing!");
      return NextResponse.json(
        { success: false, message: "Server configuration error. Please contact me directly via email." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Portfolio-Contact-Form",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        message: msg,
        subject: `New Portfolio Message from ${name}`,
        from_name: name,
        replyto: email,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      const text = await response.text().catch(() => "");
      console.error("Web3Forms non-JSON response (status " + response.status + "):", text.slice(0, 500));
      return NextResponse.json(
        { success: false, message: "Email service is temporarily unavailable. Please try again in a moment." },
        { status: 503 }
      );
    }

    if (data.success) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully! I'll get back to you within 24 hours." },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send message. Please try again." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
