import { Link, createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

import heroImage from "@/assets/hero-goldens.jpg";
import { AdoptionProcess } from "@/components/adoption-process";
import { PuppyCard } from "@/components/puppy-card";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { puppies } from "@/data/puppies";
import { site } from "@/data/site";

const title = "Golden Meadow Kennel — Family-Raised Golden Retriever Puppies";
const description =
  "Health-tested, home-raised Golden Retriever puppies in Salem, Oregon. Browse available puppies, see full details and reserve your companion.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const promises = [
  {
    icon: Stethoscope,
    title: "Vet checked",
    body: "Every puppy leaves with a health exam, vaccinations, deworming and a microchip.",
  },
  {
    icon: Award,
    title: "Health-tested parents",
    body: "Hips, elbows, eyes and heart cleared on both sides of every litter.",
  },
  {
    icon: HeartHandshake,
    title: "Raised indoors",
    body: "Handled daily from birth, socialised with children, noise and other dogs.",
  },
  {
    icon: ShieldCheck,
    title: "Two years guarantee",
    body: "A written genetic health guarantee and lifetime support from us.",
  },
];

function Home() {
  const featured = puppies.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-cream">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {site.location}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Golden Retriever puppies raised in a home, not a cage.
            </h1>
            <p className="text-balance-pretty mt-5 max-w-xl text-lg text-muted-foreground">
              We breed a small number of litters each year so every puppy gets the handling,
              training and health care that makes settling into your family easy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/puppies">Browse available puppies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/adoption">How adoption works</Link>
              </Button>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["12 yrs", "Breeding goldens"],
                ["300+", "Puppies placed"],
                ["4.9/5", "Family rating"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-foreground">{value}</dt>
                  <dd className="text-xs tracking-wide text-muted-foreground uppercase">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Golden Retriever mother resting in the grass with her litter of puppies"
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            eyebrow="Why families choose us"
            title="Raised right, from day one"
            description="Small litters, big care. Here is what comes with every puppy."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, ...p }) => (
              <div key={p.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            eyebrow="Available now"
            title="Meet a few of our puppies"
            description="Tap Details on any puppy for their full profile and order form."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/puppies">See all puppies</Link>
            </Button>
          </div>
        </div>
      </section>

      <AdoptionProcess />
      <Testimonials />
    </>
  );
}
