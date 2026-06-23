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
  "Buying Guides",
  "Builder Floors",
  "Plots & Land",
  "Locality Guides",
  "Selling Tips",
  "Property News",
];

const COVER = {
  market: "/photos/p085.jpg",
  guide: "/photos/p069.jpg",
  floors: "/photos/p086.jpg",
  plots: "/photos/p079.jpg",
  locality: "/photos/p090.jpg",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "palam-vihar-builder-floors-guide-2026",
    title: "Buying a Builder Floor in Palam Vihar: A 2026 Guide",
    category: "Buying Guides",
    excerpt:
      "From choosing the right block and floor to checking titles and negotiating price, here's everything you need to know before buying a builder floor in Palam Vihar.",
    author: "Skyline Realtors",
    date: "2026-05-28",
    readTime: "8 min read",
    cover: COVER.floors,
    tags: ["Palam Vihar", "Builder Floors", "Buying Guide"],
    content: [
      {
        body: "Palam Vihar has long been one of Gurgaon's most desirable residential colonies, and independent builder floors here remain in steady demand. If you're planning to buy, a little homework goes a long way toward getting the right home at the right price.",
      },
      {
        heading: "Choosing the right block and floor",
        body: "Palam Vihar is divided into several blocks, each with its own character, road width and proximity to markets and schools. Ground floors offer parking and garden access, while top floors usually come with a private terrace. Middle floors tend to be the most affordable. Park-facing and corner units carry a premium for good reason — they're easier to live in and to resell.",
      },
      {
        heading: "Title checks that actually matter",
        body: "Always verify the chain of title, the building plan sanction and the occupancy/completion status before paying any token. For builder floors, confirm that the floor has been legally divided and registered. At Skyline Realtors, we run these checks on every floor we deal in, so you never buy a property with paperwork surprises.",
      },
      {
        heading: "Getting the price right",
        body: "Builder floors in Palam Vihar typically trade around Rs.9,000–Rs.13,000 per sq.ft. depending on the block, floor and finish quality. Knowing recent transaction prices in the exact block is the single biggest advantage in a negotiation — and it's exactly the kind of on-ground data we provide.",
      },
    ],
  },
  {
    slug: "builder-floor-vs-flat-gurgaon",
    title: "Builder Floor vs Flat in Gurgaon: Which Should You Buy?",
    category: "Market Insights",
    excerpt:
      "Independent builder floors and gated-society flats each have their place. We compare ownership, privacy, amenities, maintenance and resale to help you decide.",
    author: "Skyline Realtors",
    date: "2026-05-15",
    readTime: "7 min read",
    cover: COVER.market,
    tags: ["Builder Floors", "Flats", "Comparison"],
    content: [
      {
        body: "One of the first decisions a Gurgaon home buyer faces is whether to buy an independent builder floor or a flat in a gated society. Both are excellent options — they just suit different priorities.",
      },
      {
        heading: "The case for a builder floor",
        body: "A builder floor gives you more privacy, more space for the money and often a private terrace. With typically just three or four floors per building, there's no crowding, no waiting for lifts and far lower monthly maintenance. In established colonies like Palam Vihar and Sectors 21–23, builder floors also tend to hold their value well.",
      },
      {
        heading: "The case for a flat",
        body: "A gated-society flat offers shared amenities — security, power backup, a clubhouse, parks and play areas — along with a stronger sense of community and managed maintenance. Flats can also be easier to rent out to professionals who value security and amenities.",
      },
      {
        heading: "Our verdict",
        body: "If you value space, privacy and lower running costs, a builder floor is hard to beat. If you prefer managed amenities and community living, a flat may suit you better. Many of our clients weigh both before deciding — and we're happy to show you options side by side.",
      },
    ],
  },
  {
    slug: "investing-in-plots-palam-vihar-sectors",
    title: "Why Residential Plots in Palam Vihar Are a Smart Long-Term Asset",
    category: "Plots & Land",
    excerpt:
      "Land is scarce in established colonies — and that scarcity is exactly what makes clear-title plots in Palam Vihar and Sectors 21–23 such a dependable investment.",
    author: "Skyline Realtors",
    date: "2026-04-30",
    readTime: "6 min read",
    cover: COVER.plots,
    tags: ["Plots", "Palam Vihar", "Investment"],
    content: [
      {
        body: "Among all property types, residential plots remain one of the most reliable long-term assets — and in established Gurgaon colonies, they're increasingly hard to come by.",
      },
      {
        heading: "Scarcity drives value",
        body: "Palam Vihar, Palam Vihar Extension and Sectors 21–23 are largely built out, which means fresh plots rarely come to market. This limited supply, combined with steady demand from buyers who want to build a custom home, supports stable, long-term appreciation.",
      },
      {
        heading: "Build now or hold",
        body: "A plot gives you flexibility most other assets don't. You can build a bespoke home to your exact needs, or simply hold the land as it appreciates. Either way, with no construction to age and no maintenance to worry about, a plot is a low-hassle asset.",
      },
      {
        heading: "Title is everything",
        body: "With plots, clear title and verified ownership are non-negotiable. We deal only in plots with a clean chain of title, sanctioned layout and proper approvals — so your investment is protected from day one.",
      },
    ],
  },
  {
    slug: "sectors-21-22-23-locality-guide",
    title: "A Buyer's Guide to Sectors 21, 22 & 23 in Old Gurgaon",
    category: "Locality Guides",
    excerpt:
      "Three established sectors, three slightly different personalities. Here's how Sectors 21, 22 and 23 compare on pricing, connectivity, schools and rental demand.",
    author: "Skyline Realtors",
    date: "2026-04-12",
    readTime: "9 min read",
    cover: COVER.locality,
    tags: ["Sector 21", "Sector 22", "Sector 23", "Locality Guide"],
    content: [
      {
        body: "Adjoining Palam Vihar, the HUDA sectors of Old Gurgaon offer established infrastructure, everyday convenience and strong rental demand — at more accessible pricing than the headline-grabbing new corridors. Here's how the three compare.",
      },
      {
        heading: "Sector 21 — connected and rentable",
        body: "Sector 21 is popular for its independent builder floors, organised layout and excellent connectivity to Old Gurgaon and Dwarka Expressway. Consistent rental demand from professionals makes it a dependable choice for both end-users and investors.",
      },
      {
        heading: "Sector 22 — central and convenient",
        body: "Sector 22 sits at the heart of Old Gurgaon, with a busy HUDA market and everything you need within walking distance. Its central location drives durable demand and some of the highest rental yields in the area — it's also where our own office is located.",
      },
      {
        heading: "Sector 23 & 23A — spacious and family-friendly",
        body: "Sectors 23 and 23A offer a quieter, more spacious feel, with a healthy mix of builder floors, flats and plots. Wide roads, green spaces and proximity to Palam Vihar make them ideal for families seeking a settled home.",
      },
    ],
  },
  {
    slug: "how-to-sell-your-property-gurgaon",
    title: "How to Sell Your Property in Gurgaon at the Right Price",
    category: "Selling Tips",
    excerpt:
      "Pricing accurately, presenting well and reaching serious buyers makes all the difference. Here's how to sell your Gurgaon home without underselling it.",
    author: "Skyline Realtors",
    date: "2026-03-25",
    readTime: "6 min read",
    cover: COVER.guide,
    tags: ["Selling", "Pricing", "Gurgaon"],
    content: [
      {
        body: "Selling a home is as much about strategy as it is about price. Get the fundamentals right and you'll close faster, at a value you're genuinely happy with.",
      },
      {
        heading: "Price it on real data, not hope",
        body: "The most common mistake sellers make is pricing on aspiration rather than recent transactions. We price your property against actual deals in your exact block or sector, so it's attractive to buyers while still capturing its true value.",
      },
      {
        heading: "Present it to sell",
        body: "Small things matter: a clean, decluttered home, minor repairs and good photographs can meaningfully lift both interest and price. First impressions during a site visit often decide the deal.",
      },
      {
        heading: "Reach the right buyers",
        body: "A proven local network is what separates a quick, fair sale from a property that lingers. We bring serious, pre-qualified buyers to the table and handle negotiation, paperwork and registry end to end.",
      },
    ],
  },
  {
    slug: "old-gurgaon-price-trends-2026",
    title: "Old Gurgaon Property Price Trends: 2026 Update",
    category: "Property News",
    excerpt:
      "Our read on how builder floor, flat and plot prices are moving across Palam Vihar and Sectors 21–23 — and what it means for buyers and sellers this year.",
    author: "Skyline Realtors",
    date: "2026-06-02",
    readTime: "7 min read",
    cover: COVER.market,
    tags: ["Price Trends", "Old Gurgaon", "2026"],
    content: [
      {
        body: "The established colonies of Old Gurgaon continued their steady upward trend in 2026, supported by Dwarka Expressway connectivity and limited fresh supply. Here's our micro-market read.",
      },
      {
        heading: "Builder floors stay in demand",
        body: "Independent builder floors in Palam Vihar and Sectors 21–23 saw consistent end-user demand, with park-facing and top-floor units commanding the strongest premiums. Limited new construction continues to support prices.",
      },
      {
        heading: "Plots remain the scarcity play",
        body: "Clear-title plots are increasingly rare in these built-out colonies, and that scarcity kept land values firm. Buyers looking to build or hold continued to compete for the few plots that came to market.",
      },
      {
        heading: "What buyers and sellers should do",
        body: "With pricing now block- and floor-specific, accurate local data matters more than ever. Buyers should move decisively on well-priced, clear-title properties, while sellers benefit from precise pricing and the right buyer network — both areas where we can help.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
