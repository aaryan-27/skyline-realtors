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
  expressway: "/photos/p085.jpg",
  skyline: "/photos/p086.jpg",
  city: "/photos/p090.jpg",
};

export const LOCATIONS: Location[] = [
  {
    slug: "palam-vihar",
    name: "Palam Vihar",
    shortName: "Palam Vihar",
    tagline: "Gurgaon's most established premium residential colony",
    avgPrice: "Rs.9,000 – Rs.13,000 /sq.ft.",
    rentalYield: "3.0 – 3.6%",
    growthPotential: "Very High",
    infraRating: 4.6,
    overview:
      "Palam Vihar is one of Gurgaon's most sought-after and well-planned residential colonies, known for its leafy avenues, independent builder floors, plots and a strong sense of community. Its proximity to Dwarka Expressway and IGI Airport, combined with established social infrastructure, makes it a perennial favourite for end-users and investors looking for premium builder floors and clear-title plots.",
    connectivity: [
      "Direct access to Dwarka Expressway & NH-48",
      "~20 minutes to IGI Airport",
      "Quick link to Delhi via Dwarka",
      "Close to proposed metro connectivity",
    ],
    infrastructure: [
      "Wide internal roads & green avenues",
      "Established markets and community centres",
      "Reliable power, water and sewage networks",
      "Mature, end-user-driven neighbourhood",
    ],
    schools: ["The Shri Ram School", "Delhi Public School", "Salwan Public School", "St. Xavier's High School"],
    hospitals: ["Columbia Asia Hospital", "Aarvy Hospital", "Park Hospital", "Mayom Hospital"],
    malls: ["Sapphire Ninety Mall", "Ansal Plaza", "Vipul Trade Centre", "Raheja Mall (nearby)"],
    priceTrend: [
      { year: "2021", price: 7200 },
      { year: "2022", price: 8100 },
      { year: "2023", price: 9300 },
      { year: "2024", price: 10800 },
      { year: "2025", price: 12000 },
    ],
    futureGrowth: [
      "Dwarka Expressway proximity lifting demand",
      "Limited fresh land keeping builder floors in demand",
      "Steady end-user-driven appreciation",
    ],
    investmentAnalysis:
      "Palam Vihar combines the stability of an established colony with the upside of Dwarka Expressway proximity. Independent builder floors here enjoy strong, consistent demand from families, while clear-title plots remain a scarce, appreciating asset — making it one of the safest premium micro-markets in Gurgaon.",
    heroImage: "/photos/p085.jpg",
    faqs: [
      {
        q: "Is Palam Vihar a good place to buy property in 2026?",
        a: "Yes. Palam Vihar is an established premium colony with strong end-user demand, excellent connectivity to Dwarka Expressway and IGI Airport, and limited new supply — supporting steady appreciation for builder floors and plots.",
      },
      {
        q: "What types of property are available in Palam Vihar?",
        a: "Palam Vihar primarily offers independent builder floors, residential plots and a few group-housing flats, ranging from compact 2 BHK floors to large 4 BHK floors and sizeable plots.",
      },
      {
        q: "What is the average price in Palam Vihar?",
        a: "Builder floors typically trade at roughly Rs.9,000–Rs.13,000 per sq.ft. depending on the block, floor and condition, while plots are priced per square yard based on size and location.",
      },
    ],
  },
  {
    slug: "palam-vihar-extension",
    name: "Palam Vihar Extension",
    shortName: "Palam Vihar Ext.",
    tagline: "Newer pockets with value pricing and strong upside",
    avgPrice: "Rs.7,500 – Rs.10,500 /sq.ft.",
    rentalYield: "3.2 – 3.9%",
    growthPotential: "High",
    infraRating: 4.2,
    overview:
      "Palam Vihar Extension covers the newer, developing pockets adjoining the main colony. With more accessible pricing on builder floors and plots, it offers buyers an entry point into the Palam Vihar catchment with strong appreciation potential as infrastructure matures and Dwarka Expressway connectivity strengthens.",
    connectivity: [
      "Adjoining Dwarka Expressway corridor",
      "Easy access to NH-48 and Old Gurgaon",
      "Close to IGI Airport via Dwarka",
      "Connected to main Palam Vihar amenities",
    ],
    infrastructure: [
      "Developing sector roads and utilities",
      "Growing builder-floor and plot supply",
      "Proximity to established Palam Vihar markets",
      "Improving social infrastructure",
    ],
    schools: ["Salwan Public School", "St. Xavier's High School", "Blue Bells Public School"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Columbia Asia Hospital"],
    malls: ["Sapphire Ninety Mall", "Ansal Plaza", "Vipul Trade Centre"],
    priceTrend: [
      { year: "2021", price: 5800 },
      { year: "2022", price: 6600 },
      { year: "2023", price: 7600 },
      { year: "2024", price: 8900 },
      { year: "2025", price: 9900 },
    ],
    futureGrowth: [
      "Value pricing relative to main Palam Vihar",
      "Dwarka Expressway-led demand spillover",
      "Infrastructure maturity raising desirability",
    ],
    investmentAnalysis:
      "Palam Vihar Extension is the value play for buyers who want a Palam Vihar address at a more accessible price. As the area's infrastructure matures and Dwarka Expressway demand spills over, early buyers of builder floors and plots here are well positioned for healthy appreciation.",
    heroImage: "/photos/p097.jpg",
    faqs: [
      {
        q: "How is Palam Vihar Extension different from Palam Vihar?",
        a: "Palam Vihar Extension covers the newer, still-developing pockets adjoining the main colony, offering more accessible pricing on builder floors and plots with strong upside as infrastructure matures.",
      },
      {
        q: "Is Palam Vihar Extension good for investment?",
        a: "Yes — its lower entry pricing, proximity to Dwarka Expressway and connection to the established Palam Vihar catchment make it attractive for value-focused, medium-term investors.",
      },
    ],
  },
  {
    slug: "sector-21",
    name: "Sector 21",
    shortName: "Sector 21",
    tagline: "Well-connected HUDA sector with strong rental demand",
    avgPrice: "Rs.8,000 – Rs.11,500 /sq.ft.",
    rentalYield: "3.4 – 4.1%",
    growthPotential: "High",
    infraRating: 4.3,
    overview:
      "Sector 21 is a well-established HUDA sector adjoining Palam Vihar, popular for its independent builder floors, organised layout and excellent connectivity to Old Gurgaon and Dwarka Expressway. With strong rental demand from professionals and families, it offers a dependable balance of livability and steady returns.",
    connectivity: [
      "Adjoins Palam Vihar and Old Gurgaon",
      "Quick access to Dwarka Expressway & NH-48",
      "Well-served by city bus and auto network",
      "~25 minutes to IGI Airport",
    ],
    infrastructure: [
      "Organised HUDA sector grid",
      "Local markets and daily-needs retail",
      "Established power and water supply",
      "Parks and community facilities",
    ],
    schools: ["Salwan Public School", "DAV Public School", "St. Xavier's High School"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Mayom Hospital"],
    malls: ["Ansal Plaza", "Sapphire Ninety Mall", "City Centre (nearby)"],
    priceTrend: [
      { year: "2021", price: 6200 },
      { year: "2022", price: 7000 },
      { year: "2023", price: 8100 },
      { year: "2024", price: 9500 },
      { year: "2025", price: 10600 },
    ],
    futureGrowth: [
      "Strong, consistent rental demand",
      "Connectivity-led appreciation",
      "Limited fresh supply supporting prices",
    ],
    investmentAnalysis:
      "Sector 21 offers established-sector stability with reliable rental income and steady appreciation. Its proximity to Palam Vihar and Dwarka Expressway, combined with consistent end-user demand, makes it a dependable choice for both home buyers and income-focused investors.",
    heroImage: "/photos/p079.jpg",
    faqs: [
      {
        q: "Why invest in Sector 21 Gurgaon?",
        a: "Sector 21 combines an organised HUDA layout, strong rental demand and excellent connectivity to Palam Vihar, Old Gurgaon and Dwarka Expressway — making it a balanced choice for end-users and investors.",
      },
    ],
  },
  {
    slug: "sector-22",
    name: "Sector 22",
    shortName: "Sector 22",
    tagline: "Vibrant, established sector at the heart of Old Gurgaon",
    avgPrice: "Rs.7,800 – Rs.11,000 /sq.ft.",
    rentalYield: "3.5 – 4.2%",
    growthPotential: "High",
    infraRating: 4.3,
    overview:
      "Sector 22 is a vibrant, fully-established sector in Old Gurgaon with a bustling HUDA market, independent builder floors and excellent everyday convenience. Its central location, strong social infrastructure and high rental demand make it one of the most liveable and rentable micro-markets in the area — and home to our own office.",
    connectivity: [
      "Central Old Gurgaon location",
      "Close to Palam Vihar and Sector 21/23",
      "Easy access to NH-48 and Dwarka Expressway",
      "Well-connected by public transport",
    ],
    infrastructure: [
      "Busy HUDA market with daily-needs retail",
      "Schools, clinics and banks within reach",
      "Established power and water networks",
      "Parks and community spaces",
    ],
    schools: ["DAV Public School", "Salwan Public School", "Government Senior Secondary School"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Rotary Public Clinic"],
    malls: ["HUDA Market Sector 22", "Ansal Plaza", "Sapphire Ninety Mall"],
    priceTrend: [
      { year: "2021", price: 6000 },
      { year: "2022", price: 6800 },
      { year: "2023", price: 7900 },
      { year: "2024", price: 9200 },
      { year: "2025", price: 10300 },
    ],
    futureGrowth: [
      "Central location ensuring durable demand",
      "High, stable rental yields",
      "Steady end-user-driven appreciation",
    ],
    investmentAnalysis:
      "Sector 22 is a fully-matured micro-market where everyday convenience and central connectivity drive durable demand. Builder floors here command strong, stable rentals, making it ideal for income-focused investors as well as families wanting a settled, well-serviced neighbourhood.",
    heroImage: "/photos/p090.jpg",
    faqs: [
      {
        q: "Is Sector 22 Gurgaon good for end-users?",
        a: "Yes. Sector 22 is a central, fully-established sector with a busy market, schools, hospitals and excellent connectivity — offering strong livability and high rental demand for builder floors and flats.",
      },
    ],
  },
  {
    slug: "sector-23",
    name: "Sector 23",
    shortName: "Sector 23",
    tagline: "Family-friendly sector with builder floors and plots",
    avgPrice: "Rs.7,500 – Rs.10,800 /sq.ft.",
    rentalYield: "3.4 – 4.1%",
    growthPotential: "High",
    infraRating: 4.2,
    overview:
      "Sector 23 is a peaceful, family-oriented HUDA sector offering a healthy mix of independent builder floors, plots and group-housing flats. With wide roads, green spaces and proximity to Palam Vihar and Dwarka Expressway, it appeals to buyers seeking spacious homes and clear-title plots at attractive pricing.",
    connectivity: [
      "Adjoins Palam Vihar and Sector 22",
      "Quick access to Dwarka Expressway & NH-48",
      "Connected to Old Gurgaon amenities",
      "~25 minutes to IGI Airport",
    ],
    infrastructure: [
      "Organised HUDA sector planning",
      "Local markets and schools",
      "Parks and wide internal roads",
      "Reliable utilities and services",
    ],
    schools: ["St. Xavier's High School", "Salwan Public School", "DAV Public School"],
    hospitals: ["Aarvy Hospital", "Park Hospital", "Columbia Asia Hospital"],
    malls: ["Sapphire Ninety Mall", "Ansal Plaza", "HUDA Market Sector 23"],
    priceTrend: [
      { year: "2021", price: 5700 },
      { year: "2022", price: 6500 },
      { year: "2023", price: 7600 },
      { year: "2024", price: 8900 },
      { year: "2025", price: 10000 },
    ],
    futureGrowth: [
      "Spacious homes and plots in demand",
      "Connectivity-led appreciation",
      "Family-oriented, stable neighbourhood",
    ],
    investmentAnalysis:
      "Sector 23 offers spacious builder floors and scarce clear-title plots at attractive pricing in a settled, family-friendly setting. Its proximity to Palam Vihar and Dwarka Expressway supports steady appreciation, making it a strong choice for both end-users and long-term investors.",
    heroImage: "/photos/p095.jpg",
    faqs: [
      {
        q: "What property types are available in Sector 23 Gurgaon?",
        a: "Sector 23 offers independent builder floors, residential plots and group-housing flats — from compact 2 BHK floors to large 4 BHK floors and sizeable plots.",
      },
    ],
  },
  {
    slug: "dwarka-expressway",
    name: "Dwarka Expressway",
    shortName: "Dwarka Expressway",
    tagline: "Gurgaon's fastest-growing corridor, minutes from Palam Vihar",
    avgPrice: "Rs.11,000 – Rs.16,000 /sq.ft.",
    rentalYield: "3.0 – 3.8%",
    growthPotential: "Very High",
    infraRating: 4.6,
    overview:
      "The Dwarka Expressway is Gurgaon's fastest-appreciating real estate corridor, connecting Dwarka in Delhi to NH-48 and running right alongside Palam Vihar. Now operational, it offers premium high-rise apartments, builder floors and plots with outstanding connectivity to IGI Airport and Delhi — making it a top choice for both end-users and appreciation-focused investors.",
    connectivity: [
      "Direct access to IGI Airport (~15 mins)",
      "Seamless link to Delhi via Dwarka",
      "Adjoins Palam Vihar and Sectors 21–23",
      "NH-48 & Central Peripheral Road connectivity",
    ],
    infrastructure: [
      "16-lane access-controlled expressway (operational)",
      "Premium high-rise and builder-floor supply",
      "Upcoming metro connectivity along the corridor",
      "New retail, schools and social infrastructure",
    ],
    schools: ["Delhi Public School", "GD Goenka", "St. Xavier's High School", "Euro International"],
    hospitals: ["Aarvy Hospital", "Genesis Hospital", "Park Hospital", "Columbia Asia Hospital"],
    malls: ["Sapphire Ninety Mall", "Elan Miracle", "M3M Capital Walk", "AIPL Joy Street"],
    priceTrend: [
      { year: "2021", price: 8500 },
      { year: "2022", price: 10200 },
      { year: "2023", price: 12000 },
      { year: "2024", price: 14000 },
      { year: "2025", price: 15500 },
    ],
    futureGrowth: [
      "Full operationalisation driving strong appreciation",
      "Metro connectivity to further boost demand",
      "Spillover demand from established Palam Vihar",
    ],
    investmentAnalysis:
      "The Dwarka Expressway offers one of the strongest appreciation stories in Gurgaon. Running alongside Palam Vihar with airport-quick connectivity and infrastructure now delivered, it appeals to buyers who want modern homes and investors seeking capital growth — a natural extension of our core Palam Vihar market.",
    heroImage: "/photos/p086.jpg",
    faqs: [
      {
        q: "Is Dwarka Expressway a good place to invest in 2026?",
        a: "Yes. With the expressway now operational, airport-quick connectivity and metro planned, Dwarka Expressway offers some of the highest appreciation potential in Gurgaon, right next to established Palam Vihar.",
      },
      {
        q: "What property types are available on Dwarka Expressway?",
        a: "The corridor offers premium high-rise apartments, independent builder floors and residential plots across a range of budgets and possession timelines.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
