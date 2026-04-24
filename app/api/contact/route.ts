import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "@/lib/db";
import Contact from "@/lib/models/Contact";
import { verifyToken } from "@/lib/auth";

// --- Nodemailer Transporter ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Helper to send email notification
const sendEmailNotification = async (data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}) => {
  const mailOptions = {
    from: `"ITversee Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `🚀 New Contact: ${data.service} — from ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; border: 1px solid #1a1a2e; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #00CCFF, #00D9F5); padding: 24px 32px;">
          <h1 style="margin: 0; color: #0a0a0f; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a1a2e; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #1a1a2e;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a1a2e;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a2e;"><a href="mailto:${data.email}" style="color: #00CCFF; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a1a2e;">Phone</td>
              <td style="padding: 12px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #1a1a2e;">${data.phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a1a2e;">Service</td>
              <td style="padding: 12px 0; color: #00D9F5; font-size: 15px; font-weight: 600; border-bottom: 1px solid #1a1a2e;">${data.service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #ccc; font-size: 15px; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #0d0d14; text-align: center;">
          <p style="margin: 0; color: #555; font-size: 12px;">ITversee Agency — Contact Notification</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// GET /api/contact — Get all submissions (protected)
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Not authorized, no token" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    if (!verifyToken(token)) {
      return NextResponse.json(
        { message: "Not authorized, token failed" },
        { status: 401 }
      );
    }

    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error(`Fetch error: ${(error as Error).message}`);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// POST /api/contact — Submit a contact form (public)
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, email, phone, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          message:
            "Please provide all required fields (name, email, service, message).",
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    // Send email notification (non-blocking)
    try {
      await sendEmailNotification({ name, email, phone, service, message });
      console.log("📧 Email notification sent successfully");
    } catch (emailError) {
      console.error(
        `📧 Email notification failed: ${(emailError as Error).message}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(`Submission error: ${(error as Error).message}`);
    return NextResponse.json(
      { message: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
