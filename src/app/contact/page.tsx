import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Strata Studio — Oslo headquarters and Lisbon atelier. Commissions, press and careers.",
};

const contacts = [
  { label: "New Commissions", email: "commissions@strata.studio" },
  { label: "Press & Media", email: "press@strata.studio" },
  { label: "Careers", email: "careers@strata.studio" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="09"
        label="Contact"
        title={
          <>
            Two studios,{" "}
            <em className="italic font-light">one inbox culture.</em>
          </>
        }
        intro="For new work, the commission intake gives us everything we need. For everything else — press, collaborations, careers — start here."
      />

      <section className="hairline-t hairline-b py-16 md:py-24">
        <div className="container-site grid gap-14 md:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.email} delay={i * 80}>
              <p className="label">{c.label}</p>
              <a
                href={`mailto:${c.email}`}
                className="display mt-4 block text-2xl underline-offset-8 hover:underline md:text-3xl"
              >
                {c.email}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site grid gap-x-16 gap-y-12 md:grid-cols-2">
          {[
            {
              city: "Oslo",
              role: "Studio — Headquarters",
              lines: ["Sørengkaia 71", "0194 Oslo", "Norway"],
              note: "+47 22 00 41 90 · Mon–Fri 09–17 CET",
            },
            {
              city: "Lisbon",
              role: "Atelier",
              lines: ["Rua da Boavista 84", "1200-069 Lisboa", "Portugal"],
              note: "+351 21 346 08 20 · Mon–Fri 10–18 WET",
            },
          ].map((o, i) => (
            <Reveal key={o.city} delay={i * 100} className="border-t border-line pt-8">
              <div className="flex items-baseline justify-between">
                <h2 className="display text-4xl">{o.city}</h2>
                <p className="label">{o.role}</p>
              </div>
              <address className="mt-5 not-italic leading-relaxed text-concrete">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.18em]">
                  {o.note}
                </span>
              </address>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper/60 py-20 md:py-28">
        <div className="container-site text-center">
          <Reveal>
            <p className="label">[ Start a Project Instead ]</p>
            <h2 className="display mx-auto mt-7 max-w-2xl text-4xl md:text-5xl">
              Building something? Use the{" "}
              <em className="italic font-light">commission intake.</em>
            </h2>
            <a
              href="/commission"
              className="mt-10 inline-flex items-center gap-3 border border-ink px-9 py-4 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-ink hover:text-bone"
            >
              Commission Enquiry <span>⟶</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
