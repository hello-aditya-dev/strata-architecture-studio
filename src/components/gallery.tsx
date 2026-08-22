import Image from "next/image";
import Reveal from "./reveal";
import { unsplash } from "@/lib/site";

const pattern = [
  "md:col-span-7 aspect-[4/3]",
  "md:col-span-5 aspect-[3/4] md:mt-28",
  "md:col-span-8 aspect-[16/10] md:-mt-16",
  "md:col-span-4 aspect-[3/4] md:mt-20",
];

export default function Gallery({
  images,
}: {
  images: { id: string; caption: string }[];
}) {
  return (
    <div className="grid gap-14 md:grid-cols-12 md:gap-x-10 md:gap-y-24">
      {images.map((img, i) => (
        <Reveal key={img.id + i} className={`md:col-span-12 ${pattern[i % pattern.length]}`}>
          <figure>
            <div className="relative w-full overflow-hidden bg-paper" style={{ aspectRatio: "inherit" }}>
              <Image
                src={unsplash(img.id, 1600)}
                alt={img.caption}
                fill
                sizes="(min-width:768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-concrete">
              {img.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
