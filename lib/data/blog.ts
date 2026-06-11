export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  readTime: string;
  cover: string;
  content: { heading?: string; body: string }[];
  tags: string[];
};

export const BLOG_CATEGORIES = [
  "Market Insights",
  "Investment Guides",
  "Project Reviews",
  "Commercial Real Estate",
  "Luxury Homes",
  "Property News",
  "NRI Investments",
];

const COVER = {
  market:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  invest:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  luxury:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  commercial:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  nri:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dwarka-expressway-investment-guide-2026",
    title: "Dwarka Expressway in 2026: Is It Still a Smart Investment?",
    category: "Investment Guides",
    excerpt:
      "Now that the expressway is fully operational, we break down price trends, upcoming supply and the realistic appreciation outlook for investors entering in 2026.",
    author: "Skyline Realtors Research",
    date: "2026-05-28",
    readTime: "8 min read",
    cover: COVER.invest,
    tags: ["Dwarka Expressway", "Investment", "Price Trends"],
    content: [
      {
        body: "Dwarka Expressway has been the single most talked-about real estate corridor in NCR for the past five years — and for good reason. Prices have nearly doubled since 2021. But with the expressway now fully operational, many investors are asking: is there still room to grow?",
      },
      {
        heading: "From speculative to end-user demand",
        body: "The most important shift in 2026 is the transition from speculative buying to genuine end-user demand. Infrastructure that was once 'promised' is now delivered — the 16-lane expressway, sector roads and social infrastructure are largely in place. Historically, this is the phase where price growth becomes most durable.",
      },
      {
        heading: "What the numbers say",
        body: "Premium under-construction apartments now trade at Rs.12,000–Rs.16,000 per sq.ft. While the easy doubling phase is behind us, we project a healthy 12–16% annual appreciation over the next three years, driven by metro connectivity, possession-linked demand and limited prime supply.",
      },
      {
        heading: "Who should invest now",
        body: "Dwarka Expressway suits investors with a 3–5 year horizon seeking capital appreciation, as well as end-users wanting modern, well-connected homes near the airport. Ready-to-move options also offer immediate rental income with no GST liability.",
      },
    ],
  },
  {
    slug: "sco-plots-gurgaon-explained",
    title: "SCO Plots in Gurgaon: The Commercial Asset Everyone's Talking About",
    category: "Commercial Real Estate",
    excerpt:
      "Shop-Cum-Office plots offer 100% ownership and double-digit returns. Here's how SCO economics work and why they're outperforming traditional shops.",
    author: "Skyline Realtors Research",
    date: "2026-05-15",
    readTime: "7 min read",
    cover: COVER.commercial,
    tags: ["SCO Plots", "Commercial", "Rental Yield"],
    content: [
      {
        body: "SCO (Shop-Cum-Office) plots have quietly become one of the most sought-after commercial asset classes in Gurugram. Unlike a unit in a mall, an SCO plot gives you 100% freehold ownership of land and the building you construct on it.",
      },
      {
        heading: "Why SCO plots are different",
        body: "With an SCO plot you control the asset entirely — you decide the tenant mix (retail, office, F&B, clinics), the construction and the leasing strategy. This flexibility, combined with land ownership, typically delivers 8–10% rental yields and 14–18% total annual returns in high-growth catchments.",
      },
      {
        heading: "Where to buy",
        body: "New Gurgaon (Sectors 82–90) and Dwarka Expressway offer the strongest SCO opportunities, with developers like Elan, M3M and AIPL delivering well-planned commercial belts in dense residential catchments. Corner and anchor plots command premiums but also the highest footfall.",
      },
    ],
  },
  {
    slug: "golf-course-extension-vs-dwarka-expressway",
    title: "Golf Course Extension vs Dwarka Expressway: Where Should You Invest?",
    category: "Market Insights",
    excerpt:
      "Two of Gurugram's hottest corridors, two very different investment profiles. We compare pricing, appreciation, rental demand and buyer fit.",
    author: "Skyline Realtors Research",
    date: "2026-04-30",
    readTime: "9 min read",
    cover: COVER.market,
    tags: ["Golf Course Extension", "Dwarka Expressway", "Comparison"],
    content: [
      {
        body: "Two corridors dominate the conversation when investors think about Gurugram: Golf Course Extension Road and Dwarka Expressway. Both are excellent — but they serve very different goals.",
      },
      {
        heading: "Golf Course Extension: the blue-chip play",
        body: "GCER is the prestige address — limited supply, top schools and hospitals, and durable demand from senior executives. At Rs.15,000–Rs.22,000+ per sq.ft., it's a wealth-preservation play with steady appreciation and strong rental demand.",
      },
      {
        heading: "Dwarka Expressway: the growth play",
        body: "Dwarka Expressway offers more entry points at Rs.12,000–Rs.16,000 per sq.ft. and a stronger appreciation story, thanks to airport proximity and ongoing infrastructure delivery. It suits investors prioritising capital growth over prestige.",
      },
      {
        heading: "Our verdict",
        body: "If your priority is appreciation and you have a 3–5 year horizon, Dwarka Expressway edges ahead. If you want a trophy asset with prestige and stability, Golf Course Extension is unmatched. Many of our clients hold both for a balanced portfolio.",
      },
    ],
  },
  {
    slug: "nri-guide-buying-property-gurgaon",
    title: "The Complete NRI Guide to Buying Property in Gurgaon",
    category: "NRI Investments",
    excerpt:
      "From FEMA rules and repatriation to remote site visits and power of attorney — everything NRIs need to invest in Gurgaon with confidence.",
    author: "Skyline Realtors Research",
    date: "2026-04-12",
    readTime: "10 min read",
    cover: COVER.nri,
    tags: ["NRI", "FEMA", "Investment Guide"],
    content: [
      {
        body: "Gurugram is one of the top destinations for NRI real estate investment in India. The combination of strong appreciation, professional developers and high rental demand makes it especially attractive. But buying remotely raises valid questions.",
      },
      {
        heading: "Can NRIs buy property in Gurgaon?",
        body: "Yes. Under FEMA, NRIs and OCIs can freely purchase residential and commercial property in India (excluding agricultural land, farmhouses and plantations). Payments must be made through normal banking channels using NRE/NRO/FCNR accounts.",
      },
      {
        heading: "Repatriation of funds",
        body: "Sale proceeds of up to two residential properties can be repatriated, subject to conditions and applicable taxes. We connect you with CA and legal partners to structure your investment for smooth future repatriation.",
      },
      {
        heading: "How we make it seamless",
        body: "We offer virtual site tours, end-to-end documentation, registered Power of Attorney coordination and rental management — so you can invest, lease and manage your Gurugram property entirely from abroad.",
      },
    ],
  },
  {
    slug: "luxury-homes-gurgaon-what-buyers-want-2026",
    title: "What Luxury Home Buyers Want in Gurgaon in 2026",
    category: "Luxury Homes",
    excerpt:
      "Low density, branded residences, wellness amenities and smart automation are redefining luxury. Here's what premium buyers are prioritising now.",
    author: "Skyline Realtors Research",
    date: "2026-03-25",
    readTime: "6 min read",
    cover: COVER.luxury,
    tags: ["Luxury Homes", "Trends", "Amenities"],
    content: [
      {
        body: "Luxury in Gurugram has evolved. A decade ago, marble lobbies and a swimming pool defined premium. In 2026, buyers expect far more — and developers are responding.",
      },
      {
        heading: "Low density is the new luxury",
        body: "The biggest shift is toward low-density living: fewer apartments per acre, larger layouts and more open space. Projects like DLF The Arbour and Sobha Altus lead this trend, commanding strong premiums for exclusivity and privacy.",
      },
      {
        heading: "Wellness & smart living",
        body: "Spa-grade wellness amenities, biophilic design, air-purification and app-controlled smart-home automation are now baseline expectations in the premium segment. Branded residences are also gaining traction among ultra-luxury buyers.",
      },
    ],
  },
  {
    slug: "gurgaon-property-price-trends-q2-2026",
    title: "Gurgaon Property Price Trends: Q2 2026 Market Report",
    category: "Property News",
    excerpt:
      "Our quarterly read on Gurugram's micro-markets — which corridors are heating up, where prices are stabilising, and what it means for buyers.",
    author: "Skyline Realtors Research",
    date: "2026-06-02",
    readTime: "7 min read",
    cover: COVER.market,
    tags: ["Market Report", "Price Trends", "2026"],
    content: [
      {
        body: "Gurugram's residential market continued its upward trajectory in Q2 2026, though the pace is becoming more selective. Here's our micro-market read.",
      },
      {
        heading: "Corridors heating up",
        body: "SPR Road led gains this quarter on the back of road-widening progress and large new launches. Dwarka Expressway and Golf Course Extension remained strong on possession-linked and end-user demand.",
      },
      {
        heading: "What buyers should do",
        body: "With pricing becoming corridor-specific, project selection matters more than ever. We recommend prioritising RERA-verified projects from established developers and entering early-stage launches in infrastructure-led corridors like SPR.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
