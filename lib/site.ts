// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Skyline Realtors",
  legalName: "Skyline Realtors | Property Dealer & Real Estate Consultant in Gurgaon",
  tagline: "Raising the Standard of Urban Living",
  description:
    "Skyline Realtors is a trusted property dealer and real estate consultant in Gurgaon, specialising in premium builder floors, flats, plots and high-return investment opportunities across Palam Vihar, Sector 21, Sector 22 and Sector 23. Since 2021, we've helped hundreds of families and investors buy, sell and invest with confidence.",
  url: "https://skyline-realtors.in",
  phone: "+91 98996 27867",
  phoneRaw: "919899627867",
  whatsapp: "919899627867",
  email: "info@skyline-realtors.in",
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
  founded: "2021",
  social: {
    instagram: "https://www.instagram.com/skyline.realtors.in?utm_source=qr",
  },
} as const;

export const SERVICE_AREAS = [
  "Palam Vihar",
  "Palam Vihar Extension",
  "Sector 21",
  "Sector 22",
  "Sector 23",
  "Sector 23A",
  "Old Gurgaon",
  "Gurgaon",
] as const;

export const PROPERTY_INTERESTS = [
  "Builder Floors",
  "Independent Flats",
  "Residential Plots",
  "Investment Property",
  "Resale Property",
  "Ready-to-Move Homes",
  "Rental Property",
  "Commercial Shops",
  "Sell My Property",
] as const;

export const BUDGET_RANGES = [
  "Rs.2.5 Cr – Rs.3.25 Cr",
  "Rs.3.25 Cr – Rs.4.25 Cr",
  "Rs.4.25 Cr – Rs.5.5 Cr",
  "Rs.5.5 Cr – Rs.7.5 Cr",
  "Rs.7.5 Cr – Rs.10 Cr",
  "Rs.10 Cr+",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/residential" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Pre-built WhatsApp deep links
export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi Skyline Realtors, I'd like to know more about builder floors, flats and plots in Palam Vihar & Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
