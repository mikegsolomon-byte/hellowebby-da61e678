import { describe, expect, test } from "bun:test";
import { hasValidTermsAcceptance, termsAcceptanceMetadata } from "./checkout-consent";

describe("required checkout terms agreement", () => {
  test("rejects an unchecked acknowledgement", () => {
    expect(hasValidTermsAcceptance(false, "2026-10-16")).toBe(false);
  });
  test("rejects a missing acknowledgement", () => {
    expect(hasValidTermsAcceptance(undefined, "2026-10-16")).toBe(false);
  });
  test("does not treat a string as explicit consent", () => {
    expect(hasValidTermsAcceptance("true", "2026-10-16")).toBe(false);
  });
  test("rejects agreement to an outdated terms version", () => {
    expect(hasValidTermsAcceptance(true, "2026-08-07")).toBe(false);
  });
  test("accepts explicit agreement to the current terms", () => {
    expect(hasValidTermsAcceptance(true, "2026-10-16")).toBe(true);
  });
  test("records agreement version and server receipt time", () => {
    expect(termsAcceptanceMetadata(true, "2026-10-16", new Date("2026-10-16T09:40:00Z"))).toEqual({
      terms_accepted: "true",
      terms_version: "2026-10-16",
      terms_accepted_at: "2026-10-16T09:40:00.000Z",
    });
  });
  test("cannot create an acceptance record without consent", () => {
    expect(() => termsAcceptanceMetadata(false, "2026-10-16", new Date())).toThrow();
  });
});