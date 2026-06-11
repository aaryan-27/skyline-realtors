// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Skyline Realtors",
  legalName: "Skyline Realtors | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Skyline Realtors is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.skylinerealtors.in",
  phone: "+91 98996 27867",
  phoneRaw: "919899627867",
  whatsapp: "919899627867",
  email: "info@skylinerealtors.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Skyline%20Realtors&query_place_id=ChIJAdE29asZDTkRBoHIf_jPk9g",
  mapsEmbed:
    "https://www.google.com/maps?q=Skyline+Realtors+Sector+22+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.4897, lng: 76.9822 },
  address: {
    street: "Shop No. 121, HUDA Market, opposite Rotary Public School, Mullahera",
    locality: "Sector 22, Gurugram",
    region: "Gurugram, Haryana",
    postalCode: "122015",
    country: "IN",
    full: "Shop No. 121, HUDA Market, opposite Rotary Public School, Mullahera, Sector 22, Gurugram, Haryana 122015, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/skylinerealtors",
    facebook: "https://facebook.com/skylinerealtors",
    youtube: "https://youtube.com/@skylinerealtors",
    linkedin: "https://linkedin.com/company/skylinerealtors",
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
      "Hi Skyline Realtors, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
