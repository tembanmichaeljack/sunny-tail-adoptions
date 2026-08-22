import { Quote, Star } from "lucide-react";

import family1Asset from "@/assets/family-1-photo.jpg.asset.json";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/family-3.jpg";
import { SectionHeading } from "@/components/section-heading";

export const testimonials = [
  {
    name: "The Alvarez Family",
    place: "Bend, Oregon",
    puppy: "Adopted Rosie, 2026",
    photo: family1Asset.url,
    quote:
      "Rosie arrived healthy, calm and already crate trained. Our girls have not stopped smiling since the day she came home.",
  },
  {
    name: "Dana & Chris",
    place: "Seattle, Washington",
    puppy: "Adopted Finn, 2025",
    photo: family2,
    quote:
      "Every question we asked was answered within hours. Finn settled into apartment life in under a week exactly the temperament they described.",
  },
  {
    name: "Walter & Noah",
    place: "Boise, Idaho",
    puppy: "Adopted Pepper, 2023",
    photo: family3,
    quote:
      "Pepper walks beautifully and is gentle with my grandson. Three years on, they still check in on her birthday.",
  },
  {
    name: "The Whitfields",
    place: "Sacramento, California",
    puppy: "Adopted Moose, 2025",
    quote:
      "Moose flew in with a nanny and walked off the plane wagging. Paperwork, vet records and microchip were all ready before we even asked.",
  },
  {
    name: "Priya & Sam",
    place: "Austin, Texas",
    puppy: "Adopted Clover, 2025",
    quote:
      "First time dog owners here. The feeding schedule and the follow up calls made the first month feel easy instead of scary.",
  },
  {
    name: "The Okonkwo Family",
    place: "Denver, Colorado",
    puppy: "Adopted Biscuit, 2024",
    quote:
      "Biscuit hikes with us every weekend and sleeps through the night. Exactly the steady, happy temperament we were promised.",
  },
  {
    name: "Margaret L.",
    place: "Spokane, Washington",
    puppy: "Adopted Willow, 2024",
    quote:
      "I wanted a gentle companion at 68 and got the perfect one. They took the time to match me instead of just selling a puppy.",
  },
  {
    name: "The Brennan Family",
    place: "Portland, Oregon",
    puppy: "Adopted Scout, 2026",
    quote:
      "We visited before adopting and the house was spotless, the puppies confident and clearly loved. That visit sold us instantly.",
  },
  {
    name: "Tyler & Jo",
    place: "Salt Lake City, Utah",
    puppy: "Adopted Honey, 2023",
    quote:
      "Honey is three now and hips, eyes and heart are all perfect. The health guarantee paperwork was real and thorough.",
  },
  {
    name: "The Nakamura Family",
    place: "San Jose, California",
    puppy: "Adopted Kona, 2025",
    quote:
      "Kona was already used to kids, cats and car rides. Coming home was the calmest introduction we could have hoped for.",
  },
];

function initials(name: string) {
  return name
    .replace(/^The\s+/i, "")
    .split(/\s+/)
    .filter((w) => /[a-z]/i.test(w[0] ?? ""))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export function Testimonials({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const items = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
        {heading ? (
          <SectionHeading
            eyebrow="Happy homes"
            title="Families & their goldens"
            description="Photos and words from the homes our puppies grew up in."
          />
        ) : null}

        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 ${
            heading ? "mt-10 sm:mt-12" : ""
          }`}
        >
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lg"
            >
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={`${t.name} with their Golden Retriever`}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="aspect-[5/4] w-full object-cover"
                />
              ) : (
                <div className="flex items-center gap-4 bg-gradient-cream px-6 py-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {initials(t.name)}
                  </span>
                  <span className="text-sm font-medium">{t.puppy}</span>
                </div>
              )}
              <figcaption className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <Quote className="mt-4 size-5 text-primary/40" />
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.place} · {t.puppy}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
