import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="hairline-t bg-bone">
      <div className="container-site pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label">[ Commission Enquiry ]</p>
            <Link href="/commission" className="group mt-5 block max-w-xl">
              <span className="display block text-4xl leading-tight md:text-6xl">
                Tell us about your{" "}
                <em className="font-light italic">project.</em>
              </span>
              <span className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-concrete transition-colors group-hover:text-ink">
                Begin an enquiry
                <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                  ⟶
                </span>
              </span>
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-5">
            <div>
              <p className="label">Studios</p>
              <ul className="mt-5 space-y-5">
                {site.offices.map((o) => (
                  <li key={o.city}>
                    <p className="text-sm font-medium">{o.city}</p>
                    <p className="mt-1 text-sm leading-relaxed text-concrete">
                      {o.address.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Navigate</p>
              <ul className="mt-5 space-y-2.5">
                {[...nav, { href: "/commission", label: "Commission" }].map(
                  (n) => (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        className="text-sm text-ink/80 transition-colors hover:text-ink"
                      >
                        {n.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="label">Connect</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.press}`} className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink/70 hover:text-ink"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink/70 hover:text-ink"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-concrete">
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-concrete">
            Architecture · Engineering · Construction
          </p>
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-concrete transition-colors hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <div aria-hidden className="select-none overflow-hidden border-t border-line">
        <p className="-mb-[3.2vw] text-center text-[17.5vw] leading-[0.82] font-semibold tracking-[-0.02em] text-ink/[0.07]">
          STRATA
        </p>
      </div>
    </footer>
  );
}
