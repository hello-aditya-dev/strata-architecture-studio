import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ProjectIndex from "@/components/project-index";
import { allProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The complete project index of Strata — cultural buildings, housing, workplaces, landscapes and urban frameworks across Europe and beyond.",
};

export default function ProjectsPage() {
  const rows = allProjects.map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    location: p.location,
    country: p.country,
    year: p.year,
    typology: p.typology,
    area: p.area,
    coverId: p.coverId,
  }));

  return (
    <>
      <PageHeader
        index="02"
        label="Projects"
        title={
          <>
            The work,{" "}
            <em className="italic font-light">indexed.</em>
          </>
        }
        intro="Twelve built and ongoing projects, catalogued like an archive — by name, place, year, typology and area. Hover to preview; open a project for the full story."
      />
      <ProjectIndex projects={rows} filters />
    </>
  );
}
