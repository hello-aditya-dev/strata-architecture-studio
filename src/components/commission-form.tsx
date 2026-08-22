"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full border-0 border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-mist focus:border-ink";
const labelClass = "label mb-1 block";

export default function CommissionForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [reference, setReference] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/commission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const json = await res.json();
      setReference(json.reference);
      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="border border-line bg-paper p-10 md:p-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete">
          Enquiry received
        </p>
        <h3 className="display mt-6 text-3xl md:text-4xl">
          Thank you. We read every enquiry personally.
        </h3>
        <p className="mt-5 max-w-md leading-relaxed text-concrete">
          Your reference is{" "}
          <span className="font-mono text-ink">{reference}</span>. Expect a
          considered reply within five working days.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] underline underline-offset-8 hover:no-underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-9 md:grid-cols-2">
      <div className="hidden">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="type" className={labelClass}>
          Project Type *
        </label>
        <select id="type" name="type" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a typology
          </option>
          {[
            "Private residence",
            "Cultural / Public",
            "Workplace",
            "Hospitality",
            "Housing",
            "Urban planning",
            "Landscape",
            "Renovation",
            "Other",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>
          Location *
        </label>
        <input
          id="location"
          name="location"
          required
          placeholder="City, country"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Approximate Budget
        </label>
        <select id="budget" name="budget" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {[
            "Under €500k",
            "€500k — €1M",
            "€1M — €5M",
            "€5M — €20M",
            "Above €20M",
            "Undisclosed",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="site" className={labelClass}>
          Site Status
        </label>
        <select id="site" name="site" className={inputClass} defaultValue="">
          <option value="" disabled>
            Where are you today?
          </option>
          {[
            "Site secured",
            "Site identified",
            "Existing structure",
            "Concept stage",
            "Not yet secured",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClass}>
          Timeline
        </label>
        <select id="timeline" name="timeline" className={inputClass} defaultValue="">
          <option value="" disabled>
            When should it begin?
          </option>
          {["Immediate", "3 – 6 months", "6 – 12 months", "12+ months", "Exploratory"].map(
            (o) => (
              <option key={o}>{o}</option>
            )
          )}
        </select>
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <fieldset className="md:col-span-2">
        <legend className={labelClass}>Services Required</legend>
        <div className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
          {[
            "Concept",
            "Architecture",
            "Interior",
            "Planning",
            "Project Management",
            "Preconstruction",
            "General Contracting",
            "Design-Build",
            "Renovation",
          ].map((s) => (
            <label key={s} className="group flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                name="services"
                value={s}
                className="h-3.5 w-3.5 appearance-none border border-concrete transition-colors checked:border-ink checked:bg-ink focus-visible:outline-offset-4"
              />
              <span className="text-ink/75 transition-colors group-hover:text-ink">{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="md:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the site, the ambition, the constraints — anything that helps us understand."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 md:col-span-2">
        <button
          type="submit"
          disabled={state === "sending"}
          className="border border-ink px-9 py-4 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-ink hover:text-bone disabled:opacity-50"
        >
          {state === "sending" ? "Sending…" : "Submit Enquiry"}
        </button>
        {state === "error" && (
          <p className="text-sm text-concrete">
            Something went wrong. Please email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
