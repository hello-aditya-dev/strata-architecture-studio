export type JournalCategory = "Essay" | "News" | "Project Story";

export type JournalEntry = {
  slug: string;
  category: JournalCategory;
  title: string;
  date: string;
  displayDate: string;
  readingTime: string;
  author: string;
  dek: string;
  coverId: string;
  pull?: string;
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "on-material-honesty",
    category: "Essay",
    title: "On Material Honesty",
    date: "2026-05-14",
    displayDate: "May 2026",
    readingTime: "8 min",
    author: "Ingrid Halvorsen",
    dek: "Concrete that pretends to be stone, stone cut to look like concrete — a plea for buildings that say what they are.",
    coverId: "photo-1503387762-592deb58ef4e",
    pull: "A material is honest when it admits how it was made.",
    body: [
      "Every material carries the record of its manufacture. Board-formed concrete remembers the grain of the pine it dried against; fired brick remembers the flame that made it; laminated timber remembers the forest. Honesty in architecture is not an aesthetic preference — it is the decision to let those records stay visible.",
      "The opposite of honesty is not ornament. It is substitution: printed stone-look panels, plastic mouldings pretending to plaster, thin veneers over structure that will never be maintained because no one understands what lies beneath. Substitution is not always wrong — budgets are real — but it should be declared, like an ingredient list, not smuggled past the client.",
      "Our studio’s rule is simple. Every surface must answer three questions without embarrassment: what am I, how was I made, and how will I age? If a detail can survive those questions at a public review, it can survive weather, tenants and time. If it cannot, we redesign it — however beautiful the render.",
      "This discipline costs effort up front and saves it forever after. Buildings that say what they are can be repaired by ordinary people using ordinary means. That, more than any style, is what makes architecture last.",
    ],
  },
  {
    slug: "building-in-fog",
    category: "Project Story",
    title: "Building in Fog: The Making of Casa Bruma",
    date: "2026-03-02",
    displayDate: "March 2026",
    readingTime: "11 min",
    author: "Tomás Ribeiro",
    dek: "Two hundred fog days a year forced a house to learn from weather instead of defending against it.",
    coverId: "photo-1523217582562-09d0def993a6",
    pull: "The fog taught us the plan.",
    body: [
      "The first site visit was a failure. We arrived at noon with sun-path apps and drone batteries and saw nothing but white. The surveyor apologised; the client laughed. Only on the fourth visit did we understand that the fog was not an obstruction to design around but the site’s primary material — more constant than the views everyone had promised us.",
      "So the plan learned from water vapour. Volumes were placed where fog pools longest, gardens opened where it burns off first, and the long axis was aligned not with the sea view but with the wind that clears the terraces by ten each morning. Rooms were positioned by humidity as much as sunlight.",
      "Construction had its own meteorology. Lime renders needed mist to cure properly; the masons celebrated fog days because their work hardened slowly and well. By the end the crews were forecasting the site better than the weather service — one of them now runs his own firm two valleys away.",
      "Casa Bruma photographs beautifully, which is a problem: pictures cannot carry damp air or the sound of invisible sea. Visit if you can. Come at dawn, bring nothing, wait an hour. The house will disappear, and then it will explain itself.",
    ],
  },
  {
    slug: "light-as-programme",
    category: "Essay",
    title: "Light as Programme",
    date: "2025-11-20",
    displayDate: "November 2025",
    readingTime: "7 min",
    author: "Tomás Ribeiro",
    dek: "Daylight is the cheapest material and the most expensive to fake. A short argument for designing rooms around the sun.",
    coverId: "photo-1600210492486-724fe5c67fb0",
    body: [
      "Ask someone to describe a room they love and they will describe light: the morning kitchen stripe, the library’s north glow, the stairwell that turns gold at four. Programmes written by clients list functions; programmes remembered by users are lists of light conditions. Architecture is the craft of arranging the second list inside the first.",
      "We therefore begin section before plan. Height, depth and aperture determine what light can reach a room; everything else is furniture. At Tonstad Library the vault geometry came from a single requirement — even north light across every reading terrace — and the floor plan followed the roof like a shadow follows a hand.",
      "Artificial light then becomes correction rather than source. Fixtures are placed to extend daylight’s logic, not contradict it: warm fills where winter sun fails, task light exactly where books open. A building whose electric lighting could be switched off at noon and nobody notices — that is the standard.",
      "None of this requires budget, only patience. The sun charges nothing. The least expensive material in our palette is also the only one that arrives every day whether we deserve it or not.",
    ],
  },
  {
    slug: "tonstad-competition-win",
    category: "News",
    title: "Tonstad Library Competition Win",
    date: "2025-06-09",
    displayDate: "June 2025",
    readingTime: "3 min",
    author: "Studio News",
    dek: "First prize among forty-seven entries for the valley’s new civic vault — construction begins spring 2026.",
    coverId: "photo-1473177104440-ffee2f376098",
    body: [
      "Strata has won the open international competition for Tonstad Public Library, selected from forty-seven entries by a jury citing the proposal’s ‘vaulted calm and civic generosity’. The 3,900 m² building gathers library, youth club and citizen services beneath three self-supporting brick vaults.",
      "The jury noted particularly the section strategy, which delivers even northern daylight to all reading areas while cutting predicted energy demand by a third against baseline. Site-cast concrete ribs will be poured by local crews as part of the municipality’s apprenticeship programme.",
      "Design development begins this autumn with construction programmed for spring 2026 and completion expected in 2028. The project continues the studio’s civic series alongside Fjord Pavilion (2025) and the ongoing Skyframe Masterplan in Seoul.",
    ],
  },
  {
    slug: "mass-timber-after-the-hype",
    category: "Essay",
    title: "Mass Timber After the Hype",
    date: "2025-02-18",
    displayDate: "February 2025",
    readingTime: "9 min",
    author: "Aiko Tanaka",
    dek: "A decade into the timber revolution, an engineer’s audit of what actually worked, what quietly failed, and when to still choose concrete.",
    coverId: "photo-1441974231531-c6227db76b6e",
    pull: "Timber is not a religion. It is a material with a moisture content.",
    body: [
      "Ten years ago mass timber was going to end concrete. Today the picture is more useful: CLT floors perform brilliantly in repetitive residential grids; glulam frames excel where spans meet prefabrication; and certain typologies — wet, tall, acoustically demanding — remain stubbornly better in mineral materials. Maturity means knowing which is which.",
      "The failures we have audited share a pattern: timber specified for image, detailed by teams without moisture management experience, protected by envelopes designed for masonry logic. Wood does not forgive sloppy detailing; it documents your mistakes in colour changes you can read from across a street.",
      "Where we now specify timber confidently: housing frames on repetitive grids, pavilions assembled by hand, interior insertions within existing shells. Where we hesitate: ground-contact conditions, high-humidity pools and baths, and projects whose maintenance culture is unknown. Honest engineering includes declining commissions.",
      "The carbon argument remains real but must be counted whole — harvest cycles, transport, adhesives, end-of-life. Our current projects average a 38% embodied saving against concrete equivalents, not the ninety per cent of conference slides. Truthful numbers build more trust than hopeful ones.",
    ],
  },
  {
    slug: "saudade-international-award",
    category: "News",
    title: "Hotel Saudade Receives International Architecture Award",
    date: "2024-10-30",
    displayDate: "October 2024",
    readingTime: "2 min",
    author: "Studio News",
    dek: "The Chicago Athenaeum honours the Lisbon hotel for adaptive reuse ‘that listens before it draws’.",
    coverId: "photo-1522708323590-d24dbb6b0267",
    body: [
      "Hotel Saudade has received an International Architecture Award from The Chicago Athenaeum Museum of Architecture and Design, recognising the project’s transformation of a 19th-century warehouse district into a forty-two-room hotel.",
      "The citation praised the project’s restraint — preserved crane rails, inherited party walls and repairs left legible — calling it ‘adaptive reuse that listens before it draws’. The award will be exhibited at the museum’s annual show in Athens this December.",
      "Hotel Saudade continues to anchor the studio’s hospitality portfolio alongside the Stone Baths in Lofoten and forthcoming work in Comporta.",
    ],
  },
];

export function getEntry(slug: string): JournalEntry | undefined {
  return journal.find((j) => j.slug === slug);
}

export const journalCategories = ["All", "Essay", "Project Story", "News"] as const;
