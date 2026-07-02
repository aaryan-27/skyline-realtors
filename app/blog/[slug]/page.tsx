import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Tag, ArrowUpRight, Facebook, Linkedin, Twitter } from "lucide-react";
import { BLOG_POSTS, getPost } from "@/lib/data/blog";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      images: [post.cover],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length ? related : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = `${SITE.url}/blog/${post.slug}`;

  return (
    <>
      <Schema json={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />
      <Schema json={articleSchema({
        title: post.title,
        description: post.excerpt,
        image: post.cover,
        url: `/blog/${post.slug}`,
        date: post.date,
        author: post.author,
      })} />

      {/* Hero */}
      <article>
        <header className="relative bg-navy pt-28 pb-12 text-white md:pt-32">
          <div className="container max-w-3xl">
            <Breadcrumbs
              light
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.category, href: "/blog" },
              ]}
            />
            <span className="mt-6 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-200">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" /> {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        <div className="relative -mt-4 bg-cloud pb-4">
          <div className="container max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-luxe">
              <Image src={post.cover} alt={post.title} fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="section bg-cloud pt-12">
          <div className="container max-w-3xl">
            <p className="font-display text-xl leading-relaxed text-navy md:text-2xl">{post.content[0].body}</p>
            <div className="mt-8 space-y-8">
              {post.content.slice(1).map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-display text-2xl text-navy md:text-3xl">{block.heading}</h2>
                  )}
                  <p className="mt-3 leading-relaxed text-ink/75">{block.body}</p>
                </div>
              ))}
            </div>

            {/* Tags + share */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-navy/10 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-gold-600" />
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-ink/55">Share:</span>
                {[
                  { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
                  { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}` },
                  { icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="font-display text-2xl text-navy md:text-3xl">Related Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fallbackRelated.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy/5 bg-cloud/40 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.cover} alt={p.title} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider2 text-gold-700">{p.category}</span>
                  <h3 className="mt-2 font-display text-base leading-snug text-navy">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors group-hover:text-gold-700">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
