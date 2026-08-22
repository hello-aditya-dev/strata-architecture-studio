import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { journal } from "@/content/journal";
import { unsplash } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays, project stories and studio news — thought leadership from the Strata studio on materials, light, cities and construction.",
};

export default function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <>
      <PageHeader
        index="06"
        label="Journal"
        title={
          <>
            Essays, stories &{" "}
            <em className="italic font-light">studio news.</em>
          </>
        }
        intro="What we are thinking about between drawings — material honesty, daylight, timber engineering and the occasional award."
      />

      <section className="container-site pb-20 md:pb-28">
        <Reveal>
          <Link href={`/journal/${lead.slug}`} className="group grid gap-8 border-b border-line pb-16 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper">
              <Image
                src={unsplash(lead.coverId, 1600)}
                alt={lead.title}
                fill
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <p className="label">
                Featured · {lead.category} · {lead.displayDate} · {lead.readingTime}
              </p>
              <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
                {lead.title}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-concrete">{lead.dek}</p>
              <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors group-hover:text-ink">
                Read Essay ⟶
              </p>
            </div>
          </Link>
        </Reveal>

        <div className="grid gap-x-10 gap-y-14 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((j, i) => (
            <Reveal key={j.slug} delay={(i % 3) * 80}>
              <Link href={`/journal/${j.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={unsplash(j.coverId, 1000)}
                    alt={j.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
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
      </section>
    </>
  );
}
