import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { team } from "@/content/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Strata is an integrated architecture, engineering and construction studio founded in Oslo in 2009, with an atelier in Lisbon. Philosophy, approach and capabilities.",
};

const approach = [
  {
    step: "01",
    name: "Integrated by default",
    text: "Architects, engineers and builders share one table from day one. Design decisions are made with cost and constructability present in the room — not discovered after.",
  },
  {
    step: "02",
    name: "Slow where it matters",
    text: "We move deliberately through concept and detail, then decisively on site. Speed is spent on construction, never on thinking.",
  },
  {
    step: "03",
    name: "Material honesty",
    text: "Every surface answers three questions: what am I, how was I made, how will I age? Buildings that answer honestly can be repaired by ordinary means, forever.",
  },
  {
    step: "04",
    name: "Public generosity",
    text: "Even private commissions carry a public edge — a courtyard, a view corridor, a bench. Cities are built from these small concessions.",
  },
];

const capabilities = [
  "Concept & Feasibility",
  "Full Architectural Services",
  "Interior Architecture & FF&E",
  "Urban Design & Masterplanning",
  "Landscape Architecture",
  "Structural Engineering (in-house)",
  "Preconstruction & Estimating",
  "General Contracting",
  "Design-Build Delivery",
  "Renovation & Adaptive Reuse",
];

export default function StudioPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Studio"
        title={
          <>
            A studio system for work that deserves to be{" "}
            <em className="italic font-light">experienced.</em>
          </>
        }
        intro={`${site.legalName} was founded in Oslo in 2009 and opened its Lisbon atelier in 2016. Thirty-four people across two cities — architects, engineers, landscape designers and builders under one roof.`}
      />

      <section className="hairline-t hairline-b bg-paper/60 py-20 md:py-28">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label">[ Philosophy ]</p>
            <h2 className="display mt-5 text-3xl md:text-4xl">
              Architecture with consequence.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <div className="prose-editorial text-ink/90">
              <p>
                We believe buildings are the slowest form of publishing. A house,
                a library or a bath will outlive its authors, its clients and
                most of its critics — which makes every commission an argument
                about how the world should be.
              </p>
              <p>
                Our argument is restraint: structures that hold their ground
                quietly, materials that age into beauty rather than away from it,
                and rooms whose light does the decorating. We would rather build
                one building people return to than ten they photograph once.
              </p>
              <p>
                Consequence also means accountability. As architects{" "}
                <span className="italic">and</span> contractors we stand behind
                our drawings with our own crews, our own estimates and our own
                twelve-month aftercare. The gap between design intent and built
                result is where most architecture fails; closing that gap is our
                core competence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {approach.map((a) => (
            <Reveal key={a.step} className="border-t border-line pt-8">
              <p className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
                {a.step}
              </p>
              <h3 className="mt-4 text-xl font-medium md:text-2xl">{a.name}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-concrete">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hairline-t py-20 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label">[ Capabilities ]</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              One roof. Ten disciplines.
            </h2>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink"
            >
              Explore Services <span>⟶</span>
            </Link>
          </Reveal>
          <ul className="grid content-start gap-0 border-t border-line sm:grid-cols-2 md:col-span-8">
            {capabilities.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline justify-between border-b border-line py-4 pr-4"
              >
                <span className="text-base font-medium">{c}</span>
                <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-concrete">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hairline-t bg-paper/60 py-20 md:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between">
            <div>
              <p className="label">[ People ]</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">
                Led by principals,{" "}
                <em className="italic font-light">not account managers.</em>
              </h2>
            </div>
            <Link
              href="/team"
              className="hidden shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink md:inline-flex"
            >
              Meet the Team <span>⟶</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {team
              .filter((m) => m.principal)
              .map((m) => (
                <div key={m.slug} className="border-t border-line pt-6">
                  <p className="text-lg font-medium">{m.name}</p>
                  <p className="label mt-1">{m.role}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-concrete">
                    {m.bio}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
