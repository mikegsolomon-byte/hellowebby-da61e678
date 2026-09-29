import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageMeta from "@/components/PageMeta";
import { supabase } from "@/integrations/supabase/client";

function safeNext(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export default function OAuthLogin() {
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    if (creating) {
      const returnTo = `${window.location.origin}${next}`;
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: returnTo },
      });
      if (signUpError) {
        setError(signUpError.message);
        setBusy(false);
        return;
      }
      if (!data.session) {
        setNotice("Check your email to confirm your account, then continue the connection.");
        setBusy(false);
        return;
      }
      window.location.assign(next);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (signInError) {
      setError("We couldn't sign you in. Check your email and password, then try again.");
      setBusy(false);
      return;
    }
    window.location.assign(next);
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16 grid place-items-center">
      <PageMeta title="Sign in | hellowebby" description="Sign in securely to connect hellowebby." path="/login" noindex />
      <section className="glass w-full max-w-md p-6 md:p-8">
        <div className="w-12 h-12 rounded-xl bg-primary border-2 border-foreground grid place-items-center mb-6">
          <LockKeyhole className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold mb-2">{creating ? "Create your account" : "Sign in to hellowebby"}</h1>
        <p className="text-muted-foreground mb-6">{creating ? "Create an account to securely connect your assistant." : "Use your hellowebby account to continue connecting your assistant."}</p>
        <form onSubmit={signIn} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="oauth-email">Email</Label>
            <Input id="oauth-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="oauth-password">Password</Label>
            <Input id="oauth-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          {notice && <p role="status" className="rounded-md border-2 border-primary bg-primary/10 p-3 text-sm">{notice}</p>}
          <Button type="submit" className="w-full" disabled={busy}>{busy ? "Please wait…" : creating ? "Create account" : "Sign in"}</Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => {
              setCreating((value) => !value);
              setError(null);
              setNotice(null);
            }}
          >
            {creating ? "Already have an account? Sign in" : "New to hellowebby? Create an account"}
          </Button>
        </form>
      </section>
    </main>
  );
}