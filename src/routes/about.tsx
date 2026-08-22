import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-goldens.jpg";
import family1 from "@/assets/family-1.jpg";
import { SectionHeading } from "@/components/section-heading";

const title = "About Our Kennel — Golden Sunny Tail";
const description =
  "A small family breeding program in Salem, Oregon raising health-tested Golden Retrievers indoors with daily handling and early training.";

export const Route = createFileRoute("/about")({
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

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
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
          <img
            src={heroImage}
            alt="Golden Retriever mother with her litter outside the kennel"
            loading="lazy"
            width={1600}
            height={1008}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
          />
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
          <img
            src={family1}
            alt="A family holding their newly adopted Golden Retriever puppies"
            loading="lazy"
            width={1000}
            height={800}
            className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div>
            <h2 className="text-3xl">Our promise to you</h2>
            <p className="mt-4 text-muted-foreground">
              You get honest answers, real photos of the actual puppy, and a written health
              guarantee. If life changes and you can no longer keep your golden, they come back to
              us — for the whole of their life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
