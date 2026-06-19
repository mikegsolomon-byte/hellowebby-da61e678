import { useEffect, useState } from "react";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "checking" | "ready" | "already" | "invalid" | "submitting" | "done" | "error";

const Unsubscribe = () => {
  const [state, setState] = useState<State>("checking");
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } },
        );
        const data = await res.json();
        if (data.valid) setState("ready");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error || !data?.success) setState("error");
    else setState("done");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 text-center shadow-sm">
        {state === "checking" && (
          <div className="flex flex-col items-center gap-3 py-6">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Checking your link…</p>
          </div>
        )}

        {state === "ready" && (
          <>
            <h1 className="text-2xl font-bold mb-2">Unsubscribe from HelloWebby</h1>
            <p className="text-muted-foreground mb-6">
              You'll stop receiving emails from us. You can always reach us again at hello@hellowebby.com.
            </p>
            <Button size="lg" className="rounded-full w-full" onClick={confirm}>
              Confirm unsubscribe
            </Button>
          </>
        )}

        {state === "submitting" && (
          <div className="flex flex-col items-center gap-3 py-6">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Unsubscribing…</p>
          </div>
        )}

        {state === "done" && (
          <>
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
            <h1 className="text-2xl font-bold mb-2">You're unsubscribed</h1>
            <p className="text-muted-foreground">We won't email you again. Take care!</p>
          </>
        )}

        {state === "already" && (
          <>
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
            <h1 className="text-2xl font-bold mb-2">Already unsubscribed</h1>
            <p className="text-muted-foreground">This email is already removed from our list.</p>
          </>
        )}

        {(state === "invalid" || state === "error") && (
          <>
            <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
            <h1 className="text-2xl font-bold mb-2">Link not valid</h1>
            <p className="text-muted-foreground">
              This unsubscribe link is invalid or has expired. Email us at hello@hellowebby.com and we'll sort it.
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;