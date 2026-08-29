import { createFileRoute } from "@tanstack/react-router";

import { AdoptionProcess } from "@/components/adoption-process";
import { OrderForm } from "@/components/order-form";
import { PuppyCard } from "@/components/puppy-card";
import { SectionHeading } from "@/components/section-heading";
import { puppies } from "@/data/puppies";

const title = "Available Golden Retriever Puppies — Golden Meadow Kennel";
const description =
  "Current Golden Retriever puppies with photos, temperament, pricing and a details view with the order form for each puppy.";

export const Route = createFileRoute("/puppies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PuppiesPage,
});

function PuppiesPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            align="left"
            as="h1"
            eyebrow="Our puppies"
            title="Puppies looking for their family"
            description="Each profile lists sex, age, coat, weight and price. Open Details for the full description and the order form."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-3">
          {puppies.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </section>

      <AdoptionProcess />

      <section className="py-20">
        <div className="mx-auto w-full max-w-3xl px-5">
          <SectionHeading
            eyebrow="Order form"
            title="Reserve your puppy"
            description="Not sure which puppy fits your home? Send this form and we'll help you match."
          />
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
