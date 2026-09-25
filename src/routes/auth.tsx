import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Sign In | Golden Sunny Tail" },
      { name: "description", content: "Private sign in for the Golden Sunny Tail administrator." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin Sign In | Golden Sunny Tail" },
      { property: "og:description", content: "Private administrator sign in." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setMsg(error.message);
    navigate({ to: "/admin" });
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <h1 className="text-2xl font-semibold text-foreground">Admin sign in</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input
          type="email" required placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
        />
        <input
          type="password" required minLength={8} placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
        />
        <button
          type="submit" disabled={busy}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground disabled:opacity-60"
        >
          {busy ? "Please wait..." : "Sign in"}
        </button>
      </form>
      {msg && <p className="mt-4 text-sm text-muted-foreground">{msg}</p>}
    </div>
  );
}
