import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, msg } = body;

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.warn("⚠️ EMAIL_USER or EMAIL_PASS is missing!");
      return NextResponse.json(
        { success: false, message: "Server configuration error. Please contact me directly via email." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${msg.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully! I'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
