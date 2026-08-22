import type { PlanVariant } from "@/content/projects";

function North() {
  return (
    <g transform="translate(728,64)" className="text-current">
      <circle r="22" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M0,-16 L6,10 L0,4 L-6,10 Z" fill="currentColor" />
      <text y="-30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12">
        N
      </text>
    </g>
  );
}

function ScaleBar() {
  return (
    <g transform="translate(96,506)">
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={i * 34} width="34" height="6" fill={i % 2 ? "none" : "currentColor"} stroke="currentColor" strokeWidth="0.75" />
      ))}
      <text x="0" y="-10" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">
        0 — 20 M
      </text>
    </g>
  );
}

export default function FloorPlan({
  variant,
  name,
  scale,
}: {
  variant: PlanVariant;
  name: string;
  scale: string;
}) {
  const label = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: 3,
    textAnchor: "middle" as const,
    fill: "currentColor",
    opacity: 0.65,
  };

  return (
    <figure className="border border-line bg-paper p-6 md:p-10">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.2em]">
          {name}
        </figcaption>
        <p className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
          {scale}
        </p>
      </div>

      <svg viewBox="0 0 800 560" className="mt-8 h-auto w-full text-ink" role="img" aria-label={name}>
        {variant === "ground" && (
          <>
            <rect x="120" y="90" width="560" height="360" fill="none" stroke="currentColor" strokeWidth="7" />
            <path d="M356,450 L444,450" stroke="var(--color-paper)" strokeWidth="9" />
            <line x1="120" y1="270" x2="330" y2="270" stroke="currentColor" strokeWidth="2.5" />
            <line x1="330" y1="270" x2="330" y2="450" stroke="currentColor" strokeWidth="2.5" />
            <line x1="500" y1="90" x2="500" y2="330" stroke="currentColor" strokeWidth="2.5" />
            <line x1="500" y1="210" x2="680" y2="210" stroke="currentColor" strokeWidth="2.5" />
            <line x1="120" y1="370" x2="330" y2="370" stroke="currentColor" strokeWidth="1" />
            <path d="M400,450 L400,394 A56,56 0 0 1 456,450" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="400" y1="450" x2="456" y2="450" stroke="currentColor" strokeWidth="1" />
            <g stroke="currentColor" strokeWidth="1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line key={i} x1={524 + i * 22} y1={236} x2={546 + i * 22} y2={214} />
              ))}
              <rect x="516" y="212" width="150" height="26" fill="none" strokeWidth="1.25" />
            </g>
            <text x="225" y="175" {...label}>GALLERY</text>
            <text x="415" y="320" {...label}>HALL</text>
            <text x="225" y="415" {...label}>CAFÉ</text>
            <text x="592" y="150" {...label}>CORE</text>
            <text x="592" y="340" {...label}>WC</text>
            <rect x="356" y="470" width="88" height="52" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            <text x="400" y="500" {...label}>ENTRY</text>
            <North />
            <ScaleBar />
          </>
        )}

        {variant === "upper" && (
          <>
            <rect x="120" y="90" width="560" height="360" fill="none" stroke="currentColor" strokeWidth="7" />
            <line x1="120" y1="230" x2="680" y2="230" stroke="currentColor" strokeWidth="2.5" />
            <line x1="400" y1="230" x2="400" y2="450" stroke="currentColor" strokeWidth="2.5" />
            <line x1="250" y1="230" x2="250" y2="450" stroke="currentColor" strokeWidth="1" />
            <line x1="550" y1="230" x2="550" y2="450" stroke="currentColor" strokeWidth="1" />
            <g stroke="currentColor" strokeWidth="1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line key={i} x1={524 + i * 22} y1={206} x2={546 + i * 22} y2={184} />
              ))}
              <rect x="516" y="182" width="150" height="26" fill="none" strokeWidth="1.25" />
            </g>
            <rect x="120" y="60" width="560" height="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 5" />
            <text x="255" y="165" {...label}>READING</text>
            <text x="555" y="165" {...label}>TERRACE</text>
            <text x="185" y="345" {...label}>STUDY</text>
            <text x="325" y="345" {...label}>ARCHIVE</text>
            <text x="475" y="345" {...label}>LOUNGE</text>
            <text x="615" y="345" {...label}>OFFICE</text>
            <North />
            <ScaleBar />
          </>
        )}

        {variant === "section" && (
          <>
            <line x1="70" y1="430" x2="730" y2="430" stroke="currentColor" strokeWidth="3" />
            <g stroke="currentColor" strokeWidth="0.9">
              {Array.from({ length: 33 }).map((_, i) => (
                <line key={i} x1={76 + i * 20} y1={430} x2={62 + i * 20} y2={452} />
              ))}
            </g>
            <rect x="220" y="180" width="380" height="250" fill="none" stroke="currentColor" strokeWidth="6" />
            <line x1="220" y1="310" x2="600" y2="310" stroke="currentColor" strokeWidth="4" />
            <line x1="220" y1="180" x2="600" y2="164" stroke="currentColor" strokeWidth="5" />
            <g stroke="currentColor" strokeWidth="1.25">
              <line x1="290" y1="310" x2="290" y2="430" />
              <line x1="380" y1="310" x2="380" y2="430" />
              <line x1="470" y1="310" x2="470" y2="430" />
              <line x1="550" y1="310" x2="550" y2="430" />
            </g>
            <g stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
              <line x1="220" y1="130" x2="600" y2="114" />
            </g>
            <g fontFamily="var(--font-mono)" fontSize="12" fill="currentColor">
              <text x="140" y="434">±0.00</text>
              <text x="140" y="314">+4.20</text>
              <text x="140" y="184">+8.40</text>
            </g>
            <g stroke="currentColor" strokeWidth="1">
              <line x1="660" y1="180" x2="660" y2="430" />
              <line x1="654" y1="180" x2="666" y2="180" />
              <line x1="654" y1="310" x2="666" y2="310" />
              <line x1="654" y1="430" x2="666" y2="430" />
            </g>
            <text x="674" y="310" fontFamily="var(--font-mono)" fontSize="12" fill="currentColor" transform="rotate(90 674 310)" textAnchor="middle">
              12.40 M
            </text>
            <text x="410" y="380" {...label}>LEVEL 00</text>
            <text x="410" y="255" {...label}>LEVEL 01</text>
          </>
        )}
      </svg>
    </figure>
  );
}
