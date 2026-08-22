import type { MaterialTone } from "@/content/projects";
import Reveal from "./reveal";

const swatch: Record<MaterialTone, string> = {
  concrete:
    "bg-[linear-gradient(135deg,#bcb7ad_0%,#948e84_48%,#a49e94_100%)]",
  stone: "bg-[linear-gradient(135deg,#dcd2c2_0%,#c0b29c_55%,#cdbfa8_100%)]",
  wood: "bg-[repeating-linear-gradient(90deg,#b98f62_0px,#b98f62_13px,#a87f54_13px,#a87f54_17px)]",
  steel: "bg-[linear-gradient(115deg,#a7acb0_0%,#787e82_42%,#b3b9bd_100%)]",
  earth: "bg-[linear-gradient(135deg,#cbB494_0%,#a68967_60%,#b89a76_100%)]",
  glass:
    "bg-[linear-gradient(155deg,rgba(178,198,208,0.9)_0%,rgba(222,232,236,0.6)_55%,rgba(196,212,218,0.85)_100%)] ring-1 ring-line ring-inset",
  brick:
    "bg-[repeating-linear-gradient(0deg,#a06a51_0px,#a06a51_11px,#8a5843_11px,#8a5843_14px)]",
};

export default function MaterialPalette({
  materials,
}: {
  materials: { name: string; note: string; tone: MaterialTone }[];
}) {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
      {materials.map((m, i) => (
        <Reveal key={m.name} delay={i * 80} className="bg-bone">
          <div className="flex h-full flex-col p-7">
            <div className={`aspect-[4/3] w-full ${swatch[m.tone]}`} />
            <h3 className="mt-6 text-lg font-medium">{m.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-concrete">{m.note}</p>
            <p className="mt-auto pt-6 font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
              {String(i + 1).padStart(2, "0")}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
