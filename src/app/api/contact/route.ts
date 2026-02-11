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

    if (!botToken) {
      console.error("Missing TELEGRAM_BOT_TOKEN env var");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Collect all chat IDs from environment variables
    const chatIds: string[] = [];
    if (process.env.TELEGRAM_CHAT_ID) chatIds.push(process.env.TELEGRAM_CHAT_ID);
    if (process.env.TELEGRAM_CHAT_ID_2) chatIds.push(process.env.TELEGRAM_CHAT_ID_2);

    if (chatIds.length === 0) {
      console.error("No TELEGRAM_CHAT_ID env vars configured");
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

    // Send to all recipients simultaneously
    const results = await Promise.allSettled(
      chatIds.map((chatId) =>
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        })
      )
    );

    // Check if at least one message was sent successfully
    const anySuccess = results.some(
      (result) => result.status === "fulfilled" && result.value.ok
    );

    if (!anySuccess) {
      console.error("All Telegram sends failed:", results);
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
