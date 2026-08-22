import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";
import ProjectIndex from "@/components/project-index";
import Reveal from "@/components/reveal";
import { allProjects } from "@/content/projects";
import { awards } from "@/content/awards";
import { journal } from "@/content/journal";
import { services } from "@/content/services";
import Image from "next/image";
import { unsplash } from "@/lib/site";

export default function Home() {
  const slides = allProjects.map((p) => ({
    id: p.coverId,
    title: p.title,
    location: `${p.location}, ${p.country}`,
  }));
  const featured = allProjects.filter((p) => p.featured);
  const latestAwards = awards.slice(0, 3);
  const latestJournal = journal.slice(0, 3);

  return (
    <>
      <HeroSlideshow slides={slides} />

      <section className="hairline-b">
        <div className="container-site grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <Reveal className="md:col-span-2">
            <p className="label">[ Manifesto ]</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="display text-3xl leading-[1.25] md:text-[2.75rem] md:leading-[1.22]">
              Strata is an integrated studio for architecture, engineering and
              construction — one team, from first sketch to final key. We design{" "}
              <em className="italic font-light">quietly radical</em> buildings
              whose work deserves to be experienced, not listed.
            </p>
            <Link
              href="/studio"
              className="mt-9 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink"
            >
              About the Studio <span>⟶</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site mb-4 flex items-end justify-between">
          <div>
            <p className="label">[ Selected Work ]</p>
            <h2 className="display mt-5 text-4xl md:text-6xl">
              Projects in the world.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink md:inline-flex"
          >
            Full Index <span>⟶</span>
          </Link>
        </div>
        <ProjectIndex projects={featured} />
      </section>

      <section className="hairline-t hairline-b bg-paper/60 py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          {(["Architecture", "Construction"] as const).map((discipline) => (
            <div key={discipline}>
              <div className="flex items-center gap-4 border-b border-line pb-4">
                <p className="label">{discipline}</p>
                <span className="h-px flex-1 bg-line" />
              </div>
              <ul>
                {services
                  .filter((s) => s.discipline === discipline)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-baseline justify-between gap-4 border-b border-line py-4"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-concrete">
                            {s.number}
                          </span>
                          <span className="text-lg font-medium transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                            {s.title}
                          </span>
                        </span>
                        <span className="hidden max-w-[16rem] text-right text-sm text-concrete sm:block">
                          {s.lede}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline-b py-20 md:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between">
            <div>
              <p className="label">[ Recognition ]</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">Awards.</h2>
            </div>
            <Link
              href="/awards"
              className="hidden shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink md:inline-flex"
            >
              All Awards <span>⟶</span>
            </Link>
          </div>
          <ul className="mt-10 border-t border-line">
            {latestAwards.map((a) => (
              <li
                key={`${a.year}-${a.award}`}
                className="group grid gap-2 border-b border-line py-6 md:grid-cols-[7rem_1fr_auto] md:items-baseline"
              >
                <p className="display text-4xl tabular-nums">{a.year}</p>
                <div>
                  <p className="text-lg font-medium">{a.award}</p>
                  <p className="mt-0.5 text-sm text-concrete">
                    For{" "}
                    {a.slug ? (
                      <Link href={`/projects/${a.slug}`} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                        {a.project}
                      </Link>
                    ) : (
                      a.project
                    )}
                  </p>
                </div>
                <span className="hidden font-mono text-sm text-concrete opacity-0 transition-opacity group-hover:opacity-100 md:block">
                  ⟶
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between">
            <div>
              <p className="label">[ Journal ]</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">
                Essays & news.
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink md:inline-flex"
            >
              All Entries <span>⟶</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {latestJournal.map((j) => (
              <Reveal key={j.slug}>
                <Link href={`/journal/${j.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image
                      src={unsplash(j.coverId, 1000)}
                      alt={j.title}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="label mt-5">
                    {j.category} · {j.displayDate} · {j.readingTime}
                  </p>
                  <h3 className="display mt-3 text-2xl leading-snug">{j.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-concrete">
                    {j.dek}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper/60 py-24 md:py-36">
        <div className="container-site text-center">
          <Reveal>
            <p className="label">[ Commission Enquiry ]</p>
            <h2 className="display mx-auto mt-8 max-w-3xl text-4xl leading-tight md:text-6xl">
              Every significant building begins with a{" "}
              <em className="italic font-light">conversation.</em>
            </h2>
            <Link
              href="/commission"
              className="mt-12 inline-flex items-center gap-3 border border-ink px-10 py-4 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-ink hover:text-bone"
            >
              Tell Us About Your Project <span>⟶</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
