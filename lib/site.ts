// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "DLF Privana Amraj Infra",
  legalName: "DLF Privana Amraj Infra Real Estate Advisory",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "DLF Privana Amraj Infra is the trusted real estate investment consultant for Gurgaon, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.amrajinfra.in",
  phone: "+91 93102 03019",
  phoneRaw: "919310203019",
  whatsapp: "919310203019",
  email: "info@amrajinfra.in",
  mapsUrl: "https://maps.app.goo.gl/83qhTDcHRQXmEf5z6",
  mapsEmbed:
    "https://www.google.com/maps?q=Suncity+Avenue+Sector+76+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.3886, lng: 76.956 },
  address: {
    street: "Shop No. 14, Suncity Avenue",
    locality: "Sector 76",
    region: "Gurugram, Haryana",
    postalCode: "122012",
    country: "IN",
    full: "Shop No. 14, Suncity Avenue, Sector 76, Gurugram, Haryana 122012",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2014",
  social: {
    instagram: "https://instagram.com/amrajinfra",
    facebook: "https://facebook.com/amrajinfra",
    youtube: "https://youtube.com/@amrajinfra",
    linkedin: "https://linkedin.com/company/amrajinfra",
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
      "Hi DLF Privana Amraj Infra, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
