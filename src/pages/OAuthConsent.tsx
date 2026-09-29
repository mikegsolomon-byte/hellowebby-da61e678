import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Bot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import { supabase } from "@/integrations/supabase/client";

type ConsentDetails = {
  authorization_id: string;
  client: { name: string };
  user: { email: string };
};

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<ConsentDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    void (async () => {
      if (!authorizationId) {
        setError("This connection request is missing or has expired.");
        return;
      }
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        const next = window.location.pathname + window.location.search;
        window.location.assign(`/login?next=${encodeURIComponent(next)}`);
        return;
      }
      const { data, error: detailsError } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (detailsError || !data) {
        setError(detailsError?.message || "This connection request could not be loaded.");
        return;
      }
      if ("redirect_url" in data) {
        window.location.assign(data.redirect_url);
        return;
      }
      setDetails(data);
    })();
    return () => { active = false; };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const response = approve
      ? await supabase.auth.oauth.approveAuthorization(authorizationId, { skipBrowserRedirect: true })
      : await supabase.auth.oauth.denyAuthorization(authorizationId, { skipBrowserRedirect: true });
    if (response.error || !response.data?.redirect_url) {
      setError(response.error?.message || "The connection request could not be completed.");
      setBusy(false);
      return;
    }
    window.location.assign(response.data.redirect_url);
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16 grid place-items-center">
      <PageMeta title="Connect an assistant | hellowebby" description="Approve secure assistant access to hellowebby." path="/.lovable/oauth/consent" noindex />
      <section className="glass w-full max-w-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary border-2 border-foreground grid place-items-center"><Bot className="w-6 h-6" /></div>
          <div><p className="text-sm text-muted-foreground">Secure connection</p><h1 className="text-2xl font-extrabold">Connect an assistant</h1></div>
        </div>
        {error ? (
          <div role="alert" className="rounded-md border-2 border-destructive p-4 text-sm text-destructive">{error}</div>
        ) : !details ? (
          <p className="text-muted-foreground">Loading connection details…</p>
        ) : (
          <>
            <p className="text-lg mb-5"><strong>{details.client.name}</strong> wants to connect to your hellowebby account.</p>
            <div className="rounded-md border-2 border-foreground bg-muted p-4 mb-6 space-y-3">
              <p className="flex gap-2"><ShieldCheck className="w-5 h-5 text-primary shrink-0" /> It can view current website plans and submit enquiries after you confirm them.</p>
              <p className="text-sm text-muted-foreground">Signed in as {details.user.email}</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <Button variant="outline" disabled={busy} onClick={() => void decide(false)}>Deny</Button>
              <Button disabled={busy} onClick={() => void decide(true)}>{busy ? "Connecting…" : "Approve connection"}</Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}