import { MessageCircle } from "lucide-react";

import { site } from "@/data/site";

const smsHref = `sms:${site.phone.replace(/[^+\d]/g, "")}`;

export function FloatingSmsButton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:pb-6">
      <span className="animate-sms-attention pointer-events-none inline-flex rounded-full">
        <a
          href={smsHref}
          aria-label={`Text us at ${site.phone.trim()}`}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-gradient-sun px-4 py-3 text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-105 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-5 sm:py-3.5"
        >
          <MessageCircle className="size-6 shrink-0" />
          <span className="hidden text-sm font-semibold sm:inline">Message Us</span>
        </a>
      </span>
    </div>
  );
}
