export type Location = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  avgPrice: string; // Rs. per sq.ft.
  rentalYield: string;
  growthPotential: "Very High" | "High" | "Moderate";
  infraRating: number; // out of 5
  overview: string;
  connectivity: string[];
  infrastructure: string[];
  schools: string[];
  hospitals: string[];
  malls: string[];
  priceTrend: { year: string; price: number }[]; // Rs./sqft
  futureGrowth: string[];
  investmentAnalysis: string;
  heroImage: string;
  faqs: { q: string; a: string }[];
};

// Confirmed architecture/skyline imagery (placeholders — swap with real
// corridor photography for production).
const HERO = {
  expressway:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  skyline:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
  city:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
};

export const LOCATIONS: Location[] = [
  {
    slug: "dwarka-expressway",
    name: "Dwarka Expressway",
    shortName: "Dwarka Expressway",
    tagline: "Gurugram's fastest-appreciating real estate corridor",
    avgPrice: "Rs.12,000 – Rs.16,000 /sq.ft.",
    rentalYield: "3.0 – 3.8%",
    growthPotential: "Very High",
    infraRating: 4.7,
    overview:
      "The 27-km Dwarka Expressway (NH-248BB) is the single biggest growth driver in Gurugram real estate. Now fully operational, it connects Dwarka in Delhi to NH-48 near Kherki Daula, slashing travel time to IGI Airport and central Delhi. The corridor is home to marquee launches from DLF, M3M, Sobha, Experion and Smart World, making it the top choice for capital-appreciation-focused investors.",
    connectivity: [
      "Direct access to IGI Airport (~15 mins)",
      "Seamless link to Delhi via Dwarka Sector 21",
      "Upcoming Metro extension along the corridor",
      "NH-48 & Central Peripheral Road connectivity",
    ],
    infrastructure: [
      "16-lane access-controlled expressway (operational)",
      "Diplomatic Enclave-II and convention centre nearby",
      "ISBT & multi-modal transit hub at Dwarka",
      "Wide internal sector roads & utility ducts",
    ],
    schools: ["Delhi Public School", "GD Goenka", "St. Xavier's High School", "Euro International"],
    hospitals: ["Aarvy Hospital", "Genesis Hospital", "Manipal Hospital (upcoming)", "Park Hospital"],
    malls: ["Elan The Mark", "Reach The Bazaar", "M3M Capital Walk", "AIPL Joy Street"],
    priceTrend: [
      { year: "2021", price: 7800 },
      { year: "2022", price: 9200 },
      { year: "2023", price: 11000 },
      { year: "2024", price: 13500 },
      { year: "2025", price: 15200 },
    ],
    futureGrowth: [
      "Full operationalisation driving 18–22% annual appreciation",
      "Metro connectivity to further boost rentals",
      "Global School & Diplomatic Enclave-II demand uplift",
    ],
    investmentAnalysis:
      "Dwarka Expressway offers the strongest capital-appreciation story in NCR. Early investors have seen prices nearly double since 2021. With infrastructure now delivered, the corridor is transitioning from speculative to end-user-driven demand — historically the phase with the most durable price growth.",
    heroImage: HERO.expressway,
    faqs: [
      {
        q: "Is Dwarka Expressway a good investment in 2026?",
        a: "Yes. With the expressway now fully operational and metro connectivity planned, Dwarka Expressway continues to offer some of the highest appreciation potential in Gurugram, backed by marquee developers and improving end-user demand.",
      },
      {
        q: "What is the average price on Dwarka Expressway?",
        a: "Premium under-construction apartments trade at roughly Rs.12,000–Rs.16,000 per sq.ft., varying by developer, sector and project stage.",
      },
      {
        q: "Which developers have projects on Dwarka Expressway?",
        a: "DLF, M3M, Sobha, Experion, Smart World, BPTP and Elan all have flagship residential or commercial developments along the corridor.",
      },
    ],
  },
  {
    slug: "new-gurgaon",
    name: "New Gurgaon",
    shortName: "New Gurgaon",
    tagline: "Planned sectors with value pricing and strong upside",
    avgPrice: "Rs.9,000 – Rs.13,000 /sq.ft.",
    rentalYield: "3.2 – 4.0%",
    growthPotential: "High",
    infraRating: 4.3,
    overview:
      "New Gurgaon spans the well-planned sectors 76–95 along the Pataudi Road and NH-48 belt. With wide roads, organised sector planning and a growing commercial base, New Gurgaon offers a compelling balance of value pricing and appreciation, anchored by integrated townships and SCO commercial hubs.",
    connectivity: [
      "Direct NH-48 (Delhi–Jaipur) frontage",
      "Close to Dwarka Expressway interchange",
      "Pataudi Road & KMP Expressway access",
      "Proposed metro and ISBT links",
    ],
    infrastructure: [
      "Organised sector grid with wide roads",
      "Growing SCO & high-street commercial belt",
      "Vatika, Vatika India Next & integrated townships",
      "Robust utility & water infrastructure",
    ],
    schools: ["Vatika International", "DPS Sector 84", "Royal Oak International", "St. Xavier's"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Signature Hospital", "Mayom Hospital"],
    malls: ["Elan Imperial", "Vatika Town Square", "M3M Market 84", "Raheja Mall (nearby)"],
    priceTrend: [
      { year: "2021", price: 6200 },
      { year: "2022", price: 7100 },
      { year: "2023", price: 8400 },
      { year: "2024", price: 10200 },
      { year: "2025", price: 11800 },
    ],
    futureGrowth: [
      "SCO commercial boom driving footfall and value",
      "Spillover demand from Dwarka Expressway pricing",
      "New township completions improving livability",
    ],
    investmentAnalysis:
      "New Gurgaon is the value play for investors priced out of Golf Course Road and Dwarka Expressway. Strong sector planning, an emerging commercial ecosystem and continued township delivery support steady appreciation with attractive entry points.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "Where exactly is New Gurgaon?",
        a: "New Gurgaon broadly covers the planned sectors 76–95 along NH-48 and Pataudi Road, including Sectors 82, 83, 84, 85, 88 and 89.",
      },
      {
        q: "Is New Gurgaon good for end-users?",
        a: "Yes. With organised infrastructure, schools, hospitals and a growing commercial base, New Gurgaon offers strong livability at more accessible pricing than central Gurugram.",
      },
    ],
  },
  {
    slug: "sector-84",
    name: "Sector 84",
    shortName: "Sector 84",
    tagline: "Established township living in the heart of New Gurgaon",
    avgPrice: "Rs.9,500 – Rs.12,500 /sq.ft.",
    rentalYield: "3.3 – 4.0%",
    growthPotential: "High",
    infraRating: 4.2,
    overview:
      "Sector 84 sits at the core of New Gurgaon within the Vatika India Next township. With established residential communities, an emerging SCO commercial belt and excellent NH-48 connectivity, Sector 84 is a balanced micro-market for both end-users and investors — minutes from our DLF Privana Amraj Infra office in nearby Sector 76.",
    connectivity: [
      "Direct connectivity to NH-48 & Pataudi Road",
      "Minutes from Dwarka Expressway interchange",
      "Vatika India Next internal road network",
      "Close to proposed metro corridor",
    ],
    infrastructure: [
      "Vatika India Next integrated township",
      "Emerging SCO & retail high-street",
      "Schools and daily-needs retail in place",
      "Reliable power and water infrastructure",
    ],
    schools: ["DPS Sector 84", "Vatika International", "Royal Oak International"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Signature Hospital"],
    malls: ["M3M Market 84", "Vatika Town Square", "Elan Imperial (Sec 82)"],
    priceTrend: [
      { year: "2021", price: 6000 },
      { year: "2022", price: 6900 },
      { year: "2023", price: 8200 },
      { year: "2024", price: 9800 },
      { year: "2025", price: 11200 },
    ],
    futureGrowth: [
      "SCO commercial development boosting footfall",
      "Township maturity improving rental demand",
      "Connectivity upgrades raising desirability",
    ],
    investmentAnalysis:
      "Sector 84 offers established-township stability with continued upside from commercial development and improving connectivity. It's a dependable entry point for investors seeking both rental income and steady appreciation.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "Why invest in Sector 84 Gurugram?",
        a: "Sector 84 combines an established township (Vatika India Next), an emerging SCO commercial belt and strong NH-48/Dwarka Expressway connectivity, making it a balanced choice for end-users and investors.",
      },
    ],
  },
  {
    slug: "sector-85",
    name: "Sector 85",
    shortName: "Sector 85",
    tagline: "Connected, planned and primed for appreciation",
    avgPrice: "Rs.9,000 – Rs.12,000 /sq.ft.",
    rentalYield: "3.2 – 3.9%",
    growthPotential: "High",
    infraRating: 4.1,
    overview:
      "Sector 85 in New Gurgaon enjoys strong connectivity to NH-48 and the Dwarka Expressway, with a healthy mix of mid-premium residential projects and a developing commercial ecosystem. Its balanced pricing makes it attractive for investors seeking growth corridors.",
    connectivity: [
      "Quick access to NH-48 & Dwarka Expressway",
      "Pataudi Road connectivity",
      "Close to New Gurgaon commercial hubs",
    ],
    infrastructure: [
      "Planned sector grid with wide roads",
      "Mid-premium residential supply",
      "Emerging retail and SCO belt nearby",
    ],
    schools: ["DPS Sector 84", "Vatika International", "Euro International"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Mayom Hospital"],
    malls: ["M3M Market 84", "Vatika Town Square"],
    priceTrend: [
      { year: "2021", price: 5800 },
      { year: "2022", price: 6700 },
      { year: "2023", price: 7900 },
      { year: "2024", price: 9400 },
      { year: "2025", price: 10800 },
    ],
    futureGrowth: [
      "Spillover from Dwarka Expressway pricing",
      "Commercial development raising desirability",
      "Improving social infrastructure",
    ],
    investmentAnalysis:
      "Sector 85 offers an attractive entry price with appreciation tied to New Gurgaon's broader growth and Dwarka Expressway spillover demand — well-suited to medium-term investors.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "Is Sector 85 a good area to buy property?",
        a: "Yes — Sector 85 offers planned infrastructure, mid-premium pricing and strong connectivity to NH-48 and Dwarka Expressway, supporting steady appreciation.",
      },
    ],
  },
  {
    slug: "sector-88",
    name: "Sector 88",
    shortName: "Sector 88",
    tagline: "Premium New Gurgaon living with commercial upside",
    avgPrice: "Rs.9,500 – Rs.13,000 /sq.ft.",
    rentalYield: "3.2 – 3.9%",
    growthPotential: "High",
    infraRating: 4.2,
    overview:
      "Sector 88 is among the more premium New Gurgaon sectors, with quality residential developments and proximity to major commercial and SCO hubs. Its strong road network and developer interest make it a sought-after micro-market.",
    connectivity: [
      "NH-48 and Dwarka Expressway access",
      "Internal township connectivity",
      "Close to commercial high-streets",
    ],
    infrastructure: [
      "Premium residential clusters",
      "Adjacent SCO and retail belts",
      "Established social infrastructure",
    ],
    schools: ["DPS Sector 84", "Vatika International", "St. Xavier's"],
    hospitals: ["Aarvy Hospital", "Signature Hospital", "Park Hospital"],
    malls: ["M3M Market 84", "Elan Imperial", "Vatika Town Square"],
    priceTrend: [
      { year: "2021", price: 6300 },
      { year: "2022", price: 7300 },
      { year: "2023", price: 8600 },
      { year: "2024", price: 10300 },
      { year: "2025", price: 11900 },
    ],
    futureGrowth: [
      "Premium positioning supporting rentals",
      "Commercial growth boosting footfall",
      "Continued developer investment",
    ],
    investmentAnalysis:
      "Sector 88 blends premium residential demand with commercial upside, making it a strong choice for investors targeting both rental yield and appreciation in New Gurgaon.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "What property types are available in Sector 88?",
        a: "Sector 88 offers premium apartments, builder floors and proximity to SCO commercial plots and retail high-streets.",
      },
    ],
  },
  {
    slug: "sector-89",
    name: "Sector 89",
    shortName: "Sector 89",
    tagline: "Value-driven growth sector in New Gurgaon",
    avgPrice: "Rs.8,800 – Rs.12,000 /sq.ft.",
    rentalYield: "3.3 – 4.1%",
    growthPotential: "High",
    infraRating: 4.0,
    overview:
      "Sector 89 offers attractive entry pricing in New Gurgaon with solid connectivity and a growing residential base. Its proximity to commercial hubs and the Dwarka Expressway interchange supports a healthy appreciation outlook.",
    connectivity: [
      "NH-48 and Pataudi Road access",
      "Close to Dwarka Expressway interchange",
      "New Gurgaon internal road network",
    ],
    infrastructure: [
      "Growing residential supply",
      "Nearby SCO and retail development",
      "Developing social infrastructure",
    ],
    schools: ["DPS Sector 84", "Vatika International", "Royal Oak International"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Mayom Hospital"],
    malls: ["M3M Market 84", "Vatika Town Square"],
    priceTrend: [
      { year: "2021", price: 5600 },
      { year: "2022", price: 6500 },
      { year: "2023", price: 7700 },
      { year: "2024", price: 9200 },
      { year: "2025", price: 10600 },
    ],
    futureGrowth: [
      "Attractive entry pricing with upside",
      "Commercial development nearby",
      "Connectivity-led appreciation",
    ],
    investmentAnalysis:
      "Sector 89 is a value-focused growth sector, appealing to investors who want a lower entry point while still benefiting from New Gurgaon's connectivity and commercial momentum.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "Is Sector 89 good for first-time investors?",
        a: "Yes — Sector 89 offers lower entry pricing with strong connectivity and appreciation potential, making it suitable for first-time and value-focused investors.",
      },
    ],
  },
  {
    slug: "sector-90",
    name: "Sector 90",
    shortName: "Sector 90",
    tagline: "Emerging New Gurgaon sector with long-term potential",
    avgPrice: "Rs.8,500 – Rs.11,500 /sq.ft.",
    rentalYield: "3.3 – 4.1%",
    growthPotential: "Moderate",
    infraRating: 3.9,
    overview:
      "Sector 90 is an emerging New Gurgaon sector with developing residential and commercial supply. Backed by planned infrastructure and connectivity to NH-48, it offers patient investors a low entry point with long-term upside.",
    connectivity: [
      "NH-48 & Pataudi Road access",
      "New Gurgaon internal connectivity",
      "Proximity to commercial belts",
    ],
    infrastructure: [
      "Planned sector layout",
      "Developing residential clusters",
      "Upcoming social infrastructure",
    ],
    schools: ["DPS Sector 84", "Vatika International"],
    hospitals: ["Aarvy Hospital", "Park Hospital"],
    malls: ["M3M Market 84", "Vatika Town Square"],
    priceTrend: [
      { year: "2021", price: 5300 },
      { year: "2022", price: 6100 },
      { year: "2023", price: 7200 },
      { year: "2024", price: 8600 },
      { year: "2025", price: 9900 },
    ],
    futureGrowth: [
      "Long-term infrastructure-led growth",
      "Low entry pricing",
      "Spillover demand from adjacent sectors",
    ],
    investmentAnalysis:
      "Sector 90 suits patient, long-horizon investors. As New Gurgaon matures, early entrants here stand to benefit from infrastructure delivery and spillover demand.",
    heroImage: HERO.city,
    faqs: [
      {
        q: "What is the growth outlook for Sector 90?",
        a: "Sector 90 offers long-term potential as New Gurgaon's infrastructure matures, with low entry pricing and steady, connectivity-led appreciation.",
      },
    ],
  },
  {
    slug: "golf-course-extension-road",
    name: "Golf Course Extension Road",
    shortName: "Golf Course Ext Rd",
    tagline: "Gurugram's premium luxury residential address",
    avgPrice: "Rs.15,000 – Rs.22,000 /sq.ft.",
    rentalYield: "2.8 – 3.5%",
    growthPotential: "Very High",
    infraRating: 4.6,
    overview:
      "Golf Course Extension Road (Sectors 58–67) is one of Gurugram's most prestigious luxury corridors, home to flagship projects from DLF, M3M and Godrej. With excellent connectivity, premium social infrastructure and strong rental demand from senior executives, it commands some of the highest prices in the city.",
    connectivity: [
      "Direct link to Golf Course Road & NH-48",
      "Rapid Metro & proposed metro extension",
      "Close to Sohna Road and SPR",
      "Quick access to Cyber City & Udyog Vihar",
    ],
    infrastructure: [
      "Premium gated communities & high-streets",
      "Upscale retail and dining destinations",
      "Top schools and multispeciality hospitals",
      "Wide arterial road with signal-free stretches",
    ],
    schools: ["DPS International", "Pathways", "Heritage Xperiential", "Lancers International"],
    hospitals: ["Medanta", "Artemis", "Park Hospital", "Columbia Asia"],
    malls: ["AIPL Joy Central", "M3M Cosmopolitan", "Worldmark", "South Point Mall (nearby)"],
    priceTrend: [
      { year: "2021", price: 10500 },
      { year: "2022", price: 12500 },
      { year: "2023", price: 15000 },
      { year: "2024", price: 18500 },
      { year: "2025", price: 21000 },
    ],
    futureGrowth: [
      "Sustained luxury demand from senior executives",
      "Metro extension to lift accessibility & value",
      "Limited new supply supporting price strength",
    ],
    investmentAnalysis:
      "Golf Course Extension Road is the blue-chip luxury corridor of Gurugram. Limited premium supply, top-tier infrastructure and durable executive demand make it a wealth-preservation play with reliable appreciation and prestige value.",
    heroImage: HERO.skyline,
    faqs: [
      {
        q: "Why is Golf Course Extension Road so premium?",
        a: "It combines flagship luxury projects, top schools and hospitals, signal-free connectivity and strong executive rental demand — supporting some of the highest prices in Gurugram.",
      },
      {
        q: "What is the price range on Golf Course Extension Road?",
        a: "Premium residences typically range from Rs.15,000 to Rs.22,000+ per sq.ft. depending on developer and project.",
      },
    ],
  },
  {
    slug: "spr-road",
    name: "SPR Road",
    shortName: "SPR Road",
    tagline: "The next big infrastructure-led growth corridor",
    avgPrice: "Rs.11,000 – Rs.15,000 /sq.ft.",
    rentalYield: "3.0 – 3.7%",
    growthPotential: "Very High",
    infraRating: 4.4,
    overview:
      "The Southern Peripheral Road (SPR) connects Golf Course Extension Road to NH-48 and Sohna Road, and is being upgraded into a major signal-free corridor. With large new launches from Signature Global, M3M and others, SPR is emerging as one of Gurugram's highest-potential investment belts.",
    connectivity: [
      "Links Golf Course Ext Rd, Sohna Rd & NH-48",
      "Planned signal-free 90-metre corridor",
      "Close to proposed metro alignment",
      "Quick access to commercial hubs",
    ],
    infrastructure: [
      "Major road-widening & flyover upgrades",
      "Large land parcels for new launches",
      "Emerging premium residential supply",
      "Growing commercial & SCO interest",
    ],
    schools: ["DPS International", "Heritage Xperiential", "Euro International"],
    hospitals: ["Medanta", "Artemis", "Park Hospital"],
    malls: ["AIPL Joy Central", "M3M Cosmopolitan", "Airia Mall (nearby)"],
    priceTrend: [
      { year: "2021", price: 7000 },
      { year: "2022", price: 8300 },
      { year: "2023", price: 9900 },
      { year: "2024", price: 12000 },
      { year: "2025", price: 13800 },
    ],
    futureGrowth: [
      "Signal-free corridor upgrade driving re-rating",
      "Large new luxury launches raising the benchmark",
      "Metro proposal to boost long-term value",
    ],
    investmentAnalysis:
      "SPR Road is in the early innings of an infrastructure-led re-rating. As road upgrades complete and premium launches set new benchmarks, early investors are positioned for strong appreciation — similar to Dwarka Expressway's earlier trajectory.",
    heroImage: HERO.expressway,
    faqs: [
      {
        q: "What makes SPR Road a good investment?",
        a: "SPR is being upgraded into a signal-free corridor linking premium markets, with large new luxury launches — positioning it for strong infrastructure-led appreciation.",
      },
    ],
  },
  {
    slug: "sohna-road",
    name: "Sohna Road",
    shortName: "Sohna Road",
    tagline: "Established connectivity with steady, end-user demand",
    avgPrice: "Rs.10,000 – Rs.14,000 /sq.ft.",
    rentalYield: "3.2 – 4.0%",
    growthPotential: "High",
    infraRating: 4.2,
    overview:
      "Sohna Road is a mature, well-connected corridor linking Gurugram to the Sohna elevated highway and KMP Expressway. With an established residential base, strong commercial presence and reliable rental demand, it offers dependable returns and steady appreciation.",
    connectivity: [
      "Sohna elevated highway & KMP Expressway",
      "Direct link to Golf Course Ext Rd & NH-48",
      "Close to Cyber Hub & Sohna industrial belt",
      "Proposed metro connectivity",
    ],
    infrastructure: [
      "Established residential & commercial mix",
      "Signal-free elevated Sohna highway",
      "Strong retail and office presence",
      "Mature social infrastructure",
    ],
    schools: ["GD Goenka", "KR Mangalam", "Alpine Convent"],
    hospitals: ["Park Hospital", "Medanta (nearby)", "Aarvy Hospital"],
    malls: ["Omaxe Gurgaon Mall", "Good Earth City Centre", "Airia Mall"],
    priceTrend: [
      { year: "2021", price: 6800 },
      { year: "2022", price: 7800 },
      { year: "2023", price: 9100 },
      { year: "2024", price: 10800 },
      { year: "2025", price: 12400 },
    ],
    futureGrowth: [
      "Sohna elevated highway boosting accessibility",
      "KMP & industrial growth lifting demand",
      "Steady end-user-driven appreciation",
    ],
    investmentAnalysis:
      "Sohna Road offers a balance of established infrastructure and ongoing connectivity upgrades. Reliable rental demand and steady appreciation make it a lower-risk choice for income-focused investors.",
    heroImage: HERO.expressway,
    faqs: [
      {
        q: "Is Sohna Road good for rental income?",
        a: "Yes — Sohna Road's established residential and commercial base supports reliable rental demand and steady yields, ideal for income-focused investors.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
