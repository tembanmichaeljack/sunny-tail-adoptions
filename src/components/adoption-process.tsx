import { ClipboardList, HeartHandshake, Search } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & choose your puppy",
    body: "Explore our available Golden Retriever puppies and find the one that captures your heart. Each puppy has detailed information, photos and pricing to help you choose the perfect companion for your family.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Fill out the order form",
    body: "Once you've selected your desired puppy, simply complete the order form located below the puppy's profile. Provide your contact details and any necessary information so our team can begin processing your request.",
  },
  {
    icon: HeartHandshake,
    step: "03",
    title: "Confirmation & pickup or delivery",
    body: "After we review your order, we contact you to confirm availability and finalise the details of your puppy. Soon after, your new Golden Retriever companion will be ready to join your home and start a lifetime of memories. 🐾",
  },
];

export function AdoptionProcess() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading
          eyebrow="How it works"
          title="Our adoption process"
          description="Three simple steps from first look to homecoming."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, ...s }) => (
            <li
              key={s.step}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display absolute top-5 right-6 text-4xl text-primary/25">
                {s.step}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-sun text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
