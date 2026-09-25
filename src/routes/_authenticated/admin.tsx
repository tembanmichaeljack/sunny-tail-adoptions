import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin | Golden Sunny Tail" },
      { name: "description", content: "Private admin area for adoption requests." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin | Golden Sunny Tail" },
      { property: "og:description", content: "Private admin area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = Route.useRouteContext();

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (!isAdmin) return { isAdmin: false, rows: [] };
      const { data, error } = await supabase
        .from("order_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return { isAdmin: true, rows: data ?? [] };
    },
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Adoption requests</h1>
        <button onClick={signOut} className="rounded-md border border-input px-4 py-2 text-sm text-foreground">
          Sign out
        </button>
      </div>
      {isLoading && <p className="mt-6 text-muted-foreground">Loading...</p>}
      {error && <p className="mt-6 text-destructive">Could not load requests.</p>}
      {data && !data.isAdmin && (
        <p className="mt-6 text-muted-foreground">This account does not have admin access.</p>
      )}
      {data?.isAdmin && data.rows.length === 0 && (
        <p className="mt-6 text-muted-foreground">No requests yet.</p>
      )}
      {data?.isAdmin && data.rows.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                {["Date", "Name", "Email", "Phone", "City/State", "Puppy", "Pickup/Delivery", "Home info", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-3 py-2 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.id} className="border-t border-border align-top text-foreground">
                  <td className="whitespace-nowrap px-3 py-2">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="px-3 py-2">{r.full_name}</td>
                  <td className="px-3 py-2"><a className="underline" href={`mailto:${r.email}`}>{r.email}</a></td>
                  <td className="whitespace-nowrap px-3 py-2">{r.phone || "-"}</td>
                  <td className="px-3 py-2">{r.city_state || "-"}</td>
                  <td className="px-3 py-2">{r.puppy_name || r.puppy_id || "-"}</td>
                  <td className="px-3 py-2 capitalize">{r.delivery_method}</td>
                  <td className="max-w-xs whitespace-pre-wrap px-3 py-2">{r.notes || "-"}</td>
                  <td className="px-3 py-2 capitalize">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
