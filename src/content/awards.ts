export type Award = {
  year: number;
  award: string;
  project: string;
  slug?: string;
  note?: string;
};

export const awards: Award[] = [
  {
    year: 2026,
    award: "International Architecture Award — Adaptive Reuse",
    project: "Hotel Saudade",
    slug: "hotel-saudade",
    note: "Chicago Athenaeum & European Centre",
  },
  {
    year: 2025,
    award: "Norwegian Concrete Element Prize",
    project: "Fjord Pavilion",
    slug: "fjord-pavilion",
    note: "For board-formed quay-side concrete",
  },
  {
    year: 2025,
    award: "European Prize for Urban Public Space — Finalist",
    project: "Quarry Garden",
    slug: "quarry-garden",
  },
  {
    year: 2025,
    award: "Tonstad Library Competition — First Prize (open, 47 entries)",
    project: "Tonstad Public Library",
    slug: "tonstad-library",
  },
  {
    year: 2024,
    award: "Portuguese Chamber of Architects Award — Hospitality",
    project: "Hotel Saudade",
    slug: "hotel-saudade",
  },
  {
    year: 2023,
    award: "Mies van der Rohe Award — Nominee",
    project: "Halde Workspace",
    slug: "halde-workspace",
  },
  {
    year: 2023,
    award: "Swiss Architecture Award — Housing",
    project: "Courtyard Housing Feldbreite",
    slug: "feldbreite-housing",
  },
  {
    year: 2022,
    award: "Holcim Foundation Award — Sustainable Construction",
    project: "MASA Research Center",
    slug: "masa-research-center",
    note: "Acknowledgement, Latin America",
  },
  {
    year: 2022,
    award: "Österlen Cultural Building of the Year",
    project: "Kivik Pavilion",
    slug: "kivik-pavilion",
  },
  {
    year: 2021,
    award: "Nordic Landscape Architecture Prize",
    project: "Quarry Garden",
    slug: "quarry-garden",
  },
  {
    year: 2020,
    award: "Ruhr Heritage Medal",
    project: "Halde Workspace",
    slug: "halde-workspace",
    note: "For the Kohlenwäsche conversion",
  },
  {
    year: 2019,
    award: "ArchDaily Building of the Year — Wellness",
    project: "Stone Baths, Lofoten",
    slug: "lofoten-baths",
  },
];
