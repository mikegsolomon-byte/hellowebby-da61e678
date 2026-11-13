import {
  Wrench,
  Scissors,
  Coffee,
  Zap,
  HardHat,
  Briefcase,
  HeartPulse,
  ShoppingBag,
  Building2,
  type LucideIcon,
} from "lucide-react";

/**
 * One icon per vertical, shared by the home page tiles, the /industries list
 * and each industry's own page, so a trade looks the same wherever it appears.
 * Pairs with INDUSTRY_ACCENTS in accents.ts, which gives each one its colour.
 */
export const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  plumbers: Wrench,
  "salons-and-barbers": Scissors,
  "cafes-and-restaurants": Coffee,
  electricians: Zap,
  "builders-and-tradespeople": HardHat,
  "accountants-and-solicitors": Briefcase,
  "therapists-and-clinics": HeartPulse,
  "retail-and-boutiques": ShoppingBag,
};

/** Icon for a slug, falling back to a neutral building mark. */
export function industryIcon(slug?: string): LucideIcon {
  return (slug && INDUSTRY_ICONS[slug]) || Building2;
}
