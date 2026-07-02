export type PropertyCategory =
  | "Flats"
  | "Builder Floors"
  | "Plots"
  | "Commercial";

export type PossessionStatus =
  | "Ready to Move"
  | "Under Construction"
  | "New Launch"
  | "Pre-Launch";

export type Project = {
  slug: string;
  name: string;
  builder: string;
  builderSlug: string;
  location: string;
  locationSlug: string;
  category: PropertyCategory;
  type: string; // e.g. "3 & 4 BHK Builder Floors"
  priceFrom: number; // INR
  priceTo?: number;
  pricePerSqft?: number;
  possession: PossessionStatus;
  possessionDate: string;
  rera?: string;
  featured: boolean;
  tags: string[];
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  configurations: { type: string; area: string; price: string }[];
  about: string;
  rentalYield?: string; // commercial
  expectedRoi?: string; // commercial
};

// Real property photography from our Palam Vihar / Sector 21–23 listings.
const IMG = {
  floor1: "/photos/p086.jpg",
  floor2: "/photos/p029.jpg",
  flat1: "/photos/p095.jpg",
  flat2: "/photos/p016.jpg",
  lobby: "/photos/p069.jpg",
  interior: "/photos/p090.jpg",
  plot: "/photos/p079.jpg",
  commercial: "/photos/p085.jpg",
  retail: "/photos/p045.jpg",
};

const FLOOR_AMENITIES = [
  "Stilt + Covered Parking",
  "Modular Kitchen",
  "Branded Lift",
  "Power Backup",
  "24x7 Gated Security",
  "Premium Fittings & Fixtures",
  "Private Terrace (top floor)",
  "Park-facing Options",
];

const PLOT_FEATURES = [
  "Clear, Verified Title",
  "Wide Frontage Plots",
  "Ready for Construction",
  "Gated Residential Pocket",
  "Underground Utilities",
  "Park & Green Spaces Nearby",
];

