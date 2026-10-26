/**
 * Cookie consent + app-level analytics helpers.
 *
 * Google Analytics (gtag.js) is loaded ONLY after the visitor accepts optional
 * analytics cookies in the cookie banner. Until then no Google script runs and
 * no GA cookies are set.
 *
 * NOTE: Lovable's built-in platform analytics is injected by the host and is
 * not controlled here.
 */

export const CONSENT_KEY = "hw-cookie-consent";

export type ConsentValue = "accepted" | "rejected";

const GA_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
const GA_SCRIPT_ID = "ga-gtag-script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gaReady = false;

/** True only when the visitor has explicitly accepted optional analytics cookies. */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

/** Initialise Google Analytics. Only ever runs with consent. Safe to call repeatedly. */
export function initAnalytics(): void {
  if (!hasAnalyticsConsent() || !GA_ID || typeof window === "undefined") return;

  // Re-enable if previously disabled in this session.
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;

  if (gaReady) return;
  gaReady = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params -- gtag.js needs the Arguments object
    window.dataLayer.push(arguments);
  };
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
}

/** Send a page view for client-side route changes. No-op without consent. */
export function trackPageView(path: string): void {
  if (!gaReady || !window.gtag || !hasAnalyticsConsent()) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Stop Google Analytics and remove its cookies when consent is rejected/withdrawn. */
export function disableAnalytics(): void {
  if (typeof window === "undefined" || !GA_ID) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;

  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat") {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}
