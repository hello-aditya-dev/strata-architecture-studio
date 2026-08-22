import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { getService, services } from "@/content/services";
import { getProject } from "@/content/projects";
import { unsplash } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.lede };
}

export default async function ServiceDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const relatedProjects = service.related
    .map((r) => getProject(r))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <header className="container-site pb-14 pt-36 md:pb-20 md:pt-48">
        <div className="flex items-center gap-4">
          <Link
            href="/services"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete hover:text-ink"
          >
            Services
          </Link>
          <span className="h-px flex-1 bg-line" />
          <p className="font-mono text-[11px] tabular-nums tracking-[0.22em] text-concrete">
            {service.number} — {service.discipline}
          </p>
        </div>
        <h1 className="display mt-10 max-w-3xl text-5xl md:text-7xl">
          {service.title}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-concrete">
          {service.lede}
        </p>
      </header>

      <section className="hairline-t hairline-b bg-paper/60 py-16 md:py-24">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label">[ Overview ]</p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7 md:col-start-6">
            <p className="display text-2xl leading-relaxed md:text-[1.75rem] md:leading-[1.5]">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site grid gap-14 md:grid-cols-2 lg:gap-x-24">
          <div>
            <p className="label">[ Scope ]</p>
            <ul className="mt-8 border-t border-line">
              {service.scope.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline justify-between border-b border-line py-4"
                >
                  <span className="text-base font-medium">{s}</span>
                  <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-concrete">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">[ Process ]</p>
            <ol className="mt-8 space-y-9">
              {service.process.map((p) => (
                <li key={p.step} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="display text-3xl tabular-nums text-concrete">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{p.name}</h3>
                    <p className="mt-1.5 leading-relaxed text-concrete">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="hairline-t py-16 md:py-24">
          <div className="container-site">
            <div className="mb-10 flex items-center gap-4">
              <p className="label">[ In Practice ]</p>
              <span className="h-px flex-1 bg-line" />
              <Link
                href="/projects"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink"
              >
                All Projects ⟶
              </Link>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {relatedProjects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                      <Image
                        src={unsplash(p.coverId, 1000)}
                        alt={p.title}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <h3 className="display mt-4 text-2xl">{p.title}</h3>
                    <p className="label mt-1">
                      {p.location} · {p.year} · {p.typology}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <nav className="hairline-t hairline-b">
        <div className="container-site flex items-center justify-between py-8">
          <Link
            href="/commission"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            Commission this service
            <span className="transition-transform duration-700 group-hover:translate-x-1.5">⟶</span>
          </Link>
          <Link
            href="/services"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete hover:text-ink"
          >
            All Services
          </Link>
        </div>
      </nav>

      <nav className="container-site grid border-b border-line md:grid-cols-2">
        {[0, 1].map((slot) => (
          <ServiceNavSlot key={slot} slot={slot} slug={slug} />
        ))}
      </nav>
    </>
  );
}

function ServiceNavSlot({ slot, slug }: { slot: number; slug: string }) {
  const idx = services.findIndex((s) => s.slug === slug);
  const neighbour = slot === 0 ? services[(idx - 1 + services.length) % services.length] : services[(idx + 1) % services.length];
  const label = slot === 0 ? "Previous Service" : "Next Service";
  return (
    <Link
      href={`/services/${neighbour.slug}`}
      className={`group py-12 md:py-16 ${slot === 1 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
    >
      <p className="label">{label}</p>
      <p className="display mt-4 text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-5xl">
        {slot === 1 && <span className="mr-4 inline-block text-concrete">⟶</span>}
        {neighbour.title}
        {slot === 0 && <span className="ml-4 inline-block text-concrete">⟵</span>}
      </p>
    </Link>
  );
}
