import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/data/portfolio";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const trimmedName = name.trim().slice(0, 100);
  const trimmedEmail = email.trim().slice(0, 254);
  const trimmedMessage = message.trim().slice(0, 5000);

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailPayload = {
    to: siteConfig.email,
    replyTo: trimmedEmail,
    subject: `Portfolio message from ${trimmedName}`,
    text: [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
    `,
  };

  const configuredFrom =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const fallbackFrom = "Portfolio <onboarding@resend.dev>";

  let result = await resend.emails.send({
    ...emailPayload,
    from: configuredFrom,
  });

  if (
    result.error?.message?.includes("domain is not verified") &&
    configuredFrom !== fallbackFrom
  ) {
    result = await resend.emails.send({
      ...emailPayload,
      from: fallbackFrom,
    });
  }

  if (result.error) {
    console.error("Resend error:", result.error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
