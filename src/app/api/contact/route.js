import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, msg } = body;

    // Here you would typically send an email using Resend, Nodemailer, etc.
    // Or save to a database like MongoDB or PostgreSQL.
    
    console.log("Contact form submission:", { name, email, msg });

    // Simulate a database delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
