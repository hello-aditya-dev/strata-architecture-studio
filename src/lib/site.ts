export const site = {
  name: "STRATA",
  legalName: "Strata Studio AS",
  tagline: "Architecture with consequence.",
  description:
    "STRATA is an integrated architecture, engineering and construction studio. We design buildings, places and structures whose work deserves to be experienced, not listed.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://strata-studio.vercel.app",
  email: "commissions@strata.studio",
  press: "press@strata.studio",
  phone: "+47 22 00 41 90",
  offices: [
    {
      city: "Oslo",
      role: "Studio — Headquarters",
      address: ["Sørengkaia 71", "0194 Oslo", "Norway"],
    },
    {
      city: "Lisbon",
      role: "Atelier",
      address: ["Rua da Boavista 84", "1200-069 Lisboa", "Portugal"],
    },
  ],
};

export function unsplash(id: string, w = 1800): string {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];
