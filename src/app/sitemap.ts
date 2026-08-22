import type { MetadataRoute } from "next";
import { allProjects } from "@/content/projects";
import { journal } from "@/content/journal";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = [
    "",
    "/projects",
    "/studio",
    "/services",
    "/team",
    "/journal",
    "/awards",
    "/commission",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const projectPages = allProjects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const journalPages = journal.map((j) => ({
    url: `${site.url}/journal/${j.slug}`,
    lastModified: new Date(j.date),
  }));

  return [...statics, ...projectPages, ...servicePages, ...journalPages];
}
