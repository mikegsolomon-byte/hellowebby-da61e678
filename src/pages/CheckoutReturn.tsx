import { useSearchParams, Link } from "react-router-dom";

export default function CheckoutReturn() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="glass rounded-2xl p-10 max-w-lg w-full text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-2xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold mb-3 gradient-text">You're in!</h1>
        <p className="text-muted-foreground mb-6">
          Payment received. We'll be in touch within one business day to kick off your site.
        </p>
        {sessionId && (
          <p className="text-xs text-muted-foreground/70 mb-6 break-all">
            Reference: {sessionId}
          </p>
        )}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}