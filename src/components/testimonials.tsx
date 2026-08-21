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
];

export function Testimonials({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        {heading ? (
          <SectionHeading
            eyebrow="Happy homes"
            title="Families & their goldens"
            description="Photos and words from the homes our puppies grew up in."
          />
        ) : null}

        <div className={`grid gap-8 md:grid-cols-3 ${heading ? "mt-12" : ""}`}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <img
                src={t.photo}
                alt={`${t.name} with their Golden Retriever`}
                loading="lazy"
                width={1000}
                height={800}
                className="aspect-[5/4] w-full object-cover"
              />
              <figcaption className="flex flex-1 flex-col p-6">
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
