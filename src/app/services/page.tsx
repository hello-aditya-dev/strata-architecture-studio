import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior, planning and project management — alongside preconstruction, general contracting, design-build and renovation. One integrated studio system.",
};

export default function ServicesPage() {
  const groups = [
    { name: "Architecture", items: services.filter((s) => s.discipline === "Architecture") },
    { name: "Construction", items: services.filter((s) => s.discipline === "Construction") },
  ];

  return (
    <>
      <PageHeader
        index="04"
        label="Services"
        title={
          <>
            From first sketch to{" "}
            <em className="italic font-light">final key.</em>
          </>
        }
        intro="Five architecture disciplines, four construction services — deliverable separately or as a single integrated commission. Every service is led by the people who do the work."
      />

      {groups.map((group) => (
        <section key={group.name} className="hairline-t py-16 md:py-24">
          <div className="container-site">
            <div className="flex items-center gap-4 border-b border-line pb-4">
              <p className="label">{group.name}</p>
              <span className="h-px flex-1 bg-line" />
            </div>
            <ul className="grid lg:grid-cols-2 lg:gap-x-16">
              {group.items.map((s, i) => (
                <li
                  key={s.slug}
                  className={`border-b border-line ${i % 2 === 0 ? "lg:border-r lg:border-line lg:pr-16" : ""}`}
                >
                  <Link href={`/services/${s.slug}`} className="group block py-9 md:py-11">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
                        {s.number}
                      </span>
                      <span className="font-mono text-sm text-concrete opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        ⟶
                      </span>
                    </div>
                    <h2 className="display mt-4 text-4xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-5xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-md leading-relaxed text-concrete">
                      {s.lede}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
