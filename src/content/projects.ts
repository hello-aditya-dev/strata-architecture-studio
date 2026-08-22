export type MaterialTone =
  | "concrete"
  | "stone"
  | "wood"
  | "steel"
  | "earth"
  | "glass"
  | "brick";

export type PlanVariant = "ground" | "upper" | "section";

export type Project = {
  slug: string;
  index: number;
  title: string;
  location: string;
  country: string;
  year: number;
  typology: string;
  area: string;
  client: string;
  status: "Completed" | "In progress";
  coverId: string;
  summary: string;
  intentTitle: string;
  intent: string[];
  quote: { text: string; cite: string };
  gallery: { id: string; caption: string }[];
  plans: { level: string; name: string; scale: string; variant: PlanVariant }[];
  materials: { name: string; note: string; tone: MaterialTone }[];
  credits: { role: string; name: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fjord-pavilion",
    index: 1,
    title: "Fjord Pavilion",
    location: "Oslo",
    country: "Norway",
    year: 2025,
    typology: "Cultural",
    area: "1,850 m²",
    client: "Nordvik Kulturfond",
    status: "Completed",
    coverId: "photo-1487958449943-2429e8be8625",
    summary:
      "A public pavilion of board-formed concrete and glass, holding the line between harbour and city.",
    intentTitle: "A room for weather",
    intent: [
      "The fjord is Oslo’s oldest room. The pavilion does not decorate it; it frames it. A single horizontal volume rests on the quay, its concrete cast against rough-sawn boards so that every tide line of the formwork remains legible in the finished surface. Visitors enter from the city, cross the building without a door, and arrive at the water.",
      "Programmatically the building resists hierarchy. Gallery, lecture hall and café share one continuous floor plate, separated by oak-lined cores rather than walls. Exhibitions spill into the foyer; the foyer spills onto the pier. The architecture is a threshold more than an object.",
      "Environmentally the pavilion is deliberately quiet. Seawater cools the galleries in summer, the thermal mass of the concrete flattens daily swings, and the roof collects enough rain to irrigate the planted quay edge. Nothing is displayed about this. It simply works, season after season.",
    ],
    quote: {
      text: "We wanted a building that would look inevitable — as if the harbour had always intended to have a roofline here.",
      cite: "Ingrid Halvorsen, Founding Principal",
    },
    gallery: [
      {
        id: "photo-1486718448742-163732cd1544",
        caption: "Fig. 01 — Board-formed concrete, south elevation",
      },
      {
        id: "photo-1518005020951-eccb494ad742",
        caption: "Fig. 02 — Foyer balcony toward the fjord",
      },
      {
        id: "photo-1431576901776-e539bd916ba2",
        caption: "Fig. 03 — West corner at high tide",
      },
      {
        id: "photo-1503387762-592deb58ef4e",
        caption: "Fig. 04 — Formwork studies, casting phase",
      },
    ],
    plans: [
      { level: "00", name: "Ground Floor Plan", scale: "1 : 200", variant: "ground" },
      { level: "01", name: "Upper Floor Plan", scale: "1 : 200", variant: "upper" },
      { level: "AA", name: "Long Section", scale: "1 : 250", variant: "section" },
    ],
    materials: [
      { name: "Board-formed concrete", note: "Local aggregate, rough-sawn pine formwork", tone: "concrete" },
      { name: "Oak", note: "Foyer linings and exhibition cores, fumed finish", tone: "wood" },
      { name: "Low-iron glass", note: "Harbour frontage, 3.2 m sliding panels", tone: "glass" },
      { name: "Galvanised steel", note: "Roof edge, handrails, technical rail", tone: "steel" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Interior Architecture", name: "Strata Studio AS" },
      { role: "Structural Engineering", name: "Tanaka & Partners" },
      { role: "Contractor", name: "Veidekke Entreprenør AS" },
      { role: "Photography", name: "Marte Dahl" },
    ],
    featured: true,
  },
  {
    slug: "casa-bruma",
    index: 2,
    title: "Casa Bruma",
    location: "Sintra",
    country: "Portugal",
    year: 2024,
    typology: "Residential",
    area: "420 m²",
    client: "Private family",
    status: "Completed",
    coverId: "photo-1523217582562-09d0def993a6",
    summary:
      "A courtyard house for a hillside often wrapped in fog — three volumes, two gardens, one horizon.",
    intentTitle: "Building in fog",
    intent: [
      "Sintra’s microclimate gives the site two hundred days of fog a year. Rather than fight the mist, the house is organised around it: three low volumes of lime-washed brick step down the slope, each opening to its own walled garden where the fog pools before burning off at noon.",
      "Rooms are arranged as a procession rather than a plan. Entry, kitchen, living space and library align on a single axis that terminates in a twelve-metre opening to the Atlantic. Cross-views between volumes are calibrated so the family never sees the road, only gardens, walls and weather.",
      "The palette was chosen for ageing. Lime plaster will streak, brick will darken, the cedar shutters will silver. Casa Bruma is designed to look better in thirty years than it does today — the opposite of a house that must be maintained as new.",
    ],
    quote: {
      text: "The fog is our fourth façade. Some mornings the house simply disappears, and that is part of the design.",
      cite: "Tomás Ribeiro, Founding Principal",
    },
    gallery: [
      {
        id: "photo-1416331108676-a22ccb276e35",
        caption: "Fig. 01 — Approach from the olive terrace",
      },
      {
        id: "photo-1600585154340-be6161a56a0c",
        caption: "Fig. 02 — Living volume, morning light",
      },
      {
        id: "photo-1600607687939-ce8a6c25118c",
        caption: "Fig. 03 — Interior court, fog pooling",
      },
      {
        id: "photo-1600585152220-90363fe7e115",
        caption: "Fig. 04 — Main bedroom toward the axis",
      },
    ],
    plans: [
      { level: "00", name: "Ground Floor Plan", scale: "1 : 150", variant: "ground" },
      { level: "01", name: "First Floor Plan", scale: "1 : 150", variant: "upper" },
      { level: "AA", name: "Cross Section", scale: "1 : 150", variant: "section" },
    ],
    materials: [
      { name: "Lime-washed brick", note: "Hand-fired clay block, breathable render", tone: "brick" },
      { name: "Limestone", note: "Courtyard paving, local Serra quarry", tone: "stone" },
      { name: "Cedar", note: "Sliding shutters, left to silver naturally", tone: "wood" },
      { name: "Lime plaster", note: "Interior walls, troweled in three coats", tone: "earth" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Landscape Architecture", name: "Estúdio Raiz" },
      { role: "Structural Engineering", name: "Betar Consultores" },
      { role: "Contractor", name: "Construções Atlântico" },
      { role: "Photography", name: "Marte Dahl" },
    ],
    featured: true,
  },
  {
    slug: "hotel-saudade",
    index: 3,
    title: "Hotel Saudade",
    location: "Lisbon",
    country: "Portugal",
    year: 2023,
    typology: "Hospitality",
    area: "6,400 m²",
    client: "Saudade Hotels Group",
    status: "Completed",
    coverId: "photo-1522708323590-d24dbb6b0267",
    summary:
      "Forty-two rooms threaded through a 19th-century warehouse district, restored rather than rebuilt.",
    intentTitle: "A hotel made of repairs",
    intent: [
      "The site was not a landmark but a fragment: two warehouses, a printing works and a gap where a third building had been demolished. Hotel Saudade keeps all of it. Existing brick is stitched with visible steel; new floors are inserted as freestanding timber furniture inside the old shells.",
      "Guests move through the district’s memory — past the preserved crane rail, down the painted stair, into rooms whose ceilings retain the scars of a century of use. Newness is confined to what touches the body: beds, baths, handles, textiles.",
      "Acoustic archaeology shaped the plan. Party walls follow the original party walls, so the hotel inherits the silence of warehouses built for goods, not guests. The result is a hotel that feels found rather than fitted out.",
    ],
    quote: {
      text: "Every scar in the building tells you how to design. We mostly listened and repaired.",
      cite: "Project team, Hotel Saudade",
    },
    gallery: [
      {
        id: "photo-1618221195710-dd6b41faaea6",
        caption: "Fig. 01 — Suite 21, retained ceiling",
      },
      {
        id: "photo-1600210492486-724fe5c67fb0",
        caption: "Fig. 02 — Timber insertions in the west wing",
      },
      {
        id: "photo-1493809842364-78817add7ffb",
        caption: "Fig. 03 — Corner room, evening",
      },
      {
        id: "photo-1519710164239-da123dc03ef4",
        caption: "Fig. 04 — Breakfast room, former print hall",
      },
    ],
    plans: [
      { level: "01", name: "Ground Floor Plan", scale: "1 : 250", variant: "ground" },
      { level: "03", name: "Typical Room Floor", scale: "1 : 250", variant: "upper" },
      { level: "AA", name: "Section Through Print Hall", scale: "1 : 300", variant: "section" },
    ],
    materials: [
      { name: "Reclaimed brick", note: "Cleaned and re-laid from demolished wings", tone: "brick" },
      { name: "Mass timber", note: "CLT floor inserts, exposed soffits", tone: "wood" },
      { name: "Brass", note: "Hardware aged in situ by guest hands", tone: "steel" },
      { name: "Stone", note: "Lioz marble bathrooms, single-source quarry", tone: "stone" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Interior Architecture", name: "Strata Studio AS" },
      { role: "Heritage Consulting", name: "Oficina do Chiado" },
      { role: "Structural Engineering", name: "Betar Consultores" },
      { role: "Contractor", name: "Teixeira Duarte" },
      { role: "Photography", name: "Rui Cardoso" },
    ],
    featured: true,
  },
  {
    slug: "kivik-pavilion",
    index: 4,
    title: "Kivik Pavilion",
    location: "Kivik",
    country: "Sweden",
    year: 2023,
    typology: "Cultural",
    area: "310 m²",
    client: "Kivik Konstförening",
    status: "Completed",
    coverId: "photo-1470071459604-3b5ec3a7fe05",
    summary:
      "A timber frame in an orchard — a summer gallery that assembles in six weeks and stores in one truck.",
    intentTitle: "Architecture as harvest",
    intent: [
      "Every autumn Kivik harvests apples; every summer it hosts art. The pavilion joins the rhythm. Its glulam frame is cut for assembly by four carpenters without cranes, clad in translucent corrugated polycarbonate that turns the building into a lantern among the trees after dark.",
      "The floor is the orchard itself. Gravel raked level between the apple rows carries the plinths; the canopy floats above the branches on screw piles that touch the ground at eleven points. In October the panels come down and the frame returns to the association’s barn.",
      "The project argues for smallness. At 310 square metres and a fraction of a conventional museum’s budget, the pavilion delivers international exhibitions to a village of nine hundred people — proof that cultural infrastructure is a question of intention, not scale.",
    ],
    quote: {
      text: "It borrows the orchard for five months and gives it back intact.",
      cite: "Samuel Okoye, Associate, Urbanism",
    },
    gallery: [
      {
        id: "photo-1501785888041-af3ef285b470",
        caption: "Fig. 01 — Pavilion above the orchard rows",
      },
      {
        id: "photo-1441974231531-c6227db76b6e",
        caption: "Fig. 02 — Approach through the avenue",
      },
      {
        id: "photo-1486718448742-163732cd1544",
        caption: "Fig. 03 — Frame junction, detail study",
      },
    ],
    plans: [
      { level: "00", name: "Orchard Level Plan", scale: "1 : 100", variant: "ground" },
      { level: "RF", name: "Roof Framing Plan", scale: "1 : 100", variant: "upper" },
      { level: "BB", name: "Section Through Rows", scale: "1 : 100", variant: "section" },
    ],
    materials: [
      { name: "Glulam spruce", note: "Prefabricated frame, bolted connections only", tone: "wood" },
      { name: "Polycarbonate", note: "Translucent cladding, 92% light transmission", tone: "glass" },
      { name: "Steel", note: "Screw piles and tension rods, galvanised", tone: "steel" },
      { name: "Gravel", note: "Local granite, raked between rows", tone: "earth" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Structural Engineering", name: "Limträteknik i Falun AB" },
      { role: "Carpentry", name: "Byggsnickeri Österlen" },
      { role: "Photography", name: "Marte Dahl" },
    ],
  },
  {
    slug: "tonstad-library",
    index: 5,
    title: "Tonstad Public Library",
    location: "Tonstad",
    country: "Norway",
    year: 2022,
    typology: "Civic",
    area: "3,900 m²",
    client: "Tonstad Kommune",
    status: "Completed",
    coverId: "photo-1473177104440-ffee2f376098",
    summary:
      "A civic vault of pale brick and daylight — the town’s living room, archive and shelter in one.",
    intentTitle: "The town under one roof",
    intent: [
      "Tonstad asked for a library; the valley needed a room. The building gathers library, youth club, archive and citizen services beneath a single vaulted roof of pale brick, so that every civic errand becomes a reason to stay. There are no turnstiles and very few doors.",
      "Daylight is the primary material. Three north-facing vaults wash the reading terraces with even light; the southern clerestory throws a moving band of sun across the main stair, marking hours the way older churches did. On winter afternoons the whole town can watch the light climb the brick.",
      "Structure carries meaning. Each vault springs from exposed concrete ribs cast on site by local crews — the first major concrete work most of them had poured. The building is, quite literally, made by the town it serves.",
    ],
    quote: {
      text: "People come to return a book and stay for four hours. That was the whole brief, hidden inside the brief.",
      cite: "Tonstad Kommune, client statement",
    },
    gallery: [
      {
        id: "photo-1497366216548-37526070297c",
        caption: "Fig. 01 — Reading terrace under the north vault",
      },
      {
        id: "photo-1524758631624-e2822e304c36",
        caption: "Fig. 02 — Study tables, afternoon",
      },
      {
        id: "photo-1600210492486-724fe5c67fb0",
        caption: "Fig. 03 — Archive wall, oak shelving",
      },
      {
        id: "photo-1473177104440-ffee2f376098",
        caption: "Fig. 04 — Main stair, clerestory light",
      },
    ],
    plans: [
      { level: "00", name: "Ground Floor Plan", scale: "1 : 300", variant: "ground" },
      { level: "01", name: "Gallery Floor Plan", scale: "1 : 300", variant: "upper" },
      { level: "CC", name: "Vault Section", scale: "1 : 300", variant: "section" },
    ],
    materials: [
      { name: "Pale brick", note: "Danish clay vault units, 26 cm self-supporting", tone: "brick" },
      { name: "Concrete", note: "Site-cast ribs and plinths, local aggregate", tone: "concrete" },
      { name: "Oak", note: "Shelving, stairs and reading desks", tone: "wood" },
      { name: "Glass", note: "Southern clerestory, low-iron laminated", tone: "glass" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Structural Engineering", name: "Tanaka & Partners" },
      { role: "Services Engineering", name: "Norconsult AS" },
      { role: "Contractor", name: "HAB Contracting AS" },
      { role: "Photography", name: "Rui Cardoso" },
    ],
    featured: true,
  },
  {
    slug: "feldbreite-housing",
    index: 6,
    title: "Courtyard Housing Feldbreite",
    location: "Zurich",
    country: "Switzerland",
    year: 2022,
    typology: "Housing",
    area: "12,500 m²",
    client: "Stadt Zürich Immobilien",
    status: "Completed",
    coverId: "photo-1511818966892-d7d671e672a2",
    summary:
      "Ninety-four subsidised apartments around a shared courtyard — density without corridor buildings.",
    intentTitle: "Density with dignity",
    intent: [
      "Zurich’s brief was uncompromising: ninety-four apartments, all subsidised, none smaller than code. Feldbreite answers with perimeter blocks of load-bearing masonry enclosing a single generous courtyard — every apartment gets two orientations, most get three.",
      "The courtyard is infrastructure, not decoration. Shared laundries, workshops and a kindergarten open onto it; fruit trees and rain gardens carry the stormwater. Cars stop at the street. Children claim the space within weeks of opening, which is the only occupancy certificate that matters.",
      "Construction stayed conventional on purpose: masonry, slabs, windows — details refined until ordinary methods produced extraordinary calm. The project demonstrates that affordability and architectural ambition are not opposites but neighbours.",
    ],
    quote: {
      text: "Good housing is mostly geometry and patience. Everything else is marketing.",
      cite: "Jonas Weber, Head of Construction",
    },
    gallery: [
      {
        id: "photo-1486406146926-c627a92ad1ab",
        caption: "Fig. 01 — Perimeter block from Feldbreitestrasse",
      },
      {
        id: "photo-1545324418-cc1a3fa10c00",
        caption: "Fig. 02 — North wing, dusk",
      },
      {
        id: "photo-1600607687939-ce8a6c25118c",
        caption: "Fig. 03 — Courtyard elevation, ground floor",
      },
      {
        id: "photo-1431576901776-e539bd916ba2",
        caption: "Fig. 04 — Stair core, cast stone",
      },
    ],
    plans: [
      { level: "00", name: "Site Plan", scale: "1 : 500", variant: "ground" },
      { level: "03", name: "Typical Floor Plan", scale: "1 : 250", variant: "upper" },
      { level: "AA", name: "Section Through Court", scale: "1 : 300", variant: "section" },
    ],
    materials: [
      { name: "Clinker brick", note: "Swiss fired facade, mortar-jointed flush", tone: "brick" },
      { name: "Concrete", note: "Recycled-aggregate slabs, exposed soffits", tone: "concrete" },
      { name: "Timber", note: "Window frames and loggias, larch", tone: "wood" },
      { name: "Cast stone", note: "Stair cores and entrance portals", tone: "stone" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Landscape Architecture", name: "Studio Boden" },
      { role: "Structural Engineering", name: "WGG Schnetzer Puskas AG" },
      { role: "General Contractor", name: "Implenia Bau AG" },
      { role: "Photography", name: "Rui Cardoso" },
    ],
  },
  {
    slug: "masa-research-center",
    index: 7,
    title: "MASA Research Center",
    location: "Mexico City",
    country: "Mexico",
    year: 2021,
    typology: "Educational",
    area: "5,200 m²",
    client: "Fundación MASA",
    status: "Completed",
    coverId: "photo-1493397212122-2b85dda8106b",
    summary:
      "A material research campus wrapped in rippled concrete — laboratories for the future of earth, fibre and stone.",
    intentTitle: "A building that experiments on itself",
    intent: [
      "MASA funds research into low-carbon construction materials; its headquarters had to be its first publication. The facade is a prototype: precast panels with a rippled geometry that stiffens thin concrete without reinforcement, cutting embodied carbon by a measured forty per cent.",
      "Inside, the logic continues. Laboratories are generic and daylit, designed for experiments that have not been invented yet. Services run exposed in a raised plenum; walls are unlined concrete so every test panel can be mounted, monitored and replaced.",
      "The courtyard collects failures. Panels that cracked, warped or faded are displayed along the arcade with dated plaques — a building that publishes its own peer review, indoors and out.",
    ],
    quote: {
      text: "Most buildings hide their risk. Ours exhibits it, dates it, and learns from it.",
      cite: "Aiko Tanaka, Director, Structural Engineering",
    },
    gallery: [
      {
        id: "photo-1431576901776-e539bd916ba2",
        caption: "Fig. 01 — Rippled precast panels, east face",
      },
      {
        id: "photo-1449157291145-7efd050a4d0e",
        caption: "Fig. 02 — Laboratory tower above the canopy",
      },
      {
        id: "photo-1486406146926-c627a92ad1ab",
        caption: "Fig. 03 — Arcade of failed prototypes",
      },
    ],
    plans: [
      { level: "00", name: "Campus Plan", scale: "1 : 750", variant: "ground" },
      { level: "02", name: "Laboratory Floor", scale: "1 : 250", variant: "upper" },
      { level: "AA", name: "Section Through Arcade", scale: "1 : 250", variant: "section" },
    ],
    materials: [
      { name: "Precast concrete", note: "Ripple-stiffened panels, 40% less embodied carbon", tone: "concrete" },
      { name: "Volcanic stone", note: "Base courses, reclaimed from demolition", tone: "stone" },
      { name: "Steel", note: "Exposed bracing, painted oxide red", tone: "steel" },
      { name: "Earth", note: "Test walls of rammed tepetate in the courtyard", tone: "earth" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Associate Architect", name: "Taller Norte" },
      { role: "Structural Engineering", name: "Grupo BVG" },
      { role: "Facade Engineering", name: "Knippers Helbig" },
      { role: "Photography", name: "Camila Ortega" },
    ],
  },
  {
    slug: "quarry-garden",
    index: 8,
    title: "Quarry Garden",
    location: "Fauske",
    country: "Norway",
    year: 2021,
    typology: "Landscape",
    area: "4 ha",
    client: "Fauske Kommune",
    status: "Completed",
    coverId: "photo-1501785888041-af3ef285b470",
    summary:
      "An abandoned marble quarry returned to the town as terraced landscape — extraction reversed.",
    intentTitle: "Extraction, reversed",
    intent: [
      "For sixty years the mountain gave up marble; when the quarry closed it left a white amphitheatre of rubble. The garden does not erase this history — it edits it. Terraces follow the original cutting benches, so the town literally walks down through the strata of its own industry.",
      "Planting is an argument for succession. Pioneer birch and nitrogen-fixing alder colonise the upper benches unaided; below, orchards and cutting gardens occupy the flat terraces where soil could be rebuilt. Nature is given direction, not instruction.",
      "Water structures everything. The quarry floor floods each spring; a stone causeway lets visitors cross the seasonal lake, and the overflow feeds the fish ladder reconnecting the river below. The garden’s only building is a single timber shelter — the smallest possible architecture.",
    ],
    quote: {
      text: "We removed nothing except the fences. The site wanted to be a garden; it had been waiting sixty years.",
      cite: "Elif Aydın, Associate, Landscape",
    },
    gallery: [
      {
        id: "photo-1441974231531-c6227db76b6e",
        caption: "Fig. 01 — Birch succession, upper benches",
      },
      {
        id: "photo-1470071459604-3b5ec3a7fe05",
        caption: "Fig. 02 — Morning fog in the amphitheatre",
      },
      {
        id: "photo-1486718448742-163732cd1544",
        caption: "Fig. 03 — Marble rubble, detail",
      },
    ],
    plans: [
      { level: "00", name: "Masterplan", scale: "1 : 1000", variant: "ground" },
      { level: "T2", name: "Terrace Garden Plan", scale: "1 : 400", variant: "upper" },
      { level: "PP", name: "Long Profile", scale: "1 : 800", variant: "section" },
    ],
    materials: [
      { name: "Marble rubble", note: "Quarry spoil, crushed and reused in situ", tone: "stone" },
      { name: "Mass timber", note: "Causeway deck and shelter, untreated pine", tone: "wood" },
      { name: "Steel", note: "Handrails and fish-ladder mesh, corten", tone: "steel" },
      { name: "Earth", note: "Rebuilt soils from site green waste", tone: "earth" },
    ],
    credits: [
      { role: "Landscape Architecture", name: "Strata Studio AS" },
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Hydrology", name: "NIVA Norway" },
      { role: "Ecology", name: "BioFokus" },
      { role: "Photography", name: "Marte Dahl" },
    ],
  },
  {
    slug: "halde-workspace",
    index: 9,
    title: "Halde Workspace",
    location: "Essen",
    country: "Germany",
    year: 2020,
    typology: "Workplace",
    area: "8,100 m²",
    client: "Ruhr Immobilien GmbH",
    status: "Completed",
    coverId: "photo-1486406146926-c627a92ad1ab",
    summary:
      "A coal washery converted to studios and workshops — the Ruhr’s heaviest building, given a second life.",
    intentTitle: "Heavy building, light touch",
    intent: [
      "The Kohlenwäsche was built in 1936 to wash coal; it is concrete of almost geological stubbornness. Conversion meant subtraction: floors were opened with surgical saw cuts, new services threaded through old chutes, and daylight introduced through roof monitors where conveyors once ran.",
      "New structure never mimics old. Steel stair towers stand clear of the original frame, their bolted connections readable at a glance. Where coal once moved, people now move — the great vertical halls became a covered street of workshops shared by forty companies.",
      "The building’s carbon ledger justified everything. Reusing the frame saved an estimated eleven thousand tonnes of embodied emissions versus demolition — the greenest structure on the site is the one already standing.",
    ],
    quote: {
      text: "You cannot design a building this honest. You can only refuse to lie to it.",
      cite: "Jonas Weber, Head of Construction",
    },
    gallery: [
      {
        id: "photo-1497366216548-37526070297c",
        caption: "Fig. 01 — Covered street, former conveyor hall",
      },
      {
        id: "photo-1524758631624-e2822e304c36",
        caption: "Fig. 02 — Studio level, saw-cut openings",
      },
      {
        id: "photo-1449157291145-7efd050a4d0e",
        caption: "Fig. 03 — Stair tower against the 1936 frame",
      },
      {
        id: "photo-1522708323590-d24dbb6b0267",
        caption: "Fig. 04 — Corner studio, roof monitor light",
      },
    ],
    plans: [
      { level: "EG", name: "Street Level Plan", scale: "1 : 400", variant: "ground" },
      { level: "03", name: "Studio Floor Plan", scale: "1 : 300", variant: "upper" },
      { level: "HH", name: "Hall Section", scale: "1 : 350", variant: "section" },
    ],
    materials: [
      { name: "Concrete", note: "Existing 1936 frame, cleaned and patched", tone: "concrete" },
      { name: "Steel", note: "New stair towers, bolted and reversible", tone: "steel" },
      { name: "Wood", note: "Workshop fit-outs, demountable spruce", tone: "wood" },
      { name: "Glass", note: "Roof monitors over the central street", tone: "glass" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "General Contractor", name: "STRABAG Real Estate" },
      { role: "Structural Engineering", name: "Schüßler-Plan Ingenieurgesellschaft" },
      { role: "Heritage Consulting", name: "LWL Denkmalpflege" },
      { role: "Photography", name: "Rui Cardoso" },
    ],
    featured: true,
  },
  {
    slug: "dune-house",
    index: 10,
    title: "Dune House",
    location: "Comporta",
    country: "Portugal",
    year: 2026,
    typology: "Residential",
    area: "380 m²",
    client: "Private",
    status: "In progress",
    coverId: "photo-1600585154340-be6161a56a0c",
    summary:
      "A house buried in the dunes — roofs as landforms, courtyards as oases, sea heard but barely seen.",
    intentTitle: "Under the sand, quietly",
    intent: [
      "Comporta’s dunes move a metre a decade; the law protects them absolutely. Dune House accepts the terms: the house is a set of inhabited dunes, roofs planted with native grasses sloping to ground level so that from the beach the building reads as topography, not architecture.",
      "Living spaces invert inward. Rooms wrap two courtyards — one planted with pines for summer shade, one paved in shell for winter light — while a single narrow slot frames the sea. Privacy comes from the section: guests above, family below, both invisible from the lane.",
      "Construction follows the dune’s own engineering. Walls are rammed earth stabilised with lime, thick enough to hold temperature like the ground they rise from. The house has no air conditioning and does not need it; the dune regulates itself.",
    ],
    quote: {
      text: "The best compliment we can receive is that the house cannot be photographed from the sea.",
      cite: "Tomás Ribeiro, Founding Principal",
    },
    gallery: [
      {
        id: "photo-1512917774080-9991f1c4c750",
        caption: "Fig. 01 — Pine courtyard under construction",
      },
      {
        id: "photo-1416331108676-a22ccb276e35",
        caption: "Fig. 02 — Planted roofs meeting the dune",
      },
      {
        id: "photo-1600566753086-00f18fb6b3ea",
        caption: "Fig. 03 — Kitchen, shell-light courtyard beyond",
      },
      {
        id: "photo-1519710164239-da123dc03ef4",
        caption: "Fig. 04 — Mock-up interior, lime and earth walls",
      },
    ],
    plans: [
      { level: "-1", name: "Lower Level Plan", scale: "1 : 150", variant: "ground" },
      { level: "00", name: "Dune Level Plan", scale: "1 : 150", variant: "upper" },
      { level: "NN", name: "North–South Section", scale: "1 : 200", variant: "section" },
    ],
    materials: [
      { name: "Rammed earth", note: "Stabilised local sand, 600 mm walls", tone: "earth" },
      { name: "Stone", note: "Shell-terrace paving, Comporta aggregate", tone: "stone" },
      { name: "Wood", note: "Maritime pine ceilings and shutters", tone: "wood" },
      { name: "Concrete", note: "Waterproof basements, pigmented sand tone", tone: "concrete" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Landscape Architecture", name: "Estúdio Raiz" },
      { role: "Structural Engineering", name: "Betar Consultores" },
      { role: "Contractor", name: "Construções Atlântico" },
      { role: "Photography", name: "Camila Ortega" },
    ],
  },
  {
    slug: "skyframe-masterplan",
    index: 11,
    title: "Skyframe Masterplan",
    location: "Seoul",
    country: "South Korea",
    year: 2024,
    typology: "Urbanism",
    area: "46 ha",
    client: "Skyframe Development Co.",
    status: "In progress",
    coverId: "photo-1477959858617-67f85cf4f1df",
    summary:
      "Fourteen thousand homes organised around a continuous elevated park — a skyline planned from the ground up.",
    intentTitle: "A skyline from the ground up",
    intent: [
      "Skyframe began as a developer’s density diagram; it ends as a public realm. The masterplan rotates typical blocks off the grid to unlock river views for every second street, and threads a kilometre-long elevated park through the district at the sixth-floor datum — the height where Seoul’s humidity finally relents.",
      "The plan codes behaviour, not style. Plot rules fix heights, setbacks and ground-floor uses; facades are left deliberately open so the district can age unevenly, like cities do. Affordable housing is distributed across every plot rather than concentrated — no towers of the poor, no ghettos of glass.",
      "Infrastructure leads construction. The park deck, transit stops and flood terraces are being built before a single tower, guaranteeing that the public realm arrives first and private development negotiates with it — the reverse of usual practice.",
    ],
    quote: {
      text: "We were asked to arrange towers. We insisted on arranging streets, and let the towers negotiate.",
      cite: "Samuel Okoye, Associate, Urbanism",
    },
    gallery: [
      {
        id: "photo-1449824913935-59a10b8d2000",
        caption: "Fig. 01 — District model view, north",
      },
      {
        id: "photo-1545324418-cc1a3fa10c00",
        caption: "Fig. 02 — Park datum studies",
      },
      {
        id: "photo-1511818966892-d7d671e672a2",
        caption: "Fig. 03 — Block rotation diagram context",
      },
    ],
    plans: [
      { level: "00", name: "Framework Plan", scale: "1 : 2000", variant: "ground" },
      { level: "06", name: "Park Datum Plan", scale: "1 : 1250", variant: "upper" },
      { level: "RR", name: "Riverfront Section", scale: "1 : 1000", variant: "section" },
    ],
    materials: [
      { name: "Concrete", note: "Park deck pilotis, board-marked", tone: "concrete" },
      { name: "Stone", note: "Flood terraces, granite from the Han River works", tone: "stone" },
      { name: "Steel", note: "Deck trusses, painted signal grey", tone: "steel" },
      { name: "Earth", note: "Park soils, engineered to 1.2 m depth", tone: "earth" },
    ],
    credits: [
      { role: "Urban Design", name: "Strata Studio AS" },
      { role: "Architecture", name: "Strata Studio AS with local partners" },
      { role: "Transport Planning", name: "Seoul Transport Institute" },
      { role: "Landscape Architecture", name: "Studio Boden" },
      { role: "Visualisation", name: "Atelier Pixel" },
    ],
  },
  {
    slug: "lofoten-baths",
    index: 12,
    title: "Stone Baths, Lofoten",
    location: "Svolvær",
    country: "Norway",
    year: 2019,
    typology: "Wellness",
    area: "2,300 m²",
    client: "Lofoten Wellness AS",
    status: "Completed",
    coverId: "photo-1486718448742-163732cd1544",
    summary:
      "Bathing pavilions of black concrete at the Arctic surf line — water outside, water inside.",
    intentTitle: "Two waters",
    intent: [
      "The Norwegian Sea is eleven degrees in August; the baths hold thirty-eight. Between those numbers lies the entire architecture: a sequence of black concrete pods anchored at the surf line, each containing one pool, one fire, one view. The building mediates nothing else.",
      "Black pigment in the concrete is not styling. The pods absorb what little winter light exists and shed the spray; after storms they emerge from salt crust unchanged. Inside, the same material warms your shoulder as you lean against it — mass used for comfort instead of monument.",
      "The plan is tidal. At low water guests descend outdoor steps to a stone shelf washed by waves; at high water the route closes and the interior circuit takes over. The building rehearses the coast’s oldest ritual — retreat and return — twice a day, forever.",
    ],
    quote: {
      text: "Architecture usually separates you from weather. Here it hands you over carefully, then takes you back.",
      cite: "Ingrid Halvorsen, Founding Principal",
    },
    gallery: [
      {
        id: "photo-1487958449943-2429e8be8625",
        caption: "Fig. 01 — Bathing pod at the surf line",
      },
      {
        id: "photo-1518005020951-eccb494ad742",
        caption: "Fig. 02 — Pool hall, winter light",
      },
      {
        id: "photo-1501785888041-af3ef285b470",
        caption: "Fig. 03 — Stone shelf at low tide",
      },
    ],
    plans: [
      { level: "00", name: "Shore Level Plan", scale: "1 : 200", variant: "ground" },
      { level: "01", name: "Pool Hall Plan", scale: "1 : 200", variant: "upper" },
      { level: "SS", name: "Tidal Section", scale: "1 : 150", variant: "section" },
    ],
    materials: [
      { name: "Pigmented concrete", note: "Black basalt aggregate, sea-water resistant", tone: "concrete" },
      { name: "Stone", note: "Local granite shelf and pool linings", tone: "stone" },
      { name: "Wood", note: "Drifting benches of salvaged pine", tone: "wood" },
      { name: "Steel", note: "Anchorage and rails, hot-dip galvanised", tone: "steel" },
    ],
    credits: [
      { role: "Architecture", name: "Strata Studio AS" },
      { role: "Coastal Engineering", name: "NGI Norges Geotekniske Institutt" },
      { role: "Structural Engineering", name: "Tanaka & Partners" },
      { role: "Contractor", name: "Vikan Bygg AS" },
      { role: "Photography", name: "Marte Dahl" },
    ],
    featured: true,
  },
];

export const allProjects = [...projects].sort((a, b) => a.index - b.index);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const i = allProjects.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    prev: allProjects[(i - 1 + allProjects.length) % allProjects.length],
    next: allProjects[(i + 1) % allProjects.length],
  };
}

export const typologies = Array.from(new Set(projects.map((p) => p.typology))).sort();
