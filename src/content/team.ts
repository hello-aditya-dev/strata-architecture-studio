export type Member = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
  portraitId: string;
  principal?: boolean;
};

export const team: Member[] = [
  {
    slug: "ingrid-halvorsen",
    name: "Ingrid Halvorsen",
    role: "Founding Principal",
    bio: "Founded Strata in Oslo in 2009 after a decade with Snøhetta and OMA. Leads the studio’s cultural and civic work, and teaches structural poetics at the Oslo School of Architecture.",
    focus: ["Civic", "Concrete", "Competition Design"],
    portraitId: "women/44",
    principal: true,
  },
  {
    slug: "tomas-ribeiro",
    name: "Tomás Ribeiro",
    role: "Founding Principal",
    bio: "Opened the Lisbon atelier in 2016. Formerly of Aires Mateus, Tomás leads residential and hospitality commissions, with a particular obsession for lime, brick and Atlantic light.",
    focus: ["Residential", "Hospitality", "Adaptive Reuse"],
    portraitId: "men/32",
    principal: true,
  },
  {
    slug: "aiko-tanaka",
    name: "Aiko Tanaka",
    role: "Director, Structural Engineering",
    bio: "Chartered engineer leading our integrated engineering group. Author of papers on low-carbon precast systems; designed the rippled facade of the MASA Research Center.",
    focus: ["Structure", "Low-Carbon Materials", "Facade Engineering"],
    portraitId: "women/68",
  },
  {
    slug: "jonas-weber",
    name: "Jonas Weber",
    role: "Head of Construction",
    bio: "Twenty years on Ruhr construction sites before joining Strata. Runs general contracting and design-build delivery, and personally signs off every pour above grade.",
    focus: ["Delivery", "General Contracting", "Renovation"],
    portraitId: "men/45",
  },
  {
    slug: "marta-ferreira",
    name: "Marta Ferreira",
    role: "Associate Director, Interiors",
    bio: "Leads interior architecture across hospitality and residential work. Prototypes every critical detail at 1:1 in the studio workshop before it reaches a site.",
    focus: ["Interiors", "Joinery", "FF&E"],
    portraitId: "women/26",
  },
  {
    slug: "samuel-okoye",
    name: "Samuel Okoye",
    role: "Associate, Urbanism",
    bio: "Urban designer and planner. Led the Skyframe Masterplan’s public-realm-first framework and the studio’s stakeholder engagement methodology.",
    focus: ["Urbanism", "Masterplanning", "Public Realm"],
    portraitId: "men/86",
  },
  {
    slug: "elif-aydin",
    name: "Elif Aydın",
    role: "Associate, Landscape",
    bio: "Landscape architect working across quarry restorations, courtyards and coastal sites. Believes planting plans should be arguments about time.",
    focus: ["Landscape", "Ecology", "Water Systems"],
    portraitId: "women/90",
  },
  {
    slug: "nils-berg",
    name: "Nils Berg",
    role: "Studio Director",
    bio: "Keeps thirty-four people, two cities and one standard moving in the same direction. Responsible for contracts, budgets and the studio’s famous refusal to rush.",
    focus: ["Operations", "Contracts", "Quality Systems"],
    portraitId: "men/22",
  },
];
