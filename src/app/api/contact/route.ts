import { contactInfo } from "@/data/site";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s-]{7,20}$/;
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || contactInfo.generalEmail;

type ContactPayload = {
  subject?: string;
  name?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  jobTitle?: string;
  daysAttending?: string[];
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderRow(label: string, value?: string | null) {
  if (!value) return "";
  return `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`;
}

export async function POST(request: Request) {
  const { success } = rateLimit(`contact:${getClientIp(request)}`, {
    limit: 5,
    windowMs: 10 * 60 * 1000,
  });
  if (!success) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const body: ContactPayload = await request.json();
  const { subject, name, email, phone, organisation, jobTitle, daysAttending, message } = body;

  if (!subject || !name || !organisation || !jobTitle) {
    return Response.json(
      { error: "Subject, name, organisation and job title are required" },
      { status: 400 },
    );
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "A valid email address is required" },
      { status: 400 },
    );
  }

  if (!phone || !PHONE_RE.test(phone)) {
    return Response.json(
      { error: "A valid phone number is required" },
      { status: 400 },
    );
  }

  if (subject === "Registration" && !daysAttending?.length) {
    return Response.json(
      { error: "Select at least one day you are attending" },
      { status: 400 },
    );
  }

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    ${renderRow("Subject", subject)}
    ${renderRow("Name", name)}
    ${renderRow("Email", email)}
    ${renderRow("Phone", phone)}
    ${renderRow("Organisation", organisation)}
    ${renderRow("Job Title", jobTitle)}
    ${renderRow("Day(s) Attending", daysAttending?.length ? daysAttending.join(", ") : undefined)}
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

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
        replyTo: { email, name },
        subject: `[NESI Week] ${subject} — ${name}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("[contact] Brevo send failed:", response.status, errorData);
      return Response.json({ error: "Message could not be sent" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
