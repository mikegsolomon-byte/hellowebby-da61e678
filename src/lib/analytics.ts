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

/**
 * Paths that are not application routes. The host serves index.html for
 * anything it does not recognise, so platform requests (Lovable's own
 * /__l5e/* instrumentation, stray asset URLs) boot the app and would
 * otherwise be recorded as page views of the 404 page.
 */
const NON_ROUTE_PATH = /^\/(?:__l5e|assets|\.lovable)\//i;

/** False for platform/asset URLs that only reach the app through the SPA fallback. */
export function isTrackablePath(path: string): boolean {
  const clean = path.split("?")[0];
  if (NON_ROUTE_PATH.test(clean)) return false;
  return !/\.[a-z0-9]{2,5}$/i.test(clean);
}

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
  window.gtag("config", GA_ID, { anonymize_ip: true, send_page_view: false });

  // Sent by hand so platform URLs never register as a page view.
  if (isTrackablePath(window.location.pathname)) {
    window.gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }

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
  if (!isTrackablePath(path)) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Send a named GA event. No-op without consent. */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!gaReady || !window.gtag || !hasAnalyticsConsent()) return;
  window.gtag("event", name, params);
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

/* ---------------------------------------------------------------------------
 * Reddit Pixel — loaded ONLY after the visitor accepts optional cookies.
 * ------------------------------------------------------------------------- */
const REDDIT_PIXEL_ID = "a2_hf8cylfdt45l";
const REDDIT_SCRIPT_ID = "reddit-pixel-script";
export const CONSENT_META_KEY = "hw-cookie-consent-meta";
/** Bump when the banner wording or the list of tools changes. */
export const CONSENT_NOTICE_VERSION = "2026-11-01";

let redditReady = false;

type RdtFn = ((...args: unknown[]) => void) & { callQueue?: unknown[]; sendEvent?: (...a: unknown[]) => void };
declare global {
  interface Window {
    rdt?: RdtFn;
  }
}

/** Record when the choice was made and which notice version was shown. */
export function saveConsentRecord(value: ConsentValue): void {
  try {
    window.localStorage.setItem(
      CONSENT_META_KEY,
      JSON.stringify({ choice: value, at: new Date().toISOString(), notice: CONSENT_NOTICE_VERSION }),
    );
  } catch {
    /* ignore */
  }
}

export function initRedditPixel(): void {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || redditReady) return;
  redditReady = true;
  if (!window.rdt) {
    const rdt: RdtFn = function (...args: unknown[]) {
      if (rdt.sendEvent) rdt.sendEvent(...args);
      else rdt.callQueue!.push(args);
    };
    rdt.callQueue = [];
    window.rdt = rdt;
  }
  if (!document.getElementById(REDDIT_SCRIPT_ID)) {
    const s = document.createElement("script");
    s.id = REDDIT_SCRIPT_ID;
    s.async = true;
    s.src = `https://www.redditstatic.com/ads/pixel.js?pixel_id=${REDDIT_PIXEL_ID}`;
    document.head.appendChild(s);
  }
  window.rdt("init", REDDIT_PIXEL_ID);
  window.rdt("track", "PageVisit");
}

type RedditEvent = "Lead" | "SignUp" | "Purchase";
/** Send a Reddit conversion. No-op without consent. Never pass personal data. */
export function trackRedditEvent(event: RedditEvent, data?: { value?: number; currency?: string; itemCount?: number; conversionId?: string }): void {
  if (!redditReady || !window.rdt || !hasAnalyticsConsent()) return;
  window.rdt("track", event, data ?? {});
}

export function trackRedditPageVisit(): void {
  if (!redditReady || !window.rdt || !hasAnalyticsConsent()) return;
  window.rdt("track", "PageVisit");
}

/** Stop Reddit tracking and clear its first-party cookie. */
export function disableRedditPixel(): void {
  redditReady = false;
  if (typeof window === "undefined") return;
  window.rdt = undefined;
  document.getElementById(REDDIT_SCRIPT_ID)?.remove();
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  ["_rdt_uuid", "_rdt_em"].forEach((name) =>
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    }),
  );
}
