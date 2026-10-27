export const TERMS_VERSION = "2026-10-27";

export function hasValidTermsAcceptance(accepted: unknown, version: unknown): boolean {
  return accepted === true && version === TERMS_VERSION;
}

export function termsAcceptanceMetadata(accepted: unknown, version: unknown, receivedAt: Date) {
  if (!hasValidTermsAcceptance(accepted, version)) {
    throw new Error("Please read and accept the current Terms and Conditions before payment.");
  }
  return {
    terms_accepted: "true",
    terms_version: TERMS_VERSION,
    terms_accepted_at: receivedAt.toISOString(),
  };
}