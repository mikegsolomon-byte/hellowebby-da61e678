/**
 * Accent colours used to tell repeated cards apart — the benefit cards, the
 * industry tiles and each industry's own page.
 *
 * All eight sit at a similar saturation and darkness on purpose. Six colours
 * at matched weight read as a system; the same six at different intensities
 * read as a rainbow. Colour is only ever applied to an icon and its ring,
 * never to headings or body text, which stay ink.
 *
 * `ring` outlines the icon disc, `icon` is a shade darker so the glyph stays
 * legible inside it, and `tint` is a soft wash for larger surfaces.
 */
export interface Accent {
  ring: string;
  icon: string;
  tint: string;
}

export const ACCENTS = {
  amber: { ring: "#D99A00", icon: "#9E7000", tint: "#FFF4D6" },
  teal: { ring: "#2E7D8A", icon: "#226270", tint: "#DCEFF2" },
  indigo: { ring: "#51639E", icon: "#415081", tint: "#E3E7F5" },
  sage: { ring: "#5F8A4F", icon: "#4B6E3F", tint: "#E4EFDF" },
  terracotta: { ring: "#C8673C", icon: "#A35231", tint: "#FBE6DC" },
  plum: { ring: "#96517E", icon: "#7A4267", tint: "#F5E3EF" },
  bronze: { ring: "#8A6136", icon: "#6B4B29", tint: "#F3E8DA" },
  rose: { ring: "#AF4F66", icon: "#8C3E52", tint: "#FAE1E6" },
} as const satisfies Record<string, Accent>;

export type AccentName = keyof typeof ACCENTS;

/** Stable order for anything that just needs a sequence of distinct colours. */
export const ACCENT_SEQUENCE: AccentName[] = [
  "amber",
  "teal",
  "indigo",
  "sage",
  "terracotta",
  "plum",
  "bronze",
  "rose",
];

/**
 * Each vertical keeps the same colour wherever it appears — the tile on the
 * home page, the card on /industries and its own landing page. Keyed by slug
 * rather than position so reordering the list never reshuffles the colours.
 * Where a colour suggests the trade, it is used (water for plumbers, amber
 * for electricians, a calm green for clinics).
 */
export const INDUSTRY_ACCENTS: Record<string, AccentName> = {
  plumbers: "teal",
  "salons-and-barbers": "plum",
  "cafes-and-restaurants": "terracotta",
  electricians: "amber",
  "builders-and-tradespeople": "bronze",
  "accountants-and-solicitors": "indigo",
  "therapists-and-clinics": "sage",
  "retail-and-boutiques": "rose",
};

/** Colour for an industry slug, falling back to the brand amber. */
export function industryAccent(slug?: string): Accent {
  const name = slug ? INDUSTRY_ACCENTS[slug] : undefined;
  return ACCENTS[name ?? "amber"];
}

/** Nth colour in the standard sequence, wrapping if the list is longer. */
export function accentAt(index: number): Accent {
  return ACCENTS[ACCENT_SEQUENCE[index % ACCENT_SEQUENCE.length]];
}
