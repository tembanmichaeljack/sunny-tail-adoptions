import { Link, useLocation } from "@tanstack/react-router";
import { ClipboardList, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg">
        <a href={`sms:${site.phone.replace(/[^+\d]/g, "")}`}>
          <MessageCircle aria-hidden="true" /> Message Us
        </a>
      </Button>
      <Button asChild size="lg" variant="outline">
        <Link to="/contact" hash="order-form">
          <ClipboardList aria-hidden="true" /> Fill Out Form
        </Link>
      </Button>
    </div>
  );
}

const publicPages = ["/", "/puppies", "/about", "/adoption", "/testimonials", "/faq", "/contact"];

export function ContactCta() {
  const pathname = useLocation({ select: (location) => location.pathname });
  if (!publicPages.includes(pathname)) return null;

  return (
    <section aria-labelledby="contact-cta-heading" className="border-t border-border bg-cream py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="contact-cta-heading" className="text-2xl">Ready to meet your puppy?</h2>
          <p className="mt-2 text-sm text-muted-foreground">We’d love to hear from you.</p>
        </div>
        <ContactActions />
      </div>
    </section>
  );
}