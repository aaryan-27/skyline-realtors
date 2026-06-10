// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "GOPAL ESTATES Gurgaon Since 2008",
  legalName: "GOPAL ESTATES Gurgaon Since 2008",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "GOPAL ESTATES Gurgaon Since 2008 is the trusted real estate investment consultant for Gurgaon, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.gopalestates.in",
  phone: "+91 98995 40456",
  phoneRaw: "919899540456",
  whatsapp: "919899540456",
  email: "info@gopalestates.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=GOPAL%20ESTATES%20Gurgaon%20Since%202008&query_place_id=ChIJ-9YBmdIZDTkROJ0hOpIYpp4",
  mapsEmbed:
    "https://www.google.com/maps?q=GOPAL+ESTATES+Gurgaon+Sector+6&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.4595, lng: 77.0266 },
  address: {
    street: "229/11 Link Road, More, near new colony, Bhim Nagar",
    locality: "Sector 6",
    region: "Gurugram, Haryana",
    postalCode: "122001",
    country: "IN",
    full: "229/11 Link Road, More, near new colony, Bhim Nagar, Sector 6, Gurugram, Haryana 122001, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/gopalestates",
    facebook: "https://facebook.com/gopalestates",
    youtube: "https://youtube.com/@gopalestates",
    linkedin: "https://linkedin.com/company/gopalestates",
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
      "Hi GOPAL ESTATES, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
