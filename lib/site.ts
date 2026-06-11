// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Crossroad Consultant Inc",
  legalName: "Crossroad Consultant Inc | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Crossroad Consultant Inc is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.crossroadconsultant.in",
  phone: "+91 98112 09192",
  phoneRaw: "919811209192",
  whatsapp: "919811209192",
  email: "info@crossroadconsultant.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Crossroad%20Consultant%20Inc&query_place_id=ChIJK2bKeQAjDTkRVTFwpf7LTkI",
  mapsEmbed:
    "https://www.google.com/maps?q=Crossroad+Consultant+Inc+Sector+49+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.4295, lng: 77.0385 },
  address: {
    street: "63, Ground Floor, Block D, South City II",
    locality: "Sector 49, Gurugram",
    region: "Gurugram, Haryana",
    postalCode: "122018",
    country: "IN",
    full: "63, Ground Floor, Block D, South City II, Sector 49, Gurugram, Haryana 122018, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/crossroadconsultant",
    facebook: "https://facebook.com/crossroadconsultant",
    youtube: "https://youtube.com/@crossroadconsultant",
    linkedin: "https://linkedin.com/company/crossroadconsultant",
  },
} as const;

export const SERVICE_AREAS = [
  "Dwarka Expressway",
  "New Gurgaon",
  "Sector 83",
  "Sector 84",
  "Sector 85",
  "Sector 88",
  "Sector 89",
  "Golf Course Extension Road",
  "Sohna Road",
  "SPR Road",
  "Delhi NCR",
] as const;

export const PROPERTY_INTERESTS = [
  "Luxury Apartments",
  "Residential Projects",
  "Commercial Property",
  "SCO Plots",
  "Retail Shops",
  "Office Spaces",
  "Builder Floors",
  "Pre-Launch Projects",
  "Investment Property",
] as const;

export const BUDGET_RANGES = [
  "Under Rs.1 Cr",
  "Rs.1 Cr – Rs.2 Cr",
  "Rs.2 Cr – Rs.3.5 Cr",
  "Rs.3.5 Cr – Rs.5 Cr",
  "Rs.5 Cr – Rs.10 Cr",
  "Rs.10 Cr+",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Residential",
    href: "/residential",
  },
  {
    label: "Commercial",
    href: "/commercial",
  },
  { label: "Locations", href: "/locations" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Pre-built WhatsApp deep links
export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi Crossroad Consultant Inc, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
