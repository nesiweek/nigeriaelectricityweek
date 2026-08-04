import { contactInfo } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_EMAIL = process.env.SUBSCRIBER_NOTIFY_EMAIL || contactInfo.generalEmail;

async function notifyNewSubscriber(email: string) {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { email: contactInfo.generalEmail, name: "NESI Week Website" },
        to: [{ email: NOTIFY_EMAIL }],
        subject: "New Newsletter Subscriber",
        htmlContent: `<p>A new subscriber joined the NESI Week newsletter:</p><p><strong>${email}</strong></p>`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("[subscribe] notification email failed:", errorData);
    }
  } catch (err) {
    console.error("[subscribe] notification email error:", err);
  }
}

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return Response.json({ error: "A valid email is required" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [3], // Newsletter Subscribers list
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("[subscribe] Brevo contact create failed:", response.status, errorData);

      if (errorData?.code === "duplicate_parameter") {
        return Response.json({ success: true, message: "Already subscribed" });
      }
      return Response.json({ error: "Subscription failed" }, { status: 500 });
    }

    await notifyNewSubscriber(email);

    return Response.json({ success: true });
  } catch (err) {
    console.error("[subscribe] unexpected error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
