import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DataPanel from "@/components/data-panel";
import FloorPlan from "@/components/floor-plan";
import Gallery from "@/components/gallery";
import MaterialPalette from "@/components/material-palette";
import Reveal from "@/components/reveal";
import { allProjects, adjacentProjects, getProject } from "@/content/projects";
import { unsplash } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Strata`,
      description: project.summary,
      images: [{ url: unsplash(project.coverId, 1600) }],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = adjacentProjects(slug);

  return (
    <article>
      <header className="relative h-[86svh] min-h-[520px] overflow-hidden bg-ink text-bone">
        <Image
          src={unsplash(project.coverId, 2200)}
          alt={`${project.title} — ${project.location}, ${project.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/45" />
        <div className="container-site absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70">
            <Link href="/projects" className="hover:text-bone">
              Projects
            </Link>
            <span>/</span>
            <span>{String(project.index).padStart(2, "0")} / 12</span>
          </div>
          <h1 className="display mt-5 max-w-3xl text-5xl md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70">
            {project.typology} — {project.location}, {project.country} —{" "}
            {project.year}
          </p>
        </div>
      </header>

      <DataPanel project={project} />

      <section className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-3">
          <p className="label">[ Design Intent ]</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">
            {project.intentTitle}
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7 md:col-start-6">
          <div className="prose-editorial text-ink/90">
            {project.intent.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <blockquote className="mt-14 border-l-2 border-ink pl-8">
            <p className="display text-2xl leading-snug md:text-3xl">
              “{project.quote.text}”
            </p>
            <cite className="mt-4 block font-mono text-[11px] uppercase not-italic tracking-[0.2em] text-concrete">
              — {project.quote.cite}
            </cite>
          </blockquote>
        </Reveal>
      </section>

      <section className="hairline-t py-20 md:py-28">
        <div className="container-site mb-12 flex items-center gap-4">
          <p className="label">[ Architectural Gallery ]</p>
          <span className="h-px flex-1 bg-line" />
          <p className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
            {String(project.gallery.length).padStart(2, "0")} plates
          </p>
        </div>
        <div className="container-site">
          <Gallery images={project.gallery} />
        </div>
      </section>

      <section className="hairline-t bg-paper/60 py-20 md:py-28">
        <div className="container-site">
          <div className="mb-12 flex items-center gap-4">
            <p className="label">[ Plans ]</p>
            <span className="h-px flex-1 bg-line" />
            <p className="font-mono text-[11px] tracking-[0.18em] text-concrete">
              Drawings not to scale on screen
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {project.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <FloorPlan variant={plan.variant} name={plan.name} scale={plan.scale} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-20 md:py-28">
        <div className="container-site">
          <div className="mb-12 flex items-center gap-4">
            <p className="label">[ Material Palette ]</p>
            <span className="h-px flex-1 bg-line" />
          </div>
          <MaterialPalette materials={project.materials} />
        </div>
      </section>

      <section className="hairline-t hairline-b py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label">[ Credits ]</p>
          </Reveal>
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 md:col-span-8 md:col-start-5 lg:grid-cols-3">
            {project.credits.map((c) => (
              <li key={c.role}>
                <p className="label">{c.role}</p>
                <p className="mt-2 text-sm font-medium">{c.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="container-site grid border-b border-line md:grid-cols-2">
        {[
          { p: prev, dir: "Previous" },
          { p: next, dir: "Next" },
        ].map(({ p, dir }) =>
          p ? (
            <Link
              key={dir}
              href={`/projects/${p.slug}`}
              className={`group py-12 transition-colors md:py-16 ${
                dir === "Next" ? "border-t border-line md:border-l md:border-t-0" : ""
              }`}
            >
              <p className="label">{dir === "Next" ? "Next Project" : "Previous Project"}</p>
              <p className="display mt-4 text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-5xl">
                {dir === "Next" && (
                  <span className="mr-4 inline-block text-concrete">⟶</span>
                )}
                {p.title}
                {dir !== "Next" && (
                  <span className="ml-4 inline-block text-concrete">⟵</span>
                )}
              </p>
            </Link>
          ) : (
            <div key={dir} />
          )
        )}
      </nav>
    </article>
  );
}
