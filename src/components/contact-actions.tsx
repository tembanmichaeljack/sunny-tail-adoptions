import { Link, useLocation } from "@tanstack/react-router";
import { ClipboardList, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

type ContactActionsProps = {
  /** "hero" makes the Message Us action larger with a gentle float and glow (home page only). */
  emphasis?: "default" | "hero";
};

const smsHref = `sms:${site.phone.replace(/[^+\d]/g, "")}`;

export function ContactActions({ emphasis = "default" }: ContactActionsProps) {
  const hero = emphasis === "hero";

  const messageButton = (
    <Button
      asChild
      size="lg"
      className={
        hero
          ? "h-auto min-h-14 rounded-full bg-gradient-sun px-7 py-3.5 text-base shadow-lift transition-[filter,transform] duration-200 hover:scale-[1.04] hover:brightness-105"
          : undefined
      }
    >
      <a href={smsHref}>
        <MessageCircle aria-hidden="true" /> Message Us
      </a>
    </Button>
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      {hero ? (
        <span className="animate-sms-hero-float inline-flex rounded-full">
          <span className="animate-sms-attention-lg inline-flex rounded-full">{messageButton}</span>
        </span>
      ) : (
        messageButton
      )}
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
