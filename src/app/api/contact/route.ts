import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, brand, details } = await req.json();

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and details are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Format the message for Telegram
    const message = [
      `\u{1F4E9} *New Contact Form Submission*`,
      ``,
      `\u{1F464} *Name:* ${escapeMarkdown(name)}`,
      `\u{1F4E7} *Email:* ${escapeMarkdown(email)}`,
      brand ? `\u{1F3E2} *Brand:* ${escapeMarkdown(brand)}` : null,
      ``,
      `\u{1F4DD} *Details:*`,
      escapeMarkdown(details),
    ]
      .filter(Boolean)
      .join("\n");

    // Send to Telegram Bot API
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const errorData = await telegramRes.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// Escape special Markdown characters for Telegram
function escapeMarkdown(text: string): string {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");
}
