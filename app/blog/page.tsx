import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, Mail } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gurgaon Real Estate Blog — Market Insights & Investment Guides",
  description:
    "Expert insights on Gurgaon real estate — market reports, buying and selling guides, builder-floor and plot advice, and locality guides for Palam Vihar and Sectors 21–23.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
        eyebrow="Insights & Intelligence"
        title={<>Gurgaon Real Estate <span className="text-gold-foil">Insights</span></>}
        subtitle="Local market reports, buying and selling guides, and locality insights from our team — to help you buy, sell and invest smarter in Gurgaon."
      />

      <section className="section bg-cloud">
        <div className="container">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-card transition-all duration-500 hover:shadow-luxe lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-navy">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider2 text-gold-700">
                  {featured.category}
                </span>
                <h2 className="mt-3 font-display text-2xl text-navy md:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-ink/65">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-ink/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors group-hover:text-gold-700">
                  Read Article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider2 text-gold-700">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg leading-snug text-navy">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/60">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 border-t border-navy/5 pt-4 text-xs text-ink/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Newsletter */}
          <Reveal>
            <div className="mt-14 overflow-hidden rounded-3xl bg-navy p-8 text-center text-white md:p-12">
              <Mail className="mx-auto h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Get Gurgaon market insights in your inbox
              </h3>
              <p className="mx-auto mt-2 max-w-md text-white/65">
                Join 8,000+ investors receiving our monthly research, price trends and pre-launch alerts.
              </p>
              <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
                />
                <button type="submit" className="btn-gold shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
