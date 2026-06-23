export type Developer = {
  slug: string;
  name: string;
  tagline: string;
  founded: string;
  headquarters: string;
  about: string;
  achievements: string[];
  completed: number;
  ongoing: number;
  awards: string[];
  signatureProjects: string[];
  accent: string; // hex used for subtle brand tint on dev page
};

// Trusted local builder partners whose builder floors, flats and plots we deal in
// across Palam Vihar and Sectors 21–23. Profiles are illustrative placeholders —
// replace with your verified partner details for production.
export const DEVELOPERS: Developer[] = [
  {
    slug: "vihar-constructions",
    name: "Vihar Constructions",
    tagline: "Premium builder floors with a Palam Vihar pedigree",
    founded: "2012",
    headquarters: "Palam Vihar, Gurgaon",
    about:
      "Vihar Constructions is a trusted local builder known for well-finished independent floors and neighbourhood retail across Palam Vihar and Old Gurgaon. Its projects are valued for honest construction quality, premium fittings and timely delivery.",
    achievements: [
      "100+ builder floors delivered in Palam Vihar",
      "Reputation for premium fittings and finishes",
      "Consistent on-time handovers",
    ],
    completed: 120,
    ongoing: 8,
    awards: ["Local Builder of the Year — Palam Vihar"],
    signatureProjects: ["Vihar Greens Floors", "Vihar Market Shops"],
    accent: "#1E3559",
  },
  {
    slug: "capital-builders",
    name: "Capital Builders",
    tagline: "Value-driven flats and neighbourhood commercial",
    founded: "2014",
    headquarters: "Sector 23, Gurgaon",
    about:
      "Capital Builders specialises in well-priced gated societies and neighbourhood commercial complexes across Sectors 21–23. The firm focuses on practical layouts, sensible amenities and strong end-user value.",
    achievements: [
      "Multiple gated societies delivered in Sector 23",
      "Known for value pricing and efficient layouts",
      "Growing commercial portfolio",
    ],
    completed: 18,
    ongoing: 4,
    awards: ["Best Value Housing — Old Gurgaon"],
    signatureProjects: ["Capital Residency", "Capital Square"],
    accent: "#9C7232",
  },
  {
    slug: "green-acre",
    name: "Green Acre Developers",
    tagline: "Clear-title plots and park-facing floors",
    founded: "2010",
    headquarters: "Palam Vihar Extension, Gurgaon",
    about:
      "Green Acre Developers is known for clear-title residential plots and spacious park-facing builder floors across Palam Vihar Extension and Sector 23. The firm emphasises transparent paperwork and verified land titles.",
    achievements: [
      "Specialists in clear-title plotted development",
      "Park-facing floor designs",
      "Strong focus on title transparency",
    ],
    completed: 14,
    ongoing: 5,
    awards: ["Trusted Plotted Developer — Gurgaon"],
    signatureProjects: ["Green Acre Plots", "Green Acre Floors"],
    accent: "#1E3559",
  },
  {
    slug: "urban-nest",
    name: "Urban Nest Builders",
    tagline: "Modern floors and plots for growing families",
    founded: "2015",
    headquarters: "Sector 21, Gurgaon",
    about:
      "Urban Nest Builders delivers contemporary independent floors and well-laid-out residential plots in Sectors 21 and 23A. Its homes are designed for modern families, with quality fittings and efficient use of space.",
    achievements: [
      "Modern, family-first floor layouts",
      "Reliable construction in HUDA sectors",
      "Growing plotted-development portfolio",
    ],
    completed: 22,
    ongoing: 6,
    awards: ["Emerging Builder — Old Gurgaon Sectors"],
    signatureProjects: ["Urban Nest Floors", "Urban Nest Plots"],
    accent: "#9C7232",
  },
  {
    slug: "heritage-homes",
    name: "Heritage Homes",
    tagline: "Compact, well-built floors in central Gurgaon",
    founded: "2011",
    headquarters: "Sector 22, Gurgaon",
    about:
      "Heritage Homes focuses on compact, efficient builder floors in the established, central sectors of Old Gurgaon. Its homes are prized for everyday convenience, livability and strong rental demand.",
    achievements: [
      "Specialist in central-sector builder floors",
      "High livability and rentability",
      "Loyal end-user following",
    ],
    completed: 30,
    ongoing: 3,
    awards: ["Best Mid-segment Floors — Sector 22"],
    signatureProjects: ["Heritage Homes Sector 22"],
    accent: "#1E3559",
  },
  {
    slug: "royal-floors",
    name: "Royal Floors",
    tagline: "Premium, low-density floors in upscale pockets",
    founded: "2016",
    headquarters: "Sector 23A, Gurgaon",
    about:
      "Royal Floors builds premium, low-density independent floors in the quiet, upscale pockets of Sector 23A and Palam Vihar. The firm targets quality-conscious families with spacious layouts and private terraces.",
    achievements: [
      "Premium, low-density floor designs",
      "Spacious 3 & 4 BHK layouts",
      "Quality-led construction approach",
    ],
    completed: 12,
    ongoing: 5,
    awards: ["Premium Floor Developer — Sector 23A"],
    signatureProjects: ["Royal Floors 23A"],
    accent: "#9C7232",
  },
  {
    slug: "elite-estates",
    name: "Elite Estates",
    tagline: "Scarce plots in Gurgaon's premium colonies",
    founded: "2009",
    headquarters: "Palam Vihar, Gurgaon",
    about:
      "Elite Estates deals in scarce, clear-title residential plots within Gurgaon's most established premium colonies. The firm is known for prime locations and meticulous title verification.",
    achievements: [
      "Specialists in premium-colony plots",
      "Meticulous title due-diligence",
      "Prime, sought-after locations",
    ],
    completed: 10,
    ongoing: 3,
    awards: ["Trusted Plot Specialist — Palam Vihar"],
    signatureProjects: ["Elite Plots Palam Vihar"],
    accent: "#1E3559",
  },
  {
    slug: "metro-homes",
    name: "Metro Homes",
    tagline: "Modern gated flats with flexible payment plans",
    founded: "2017",
    headquarters: "Sector 21, Gurgaon",
    about:
      "Metro Homes develops modern gated-community flats in the well-connected sectors of Old Gurgaon, offering contemporary amenities and construction-linked payment plans for first-time buyers and investors.",
    achievements: [
      "Modern gated-community flats",
      "Flexible, construction-linked payment plans",
      "Amenity-rich, well-connected projects",
    ],
    completed: 8,
    ongoing: 4,
    awards: ["Emerging Apartment Developer — Gurgaon"],
    signatureProjects: ["Metro Heights"],
    accent: "#9C7232",
  },
];

export const DEVELOPER_LOGOS = [
  "Vihar Constructions",
  "Capital Builders",
  "Green Acre Developers",
  "Urban Nest Builders",
  "Heritage Homes",
  "Royal Floors",
  "Elite Estates",
  "Metro Homes",
];

export function getDeveloper(slug: string) {
  return DEVELOPERS.find((d) => d.slug === slug);
}
