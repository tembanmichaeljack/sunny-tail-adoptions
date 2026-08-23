import { Quote, Star } from "lucide-react";

import family1Photo from "@/assets/family-1-photo.jpg";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/family-3.jpg";
import family4 from "@/assets/family-4.jpg";
import family5 from "@/assets/family-5.jpg";
import family6 from "@/assets/family-6.jpg";
import family7 from "@/assets/family-7.jpg";
import family8 from "@/assets/family-8.jpg";
import family9 from "@/assets/family-9.jpg";
import family10 from "@/assets/family-10.jpg";
import { SectionHeading } from "@/components/section-heading";

type Testimonial = {
  name: string;
  place: string;
  puppy: string;
  quote: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "The Alvarez Family",
    place: "Bend, Oregon",
    puppy: "Adopted Rosie, 2026",
    photo: family1Photo,
    quote:
      "Rosie arrived healthy, calm and already crate trained. Our girls have not stopped smiling since the day she came home.",
  },
  {
    name: "Dana & Chris",
    place: "Seattle, Washington",
    puppy: "Adopted Finn, 2026",
    photo: family2,
    quote:
      "Every question we asked was answered within hours. Finn settled into apartment life in under a week exactly the temperament they described.",
  },
  {
    name: "Walter & Noah",
    place: "Boise, Idaho",
    puppy: "Adopted Pepper, 2026",
    photo: family3,
    quote:
      "Pepper walks beautifully and is gentle with my grandson. Three years on, they still check in on her birthday.",
  },
  {
    name: "The Whitfields",
    place: "Sacramento, California",
    puppy: "Adopted Moose, 2026",
    photo: family4,
    quote:
      "Moose flew in with a nanny and walked off the plane wagging. Paperwork, vet records and microchip were all ready before we even asked.",
  },
  {
    name: "Priya & Sam",
    place: "Austin, Texas",
    puppy: "Adopted Clover, 2026",
    photo: family5,
    quote:
      "First time dog owners here. The feeding schedule and the follow up calls made the first month feel easy instead of scary.",
  },
  {
    name: "The Okonkwo Family",
    place: "Denver, Colorado",
    puppy: "Adopted Biscuit, 2026",
    photo: family6,
    quote:
      "Biscuit hikes with us every weekend and sleeps through the night. Exactly the steady, happy temperament we were promised.",
  },
  {
    name: "Margaret L.",
    place: "Spokane, Washington",
    puppy: "Adopted Willow, 2025",
    photo: family7,
    quote:
      "I wanted a gentle companion at 68 and got the perfect one. They took the time to match me instead of just selling a puppy.",
  },
  {
    name: "The Brennan Family",
    place: "Portland, Oregon",
    puppy: "Adopted Scout, 2026",
    photo: family8,
    quote:
      "We visited before adopting and the house was spotless, the puppies confident and clearly loved. That visit sold us instantly.",
  },
  {
    name: "Tyler & Jo",
    place: "Salt Lake City, Utah",
    puppy: "Adopted Honey, 2026",
    photo: family9,
    quote:
      "Honey is three now and hips, eyes and heart are all perfect. The health guarantee paperwork was real and thorough.",
  },
  {
    name: "The Nakamura Family",
    place: "San Jose, California",
    puppy: "Adopted Kona, 2026",
    photo: family10,
    quote:
      "Kona was already used to kids, cats and car rides. Coming home was the calmest introduction we could have hoped for.",
  },
];

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
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 ${
            heading ? "mt-10 sm:mt-12" : ""
          }`}
        >
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lg"
            >
              <img
                src={t.photo}
                alt={`${t.name} with their Golden Retriever`}
                loading="lazy"
                width={1000}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  <Quote className="mb-1 inline size-3.5 text-primary/40" /> {t.quote}
                </blockquote>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-sm font-medium">{t.name}</p>
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
