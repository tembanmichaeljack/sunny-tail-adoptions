import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { OrderForm } from "@/components/order-form";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

const title = "Contact Golden Meadow Kennel";
const description =
  "Reach our Salem, Oregon kennel by email or phone, or send the order form to reserve a Golden Retriever puppy.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    },
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Talk to us about a puppy"
            description="We answer most messages within 24 hours."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {details.map(({ icon: Icon, ...d }) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block font-medium hover:text-primary">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl">Order form</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Share your details and the puppy you have in mind.
            </p>
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
