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

export const DEVELOPERS: Developer[] = [
  {
    slug: "dlf",
    name: "DLF",
    tagline: "India's largest publicly listed real estate company",
    founded: "1946",
    headquarters: "Gurugram, Haryana",
    about:
      "DLF has shaped modern Gurugram more than any other developer — from DLF Cyber City to the luxury enclaves of DLF Camellias and The Crest. With over seven decades of delivery, DLF is synonymous with premium addresses, institutional-grade construction and unmatched capital appreciation.",
    achievements: [
      "Developed DLF Cyber City — India's largest commercial hub",
      "Pioneer of the integrated township model in Gurugram",
      "Over 158 million sq.ft. delivered across India",
    ],
    completed: 158,
    ongoing: 12,
    awards: ["CNBC Awaaz Real Estate Award", "Construction Week Developer of the Year"],
    signatureProjects: ["DLF The Camellias", "DLF The Arbour", "DLF Privana"],
    accent: "#1E3559",
  },
  {
    slug: "m3m",
    name: "M3M",
    tagline: "Magnificence in the trinity of Men, Material & Money",
    founded: "2010",
    headquarters: "Gurugram, Haryana",
    about:
      "M3M India is among the fastest-growing luxury developers in North India, known for its design-led residences and high-footfall commercial destinations along Golf Course Extension Road and Dwarka Expressway. Strong on-time delivery and aspirational branding make M3M a favourite for end-users and investors alike.",
    achievements: [
      "Second-largest real estate developer in India by sales",
      "Landmark commercial assets on Golf Course Road",
      "Award-winning architecture partnerships",
    ],
    completed: 45,
    ongoing: 18,
    awards: ["Realty+ Developer of the Year", "ET NOW Real Estate Brand"],
    signatureProjects: ["M3M Golf Estate", "M3M Crown", "M3M Capital"],
    accent: "#9C7232",
  },
  {
    slug: "smart-world",
    name: "Smart World",
    tagline: "Future-ready homes for the new generation",
    founded: "2019",
    headquarters: "Gurugram, Haryana",
    about:
      "Smart World Developers has rapidly captured the Dwarka Expressway and SPR corridors with technology-enabled, amenity-rich communities priced for the aspirational buyer. Backed by the M3M group's execution muscle, Smart World combines smart-home features with strong investment fundamentals.",
    achievements: [
      "Fastest-selling launches on Dwarka Expressway",
      "Smart-home and app-controlled living standard across projects",
      "Rs.8,000+ Cr in cumulative bookings",
    ],
    completed: 6,
    ongoing: 9,
    awards: ["Emerging Developer of the Year"],
    signatureProjects: ["Smart World One DXP", "Smart World Orchard", "Smart World The Edition"],
    accent: "#1E3559",
  },
  {
    slug: "godrej-properties",
    name: "Godrej Properties",
    tagline: "Brighter living from a 125-year-old legacy",
    founded: "1990",
    headquarters: "Mumbai, Maharashtra",
    about:
      "Godrej Properties brings the trust of the 125-year-old Godrej Group to real estate. Known for sustainable design, transparent dealings and consistent delivery, Godrej commands a premium across New Gurgaon and the Golf Course Extension corridor.",
    achievements: [
      "Among India's most trusted real estate brands",
      "GreenPro & IGBC certified developments",
      "Largest listed developer by residential sales",
    ],
    completed: 88,
    ongoing: 22,
    awards: ["Most Trusted Real Estate Brand", "IGBC Green Champion"],
    signatureProjects: ["Godrej Aristocrat", "Godrej Meridien", "Godrej Zenith"],
    accent: "#1E3559",
  },
  {
    slug: "experion",
    name: "Experion",
    tagline: "100% FDI-funded developer with a long-term vision",
    founded: "2010",
    headquarters: "Gurugram, Haryana",
    about:
      "Experion Developers is a 100% FDI-funded real estate company backed by the Experion Group of Singapore. Its developments are known for low-density planning, generous green cover and premium specifications across Dwarka Expressway and New Gurgaon.",
    achievements: [
      "100% foreign direct investment backing",
      "Low-density, high-green-cover masterplans",
      "Consistent on-time delivery track record",
    ],
    completed: 14,
    ongoing: 7,
    awards: ["Best Luxury Project — North India"],
    signatureProjects: ["Experion The Trillion", "Experion Windchants", "Experion One42"],
    accent: "#9C7232",
  },
  {
    slug: "signature-global",
    name: "Signature Global",
    tagline: "India's leading affordable & mid-premium developer",
    founded: "2014",
    headquarters: "Gurugram, Haryana",
    about:
      "Signature Global is the volume leader in Gurugram's affordable and mid-premium housing, now expanding into the premium segment along SPR and Sohna Road. A publicly listed company with strong execution and the highest number of homes delivered under DDJAY and affordable policy.",
    achievements: [
      "Largest affordable housing developer in Gurugram",
      "Publicly listed with strong governance",
      "30,000+ homes sold",
    ],
    completed: 32,
    ongoing: 20,
    awards: ["Affordable Housing Developer of the Year"],
    signatureProjects: ["Signature Global Titanium SPR", "Signature De Luxe DXP", "Signature Global City 93"],
    accent: "#1E3559",
  },
  {
    slug: "elan",
    name: "Elan Group",
    tagline: "Redefining retail & commercial experiences",
    founded: "2013",
    headquarters: "Gurugram, Haryana",
    about:
      "Elan Group has become the most sought-after name in Gurugram's luxury commercial and retail space, with marquee high-street destinations across Sector 82, Dwarka Expressway and Golf Course Extension. Elan's projects are designed by global architects and command premium leasing.",
    achievements: [
      "Highest-value commercial launches in Gurugram",
      "Global architecture collaborations",
      "Strong rental and capital appreciation history",
    ],
    completed: 9,
    ongoing: 6,
    awards: ["Commercial Project of the Year"],
    signatureProjects: ["Elan The Mark", "Elan Imperial", "Elan Empire"],
    accent: "#9C7232",
  },
  {
    slug: "bptp",
    name: "BPTP",
    tagline: "Building dreams, delivering communities",
    founded: "2003",
    headquarters: "Faridabad, Haryana",
    about:
      "BPTP is a well-established developer with a large land bank across Gurugram and Faridabad. Recent premium launches on Dwarka Expressway have repositioned BPTP as a strong contender in the luxury and upper-mid segments.",
    achievements: [
      "Large strategic land bank in NCR",
      "Integrated township experience",
      "Strong revival with premium launches",
    ],
    completed: 28,
    ongoing: 8,
    awards: ["Township of the Year — NCR"],
    signatureProjects: ["BPTP Amstoria", "BPTP Terra", "BPTP Verti Greens"],
    accent: "#1E3559",
  },
  {
    slug: "ats",
    name: "ATS Infrastructure",
    tagline: "Homes built for families, not just buyers",
    founded: "1998",
    headquarters: "Noida, Uttar Pradesh",
    about:
      "ATS is renowned for spacious, family-first residences with low density and high construction quality. In Gurugram, ATS commands a loyal end-user following for its livability, large open spaces and reliable delivery.",
    achievements: [
      "Cult following for livability and low density",
      "Consistently high construction quality ratings",
      "Strong resale demand",
    ],
    completed: 36,
    ongoing: 6,
    awards: ["Best Residential Project — End User Choice"],
    signatureProjects: ["ATS Triumph", "ATS Tourmaline", "ATS Kocoon"],
    accent: "#1E3559",
  },
  {
    slug: "sobha",
    name: "Sobha Ltd",
    tagline: "Backward-integrated, obsessively engineered",
    founded: "1995",
    headquarters: "Bengaluru, Karnataka",
    about:
      "Sobha is celebrated for its backward-integrated construction model — controlling everything from concrete to interiors — which yields some of the highest build quality in Indian real estate. Sobha's Gurugram and Sohna projects attract discerning, quality-conscious buyers.",
    achievements: [
      "Fully backward-integrated construction model",
      "Industry-leading build quality benchmarks",
      "Strong NRI investor base",
    ],
    completed: 130,
    ongoing: 15,
    awards: ["Best Quality Construction", "Most Reliable Builder"],
    signatureProjects: ["Sobha City Gurugram", "Sobha International City", "Sobha Altus"],
    accent: "#9C7232",
  },
];

export const DEVELOPER_LOGOS = [
  "DLF",
  "M3M",
  "Smart World",
  "Godrej",
  "Experion",
  "Signature Global",
  "Elan",
  "BPTP",
  "Adani",
  "Birla Estates",
  "ATS",
  "Sobha",
];

export function getDeveloper(slug: string) {
  return DEVELOPERS.find((d) => d.slug === slug);
}
