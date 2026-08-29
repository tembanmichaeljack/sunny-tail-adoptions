import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";

const title = "About Our Kennel — Golden Sunny Tail";
const description =
  "A small family breeding program raising health-tested Golden Retrievers indoors with daily handling and early training.";

const canonicalUrl = "https://sunny-tail-adoptions.lovable.app/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Golden Sunny Tail" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: AboutPage,
});

const care = [
  {
    title: "Health first",
    body: "Both parents are cleared for hips, elbows, eyes and heart before any litter is planned. Puppies see our vet twice before going home.",
  },
  {
    title: "Early socialisation",
    body: "From week three, puppies meet children, vacuum noise, car rides, grass, tile and stairs so nothing is frightening later.",
  },
  {
    title: "A head start on training",
    body: "Crate rest, potty routine, name recognition and gentle leash introduction begin here, not on your living room floor.",
  },
  {
    title: "Matched, not sold",
    body: "We talk with you about your schedule, home and energy level, then recommend the puppy whose temperament actually fits.",
  },
];

const floatingDetails = [
  { label: "🐾", className: "left-[10%] top-[12%] text-3xl text-primary animate-float-soft" },
  { label: "♡", className: "right-[16%] top-[18%] text-4xl text-honey animate-float-slow" },
  { label: "✦", className: "left-[22%] top-[38%] text-2xl text-muted-foreground animate-float-drift" },
  { label: "骨", className: "right-[20%] top-[48%] text-3xl text-forest animate-float-soft" },
  { label: "🐾", className: "left-[16%] bottom-[18%] text-2xl text-forest animate-float-slow" },
  { label: "✧", className: "right-[12%] bottom-[16%] text-3xl text-primary animate-float-drift" },
];

const doodles = [
  { className: "left-[50%] top-[24%] h-16 w-16 text-forest animate-float-slow" },
  { className: "right-[30%] bottom-[28%] h-12 w-12 text-primary animate-float-soft" },
];

function PuppyDoodle({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      fill="none"
      className={`absolute ${className}`}
    >
      <path
        d="M28 36c0-9 6-16 14-16s14 7 14 16c0 11-6 20-14 20S28 47 28 36Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M29 31c-8-7-15-4-17 4-2 9 5 16 14 13M55 31c8-7 15-4 17 4 2 9-5 16-14 13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M36 41h.1M48 41h.1" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 49c2 2 4 2 6 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PuppyDecorPanel({ variant = "full" }: { variant?: "full" | "compact" }) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden rounded-[2rem] border border-border bg-gradient-cream shadow-lift ${
        variant === "full" ? "min-h-[360px] lg:min-h-[440px]" : "min-h-[280px] lg:min-h-[340px]"
      }`}
    >
      <div className="absolute inset-8 rounded-[1.5rem] border border-border/70 bg-card/45" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-card/70 shadow-soft" />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15" />
      {floatingDetails.map((detail) => (
        <span key={`${variant}-${detail.label}-${detail.className}`} className={`absolute ${detail.className}`}>
          {detail.label}
        </span>
      ))}
      {doodles.map((doodle) => (
        <PuppyDoodle key={`${variant}-${doodle.className}`} className={doodle.className} />
      ))}
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              as="h1"
              eyebrow="About us"
              title="Twelve years, one breed, done carefully"
              description="Golden Sunny is a family program on five acres outside Salem, Oregon. We keep two to three litters a year so every puppy is raised underfoot in our house."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our dogs are family first: they sleep indoors, hike with us on weekends and greet
              every visitor at the door. That daily life is the reason our puppies arrive confident
              and easy to live with.
            </p>
          </div>
          <PuppyDecorPanel />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Our standards" title="How our puppies are raised" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {care.map((c) => (
              <div key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <PuppyDecorPanel variant="compact" />
          <div>
            <h2 className="text-3xl">Our promise to you</h2>
            <p className="mt-4 text-muted-foreground">
              You get honest answers, real photos of the actual puppy, and a written health
              guarantee. If life changes and you can no longer keep your golden, they come back to
              us  for the whole of their life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
