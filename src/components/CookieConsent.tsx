import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONSENT_KEY, disableAnalytics, initAnalytics } from "@/lib/analytics";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      stored = null;
    }

    if (stored === "accepted") initAnalytics();
    if (!stored) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-preferences", reopen);
    return () => window.removeEventListener("open-cookie-preferences", reopen);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage unavailable — respect the choice for this session only */
    }
    if (value === "accepted") initAnalytics();
    else disableAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-4 bottom-24 md:bottom-4 z-50"
    >
      <div className="container mx-auto max-w-3xl bg-background/90 backdrop-blur-md border-2 border-foreground rounded-2xl shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="font-extrabold text-lg tracking-tight mb-1">
              Cookies
            </h2>
            <p className="text-sm text-muted-foreground">
              We use essential cookies to run the site and keep payments secure — these are always on.
              We'd also like to use optional analytics cookies to understand how the site is used and
              improve it. You can accept or reject the optional ones. See our{" "}
              <a href="/privacy" className="font-semibold text-foreground underline underline-offset-4">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">
            <Button onClick={() => decide("accepted")}>Accept</Button>
            <Button variant="outline" onClick={() => decide("rejected")}>
              Reject non-essential
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
