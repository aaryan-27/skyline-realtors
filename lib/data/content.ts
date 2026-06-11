// Home-page content blocks: stats, value props, testimonials.

export const STATS = [
  { value: 1000, suffix: "+ Cr", prefix: "Rs.", label: "Property Deals Closed" },
  { value: 5000, suffix: "+", label: "Happy Buyers & Investors" },
  { value: 100, suffix: "+", label: "Premium Projects" },
  { value: 50, suffix: "+", label: "Developer Partnerships" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Verified Projects Only",
    desc: "Every project we recommend is RERA-checked, title-verified and due-diligenced — so you invest with complete confidence.",
    icon: "ShieldCheck",
  },
  {
    title: "Data-Driven Market Research",
    desc: "We back every recommendation with price trends, rental data and growth analysis across Gurugram's micro-markets.",
    icon: "LineChart",
  },
  {
    title: "Direct Developer Relationships",
    desc: "Preferred-partner access to 50+ developers means best inventory, priority allotments and exclusive launch pricing.",
    icon: "Handshake",
  },
  {
    title: "End-to-End Assistance",
    desc: "From site visits and shortlisting to booking, home loans and registry — we manage the entire journey for you.",
    icon: "Route",
  },
  {
    title: "Legal & Documentation Support",
    desc: "Our legal partners verify agreements, builder-buyer terms and titles, protecting your investment at every step.",
    icon: "Scale",
  },
  {
    title: "Investment Advisory",
    desc: "Personalised advice on entry timing, exit strategy, rental yield and capital appreciation — like a wealth manager for real estate.",
    icon: "TrendingUp",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  invested: string;
  initials: string;
  videoThumb?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Malhotra",
    role: "NRI Investor · Dubai",
    location: "Invested in Dwarka Expressway",
    rating: 5,
    quote:
      "As an NRI, I was nervous about investing remotely. Crossroad Consultant Inc handled everything — verification, paperwork, even virtual site tours. My M3M apartment has already appreciated 22% in 18 months.",
    invested: "M3M Crown · Rs.4.1 Cr",
    initials: "RM",
    videoThumb:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Sunita Verma",
    role: "Physician · Gurugram",
    location: "Bought on Golf Course Ext Road",
    rating: 5,
    quote:
      "Their market research was eye-opening. They steered me away from an overpriced project toward DLF The Arbour, which fit my budget and lifestyle perfectly. Truly advisory, not just selling.",
    invested: "DLF The Arbour · Rs.7.0 Cr",
    initials: "SV",
  },
  {
    name: "Amit & Priya Khanna",
    role: "First-time Buyers",
    location: "New Gurgaon",
    rating: 5,
    quote:
      "We had a tight budget and zero experience. The team patiently explained ROI, possession risk and home-loan options. We closed on a ready-to-move home with no surprises. Highly recommend.",
    invested: "BPTP Terra · Rs.3.0 Cr",
    initials: "AK",
  },
  {
    name: "Vikram Singh Rathore",
    role: "Business Owner",
    location: "SCO Investor · Sector 82",
    rating: 5,
    quote:
      "I wanted a commercial asset with real rental income. They walked me through SCO economics and got me a corner plot at launch pricing. The leasing income now covers my EMI comfortably.",
    invested: "Elan Imperial SCO · Rs.11 Cr",
    initials: "VR",
    videoThumb:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Aggarwal",
    role: "IT Professional · Bengaluru",
    location: "Investment in SPR Road",
    rating: 5,
    quote:
      "Booked entirely online from Bengaluru. Their data on SPR's infrastructure upgrades convinced me, and the transparency throughout was refreshing. Best property consultant I've dealt with.",
    invested: "Signature Titanium · Rs.2.8 Cr",
    initials: "NA",
  },
  {
    name: "Colonel R.K. Sharma (Retd.)",
    role: "Defence Veteran",
    location: "Ready-to-move · Dwarka Expy",
    rating: 5,
    quote:
      "After decades of postings, I wanted a settled home. The team understood exactly what I needed, prioritised ready-to-move options, and handled the registry seamlessly. Trustworthy and professional.",
    invested: "ATS Triumph · Rs.3.4 Cr",
    initials: "RS",
  },
];

export const MILESTONES = [
  { year: "2014", title: "Founded in Gurugram", desc: "Started advisory operations in New Gurgaon with a focus on transparent dealing." },
  { year: "2017", title: "Rs.250 Cr in Deals", desc: "Crossed a quarter-billion in cumulative transactions across residential & commercial." },
  { year: "2019", title: "50+ Developer Tie-ups", desc: "Became a preferred partner for DLF, M3M, Godrej, Experion and more." },
  { year: "2021", title: "Dwarka Expressway Specialists", desc: "Established market leadership advising on the corridor's biggest launches." },
  { year: "2023", title: "5,000 Happy Families", desc: "Helped over five thousand buyers and investors find the right property." },
  { year: "2026", title: "Rs.1,000 Cr+ Milestone", desc: "Crossed a thousand crore in lifetime property deals advised." },
];

export const VALUES = [
  { title: "Transparency", desc: "No hidden charges, no inflated promises — only honest, data-backed guidance." },
  { title: "Client-First", desc: "Your investment goals come before any commission. Advice you can trust." },
  { title: "Deep Expertise", desc: "A decade of Gurugram-specific market knowledge across every micro-market." },
  { title: "Long-Term Partnership", desc: "We're here for resale, leasing and your next investment — not just one deal." },
];
