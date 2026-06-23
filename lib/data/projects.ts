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
    priceFrom: 14_500_000,
    priceTo: 24_000_000,
    pricePerSqft: 11000,
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
      { type: "3 BHK Floor", area: "1,650 sq.ft.", price: "Rs.1.45 Cr*" },
      { type: "3 BHK + Study", area: "1,900 sq.ft.", price: "Rs.1.75 Cr*" },
      { type: "4 BHK Floor", area: "2,250 sq.ft.", price: "Rs.2.4 Cr*" },
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
    type: "2 & 3 BHK Flats",
    priceFrom: 8_500_000,
    priceTo: 14_000_000,
    pricePerSqft: 9000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/520/252/2022/S23/11",
    featured: true,
    tags: ["Flats", "Sector 23", "Family Living"],
    heroImage: IMG.flat1,
    gallery: [IMG.flat1, IMG.interior, IMG.lobby, IMG.flat2],
    highlights: [
      "Well-priced 2 & 3 BHK flats in a gated society",
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
      { type: "2 BHK", area: "1,050 sq.ft.", price: "Rs.85 L*" },
      { type: "3 BHK", area: "1,350 sq.ft.", price: "Rs.1.15 Cr*" },
      { type: "3 BHK + Servant", area: "1,550 sq.ft.", price: "Rs.1.4 Cr*" },
    ],
    about:
      "Capital Residency is a ready-to-move gated society in Sector 23, offering well-laid-out 2 & 3 BHK flats at attractive pricing. With green spaces, daily-needs convenience and strong rental demand, it suits both first-time buyers and income-focused investors.",
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
    priceFrom: 18_000_000,
    priceTo: 45_000_000,
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
      { type: "Plot (Standard)", area: "180 sq.yd.", price: "Rs.1.8 Cr*" },
      { type: "Plot (Large)", area: "270 sq.yd.", price: "Rs.2.7 Cr*" },
      { type: "Plot (Corner)", area: "350 sq.yd.", price: "Rs.4.5 Cr*" },
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
    type: "3 BHK Builder Floors",
    priceFrom: 11_000_000,
    priceTo: 18_000_000,
    pricePerSqft: 10000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/505/237/2022/S21/09",
    featured: true,
    tags: ["Builder Floor", "Sector 21", "High Rental Demand"],
    heroImage: IMG.floor2,
    gallery: [IMG.floor2, IMG.interior, IMG.lobby, IMG.flat1],
    highlights: [
      "Independent 3 BHK floors in a well-connected HUDA sector",
      "Strong, consistent rental demand from professionals",
      "Modular kitchens and premium fittings",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK (Lower)", area: "1,500 sq.ft.", price: "Rs.1.1 Cr*" },
      { type: "3 BHK (Middle)", area: "1,500 sq.ft.", price: "Rs.1.3 Cr*" },
      { type: "3 BHK (Top + Terrace)", area: "1,650 sq.ft.", price: "Rs.1.8 Cr*" },
    ],
    about:
      "Urban Nest Floors brings well-built independent 3 BHK builder floors to Sector 21, an established HUDA sector adjoining Palam Vihar. With strong rental demand and excellent connectivity, these floors work equally well for end-users and investors.",
  },
  {
    slug: "heritage-homes-sector-22",
    name: "Heritage Homes Sector 22",
    builder: "Heritage Homes",
    builderSlug: "heritage-homes",
    location: "Sector 22, Gurgaon",
    locationSlug: "sector-22",
    category: "Builder Floors",
    type: "2 & 3 BHK Builder Floors",
    priceFrom: 9_500_000,
    priceTo: 16_000_000,
    pricePerSqft: 9500,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/470/210/2021/S22/05",
    featured: true,
    tags: ["Builder Floor", "Sector 22", "Central Location"],
    heroImage: IMG.floor1,
    gallery: [IMG.floor1, IMG.lobby, IMG.interior, IMG.flat2],
    highlights: [
      "Central Sector 22 location with everyday convenience",
      "Compact, efficient 2 & 3 BHK floors",
      "Walking distance to HUDA market and schools",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "2 BHK Floor", area: "1,050 sq.ft.", price: "Rs.95 L*" },
      { type: "3 BHK Floor", area: "1,400 sq.ft.", price: "Rs.1.3 Cr*" },
      { type: "3 BHK (Top + Terrace)", area: "1,550 sq.ft.", price: "Rs.1.6 Cr*" },
    ],
    about:
      "Heritage Homes Sector 22 offers well-priced independent builder floors in a central, fully-established part of Old Gurgaon. With a busy market, schools and clinics at the doorstep, these floors enjoy outstanding livability and high rental demand.",
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
    priceFrom: 15_000_000,
    priceTo: 26_000_000,
    pricePerSqft: 11500,
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
      { type: "3 BHK Floor", area: "1,700 sq.ft.", price: "Rs.1.5 Cr*" },
      { type: "4 BHK Floor", area: "2,200 sq.ft.", price: "Rs.2.1 Cr*" },
      { type: "4 BHK (Top + Terrace)", area: "2,400 sq.ft.", price: "Rs.2.6 Cr*" },
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
    priceFrom: 22_000_000,
    priceTo: 60_000_000,
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
      { type: "Plot (Standard)", area: "200 sq.yd.", price: "Rs.2.2 Cr*" },
      { type: "Plot (Large)", area: "300 sq.yd.", price: "Rs.3.3 Cr*" },
      { type: "Plot (Premium)", area: "500 sq.yd.", price: "Rs.6.0 Cr*" },
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
    type: "3 BHK Flats",
    priceFrom: 10_500_000,
    priceTo: 16_500_000,
    pricePerSqft: 9200,
    possession: "Under Construction",
    possessionDate: "Dec 2026",
    rera: "GGM/610/342/2023/S21/14",
    featured: false,
    tags: ["Flats", "Sector 21", "Under Construction"],
    heroImage: IMG.flat2,
    gallery: [IMG.flat2, IMG.interior, IMG.lobby, IMG.flat1],
    highlights: [
      "Modern 3 BHK flats in a gated community",
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
      { type: "3 BHK", area: "1,400 sq.ft.", price: "Rs.1.05 Cr*" },
      { type: "3 BHK + Study", area: "1,600 sq.ft.", price: "Rs.1.35 Cr*" },
      { type: "3 BHK + Servant", area: "1,750 sq.ft.", price: "Rs.1.65 Cr*" },
    ],
    about:
      "Metro Heights is an under-construction gated community in Sector 21, offering modern 3 BHK flats with a construction-linked payment plan. Its established location and amenities make it a sensible choice for end-users and patient investors.",
  },
  {
    slug: "vihar-market-shops-sector-22",
    name: "Vihar Market Shops",
    builder: "Vihar Constructions",
    builderSlug: "vihar-constructions",
    location: "Sector 22, Gurgaon",
    locationSlug: "sector-22",
    category: "Commercial",
    type: "Retail Shops",
    priceFrom: 7_500_000,
    priceTo: 22_000_000,
    pricePerSqft: 18000,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/430/188/2021/S22/02",
    featured: false,
    tags: ["Retail Shop", "Sector 22", "Assured Footfall"],
    heroImage: IMG.retail,
    gallery: [IMG.retail, IMG.commercial, IMG.lobby, IMG.interior],
    highlights: [
      "Retail shops in the busy Sector 22 HUDA market",
      "Established footfall from a dense residential catchment",
      "Strong, stable rental demand",
    ],
    amenities: [
      "Main Market Frontage",
      "Dedicated Parking",
      "Power Backup",
      "24x7 Security",
      "High Footfall Zone",
    ],
    configurations: [
      { type: "Ground Floor Shop", area: "200 sq.ft.", price: "Rs.75 L*" },
      { type: "Ground Floor Shop", area: "400 sq.ft.", price: "Rs.1.5 Cr*" },
      { type: "Double-height Unit", area: "600 sq.ft.", price: "Rs.2.2 Cr*" },
    ],
    about:
      "Vihar Market Shops offers ready retail units in the established Sector 22 HUDA market, with assured footfall from a dense residential catchment. A dependable income asset for investors seeking stable rental yields.",
    rentalYield: "5–7% p.a.",
    expectedRoi: "9–12% p.a.",
  },
  {
    slug: "capital-square-sector-23",
    name: "Capital Square",
    builder: "Capital Builders",
    builderSlug: "capital-builders",
    location: "Sector 23, Gurgaon",
    locationSlug: "sector-23",
    category: "Commercial",
    type: "Shops & Office Units",
    priceFrom: 6_500_000,
    priceTo: 18_000_000,
    pricePerSqft: 16000,
    possession: "Under Construction",
    possessionDate: "Sep 2026",
    rera: "GGM/640/372/2023/S23/16",
    featured: false,
    tags: ["Commercial", "Sector 23", "Shops & Offices"],
    heroImage: IMG.commercial,
    gallery: [IMG.commercial, IMG.retail, IMG.lobby, IMG.interior],
    highlights: [
      "Neighbourhood shopping & office complex",
      "Mix of retail, clinics and small offices",
      "Growing residential catchment in Sector 23",
    ],
    amenities: [
      "Atrium Frontage",
      "Dedicated Parking",
      "Lift",
      "Power Backup",
      "24x7 Security",
    ],
    configurations: [
      { type: "Retail Shop", area: "250 sq.ft.", price: "Rs.65 L*" },
      { type: "Office Unit", area: "500 sq.ft.", price: "Rs.1.2 Cr*" },
      { type: "Anchor Shop", area: "800 sq.ft.", price: "Rs.1.8 Cr*" },
    ],
    about:
      "Capital Square is an under-construction neighbourhood commercial complex in Sector 23, combining retail, clinics and small offices to serve a growing residential catchment — well-suited for investors seeking long-term rental income.",
    rentalYield: "5–7% p.a.",
    expectedRoi: "9–13% p.a.",
  },
  {
    slug: "green-acre-floors-sector-23",
    name: "Green Acre Floors",
    builder: "Green Acre Developers",
    builderSlug: "green-acre",
    location: "Sector 23, Gurgaon",
    locationSlug: "sector-23",
    category: "Builder Floors",
    type: "3 BHK Builder Floors",
    priceFrom: 12_000_000,
    priceTo: 19_000_000,
    pricePerSqft: 10200,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/512/244/2022/S23/12",
    featured: false,
    tags: ["Builder Floor", "Sector 23", "Park-facing"],
    heroImage: IMG.floor1,
    gallery: [IMG.floor1, IMG.interior, IMG.flat1, IMG.lobby],
    highlights: [
      "Spacious 3 BHK floors in family-friendly Sector 23",
      "Park-facing units with private terraces",
      "Quiet, green, well-planned surroundings",
    ],
    amenities: FLOOR_AMENITIES,
    configurations: [
      { type: "3 BHK Floor", area: "1,550 sq.ft.", price: "Rs.1.2 Cr*" },
      { type: "3 BHK + Study", area: "1,750 sq.ft.", price: "Rs.1.5 Cr*" },
      { type: "3 BHK (Top + Terrace)", area: "1,850 sq.ft.", price: "Rs.1.9 Cr*" },
    ],
    about:
      "Green Acre Floors delivers spacious, ready-to-move 3 BHK builder floors in the peaceful, green setting of Sector 23. With park-facing options and a family-friendly neighbourhood, they are a strong choice for end-users seeking a settled home.",
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
    priceFrom: 20_000_000,
    priceTo: 50_000_000,
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
      { type: "Plot (Standard)", area: "200 sq.yd.", price: "Rs.2.0 Cr*" },
      { type: "Plot (Large)", area: "300 sq.yd.", price: "Rs.3.0 Cr*" },
      { type: "Plot (Corner)", area: "400 sq.yd.", price: "Rs.5.0 Cr*" },
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
