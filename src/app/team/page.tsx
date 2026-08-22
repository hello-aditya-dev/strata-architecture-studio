import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Principals, engineers, designers and builders — the people behind Strata Studio.",
};

export default function TeamPage() {
  const principals = team.filter((m) => m.principal);
  const others = team.filter((m) => !m.principal);

  return (
    <>
      <PageHeader
        index="05"
        label="Team"
        title={
          <>
            Thirty-four people,{" "}
            <em className="italic font-light">two cities.</em>
          </>
        }
        intro="Architects, structural engineers, landscape designers and construction managers — organised around projects, not departments."
      />

      <section className="container-site pb-20 md:pb-28">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {principals.map((m, i) => (
            <Reveal key={m.slug} delay={i * 90}>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <Image
                  src={`https://randomuser.me/api/portraits/${m.portraitId}.jpg`}
                  alt={m.name}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-line pb-4">
                <h2 className="display text-3xl">{m.name}</h2>
                <p className="label">{m.role}</p>
              </div>
              <p className="mt-4 max-w-lg leading-relaxed text-concrete">{m.bio}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 80}>
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden bg-paper">
                <Image
                  src={`https://randomuser.me/api/portraits/${m.portraitId}.jpg`}
                  alt={m.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium">{m.name}</h3>
              <p className="label mt-1">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-concrete">{m.bio}</p>
              <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">
                {m.focus.map((f, fi) => (
                  <span key={f}>
                    {f}
                    {fi < m.focus.length - 1 && (
                      <span className="mx-1.5 text-line">·</span>
                    )}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hairline-t bg-paper/60 py-16 md:py-24">
        <div className="container-site flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="label">[ Careers ]</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              We hire slowly, and keep people for decades.
            </h2>
          </div>
          <a
            href="mailto:careers@strata.studio"
            className="border border-ink px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-ink hover:text-bone"
          >
            careers@strata.studio
          </a>
        </div>
      </section>
    </>
  );
}
