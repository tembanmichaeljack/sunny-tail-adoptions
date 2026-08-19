import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { puppies } from "@/data/puppies";

export function OrderForm({ puppyId, compact = false }: { puppyId?: string; compact?: boolean }) {
  const [selected, setSelected] = useState(puppyId ?? "");

  return (
    <form
      className={compact ? "space-y-4" : "space-y-5"}
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        toast.success("Order request received", {
          description: "We'll email you within 24 hours to confirm availability.",
        });
        form.reset();
        setSelected(puppyId ?? "");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`name-${puppyId ?? "general"}`}>Full name</Label>
          <Input id={`name-${puppyId ?? "general"}`} name="name" required placeholder="Jane Miller" />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`email-${puppyId ?? "general"}`}>Email</Label>
          <Input
            id={`email-${puppyId ?? "general"}`}
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`phone-${puppyId ?? "general"}`}>Phone</Label>
          <Input id={`phone-${puppyId ?? "general"}`} name="phone" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`city-${puppyId ?? "general"}`}>City & state</Label>
          <Input id={`city-${puppyId ?? "general"}`} name="city" placeholder="Portland, OR" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Puppy of interest</Label>
          <Select value={selected} onValueChange={setSelected} name="puppy">
            <SelectTrigger>
              <SelectValue placeholder="Choose a puppy" />
            </SelectTrigger>
            <SelectContent>
              {puppies.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name} — {p.sex}, {p.age}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Pickup or delivery</Label>
          <Select defaultValue="pickup" name="delivery">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pickup">Pickup at the kennel</SelectItem>
              <SelectItem value="ground">Ground delivery</SelectItem>
              <SelectItem value="flight">Flight nanny</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`notes-${puppyId ?? "general"}`}>Tell us about your home</Label>
        <Textarea
          id={`notes-${puppyId ?? "general"}`}
          name="notes"
          rows={compact ? 3 : 4}
          placeholder="Yard, other pets, children, work schedule, preferred pickup date…"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit order request
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No payment now — we confirm availability first.
      </p>
    </form>
  );
}
