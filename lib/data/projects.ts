export type PropertyCategory =
  | "Residential"
  | "Commercial"
  | "SCO"
  | "Luxury Floors"
  | "Plots";

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
  type: string; // e.g. "3 & 4 BHK Apartments"
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

// Curated Unsplash architecture imagery (royalty-free) used as placeholders.
const IMG = {
  tower1:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
  tower2:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  tower3:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  lobby:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  interior:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
  pool:
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
  commercial:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  retail:
    "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1600&q=80",
  villa:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
};

const STD_AMENITIES = [
  "Clubhouse",
  "Infinity Pool",
  "Landscaped Gardens",
  "Gymnasium",
  "Kids' Play Area",
  "24x7 Security",
  "Power Backup",
  "Multipurpose Hall",
  "Jogging Track",
  "Spa & Sauna",
];

export const PROJECTS: Project[] = [
  {
    slug: "dlf-the-arbour",
    name: "DLF The Arbour",
    builder: "DLF",
    builderSlug: "dlf",
    location: "Sector 63, Golf Course Extension Road",
    locationSlug: "golf-course-extension-road",
    category: "Residential",
    type: "4 BHK Luxury Apartments",
    priceFrom: 70_000_000,
    priceTo: 95_000_000,
    pricePerSqft: 20500,
    possession: "Under Construction",
    possessionDate: "Dec 2028",
    rera: "RC/REP/HARERA/GGM/2023/01",
    featured: true,
    tags: ["Ultra Luxury", "Low Density", "Golf Course Ext"],
    heroImage: IMG.tower1,
    gallery: [IMG.tower1, IMG.lobby, IMG.interior, IMG.pool],
    highlights: [
      "Only 27 floors with 4 apartments per core",
      "3,950 sq.ft. expansive 4 BHK layouts",
      "5-tier security & private resident lounges",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "4 BHK + Utility", area: "3,950 sq.ft.", price: "Rs.7.0 Cr*" },
      { type: "4 BHK + Study", area: "4,200 sq.ft.", price: "Rs.8.4 Cr*" },
      { type: "Penthouse", area: "5,800 sq.ft.", price: "Rs.9.5 Cr*" },
    ],
    about:
      "DLF The Arbour is a ground-up luxury address on the Golf Course Extension Road, offering expansive 4 BHK residences with hospitality-grade amenities and DLF's institutional build quality. A blue-chip investment with strong rental demand from senior corporate executives.",
  },
  {
    slug: "m3m-crown",
    name: "M3M Crown",
    builder: "M3M",
    builderSlug: "m3m",
    location: "Sector 111, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Residential",
    type: "3 & 4 BHK Apartments",
    priceFrom: 32_500_000,
    priceTo: 55_000_000,
    pricePerSqft: 13500,
    possession: "Under Construction",
    possessionDate: "Jun 2027",
    rera: "GGM/657/389/2023/30",
    featured: true,
    tags: ["Dwarka Expressway", "Airport Proximity", "High Rise"],
    heroImage: IMG.tower2,
    gallery: [IMG.tower2, IMG.pool, IMG.interior, IMG.lobby],
    highlights: [
      "Minutes from IGI Airport via Dwarka Expressway",
      "Resort-style 2-acre central greens",
      "Sky decks on every cluster",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK", area: "2,180 sq.ft.", price: "Rs.3.25 Cr*" },
      { type: "4 BHK", area: "2,800 sq.ft.", price: "Rs.4.1 Cr*" },
      { type: "4 BHK + Servant", area: "3,250 sq.ft.", price: "Rs.5.5 Cr*" },
    ],
    about:
      "M3M Crown sits on the high-growth Dwarka Expressway, the fastest-appreciating corridor in Gurugram. With airport proximity, metro connectivity and M3M's signature lifestyle, it is a top pick for both end-users and investors seeking capital appreciation.",
  },
  {
    slug: "smart-world-one-dxp",
    name: "Smart World One DXP",
    builder: "Smart World",
    builderSlug: "smart-world",
    location: "Sector 113, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Residential",
    type: "2.5 & 3.5 BHK Smart Homes",
    priceFrom: 24_000_000,
    priceTo: 38_000_000,
    pricePerSqft: 12200,
    possession: "Under Construction",
    possessionDate: "Mar 2028",
    rera: "GGM/710/442/2023/55",
    featured: true,
    tags: ["Smart Homes", "Dwarka Expressway", "Best Value"],
    heroImage: IMG.tower3,
    gallery: [IMG.tower3, IMG.interior, IMG.pool, IMG.lobby],
    highlights: [
      "App-controlled smart-home automation",
      "Closest residential cluster to Delhi border",
      "1.5-acre rooftop amenity deck",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "2.5 BHK", area: "1,650 sq.ft.", price: "Rs.2.4 Cr*" },
      { type: "3.5 BHK", area: "2,250 sq.ft.", price: "Rs.3.1 Cr*" },
    ],
    about:
      "Smart World One DXP brings technology-forward living to the Delhi-facing edge of Dwarka Expressway. Aggressively priced with strong early-investor appreciation, it's ideal for first-time luxury buyers and rental investors.",
  },
  {
    slug: "godrej-aristocrat",
    name: "Godrej Aristocrat",
    builder: "Godrej Properties",
    builderSlug: "godrej-properties",
    location: "Sector 49, Golf Course Extension Road",
    locationSlug: "golf-course-extension-road",
    category: "Residential",
    type: "3 & 4 BHK Premium Residences",
    priceFrom: 42_000_000,
    priceTo: 68_000_000,
    pricePerSqft: 16800,
    possession: "New Launch",
    possessionDate: "Dec 2029",
    rera: "GGM/2024/Pending",
    featured: true,
    tags: ["New Launch", "Godrej Trust", "Golf Course Ext"],
    heroImage: IMG.villa,
    gallery: [IMG.villa, IMG.lobby, IMG.interior, IMG.pool],
    highlights: [
      "Backed by the 125-year-old Godrej legacy",
      "IGBC green-certified masterplan",
      "Premium Sector 49 micro-market",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK", area: "2,500 sq.ft.", price: "Rs.4.2 Cr*" },
      { type: "4 BHK", area: "3,200 sq.ft.", price: "Rs.5.6 Cr*" },
    ],
    about:
      "Godrej Aristocrat is a new-launch luxury address on Golf Course Extension Road, combining Godrej's trust and sustainability standards with a prime, established micro-market. Early-stage pricing offers strong appreciation headroom.",
  },
  {
    slug: "elan-the-mark",
    name: "Elan The Mark",
    builder: "Elan Group",
    builderSlug: "elan",
    location: "Sector 106, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Commercial",
    type: "Retail Shops & Food Court",
    priceFrom: 18_000_000,
    priceTo: 55_000_000,
    pricePerSqft: 28000,
    possession: "Under Construction",
    possessionDate: "Dec 2027",
    rera: "GGM/612/344/2022/40",
    featured: true,
    tags: ["High Street Retail", "Assured Footfall", "Dwarka Expressway"],
    heroImage: IMG.retail,
    gallery: [IMG.retail, IMG.commercial, IMG.lobby, IMG.interior],
    highlights: [
      "Designed by globally renowned architects",
      "Triple-height retail frontage",
      "Catchment of 50,000+ premium households",
    ],
    amenities: [
      "Multi-level Parking",
      "Central Atrium",
      "Food Court",
      "High-Speed Elevators",
      "24x7 Security",
      "Power Backup",
    ],
    configurations: [
      { type: "Lower Ground Retail", area: "250 sq.ft.", price: "Rs.1.8 Cr*" },
      { type: "Ground Floor Retail", area: "400 sq.ft.", price: "Rs.3.2 Cr*" },
      { type: "Food Court Unit", area: "180 sq.ft.", price: "Rs.1.5 Cr*" },
    ],
    about:
      "Elan The Mark is a landmark high-street retail destination on Dwarka Expressway with a premium residential catchment, designed for strong rental yields and footfall-driven appreciation.",
    rentalYield: "7–9% p.a.",
    expectedRoi: "12–15% p.a.",
  },
  {
    slug: "m3m-capital",
    name: "M3M Capital Walk",
    builder: "M3M",
    builderSlug: "m3m",
    location: "Sector 113, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Commercial",
    type: "Office Spaces & Retail",
    priceFrom: 9_500_000,
    priceTo: 40_000_000,
    pricePerSqft: 24500,
    possession: "Under Construction",
    possessionDate: "Sep 2027",
    rera: "GGM/640/372/2023/12",
    featured: false,
    tags: ["Office Space", "Pre-Leased Options", "Dwarka Expressway"],
    heroImage: IMG.commercial,
    gallery: [IMG.commercial, IMG.retail, IMG.lobby, IMG.interior],
    highlights: [
      "Grade-A office floor plates",
      "Pre-leased investment options available",
      "Integrated with M3M Capital residences",
    ],
    amenities: [
      "Grade-A Lobby",
      "VRV Air Conditioning",
      "High-Speed Elevators",
      "Multi-level Parking",
      "24x7 Security",
      "Cafeteria",
    ],
    configurations: [
      { type: "Virtual Office", area: "120 sq.ft.", price: "Rs.95 L*" },
      { type: "Studio Office", area: "300 sq.ft.", price: "Rs.2.4 Cr*" },
      { type: "Retail Shop", area: "350 sq.ft.", price: "Rs.3.5 Cr*" },
    ],
    about:
      "M3M Capital Walk offers Grade-A office and retail spaces within a thriving residential ecosystem, ideal for investors seeking pre-leased, assured-return commercial assets.",
    rentalYield: "6–8% p.a.",
    expectedRoi: "11–14% p.a.",
  },
  {
    slug: "signature-global-titanium-spr",
    name: "Signature Global Titanium SPR",
    builder: "Signature Global",
    builderSlug: "signature-global",
    location: "Sector 71, SPR Road",
    locationSlug: "spr-road",
    category: "Residential",
    type: "3 & 4 BHK Apartments",
    priceFrom: 28_000_000,
    priceTo: 42_000_000,
    pricePerSqft: 12800,
    possession: "New Launch",
    possessionDate: "Mar 2029",
    rera: "GGM/2024/Pending",
    featured: false,
    tags: ["SPR Road", "New Launch", "High Appreciation"],
    heroImage: IMG.tower1,
    gallery: [IMG.tower1, IMG.pool, IMG.interior, IMG.lobby],
    highlights: [
      "On the upcoming SPR (Southern Peripheral Road)",
      "Direct connectivity to Golf Course Ext & NH-48",
      "Large 3-side open layouts",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK", area: "2,050 sq.ft.", price: "Rs.2.8 Cr*" },
      { type: "4 BHK", area: "2,750 sq.ft.", price: "Rs.3.6 Cr*" },
    ],
    about:
      "Signature Global Titanium is positioned on the rapidly developing SPR Road, one of Gurugram's highest-appreciation corridors thanks to upcoming infrastructure and connectivity upgrades.",
  },
  {
    slug: "elan-imperial-sco",
    name: "Elan Imperial SCO Plots",
    builder: "Elan Group",
    builderSlug: "elan",
    location: "Sector 82, New Gurgaon",
    locationSlug: "new-gurgaon",
    category: "SCO",
    type: "SCO Commercial Plots",
    priceFrom: 75_000_000,
    priceTo: 220_000_000,
    pricePerSqft: 95000,
    possession: "Under Construction",
    possessionDate: "Dec 2026",
    rera: "GGM/598/330/2022/22",
    featured: true,
    tags: ["SCO Plots", "Freehold", "100% Ownership"],
    heroImage: IMG.retail,
    gallery: [IMG.retail, IMG.commercial, IMG.lobby, IMG.interior],
    highlights: [
      "100% ownership freehold commercial plots",
      "Build-to-suit retail + office + F&B",
      "Frontage on 24m wide sector road",
    ],
    amenities: [
      "Wide Frontage Plots",
      "Dedicated Parking",
      "Power Backup",
      "Gated Commercial Zone",
      "24x7 Security",
      "Landscaped Plaza",
    ],
    configurations: [
      { type: "SCO Plot (Standard)", area: "112 sq.yd.", price: "Rs.7.5 Cr*" },
      { type: "SCO Plot (Corner)", area: "150 sq.yd.", price: "Rs.11 Cr*" },
      { type: "SCO Plot (Anchor)", area: "300 sq.yd.", price: "Rs.22 Cr*" },
    ],
    about:
      "Elan Imperial offers freehold SCO (Shop-Cum-Office) plots in New Gurgaon — a rare 100%-ownership commercial asset class that lets investors build, lease and earn from retail, office and F&B in a high-growth catchment.",
    rentalYield: "8–10% p.a.",
    expectedRoi: "14–18% p.a.",
  },
  {
    slug: "sobha-altus",
    name: "Sobha Altus",
    builder: "Sobha Ltd",
    builderSlug: "sobha",
    location: "Sector 106, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Luxury Floors",
    type: "3 & 4 BHK Sky Villas",
    priceFrom: 48_000_000,
    priceTo: 90_000_000,
    pricePerSqft: 18900,
    possession: "Under Construction",
    possessionDate: "Jun 2028",
    rera: "GGM/655/387/2023/28",
    featured: false,
    tags: ["Sky Villas", "Best Build Quality", "Dwarka Expressway"],
    heroImage: IMG.interior,
    gallery: [IMG.interior, IMG.villa, IMG.pool, IMG.lobby],
    highlights: [
      "Sobha's backward-integrated build quality",
      "Private decks & double-height living",
      "Premium Dwarka Expressway frontage",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK Sky Villa", area: "2,600 sq.ft.", price: "Rs.4.8 Cr*" },
      { type: "4 BHK Sky Villa", area: "3,600 sq.ft.", price: "Rs.6.8 Cr*" },
    ],
    about:
      "Sobha Altus delivers Sobha's celebrated construction quality in a low-density sky-villa format on Dwarka Expressway, attracting quality-conscious end-users and discerning investors.",
  },
  {
    slug: "experion-the-trillion",
    name: "Experion The Trillion",
    builder: "Experion",
    builderSlug: "experion",
    location: "Sector 48, Sohna Road",
    locationSlug: "sohna-road",
    category: "Commercial",
    type: "Retail & SCO",
    priceFrom: 16_000_000,
    priceTo: 60_000_000,
    pricePerSqft: 26000,
    possession: "New Launch",
    possessionDate: "Dec 2028",
    rera: "GGM/2024/Pending",
    featured: false,
    tags: ["Sohna Road", "High Footfall", "New Launch"],
    heroImage: IMG.commercial,
    gallery: [IMG.commercial, IMG.retail, IMG.lobby, IMG.interior],
    highlights: [
      "Located on the established Sohna Road belt",
      "Mixed retail, F&B and office formats",
      "Dense existing residential catchment",
    ],
    amenities: [
      "Atrium Frontage",
      "Multi-level Parking",
      "Food Court",
      "High-Speed Elevators",
      "24x7 Security",
      "Power Backup",
    ],
    configurations: [
      { type: "Retail Shop", area: "300 sq.ft.", price: "Rs.2.6 Cr*" },
      { type: "SCO Unit", area: "180 sq.yd.", price: "Rs.6.0 Cr*" },
    ],
    about:
      "Experion The Trillion taps the mature Sohna Road catchment with a premium mixed-use retail format from a 100% FDI-funded developer known for low-density, high-quality builds.",
    rentalYield: "7–9% p.a.",
    expectedRoi: "12–16% p.a.",
  },
  {
    slug: "bptp-terra",
    name: "BPTP Terra",
    builder: "BPTP",
    builderSlug: "bptp",
    location: "Sector 37D, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Residential",
    type: "3 & 4 BHK Apartments",
    priceFrom: 30_000_000,
    priceTo: 46_000_000,
    pricePerSqft: 12600,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/420/152/2019/18",
    featured: false,
    tags: ["Ready to Move", "No GST", "Dwarka Expressway"],
    heroImage: IMG.tower2,
    gallery: [IMG.tower2, IMG.pool, IMG.lobby, IMG.interior],
    highlights: [
      "Ready-to-move — zero waiting, no GST",
      "Established community with full amenities",
      "Strong rental demand from professionals",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK", area: "2,150 sq.ft.", price: "Rs.3.0 Cr*" },
      { type: "4 BHK", area: "2,700 sq.ft.", price: "Rs.3.9 Cr*" },
    ],
    about:
      "BPTP Terra is a ready-to-move community on Dwarka Expressway, offering immediate possession, no GST liability and an established, fully-amenitised neighbourhood — ideal for end-users and rental investors.",
  },
  {
    slug: "ats-triumph",
    name: "ATS Triumph",
    builder: "ATS Infrastructure",
    builderSlug: "ats",
    location: "Sector 104, Dwarka Expressway",
    locationSlug: "dwarka-expressway",
    category: "Residential",
    type: "3 & 4 BHK Apartments",
    priceFrom: 34_000_000,
    priceTo: 52_000_000,
    pricePerSqft: 13200,
    possession: "Ready to Move",
    possessionDate: "Ready",
    rera: "GGM/388/120/2018/09",
    featured: false,
    tags: ["Ready to Move", "Low Density", "Family Living"],
    heroImage: IMG.villa,
    gallery: [IMG.villa, IMG.pool, IMG.interior, IMG.lobby],
    highlights: [
      "ATS's signature low-density planning",
      "Large green open spaces",
      "High end-user occupancy",
    ],
    amenities: STD_AMENITIES,
    configurations: [
      { type: "3 BHK", area: "2,300 sq.ft.", price: "Rs.3.4 Cr*" },
      { type: "4 BHK", area: "2,950 sq.ft.", price: "Rs.4.4 Cr*" },
    ],
    about:
      "ATS Triumph is a ready-to-move, low-density community on Dwarka Expressway, beloved by families for its livability, open spaces and strong, stable resale demand.",
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
  (p) => p.category === "Commercial" || p.category === "SCO"
);

export const RESIDENTIAL_PROJECTS = PROJECTS.filter(
  (p) =>
    p.category === "Residential" ||
    p.category === "Luxury Floors" ||
    p.category === "Plots"
);
