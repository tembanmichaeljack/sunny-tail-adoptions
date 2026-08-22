import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { AdoptionProcess } from "@/components/adoption-process";
import { OrderForm } from "@/components/order-form";
import { SectionHeading } from "@/components/section-heading";

const title = "Adoption Process & Order Form — Golden Meadow Kennel";
const description =
  "How to adopt a Golden Retriever puppy: browse and choose, fill out the order form, then confirm pickup or delivery.";

export const Route = createFileRoute("/adoption")({
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
  component: AdoptionPage,
});

const included = [
  "Written two year genetic health guarantee",
  "Age appropriate vaccinations and deworming",
  "Microchip registered in your name",
  "Vet health certificate",
  "Starter food, blanket and feeding schedule",
  "Lifetime advice from us, whenever you need it",
];

const delivery = [
  {
    title: "Pickup at the kennel",
    body: "Meet the litter, spend an hour with your puppy and drive home the same day. Included.",
  },
  {
    title: "Ground delivery",
    body: "Door to door in a climate controlled vehicle within a day's drive. Quoted by distance.",
  },
  {
    title: "Flight nanny",
    body: "Your puppy travels in-cabin with a dedicated handler and is handed to you at arrivals.",
  },
];

function AdoptionPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            align="left"
            eyebrow="Adoption"
            title="Bringing your puppy home"
            description="A short, clear path from the first photo you fall for to the day your puppy arrives."
          />
        </div>
      </section>

      <AdoptionProcess />

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-xl">Planning to visit us? A quick note before you come 🐾</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To reserve your spot for a visit and adoption, we kindly ask for a 30% deposit
              upfront as part of our booking policy. This secures your puppy for you and helps
              us prepare everything for your arrival&nbsp; and it goes directly toward the adoption
              fee. Once you're ready, we'll happily guide you through the next steps.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">What's included</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Pickup & travel</h2>
            <div className="mt-6 space-y-4">
              {delivery.map((d) => (
                <div key={d.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-3xl px-5">
          <SectionHeading eyebrow="Step two" title="Order form" />
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
