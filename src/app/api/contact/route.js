import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, msg } = body;

    // Web3Forms Integration for actual email delivery
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      console.warn("⚠️ Web3Forms Access Key is missing! Contact form is in test mode.");
      // Simulate success for local testing if no key is provided
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json(
        { message: "Form submitted (Test Mode). Add WEB3FORMS_ACCESS_KEY to receive real emails." },
        { status: 200 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        message: msg,
        subject: `New Portfolio Message from ${name}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { message: "Message received successfully!" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { message: "Failed to send message via Web3Forms" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
