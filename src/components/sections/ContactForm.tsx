"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/site";

const subjects = [
  "Delegate Registration",
  "Sponsorship Opportunities",
  "Exhibition Enquiry",
  "Media Accreditation",
  "General Information",
];

const inputStyles =
  "w-full rounded-[4px] border border-line bg-off-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-blue focus:bg-white focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <div>
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
        </div>

        <div>
          {submitted ? (
            <p className="rounded-[4px] border border-line bg-white px-5 py-4 text-sm font-semibold text-navy">
              Thanks for reaching out — the Secretariat will be in touch
              shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contactName"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
                  >
                    Your Name
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
                    className={inputStyles}
                  />
                </div>
              </div>

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
                  defaultValue=""
                  className={inputStyles}
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

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

              <Button type="submit" variant="navy" className="w-fit">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
