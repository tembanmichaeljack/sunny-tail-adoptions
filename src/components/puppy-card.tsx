import { Check } from "lucide-react";

import { OrderForm } from "@/components/order-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Puppy } from "@/data/puppies";

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={puppy.image}
          alt={`${puppy.name}, a ${puppy.age} old ${puppy.color} Golden Retriever puppy`}
          loading="lazy"
          width={900}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant={puppy.status === "Available" ? "default" : "secondary"}
          className="absolute top-4 left-4"
        >
          {puppy.status}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl">{puppy.name}</h3>
          <span className="font-display text-lg text-primary">{puppy.price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {puppy.sex} · {puppy.age} · {puppy.color}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {puppy.temperament.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="mt-6 w-full">
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{puppy.name}</DialogTitle>
              <DialogDescription>
                {puppy.sex} · {puppy.age} · {puppy.color} · {puppy.price}
              </DialogDescription>
            </DialogHeader>

            <img
              src={puppy.image}
              alt={`Portrait of ${puppy.name}`}
              loading="lazy"
              width={900}
              height={900}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />

            <p className="text-sm leading-relaxed text-muted-foreground">{puppy.description}</p>

            <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-cream p-4 text-sm sm:grid-cols-4">
              {[
                ["Sex", puppy.sex],
                ["Age", puppy.age],
                ["Coat", puppy.color],
                ["Weight", puppy.weight],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">{label}</dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h4 className="text-base">Goes home with</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {puppy.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-base">Order form — reserve {puppy.name}</h4>
              <p className="mt-1 mb-4 text-sm text-muted-foreground">
                Send your details and we'll confirm availability.
              </p>
              <OrderForm puppyId={puppy.id} compact />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}