export const PROJECTS: Project[] = [
  {
    slug: "vihar-greens-floors",
    name: "Vihar Greens Floors",
    builder: "Vihar Constructions",
    builderSlug: "vihar-constructions",
    location: "Palam Vihar",
    locationSlug: "palam-vihar",
    category: "Builder Floors",
    type: "3 & 4 BHK Builder Floors",
    priceFrom: 25_000_000,
    priceTo: 45_000_000,
    pricePerSqft: 15000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "RC/REP/HARERA/GGM/2023/PV/04",
    featured: true,
    tags: ["Builder Floor", "Palam Vihar", "Ready to Move"],
    heroImage: IMG.floor1,
    gallery: [IMG.floor1, IMG.interior, IMG.lobby, IMG.flat1],
    highlights: [
      "Premium independent floors in the heart of Palam Vihar",
      "Spacious 3 & 4 BHK layouts with private terrace options",
      "Park-facing units with stilt + covered parking",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor · 250 sq.yd.", area: "2,000 sq.ft.", price: "Rs.2.5 Cr*" },
      { type: "4 BHK Floor · 360 sq.yd.", area: "2,600 sq.ft.", price: "Rs.3.25 Cr*" },
      { type: "4 BHK Floor · 520 sq.yd.", area: "3,600 sq.ft.", price: "Rs.4.5 Cr*" },
    ],
    about:
      "Vihar Greens Floors offers premium, ready-to-move independent builder floors in one of Palam Vihar's most established blocks. With spacious layouts, quality fittings and park-facing options, they are ideal for families wanting a settled home in a leafy, well-connected colony.",
  },
  {
    slug: "capital-residency",
    name: "Capital Residency",
    builder: "Capital Builders",
    builderSlug: "capital-builders",
    location: "Sector 23, Gurgaon",
    locationSlug: "sector-23",
    category: "Flats",
    type: "3 & 4 BHK Flats",
    priceFrom: 25_000_000,
    priceTo: 38_000_000,
    pricePerSqft: 14000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/520/252/2022/S23/11",
    featured: true,
    tags: ["Flats", "Sector 23", "Family Living"],
    heroImage: IMG.flat1,
    gallery: [IMG.flat1, IMG.interior, IMG.lobby, IMG.flat2],
    highlights: [
      "Spacious 3 & 4 BHK flats in a premium gated society",
      "Family-friendly Sector 23 location with green spaces",
      "Reserved parking, lift and 24x7 security",
    ],
    amenities: [
      "Reserved Parking",
      "Lift",
      "Power Backup",
      "24x7 Security",
      "Landscaped Garden",
      "Children's Play Area",
      "Community Hall",
    ],
    configurations: [
      { type: "3 BHK", area: "1,850 sq.ft.", price: "Rs.2.5 Cr*" },
      { type: "3 BHK + Study", area: "2,100 sq.ft.", price: "Rs.2.9 Cr*" },
      { type: "4 BHK", area: "2,600 sq.ft.", price: "Rs.3.6 Cr*" },
    ],
    about:
      "Capital Residency is a ready-to-move gated society in Sector 23, offering spacious, well-laid-out 3 & 4 BHK flats. With green spaces, daily-needs convenience and strong rental demand, it suits both first-time buyers and income-focused investors.",
  },
  {
    slug: "green-acre-plots",
    name: "Green Acre Plots",
    builder: "Green Acre Developers",
    builderSlug: "green-acre",
    location: "Palam Vihar Extension",
    locationSlug: "palam-vihar-extension",
    category: "Plots",
    type: "Residential Plots",
    priceFrom: 40_000_000,
    priceTo: 90_000_000,
    pricePerSqft: 0,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/498/230/2022/PVX/07",
    featured: true,
    tags: ["Plots", "Clear Title", "Palam Vihar Extension"],
    heroImage: IMG.plot,
    gallery: [IMG.plot, IMG.floor1, IMG.commercial, IMG.flat2],
    highlights: [
      "Clear-title residential plots ready for construction",
      "Wide frontage in a gated residential pocket",
      "Strong appreciation as the area matures",
    ],
    amenities: PLOT_FEATURES,
    configurations: [
      { type: "Plot · 360 sq.yd.", area: "360 sq.yd.", price: "Rs.4.0 Cr*" },
      { type: "Plot · 520 sq.yd.", area: "520 sq.yd.", price: "Rs.5.5 Cr*" },
      { type: "Corner Plot · 720 sq.yd.", area: "720 sq.yd.", price: "Rs.8.5 Cr*" },
    ],
    about:
      "Green Acre Plots offers a rare set of clear-title residential plots in Palam Vihar Extension — ideal for building your own home or holding as a high-appreciation land asset. Each plot comes with verified title, wide frontage and ready access to utilities.",
  },
  {
    slug: "urban-nest-floors-sector-21",
    name: "Urban Nest Floors",
    builder: "Urban Nest Builders",
    builderSlug: "urban-nest",
    location: "Sector 21, Gurgaon",
    locationSlug: "sector-21",
    category: "Builder Floors",
    type: "3 & 4 BHK Builder Floors",
    priceFrom: 25_000_000,
    priceTo: 36_000_000,
    pricePerSqft: 14500,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/505/237/2022/S21/09",
    featured: true,
    tags: ["Builder Floor", "Sector 21", "High Rental Demand"],
    heroImage: IMG.floor2,
    gallery: [IMG.floor2, IMG.interior, IMG.lobby, IMG.flat1],
    highlights: [
      "Independent 3 & 4 BHK floors in a well-connected HUDA sector",
      "Strong, consistent rental demand from professionals",
      "Modular kitchens and premium fittings",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor · 270 sq.yd.", area: "2,100 sq.ft.", price: "Rs.2.5 Cr*" },
      { type: "3 BHK Floor · 300 sq.yd.", area: "2,300 sq.ft.", price: "Rs.2.9 Cr*" },
      { type: "4 BHK Floor · 360 sq.yd.", area: "2,600 sq.ft.", price: "Rs.3.25 Cr*" },
    ],
    about:
      "Urban Nest Floors brings well-built independent 3 & 4 BHK builder floors to Sector 21, an established HUDA sector adjoining Palam Vihar. With strong rental demand and excellent connectivity, these floors work equally well for end-users and investors.",
  },
  {
    slug: "heritage-homes-sector-22",
    name: "Heritage Homes Sector 22",
    builder: "Heritage Homes",
    builderSlug: "heritage-homes",
    location: "Sector 22, Gurgaon",
    locationSlug: "sector-22",
    category: "Builder Floors",
    type: "3 & 4 BHK Builder Floors",
    priceFrom: 25_000_000,
    priceTo: 37_000_000,
    pricePerSqft: 14000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/470/210/2021/S22/05",
    featured: true,
    tags: ["Builder Floor", "Sector 22", "Central Location"],
    heroImage: IMG.floor1,
    gallery: [IMG.floor1, IMG.lobby, IMG.interior, IMG.flat2],
    highlights: [
      "Central Sector 22 location with everyday convenience",
      "Spacious 3 & 4 BHK floors with premium finishes",
      "Walking distance to HUDA market and schools",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor · 250 sq.yd.", area: "1,950 sq.ft.", price: "Rs.2.5 Cr*" },
      { type: "4 BHK Floor · 300 sq.yd.", area: "2,300 sq.ft.", price: "Rs.3.0 Cr*" },
      { type: "4 BHK Floor · 360 sq.yd.", area: "2,600 sq.ft.", price: "Rs.3.7 Cr*" },
    ],
    about:
      "Heritage Homes Sector 22 offers premium independent builder floors in a central, fully-established part of Old Gurgaon. With a busy market, schools and clinics at the doorstep, these floors enjoy outstanding livability and high rental demand.",
  },
  {
    slug: "royal-floors-23a",
    name: "Royal Floors 23A",
    builder: "Royal Floors",
    builderSlug: "royal-floors",
    location: "Sector 23A, Gurgaon",
    locationSlug: "sector-23a",
    category: "Builder Floors",
    type: "3 & 4 BHK Builder Floors",
    priceFrom: 32_500_000,
    priceTo: 45_000_000,
    pricePerSqft: 16000,
    possession: "New Launch",
    possessionDate: "Mar 2027",
    rera: "GGM/2024/Pending",
    featured: true,
    tags: ["Builder Floor", "Sector 23A", "New Launch"],
    heroImage: IMG.floor2,
    gallery: [IMG.floor2, IMG.interior, IMG.flat1, IMG.lobby],
    highlights: [
      "Premium floors in a quiet, upscale Sector 23A pocket",
      "Spacious 3 & 4 BHK layouts with private terraces",
      "Low-density, low-traffic streetscape",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor · 300 sq.yd.", area: "2,300 sq.ft.", price: "Rs.3.25 Cr*" },
      { type: "4 BHK Floor · 360 sq.yd.", area: "2,700 sq.ft.", price: "Rs.3.9 Cr*" },
      { type: "4 BHK Floor · 520 sq.yd.", area: "3,600 sq.ft.", price: "Rs.4.5 Cr*" },
    ],
    about:
      "Royal Floors 23A is a new-launch collection of premium builder floors in the calm, upscale Sector 23A. Early-stage pricing, spacious layouts and a low-density setting make it attractive for quality-conscious families and long-term investors alike.",
  },
  {
    slug: "elite-plots-palam-vihar",
    name: "Elite Plots Palam Vihar",
    builder: "Elite Estates",
    builderSlug: "elite-estates",
    location: "Palam Vihar",
    locationSlug: "palam-vihar",
    category: "Plots",
    type: "Residential Plots",
    priceFrom: 42_500_000,
    priceTo: 100_000_000,
    pricePerSqft: 0,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/460/205/2021/PV/03",
    featured: false,
    tags: ["Plots", "Premium Colony", "Clear Title"],
    heroImage: IMG.plot,
    gallery: [IMG.plot, IMG.floor2, IMG.lobby, IMG.commercial],
    highlights: [
      "Scarce clear-title plots in established Palam Vihar",
      "Build a bespoke home in a premium colony",
      "Strong, stable land appreciation",
    ],
    amenities: PLOT_FEATURES,
    configurations: [
      { type: "Plot · 360 sq.yd.", area: "360 sq.yd.", price: "Rs.4.25 Cr*" },
      { type: "Plot · 520 sq.yd.", area: "520 sq.yd.", price: "Rs.6.0 Cr*" },
      { type: "Plot · 800 sq.yd.", area: "800 sq.yd.", price: "Rs.9.5 Cr*" },
    ],
    about:
      "Elite Plots Palam Vihar offers a rare opportunity to own land in one of Gurgaon's most established premium colonies. With clear titles and prime locations, these plots are perfect for building a custom home or holding as a scarce, appreciating asset.",
  },
  {
    slug: "metro-heights-sector-21",
    name: "Metro Heights",
    builder: "Metro Homes",
    builderSlug: "metro-homes",
    location: "Sector 21, Gurgaon",
    locationSlug: "sector-21",
    category: "Flats",
    type: "3 & 4 BHK Flats",
    priceFrom: 25_000_000,
    priceTo: 33_000_000,
    pricePerSqft: 13500,
    possession: "Under Construction",
    possessionDate: "Dec 2026",
    rera: "GGM/610/342/2023/S21/14",
    featured: false,
    tags: ["Flats", "Sector 21", "Under Construction"],
    heroImage: IMG.flat2,
    gallery: [IMG.flat2, IMG.interior, IMG.lobby, IMG.flat1],
    highlights: [
      "Modern 3 & 4 BHK flats in a premium gated community",
      "Construction-linked payment plan available",
      "Close to markets, schools and transport",
    ],
    amenities: [
      "Covered Parking",
      "Lift",
      "Power Backup",
      "24x7 Security",
      "Gymnasium",
      "Landscaped Garden",
      "Community Hall",
    ],
    configurations: [
      { type: "3 BHK", area: "1,900 sq.ft.", price: "Rs.2.5 Cr*" },
      { type: "3 BHK + Study", area: "2,150 sq.ft.", price: "Rs.2.85 Cr*" },
      { type: "4 BHK", area: "2,500 sq.ft.", price: "Rs.3.25 Cr*" },
    ],
    about:
      "Metro Heights is an under-construction gated community in Sector 21, offering modern 3 & 4 BHK flats with a construction-linked payment plan. Its established location and amenities make it a sensible choice for end-users and patient investors.",
  },
  {
    slug: "green-acre-floors-sector-23",
    name: "Green Acre Floors",
    builder: "Green Acre Developers",
    builderSlug: "green-acre",
    location: "Sector 23, Gurgaon",
    locationSlug: "sector-23",
    category: "Builder Floors",
    type: "3 & 4 BHK Builder Floors",
    priceFrom: 26_000_000,
    priceTo: 38_000_000,
    pricePerSqft: 14000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/512/244/2022/S23/12",
    featured: false,
    tags: ["Builder Floor", "Sector 23", "Park-facing"],
    heroImage: IMG.floor1,
    gallery: [IMG.floor1, IMG.interior, IMG.flat1, IMG.lobby],
    highlights: [
      "Spacious 3 & 4 BHK floors in family-friendly Sector 23",
      "Park-facing units with private terraces",
      "Quiet, green, well-planned surroundings",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor · 270 sq.yd.", area: "2,150 sq.ft.", price: "Rs.2.6 Cr*" },
      { type: "4 BHK Floor · 360 sq.yd.", area: "2,600 sq.ft.", price: "Rs.3.25 Cr*" },
      { type: "4 BHK Floor · 400 sq.yd.", area: "2,900 sq.ft.", price: "Rs.3.8 Cr*" },
    ],
    about:
      "Green Acre Floors delivers spacious, ready-to-move 3 & 4 BHK builder floors in the peaceful, green setting of Sector 23. With park-facing options and a family-friendly neighbourhood, they are a strong choice for end-users seeking a settled home.",
  },
  {
    slug: "urban-nest-plots-sector-23a",
    name: "Urban Nest Plots",
    builder: "Urban Nest Builders",
    builderSlug: "urban-nest",
    location: "Sector 23A, Gurgaon",
    locationSlug: "sector-23a",
    category: "Plots",
    type: "Residential Plots",
    priceFrom: 40_000_000,
    priceTo: 85_000_000,
    pricePerSqft: 0,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/488/222/2022/S23A/08",
    featured: false,
    tags: ["Plots", "Sector 23A", "Clear Title"],
    heroImage: IMG.plot,
    gallery: [IMG.plot, IMG.floor2, IMG.commercial, IMG.flat2],
    highlights: [
      "Clear-title plots in a quiet, upscale Sector 23A pocket",
      "Build your own home in a low-density setting",
      "Stable land appreciation with limited supply",
    ],
    amenities: PLOT_FEATURES,
    configurations: [
      { type: "Plot · 360 sq.yd.", area: "360 sq.yd.", price: "Rs.4.0 Cr*" },
      { type: "Plot · 520 sq.yd.", area: "520 sq.yd.", price: "Rs.5.5 Cr*" },
      { type: "Corner Plot · 650 sq.yd.", area: "650 sq.yd.", price: "Rs.7.5 Cr*" },
    ],
    about:
      "Urban Nest Plots offers clear-title residential plots in the calm, low-density Sector 23A. Ideal for building a bespoke home or holding as a scarce land asset, each plot comes with verified title and ready access to utilities.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function projectsByCategory(category: PropertyCategory) {
  return PROJECTS.filter((p) => p.category === category);
}

export function projectsByDeveloper(builderSlug: string) {
  return PROJECTS.filter((p) => p.builderSlug === builderSlug);
}

export function projectsByLocation(locationSlug: string) {
  return PROJECTS.filter((p) => p.locationSlug === locationSlug);
}

export const COMMERCIAL_PROJECTS = PROJECTS.filter(
  (p) => p.category === "Commercial"
);

export const RESIDENTIAL_PROJECTS = PROJECTS.filter(
  (p) =>
    p.category === "Flats" ||
    p.category === "Builder Floors" ||
    p.category === "Plots"
);
