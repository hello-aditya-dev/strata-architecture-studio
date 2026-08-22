import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col justify-center py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-concrete">
        [ Error 404 ]
      </p>
      <h1 className="display mt-8 max-w-3xl text-6xl md:text-8xl">
        The plan you are looking for was{" "}
        <em className="italic font-light">never drawn.</em>
      </h1>
      <p className="mt-7 max-w-md leading-relaxed text-concrete">
        The page has been demolished, relocated, or existed only in a competition
        entry that did not win.
      </p>
      <div className="mt-12 flex flex-wrap gap-5">
        <Link
          href="/"
          className="border border-ink px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-ink hover:text-bone"
        >
          Return Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-2 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors hover:text-ink"
        >
          Browse Projects ⟶
        </Link>
      </div>
    </section>
  );
}
