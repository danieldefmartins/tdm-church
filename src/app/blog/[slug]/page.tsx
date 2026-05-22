import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Share2,
  BookOpen,
  Heart,
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.indexOf(post);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/70 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} de leitura
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-white/60 text-sm">
            {post.date} &middot; TDM Church
          </p>
        </div>
      </section>

      {/* Verse banner */}
      <section className="bg-secondary py-8 sm:py-10">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-lg sm:text-xl font-display font-bold text-primary italic leading-snug">
            &ldquo;{post.verse}&rdquo;
          </p>
          <p className="mt-2 text-primary/60 font-semibold text-xs uppercase tracking-wider">
            {post.verseRef}
          </p>
        </div>
      </section>

      {/* Article content */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <article className="prose prose-stone prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-black font-display mt-10 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-bold text-black mt-8 mb-3"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("> ")) {
                const text = paragraph.replace(/^> \*?"?/gm, "").replace(/"?\*?$/gm, "");
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-secondary/40 pl-6 py-3 my-6 bg-secondary/5 rounded-r-xl italic text-stone-700"
                  >
                    {text}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map((line) => line.replace(/^- /, ""));
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-stone-700"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith("1. ") || /^\d+\. /.test(paragraph)) {
                const items = paragraph.split("\n").map((line) => line.replace(/^\d+\. /, ""));
                return (
                  <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="text-stone-700"
                        dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                      />
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith("*") && paragraph.endsWith("*") && !paragraph.startsWith("**")) {
                return (
                  <p
                    key={i}
                    className="italic text-stone-600 bg-primary/5 p-6 rounded-xl my-6"
                    dangerouslySetInnerHTML={{ __html: paragraph.replace(/^\*/, "").replace(/\*$/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                );
              }
              if (paragraph === "---") {
                return (
                  <hr key={i} className="my-8 border-stone-200" />
                );
              }
              return (
                <p
                  key={i}
                  className="text-stone-700 leading-relaxed my-4"
                  dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-black'>$1</strong>") }}
                />
              );
            })}
          </article>

          {/* Share CTA */}
          <div className="mt-12 p-6 bg-black/5 rounded-2xl border border-black/10 text-center">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="font-bold text-black">
              Este artigo te abençoou?
            </p>
            <p className="text-stone-500 text-sm mt-1">
              Compartilhe com alguém que precisa ouvir essa palavra.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex justify-between gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-2 text-sm text-stone-500 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevPost.title}</span>
                <span className="sm:hidden">Anterior</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-2 text-sm text-stone-500 hover:text-black transition-colors"
              >
                <span className="hidden sm:inline">{nextPost.title}</span>
                <span className="sm:hidden">Próximo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 sm:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl font-bold text-black font-display text-center mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-lg transition-shadow"
                >
                  <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-[10px] font-semibold rounded-full">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-black group-hover:text-secondary transition-colors mt-3">
                    {related.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-2 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
