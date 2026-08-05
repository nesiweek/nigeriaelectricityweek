"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactInfo, registrationDays } from "@/data/site";

const subjects = [
  "Registration",
  "Sponsorship Opportunities",
  "Exhibitor Registration",
  "Partner With us",
  "General Information",
];

const inputStyles =
  "w-full rounded-[4px] border border-line bg-off-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-blue focus:bg-white focus:outline-none";

const errorInputStyles =
  "w-full rounded-[4px] border border-red-500 bg-off-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:outline-none";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s-]{7,20}$/;

const dayValues = registrationDays
  .filter((day) => day.id !== "full-week")
  .map((day) => day.label);

type ContactFormProps = {
  initialSubject?: string;
};

export function ContactForm({ initialSubject }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [subject, setSubject] = useState(
    initialSubject && subjects.includes(initialSubject) ? initialSubject : "",
  );
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [daysError, setDaysError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const isFullWeek = dayValues.every((label) => selectedDays.includes(label));
  const isRegistration = subject === "Registration";

  function toggleDay(label: string) {
    setDaysError(false);
    setSelectedDays((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  }

  function toggleFullWeek() {
    setDaysError(false);
    setSelectedDays(isFullWeek ? [] : dayValues);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");

    const nextEmailError = !EMAIL_RE.test(email);
    const nextPhoneError = !PHONE_RE.test(phone);
    const nextDaysError = isRegistration && selectedDays.length === 0;

    setEmailError(nextEmailError);
    setPhoneError(nextPhoneError);
    setDaysError(nextDaysError);

    if (nextEmailError || nextPhoneError || nextDaysError) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: formData.get("subject"),
          name: formData.get("name"),
          email,
          phone,
          organisation: formData.get("organisation"),
          jobTitle: formData.get("jobTitle"),
          daysAttending: selectedDays,
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="mb-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Send Us a Message
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.8] text-slate-600">
            For delegate registration, sponsorship opportunities, exhibition
            enquiries, media accreditation or general information, contact
            the Nigeria Electricity Week Secretariat.
          </p>
          <p className="text-[1.05rem] font-light leading-[1.8] text-slate-600">
            You can also reach us at{" "}
            <a
              href={`mailto:${contactInfo.generalEmail}`}
              className="text-blue hover:underline"
            >
              {contactInfo.generalEmail}
            </a>
          </p>
        </Reveal>

        <Reveal delay={200}>
          {status === "done" ? (
            <p className="rounded-[4px] border border-line bg-white px-5 py-4 text-sm font-semibold text-navy">
              Thanks for reaching out — the Secretariat will be in touch
              shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div>
                <label
                  htmlFor="contactSubject"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                >
                  Subject
                </label>
                <select
                  id="contactSubject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className={inputStyles}
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {subjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contactName"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                  >
                    Full Name
                  </label>
                  <input
                    id="contactName"
                    name="name"
                    type="text"
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactEmail"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                  >
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    required
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    title="Enter a valid email address"
                    onChange={() => setEmailError(false)}
                    className={emailError ? errorInputStyles : inputStyles}
                  />
                  {emailError && (
                    <p className="mt-1.5 text-sm font-semibold text-red-600">
                      Enter a valid email address.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contactPhone"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contactPhone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[+]?[\d\s\-]{7,20}"
                    title="Enter a valid phone number (7–20 digits, may include + and spaces)"
                    onChange={() => setPhoneError(false)}
                    className={phoneError ? errorInputStyles : inputStyles}
                  />
                  {phoneError && (
                    <p className="mt-1.5 text-sm font-semibold text-red-600">
                      Enter a valid phone number (7–20 digits).
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contactOrganisation"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                  >
                    Organisation / Company
                  </label>
                  <input
                    id="contactOrganisation"
                    name="organisation"
                    type="text"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contactJobTitle"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                >
                  Job Title / Designation
                </label>
                <input
                  id="contactJobTitle"
                  name="jobTitle"
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>

              <fieldset>
                <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600">
                  Day(s) Attending{" "}
                  <span className="font-normal normal-case text-slate-400">
                    {isRegistration ? "(required)" : "(optional)"}
                  </span>
                </legend>
                <div
                  className={`grid grid-cols-1 gap-x-4 gap-y-2 rounded-[4px] border bg-off-white p-4 sm:grid-cols-2 ${
                    daysError ? "border-red-500" : "border-line"
                  }`}
                >
                  {registrationDays.map((day) =>
                    day.id === "full-week" ? (
                      <label
                        key={day.id}
                        className="flex items-center gap-2 text-sm font-semibold text-navy"
                      >
                        <input
                          type="checkbox"
                          checked={isFullWeek}
                          onChange={toggleFullWeek}
                          className="h-4 w-4 rounded-sm border-line text-blue focus:ring-blue"
                        />
                        {day.label}
                      </label>
                    ) : (
                      <label
                        key={day.id}
                        className="flex items-center gap-2 text-sm text-navy"
                      >
                        <input
                          type="checkbox"
                          name="daysAttending"
                          value={day.label}
                          checked={selectedDays.includes(day.label)}
                          onChange={() => toggleDay(day.label)}
                          className="h-4 w-4 rounded-sm border-line text-blue focus:ring-blue"
                        />
                        {day.label}
                      </label>
                    ),
                  )}
                </div>
                {daysError && (
                  <p className="mt-1.5 text-sm font-semibold text-red-600">
                    Select at least one day you are attending.
                  </p>
                )}
              </fieldset>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                >
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows={5}
                  required
                  className={inputStyles}
                />
              </div>

              <Button
                type="submit"
                variant="navy"
                className="w-fit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
