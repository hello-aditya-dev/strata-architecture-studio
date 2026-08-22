import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import CommissionForm from "@/components/commission-form";

export const metadata: Metadata = {
  title: "Commission",
  description:
    "Tell us about your project — project type, location, budget, site status and timeline. Considered replies within five working days.",
};

export default function CommissionPage() {
  return (
    <>
      <PageHeader
        index="08"
        label="Commission Enquiry"
        title={
          <>
            Tell us about your{" "}
            <em className="italic font-light">project.</em>
          </>
        }
        intro="Not a contact form — an intake. The more precisely you describe the ambition, the more useful our first reply will be."
      />

      <section className="hairline-t hairline-b bg-paper/60 py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "You write",
              text: "Ten focused fields. Five minutes. No attachments required at this stage.",
            },
            {
              step: "02",
              title: "A principal reads it",
              text: "Enquiries are answered by Ingrid or Tomás personally — never a sales team.",
            },
            {
              step: "03",
              title: "We respond in five days",
              text: "With honest feedback: whether we are right for the project, and what it might take.",
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="border-t border-line pt-6">
              <p className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-concrete">
                {s.step}
              </p>
              <h2 className="mt-3 text-lg font-medium">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-concrete">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <CommissionForm />
        </div>
      </section>
    </>
  );
}
