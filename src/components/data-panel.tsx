import Reveal from "./reveal";
import type { Project } from "@/content/projects";

export default function DataPanel({ project }: { project: Project }) {
  const cells: [string, string][] = [
    ["Client", project.client],
    ["Location", `${project.location}, ${project.country}`],
    ["Year", String(project.year)],
    ["Area", project.area],
    ["Typology", project.typology],
    ["Status", project.status],
  ];

  return (
    <section className="hairline-t hairline-b">
      <div className="container-site grid grid-cols-2 gap-y-10 py-12 md:grid-cols-3 md:py-16 xl:grid-cols-6">
        {cells.map(([k, v], i) => (
          <Reveal key={k} delay={i * 60}>
            <p className="label">{k}</p>
            <p className="mt-3 text-base font-medium md:text-lg">{v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
