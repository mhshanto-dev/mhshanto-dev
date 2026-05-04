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

    // Create FormData for Web3Forms
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("from_name", name);
    formData.append("email", email);
    formData.append("replyto", email);
    formData.append("message", msg);
    formData.append("subject", `New Portfolio Message from ${name}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Web3Forms non-JSON response:", text);
      return NextResponse.json(
        { success: false, message: "Server returned an unexpected format. Please try again." },
        { status: 502 }
      );
    }

    if (data.success) {
      return NextResponse.json(
        { success: true, message: "Message received successfully!" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send message" },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Error processing request: " + error.message },
      { status: 500 }
    );
  }
}
