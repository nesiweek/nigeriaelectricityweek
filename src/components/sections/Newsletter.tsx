"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <section className="bg-navy-deep py-[clamp(4.5rem,8vw,8rem)] text-white">
      <Container className="grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-[2px] w-7 bg-gold" />
            Newsletter
          </span>

          <h2 className="mb-4 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-white">
            Stay Updated
          </h2>

          <p className="text-[1.05rem] font-light leading-[1.8] text-white/65">
            Receive exclusive event updates, speaker announcements,
            registration information and industry insights.
          </p>
        </Reveal>

        <Reveal delay={200}>
          {status === "done" ? (
            <p className="text-sm font-semibold text-gold-light">
              Thanks for subscribing — you&apos;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                className="w-full flex-1 rounded-[4px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/45 focus:border-gold focus:bg-white/10 focus:outline-none"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm font-semibold text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
