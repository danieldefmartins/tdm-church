import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react";
import { blogPosts, categories } from "@/data/blog-posts";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos de fé, encorajamento e vida prática para a comunidade brasileira nos EUA. Imigração, família, ansiedade, propósito e muito mais.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-7 h-7 text-secondary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Blog <span className="text-secondary">TDM</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Palavras de fé, encorajamento e orientação para a sua jornada.
            Artigos escritos com amor para a comunidade brasileira nos EUA.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-white border-b border-stone-200 sticky top-[calc(3px+2rem+4rem)] sm:top-[calc(3px+2.5rem+5rem)] z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "Todos"
                    ? "bg-primary text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-shadow duration-500"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-secondary/30 mx-auto mb-4" />
                  <p className="text-stone-400 text-sm">Imagem do artigo</p>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-stone-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime} de leitura
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors font-display">
                  {featured.title}
                </h2>
                <p className="mt-3 text-stone-500 leading-relaxed">
                  {featured.excerpt}
                </p>
                <blockquote className="mt-6 pl-4 border-l-2 border-secondary/30 italic text-stone-500 text-sm">
                  &ldquo;{featured.verse}&rdquo;
                  <span className="block text-secondary font-semibold mt-1 not-italic text-xs">
                    — {featured.verseRef}
                  </span>
                </blockquote>
                <div className="mt-6 flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="pb-20 sm:pb-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-secondary/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-[10px] font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-stone-400 text-[10px] flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-stone-400">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
