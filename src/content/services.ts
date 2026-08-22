export type Service = {
  slug: string;
  number: string;
  title: string;
  discipline: "Architecture" | "Construction";
  lede: string;
  description: string;
  scope: string[];
  process: { step: string; name: string; text: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "concept",
    number: "01",
    title: "Concept",
    discipline: "Architecture",
    lede: "The first drawing decides everything that follows.",
    description:
      "We begin every commission with a concept phase — a deliberate, time-boxed study of site, brief and ambition before a single wall is drawn. Feasibility studies, massing options and cost logic are tested together, so clients commit to a direction with evidence rather than instinct. The deliverable is a concept report that survives contact with reality: planning risk, budget bands and a spatial thesis you can hold.",
    scope: [
      "Site analysis & constraints mapping",
      "Brief development with stakeholders",
      "Massing & feasibility studies (2–4 options)",
      "Indicative cost bands per option",
      "Planning pre-application strategy",
      "Concept report & presentation",
    ],
    process: [
      { step: "01", name: "Listen", text: "Structured workshops to separate needs from assumptions." },
      { step: "02", name: "Walk", text: "Site visits at different hours, seasons if possible." },
      { step: "03", name: "Test", text: "Rapid massing studies checked against cost in parallel." },
      { step: "04", name: "Argue", text: "Options presented honestly — including the one to reject." },
      { step: "05", name: "Commit", text: "A single direction, documented, costed, ready to design." },
    ],
    related: ["fjord-pavilion", "skyframe-masterplan"],
  },
  {
    slug: "architecture",
    number: "02",
    title: "Architecture",
    discipline: "Architecture",
    lede: "Full design services from first line to final handover.",
    description:
      "Our core discipline. We carry buildings through schematic design, developed design, planning, construction documents and site supervision — with the same team from start to finish. Detail is treated as ethics: junctions are resolved on the drawing board, not improvised on site. We design for the trades who build and the people who maintain, which is why our buildings age slowly and repair cheaply.",
    scope: [
      "Schematic & detailed design",
      "Planning applications & permits",
      "Construction documents & specifications",
      "Tender management & bid analysis",
      "Site supervision & quality control",
      "Handover documentation",
    ],
    process: [
      { step: "01", name: "Resolve", text: "Plan, section and structure decided together, never sequentially." },
      { step: "02", name: "Detail", text: "Junctions drawn at 1:5 before anything goes out to tender." },
      { step: "03", name: "Permit", text: "Planning strategy executed by the designers, not delegated away." },
      { step: "04", name: "Oversee", text: "Weekly site presence during construction — non-negotiable." },
      { step: "05", name: "Hand over", text: "A building plus a maintenance manual written for humans." },
    ],
    related: ["tonstad-library", "casa-bruma", "lofoten-baths"],
  },
  {
    slug: "interiors",
    number: "03",
    title: "Interior",
    discipline: "Architecture",
    lede: "Rooms resolved down to the handle.",
    description:
      "Interiors are not decoration applied to architecture; they are architecture at the scale of the hand. We develop interior architecture alongside the building itself — joinery, lighting, acoustics and materials specified as one system. For hospitality and workplace projects we manage FF&E procurement end-to-end, and we prototype key elements at full scale in our own workshop before they reach site.",
    scope: [
      "Spatial planning & flow",
      "Material & colour strategy",
      "Bespoke joinery design",
      "Lighting & acoustic design",
      "FF&E specification & procurement",
      "Full-scale prototyping",
    ],
    process: [
      { step: "01", name: "Inhabit", text: "We map how people actually use rooms — hours, habits, paths." },
      { step: "02", name: "Palette", text: "Materials chosen for touch and ageing, not photography." },
      { step: "03", name: "Prototype", text: "Critical details built at 1:1 in the workshop." },
      { step: "04", name: "Procure", text: "Single-point responsibility for furniture and fittings." },
      { step: "05", name: "Style", text: "Final placement completed with, never instead of, the client." },
    ],
    related: ["hotel-saudade", "dune-house"],
  },
  {
    slug: "planning",
    number: "04",
    title: "Planning",
    discipline: "Architecture",
    lede: "Urban design, masterplans and the politics of ground.",
    description:
      "From individual plots to forty-hectare districts, we plan places before buildings. Our masterplans code behaviour — heights, setbacks, ground-floor life, mobility — while leaving room for architectural difference over time. We lead stakeholder processes, environmental assessments and zoning negotiations, and we stay involved through phasing so the public realm arrives before private profit, not after.",
    scope: [
      "Masterplans & framework plans",
      "Zoning & regulatory strategy",
      "Public realm design",
      "Mobility & infrastructure coordination",
      "Stakeholder engagement processes",
      "Phasing & delivery strategies",
    ],
    process: [
      { step: "01", name: "Read", text: "History, hydrology and ownership mapped before opinions form." },
      { step: "02", name: "Frame", text: "Rules written for behaviour; style left open." },
      { step: "03", name: "Negotiate", text: "Authorities engaged early, in person, repeatedly." },
      { step: "04", name: "Phase", text: "Public realm sequenced ahead of private plots." },
      { step: "05", name: "Steward", text: "Design codes administered across the build-out years." },
    ],
    related: ["skyframe-masterplan", "quarry-garden"],
  },
  {
    slug: "project-management",
    number: "05",
    title: "Project Management",
    discipline: "Architecture",
    lede: "One accountable partner from brief to keys.",
    description:
      "Complex projects fail between disciplines, not inside them. We offer clients a single point of command: programme, budget, consultants, authorities and contractors coordinated under one roof. Reporting is weekly, plain-language and honest about problems early — when they are still cheap. Our managers are trained architects and engineers, so decisions are made by people who understand what drawings promise.",
    scope: [
      "Programme & milestone control",
      "Budget governance & cash-flow",
      "Consultant procurement & coordination",
      "Authority liaison",
      "Risk register & mitigation",
      "Client reporting",
    ],
    process: [
      { step: "01", name: "Structure", text: "Programme and responsibility matrix fixed in week one." },
      { step: "02", name: "Track", text: "Cost and schedule monitored against live quantities." },
      { step: "03", name: "Escalate", text: "Problems surfaced within days, with options attached." },
      { step: "04", name: "Decide", text: "Decision log maintained — nothing agreed in corridors." },
      { step: "05", name: "Close", text: "Snagging, commissioning and lessons learned, formally." },
    ],
    related: ["halde-workspace", "feldbreite-housing"],
  },
  {
    slug: "preconstruction",
    number: "06",
    title: "Preconstruction",
    discipline: "Construction",
    lede: "Every problem found now costs ten times less than later.",
    description:
      "Before machines move, we de-risk the build. Site investigations, constructability reviews, logistics planning and market-tested estimates turn drawings into an executable plan. Because our estimating team sits beside the architects who drew the project, assumptions are challenged where they are cheapest to change — on paper.",
    scope: [
      "Site investigation coordination",
      "Constructability review",
      "Logistics & site setup planning",
      "Detailed cost estimation",
      "Subcontractor pre-qualification",
      "Procurement strategy",
    ],
    process: [
      { step: "01", name: "Survey", text: "Ground truth established — literally." },
      { step: "02", name: "Clash", text: "Digital model interrogated for conflicts before tender." },
      { step: "03", name: "Price", text: "Estimates built bottom-up, trade by trade." },
      { step: "04", name: "Package", text: "Works split for competition without fragmentation." },
      { step: "05", name: "Mobilise", text: "Site planned like a machine: access, storage, safety." },
    ],
    related: ["feldbreite-housing", "dune-house"],
  },
  {
    slug: "general-contracting",
    number: "07",
    title: "General Contracting",
    discipline: "Construction",
    lede: "We build what we draw — under one contract.",
    description:
      "As general contractor we take single-point responsibility for delivery: own crews for concrete, masonry and timber; vetted specialists for everything else. Quality control is physical, not photographic — our site engineers test pours, check tolerances and sign off junctions daily. Clients get one signature, one programme and one party answerable for the result.",
    scope: [
      "Own crews: concrete, masonry, carpentry",
      "Specialist trade management",
      "Site management & HSE leadership",
      "Quality assurance & testing",
      "Progress reporting",
      "Defects resolution & aftercare",
    ],
    process: [
      { step: "01", name: "Mobilise", text: "Site established to plan; neighbours informed properly." },
      { step: "02", name: "Build", text: "Daily tolerance checks against the drawings." },
      { step: "03", name: "Verify", text: "Independent testing of structure and envelope." },
      { step: "04", name: "Commission", text: "Systems run and recorded before occupation." },
      { step: "05", name: "Care", text: "Twelve-month aftercare inspection included as standard." },
    ],
    related: ["tonstad-library", "lofoten-baths"],
  },
  {
    slug: "design-build",
    number: "08",
    title: "Design-Build",
    discipline: "Construction",
    lede: "Architects and builders at one table, from day one.",
    description:
      "For clients who want speed without losing authorship, our integrated design-build model keeps design leadership and construction delivery inside a single contract. Value engineering happens in the open — options priced by the people who will build them, decisions logged with their consequences. The architect remains the author; the builder stops being an adversary.",
    scope: [
      "Integrated design & delivery contract",
      "Open-book cost transparency",
      "Guaranteed maximum price options",
      "Parallel design & permitting tracks",
      "Early subcontractor involvement",
      "Single-point warranty",
    ],
    process: [
      { step: "01", name: "Align", text: "Budget, brief and programme locked jointly at kickoff." },
      { step: "02", name: "Price-along", text: "Each design stage priced as it completes." },
      { step: "03", name: "Lock", text: "Scope frozen package-by-package, openly." },
      { step: "04", name: "Deliver", text: "One crew from foundations to handles." },
      { step: "05", name: "Warrant", text: "Single warranty, single signature, twelve-month care." },
    ],
    related: ["casa-bruma", "kivik-pavilion"],
  },
  {
    slug: "renovation",
    number: "09",
    title: "Renovation",
    discipline: "Construction",
    lede: "The greenest building is already standing.",
    description:
      "We specialise in the careful transformation of existing structures — warehouses into hotels, washeries into workplaces, farmhouses into homes. Surveys come first: laser scans, material testing and structural probing reveal what the building can give. New work is inserted reversibly wherever possible, so each intervention leaves the original structure richer, not poorer.",
    scope: [
      "Laser survey & condition mapping",
      "Material testing & salvage audit",
      "Structural strengthening design",
      "Heritage authority coordination",
      "Phased occupancy strategies",
      "Reversible insertion detailing",
    ],
    process: [
      { step: "01", name: "Scan", text: "The existing building documented to the millimetre." },
      { step: "02", name: "Probe", text: "Structure opened surgically to learn its secrets." },
      { step: "03", name: "Decide", text: "Keep, repair or replace — argued case by case." },
      { step: "04", name: "Insert", text: "New elements bolted, not buried — reversible by design." },
      { step: "05", name: "Reveal", text: "Old fabric cleaned and celebrated as the finish." },
    ],
    related: ["halde-workspace", "hotel-saudade"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
