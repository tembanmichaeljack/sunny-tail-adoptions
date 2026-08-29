import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";

const title = "Family Photos & Reviews — Golden Meadow Kennel";
const description =
  "Photos and words from families who adopted our Golden Retriever puppies across Oregon, Washington and Idaho.";

export const Route = createFileRoute("/testimonials")({
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
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            align="left"
            as="h1"
            eyebrow="Our families"
            title="The homes our puppies grew into"
            description="Send us a photo after your puppy settles in and we'll add your family to this wall."
          />
        </div>
      </section>

      <Testimonials heading={false} />
    </>
  );
}
