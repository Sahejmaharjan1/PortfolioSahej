"use client";

import { useState, type FormEvent } from "react";
import { IconSend } from "@tabler/icons-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  const inputClassName =
    "w-full rounded-lg border border-border-2 bg-bg px-4 py-3 text-[14px] text-text outline-none transition-colors placeholder:text-muted focus:border-accent/50";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg text-left">
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            disabled={status === "sending"}
            placeholder="Your name"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            disabled={status === "sending"}
            placeholder="you@example.com"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          disabled={status === "sending"}
          placeholder="What's on your mind?"
          className={`${inputClassName} resize-y min-h-[120px]`}
        />
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/15 px-5 py-3 text-[14px] font-medium text-text transition-all hover:border-accent/60 hover:bg-accent/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <IconSend size={16} aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-[13px] text-green" role="status">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-[13px] text-amber" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
