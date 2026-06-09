# DLF Privana Amraj Infra — Luxury Real Estate Advisory

A premium, conversion-optimised, SEO-first website for **DLF Privana Amraj Infra**, positioning the company as the most trusted real estate investment consultant for Gurgaon, New Gurgaon, Dwarka Expressway and Delhi NCR.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

---

## ✨ What's included

### Pages (55 statically-generated routes)
| Route | Description |
|---|---|
| `/` | Home — hero, animated stats, featured projects, why-us, interactive hotspots, developer marquee, testimonials, lead capture |
| `/about` | Company story, mission/vision/values, team, milestones timeline, founder message, awards, office gallery |
| `/residential` | Filterable luxury apartments, floors & plots (budget / location / builder / type / possession) |
| `/commercial` | Office, retail, SCO, food courts + **EMI & ROI calculators** + investment analysis |
| `/projects/[slug]` | 12 project detail pages — gallery + lightbox, configurations & price list, amenities, payment plan, builder, map, FAQ, sticky enquiry form |
| `/locations/[slug]` | 10 SEO location pages — overview, connectivity, infra, schools, hospitals, malls, **price-trend chart**, investment analysis, FAQs |
| `/developers/[slug]` | 10 developer pages — history, achievements, awards, signature projects, listings |
| `/blog` + `/blog/[slug]` | 6 SEO articles with categories, related posts, social sharing, newsletter |
| `/contact` | NAP, contact cards, Google Maps embed, office gallery, booking form |
| `/privacy` `/terms` `/disclaimer` | Legal pages |
| `/sitemap.xml` `/robots.txt` | Auto-generated |

### Premium features
- **Floating WhatsApp button** + **sticky mobile bottom nav** (Call / WhatsApp / Site Visit / Directions)
- **Exit-intent popup** lead magnet ("Top 10 Investment Opportunities 2026") with desktop mouse-leave + mobile scroll-depth triggers
- **EMI calculator** & **ROI/appreciation calculator** (live, investor-grade)
- Advanced **dynamic project filtering** with animated grid
- **Image gallery + lightbox** on project pages
- Scroll-reveal animations, animated counters, marquee, parallax overlays, hover micro-interactions

### SEO
- Dynamic per-page metadata, canonical URLs, Open Graph + Twitter cards
- **JSON-LD schema**: `RealEstateAgent` (LocalBusiness), `WebSite`, `BreadcrumbList`, `FAQPage`, `Product`, `Article`, geo-coordinates, aggregate rating
- Auto-generated `sitemap.xml`, `robots.txt`, favicon, apple-icon and OG image (via `next/og`)
- Location-based landing pages + internal linking for local SEO
- Semantic HTML, image `alt`s, `next/image` optimisation, Core-Web-Vitals-friendly static rendering

### Brand system
- Palette: Navy `#0B1F3A` · Gold `#CDA45E` · White · Ink `#1A1A1A` · Cloud `#F8F9FB`
- Type: **Playfair Display** (headings) + **Inter** (body) via `next/font`
- Reusable design tokens & component classes in `tailwind.config.ts` + `app/globals.css`

---

## 🚀 Getting started

```bash
npm install
cp .env.example .env.local   # fill in your keys (all optional for local dev)
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

> The site runs fully **without any env vars** — lead integrations degrade gracefully (the form still shows a success state). Add keys to switch integrations on.

---

## 🔌 Lead-capture integrations

All four run **in parallel** in `app/api/lead/route.ts` and each **fails soft** — one outage never blocks a lead.

| Integration | Env vars | Notes |
|---|---|---|
| **Supabase** (storage) | `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Run `supabase/schema.sql` to create the `leads` table |
| **WhatsApp** (notify business) | `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_BUSINESS_NUMBER` | WhatsApp Cloud API (Meta) |
| **Email** (notify) | `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` | Uses [Resend](https://resend.com) |
| **Google Sheets** (CRM) | `GOOGLE_SHEETS_WEBHOOK_URL` | Point at a Google Apps Script Web App that appends a row |

### Analytics
Set any of `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_META_PIXEL_ID` — tags only load when present. A `lead_submit` event is pushed to `dataLayer` on every form success.

---

## 🖋️ Replacing placeholder content

This is a production-ready shell wired to typed data files — swap the data, not the components.

| What | Where |
|---|---|
| Business NAP, phone, WhatsApp, social, nav | `lib/site.ts` |
| Projects (price, config, amenities, images) | `lib/data/projects.ts` |
| Developers | `lib/data/developers.ts` |
| Location/corridor SEO content + price trends | `lib/data/locations.ts` |
| Testimonials, stats, milestones, values | `lib/data/content.ts` |
| Blog posts | `lib/data/blog.ts` |
| **Hero video** | Drop `public/hero.mp4` (skyline / drone reel). A poster image shows until then. |
| **Imagery** | Currently royalty-free Unsplash placeholders. Replace with real project / corridor / office photography and update `alt` text. |

Connect the data files to a CMS (Sanity, Contentful, Supabase tables) later without touching the UI layer.

---

## 🗂️ Project structure

```
app/                 # routes, layout, metadata, API, sitemap/robots, generated icons
components/
  home/              # homepage sections
  layout/            # header, footer, floating actions, exit popup
  projects/          # project card, explorer (filters), gallery
  tools/             # EMI & ROI calculators
  forms/             # shared lead form
  ui/                # primitives (reveal, counter, headings, FAQ, charts…)
  seo/ analytics/    # JSON-LD + GA/GTM/Pixel
lib/
  site.ts utils.ts schema.ts
  data/              # typed content (projects, developers, locations, blog, content)
supabase/schema.sql  # leads table
```

---

## ✅ Notes
- Every page carries a sticky WhatsApp/Call CTA, a lead form or CTA banner, trust signals and the developer/contact footer per the conversion brief.
- RERA numbers, prices and projects shown are illustrative placeholders — verify before publishing.
- Built to rank for: *Property Dealer Gurgaon, Real Estate Consultant Gurgaon, Luxury Apartments Gurgaon, Dwarka Expressway Property, SCO Plots Gurgaon* and related terms.
