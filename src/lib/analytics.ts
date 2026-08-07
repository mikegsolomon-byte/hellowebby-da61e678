/**
 * Cookie consent + app-level analytics helpers.
 *
 * NOTE: Lovable's built-in platform analytics is injected by the host and is
 * not controlled here.
 */

export const CONSENT_KEY = "hw-cookie-consent";

export type ConsentValue = "accepted" | "rejected";

/** True only when the visitor has explicitly accepted optional analytics cookies. */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

/**
 * Initialise optional, app-level analytics. Only ever runs with consent.
 */
export function initAnalytics(): void {
  if (!hasAnalyticsConsent()) return;
  // Drop app-level analytics init here (e.g. Google Analytics). Only runs with consent.
  // NOTE: Lovable's built-in platform analytics is injected by the host and is not controlled here.
  console.debug("[analytics] consent granted — no app-level analytics configured yet.");
}

/**
 * Tear down / disable any app-level analytics we added.
 * No-op for now; add script removal + cookie cleanup alongside initAnalytics().
 */
export function disableAnalytics(): void {
  console.debug("[analytics] consent rejected — app-level analytics disabled.");
}
