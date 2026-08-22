"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { unsplash } from "@/lib/site";

type Slide = {
  id: string;
  title: string;
  location: string;
};

export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      6500
    );
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[idx];

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-bone">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0"
          style={{
            opacity: i === idx ? 1 : 0,
            transition:
              "opacity 1600ms cubic-bezier(0.16,1,0.3,1)",
          }}
          aria-hidden={i !== idx}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: i === idx ? "scale(1.06)" : "scale(1)",
              transition: "transform 9500ms linear",
            }}
          >
            <Image
              src={unsplash(s.id, 2200)}
              alt={`${s.title} — ${s.location}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <div className="container-site absolute inset-x-0 bottom-0 pb-14 md:pb-20">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/70">
            [ Architecture · Engineering · Construction ]
          </p>

          <h1 className="display max-w-4xl text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl xl:text-[6.2rem]">
            Architecture with{" "}
            <em className="italic font-light">consequence.</em>
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 border border-bone/60 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-bone hover:text-ink"
            >
              Explore Projects
              <span className="transition-transform duration-700 group-hover:translate-x-1.5">
                ⟶
              </span>
            </Link>
            <Link
              href="/studio"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70 underline-offset-8 transition-colors hover:text-bone hover:underline"
            >
              The Studio
            </Link>
          </div>

          <div className="mt-6 flex items-end justify-between border-t border-bone/20 pt-5">
            <div
              key={current.id}
              className="animate-[fadeIn_1200ms_ease_forwards]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
                Featured — {current.location}
              </p>
              <p className="display mt-1 text-xl md:text-2xl">{current.title}</p>
            </div>
            <p className="font-mono text-sm tabular-nums tracking-[0.18em] text-bone/70">
              {String(idx + 1).padStart(2, "0")}
              <span className="mx-2 text-bone/30">/</span>
              {String(slides.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
