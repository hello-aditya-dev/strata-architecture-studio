import Link from "next/link";
import Reveal from "./reveal";
import type { Award } from "@/content/awards";

export default function AwardsTimeline({ items }: { items: Award[] }) {
  return (
    <ol className="relative border-l border-line">
      {items.map((a, i) => (
        <li key={`${a.year}-${a.award}`} className="group relative pb-14 pl-10 last:pb-0 md:pl-16">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ink transition-transform duration-500 group-hover:scale-150" />
          <Reveal delay={i * 40}>
            <div className="grid gap-3 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-8">
              <p className="display text-4xl tabular-nums md:text-5xl">{a.year}</p>
              <div>
                <h3 className="text-lg font-medium leading-snug md:text-xl">
                  {a.award}
                </h3>
                {a.note && (
                  <p className="mt-1 text-sm text-concrete">{a.note}</p>
                )}
                {a.slug && (
                  <p className="mt-1 text-sm text-concrete">
                    For{" "}
                    <Link
                      href={`/projects/${a.slug}`}
                      className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {a.project}
                    </Link>
                  </p>
                )}
              </div>
              <span className="hidden font-mono text-sm text-concrete opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 md:block">
                ⟶
              </span>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
