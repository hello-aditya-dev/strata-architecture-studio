"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { unsplash } from "@/lib/site";

type Row = {
  slug: string;
  index: number;
  title: string;
  location: string;
  country: string;
  year: number;
  typology: string;
  area: string;
  coverId: string;
};

export default function ProjectIndex({
  projects,
  filters = false,
}: {
  projects: Row[];
  filters?: boolean;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const typologies = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.typology)))],
    [projects]
  );

  const visible = filter === "All" ? projects : projects.filter((p) => p.typology === filter);
  const active = visible.find((p) => p.slug === hovered) ?? visible[0];

  return (
    <div className="container-site pb-24 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px]">
        <div>
          {filters && (
            <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-5">
              {typologies.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    filter === t ? "text-ink underline underline-offset-8" : "text-concrete hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="ml-auto font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
                {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          )}

          <ul className={filters ? "" : "border-t border-line"}>
            {visible.map((p) => (
              <li key={p.slug} onMouseEnter={() => setHovered(p.slug)}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid grid-cols-[2.6rem_1fr_auto] items-baseline gap-4 border-b border-line py-5 md:grid-cols-[3.6rem_2.2fr_1fr_5rem_auto] md:py-6"
                >
                  <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-concrete">
                    {String(p.index).padStart(2, "0")}
                  </span>
                  <span className="display pr-2 text-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-[2rem]">
                    {p.title}
                    <span className="mt-1 block font-sans text-xs font-normal normal-case tracking-normal text-concrete md:hidden">
                      {p.location}, {p.country} · {p.year}
                    </span>
                  </span>
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-concrete md:block">
                    {p.location}, {p.country}
                  </span>
                  <span className="hidden font-mono text-[11px] tabular-nums tracking-[0.14em] text-concrete md:block">
                    {p.year}
                  </span>
                  <span className="font-mono text-sm text-concrete opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    ⟶
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
              {active && (
                <>
                  <Image
                    key={active.slug}
                    src={unsplash(active.coverId, 1200)}
                    alt={`${active.title} — ${active.location}`}
                    fill
                    sizes="(min-width:1280px) 460px, 400px"
                    className="animate-[fadeIn_900ms_ease_forwards] object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 pt-16">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70">
                      {active.typology} · {active.area}
                    </p>
                    <p className="display mt-1 text-2xl text-bone">{active.title}</p>
                  </div>
                </>
              )}
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-concrete">
              Hover an entry to preview — click to open the project.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
