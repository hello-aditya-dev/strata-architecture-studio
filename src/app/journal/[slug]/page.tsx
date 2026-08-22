import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { getEntry, journal } from "@/content/journal";
import { site, unsplash } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return journal.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.dek,
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.dek,
      images: [{ url: unsplash(entry.coverId, 1600) }],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const more = journal.filter((j) => j.slug !== entry.slug).slice(0, 2);

  return (
    <>
      <header className="container-site pb-12 pt-36 md:pb-16 md:pt-48">
        <div className="flex items-center gap-4">
          <Link
            href="/journal"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete hover:text-ink"
          >
            Journal
          </Link>
          <span className="h-px flex-1 bg-line" />
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete">
            {entry.category}
          </p>
        </div>
        <h1 className="display mt-10 max-w-4xl text-4xl leading-tight md:text-6xl">
          {entry.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-concrete">
          {entry.dek}
        </p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-concrete">
          {entry.author} — {entry.displayDate} — {entry.readingTime} read
        </p>
      </header>

      <Reveal>
        <figure className="relative h-[60svh] min-h-[380px] w-full overflow-hidden bg-paper md:h-[70svh]">
          <Image
            src={unsplash(entry.coverId, 2200)}
            alt={entry.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </figure>
      </Reveal>

      <section className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-[42rem]">
          <div className="prose-editorial text-ink/90">
            {entry.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {entry.pull && (
            <blockquote className="my-14 border-l-2 border-ink pl-8">
              <p className="display text-3xl leading-snug">{entry.pull}</p>
            </blockquote>
          )}

          <div className="mt-14 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-concrete">
            Published by {site.name} Studio — {site.offices[0].city} /{" "}
            {site.offices[1].city}
          </div>
        </div>
      </section>

      <nav className="hairline-t hairline-b bg-paper/60">
        <div className="container-site grid gap-x-16 py-12 md:grid-cols-2 md:py-16">
          {more.map((j) => (
            <Link key={j.slug} href={`/journal/${j.slug}`} className="group mt-10 first:mt-0 md:mt-0">
              <p className="label">Continue Reading</p>
              <h3 className="display mt-3 text-2xl leading-snug transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
                {j.title}
              </h3>
              <p className="label mt-2">
                {j.category} · {j.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
