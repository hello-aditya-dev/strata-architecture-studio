import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import AwardsTimeline from "@/components/awards-timeline";
import { awards } from "@/content/awards";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "Recognition for the work of Strata — international architecture awards, concrete prizes, urban space finalists and heritage medals.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        index="07"
        label="Awards"
        title={
          <>
            Recognition,{" "}
            <em className="italic font-light">chronologically.</em>
          </>
        }
        intro="Prizes are not the point of the work — but they are evidence of a standard. Selected recognition, newest first."
      />
      <section className="container-site pb-24 md:pb-32">
        <div className="max-w-4xl">
          <AwardsTimeline items={awards} />
        </div>
      </section>
    </>
  );
}
