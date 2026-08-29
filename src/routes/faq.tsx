import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Puppy Adoption FAQ — Golden Meadow Kennel";
const description =
  "Answers about pricing, health guarantees, delivery, waitlists and caring for a new Golden Retriever puppy.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

const faqs = [
  {
    q: "How old are puppies when they go home?",
    a: "Eight weeks at the earliest. Some puppies need an extra week or two, and we never rush a puppy out the door before they are ready.",
  },
  {
    q: "What does the price include?",
    a: "Vet exam, age-appropriate vaccinations, deworming, microchip, health certificate, starter food and a blanket from the litter, plus a written two-year genetic health guarantee.",
  },
  {
    q: "Can I reserve a puppy before it is born?",
    a: "Yes. Join the waitlist and you'll get first pick of the next litter in the order requests were received.",
  },
  {
    q: "Do you deliver?",
    a: "Pickup at the kennel is included. Ground delivery and in-cabin flight nanny service are available and quoted by distance.",
  },
  {
    q: "Are the parents health tested?",
    a: "Every parent is cleared for hips, elbows, eyes and heart. We're glad to share the certificates before you commit.",
  },
  {
    q: "What if things don't work out at home?",
    a: "Call us. We help troubleshoot first, and if rehoming is truly the only answer, your golden always has a place back with us.",
  },
];

function FaqPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            align="left"
            as="h1"
            eyebrow="Questions"
            title="Frequently asked questions"
            description="The things families ask us most before adopting."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-3xl px-5">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
