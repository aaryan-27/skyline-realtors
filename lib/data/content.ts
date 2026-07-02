// Home-page content blocks: stats, value props, testimonials.

export const STATS = [
  { value: 350, prefix: "", suffix: "+", label: "Properties Sold" },
  { value: 500, prefix: "", suffix: "+", label: "Happy Families & Investors" },
  { value: 4, prefix: "", suffix: "", label: "Prime Localities Covered" },
  { value: 4, prefix: "", suffix: "+", label: "Years of Trusted Service" },
  { value: 100, prefix: "", suffix: "%", label: "Transparent Dealings" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Title-Clear Properties Only",
    desc: "Every builder floor, flat and plot we deal in is title-verified and due-diligenced — so you buy with complete peace of mind.",
    icon: "ShieldCheck",
  },
  {
    title: "Deep Local Market Knowledge",
    desc: "Years of on-ground expertise in Palam Vihar, Sector 21, 22 and 23 means accurate pricing and the right property for your needs.",
    icon: "LineChart",
  },
  {
    title: "Transparent, Customer-First Approach",
    desc: "No hidden charges, no inflated promises — just honest guidance and fair pricing that puts your goals ahead of any one deal.",
    icon: "Handshake",
  },
  {
    title: "End-to-End Assistance",
    desc: "From site visits and shortlisting to home loans, paperwork and registry — we manage the entire buying or selling journey for you.",
    icon: "Route",
  },
  {
    title: "Best Resale & Investment Value",
    desc: "A proven sales track record helps you buy at the right price and sell your property at its true market value.",
    icon: "Scale",
  },
  {
    title: "Personalised Guidance",
    desc: "Whether it's your dream home or a smart investment, we tailor every recommendation to your budget, timeline and lifestyle.",
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
    role: "Home Buyer · Palam Vihar",
    location: "Bought a builder floor in Palam Vihar",
    rating: 5,
    quote:
      "Skyline Realtors made buying our first builder floor effortless. They handled the title check, paperwork and home loan, and never pushed us toward anything outside our budget. Completely transparent.",
    invested: "3 BHK Builder Floor · Rs.2.6 Cr",
    initials: "RM",
    videoThumb: "/photos/p029.jpg",
  },
  {
    name: "Dr. Sunita Verma",
    role: "Physician · Gurgaon",
    location: "Bought a flat in Sector 23",
    rating: 5,
    quote:
      "Their knowledge of Sector 23 was exceptional. They steered me toward a well-priced, ready-to-move flat that fit my needs perfectly. Genuine, honest advice — not just selling.",
    invested: "3 BHK Flat · Rs.2.6 Cr",
    initials: "SV",
  },
  {
    name: "Amit & Priya Khanna",
    role: "First-time Buyers",
    location: "Sector 22, Gurgaon",
    rating: 5,
    quote:
      "We had a tight budget and zero experience. The team patiently explained pricing, loan options and the registry process. We moved into our home with no surprises. Highly recommend.",
    invested: "3 BHK Builder Floor · Rs.2.9 Cr",
    initials: "AK",
  },
  {
    name: "Vikram Singh Rathore",
    role: "Investor · Gurgaon",
    location: "Bought a plot in Palam Vihar Extension",
    rating: 5,
    quote:
      "I wanted a plot with strong appreciation potential. They walked me through the locality, pricing and approvals, and got me a clear-title corner plot at a fair rate. Excellent local expertise.",
    invested: "Residential Plot · Rs.4.5 Cr",
    initials: "VR",
    videoThumb: "/photos/p095.jpg",
  },
  {
    name: "Neha Aggarwal",
    role: "IT Professional · Gurgaon",
    location: "Sold a property in Sector 21",
    rating: 5,
    quote:
      "I needed to sell my flat quickly without underselling it. Skyline Realtors priced it accurately, brought serious buyers, and closed at a value I was genuinely happy with. Smooth and honest throughout.",
    invested: "Resale · 3 BHK Flat",
    initials: "NA",
  },
  {
    name: "Colonel R.K. Sharma (Retd.)",
    role: "Defence Veteran",
    location: "Ready-to-move · Sector 23A",
    rating: 5,
    quote:
      "After decades of postings, I wanted a settled home. The team understood exactly what I needed, prioritised ready-to-move builder floors, and handled the registry seamlessly. Trustworthy and professional.",
    invested: "4 BHK Builder Floor · Rs.3.25 Cr",
    initials: "RS",
  },
];

export const MILESTONES = [
  { year: "2021", title: "Founded in Palam Vihar", desc: "Started Skyline Realtors with a simple promise — honest, customer-first property dealing in Gurgaon." },
  { year: "2022", title: "First 100 Families Served", desc: "Helped our first hundred families buy and sell builder floors and flats across Palam Vihar." },
  { year: "2023", title: "Expanded to Sectors 21, 22 & 23", desc: "Grew our expertise across Gurgaon's most established residential micro-markets." },
  { year: "2024", title: "300+ Properties Closed", desc: "Crossed three hundred successful builder floor, flat and plot transactions." },
  { year: "2025", title: "A Trusted Local Name", desc: "Recognised by hundreds of families and investors for transparency and fair dealing." },
  { year: "2026", title: "500+ Families & Investors", desc: "Continuing to raise the standard of urban living, one confident decision at a time." },
];

export const VALUES = [
  { title: "Transparency", desc: "No hidden charges, no inflated promises — only honest, straightforward guidance." },
  { title: "Client-First", desc: "Your goals come before any commission. Advice you can genuinely trust." },
  { title: "Local Expertise", desc: "On-ground knowledge of Palam Vihar, Sector 21, 22 and 23 you won't find elsewhere." },
  { title: "Long-Term Partnership", desc: "We're here for resale, your next purchase and every referral — not just one deal." },
];
