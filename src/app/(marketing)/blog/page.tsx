import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/lib/seo";
import { Calendar, Clock, BookOpen, User } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Educational Blog & Study Guides — LMS OWAIS PK",
  description: "Read the latest study tips, exam preparation guides, university admissions advice, and subject-specific resources for O Level and A Level students.",
  canonical: "/blog",
});

const categories = [
  { label: "All", slug: "all" },
  { label: "Study Tips", slug: "study-tips" },
  { label: "Exam Preparation", slug: "exam-preparation" },
  { label: "O Level Guides", slug: "o-level-guides" },
  { label: "A Level Guides", slug: "a-level-guides" },
  { label: "University Admissions", slug: "university-admissions" },
];

const blogPosts = [
  {
    title: "How to Secure an A* in A Level Mathematics 9709",
    excerpt: "Discover the ultimate study strategy, key topics, and past paper practices required to ace your Cambridge A Level Maths exam.",
    slug: "how-to-get-a-star-a-level-maths",
    category: "A Level Guides",
    date: "May 28, 2026",
    readTime: "6 min read",
    author: "Mr. Ahmed Khan",
    emoji: "📐",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "5 Proven Study Tips for Effective Exam Revision",
    excerpt: "Active recall, spaced repetition, and the Pomodoro technique. Learn how to optimize your study sessions for maximum retention.",
    slug: "5-proven-study-tips-for-exam-revision",
    category: "Study Tips",
    date: "May 15, 2026",
    readTime: "4 min read",
    author: "Ms. Sarah Ali",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Ultimate Guide to O Level Physics Practical Exams",
    excerpt: "Master your practical skills, common mistakes to avoid, and how to write precise observations to score full marks in physics practicals.",
    slug: "ultimate-guide-o-level-physics-practical",
    category: "O Level Guides",
    date: "April 30, 2026",
    readTime: "8 min read",
    author: "Dr. Usman Raza",
    emoji: "⚛️",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Navigating UK University Admissions: A Guide for O/A Level Students",
    excerpt: "Everything you need to know about UCAS, personal statements, grade requirements, and deadlines for UK universities.",
    slug: "navigating-uk-university-admissions-guide",
    category: "University Admissions",
    date: "April 12, 2026",
    readTime: "10 min read",
    author: "Ms. Amina Chaudhry",
    emoji: "🏛️",
    color: "from-rose-500 to-pink-600",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Educational <span className="gradient-text-hero">Blog & Guides</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Expert study tips, syllabus breakdowns, and guidance to help you navigate your Cambridge & Edexcel journey successfully.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Blog categories">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  cat.slug === "all"
                    ? "bg-teal-500 text-white shadow-teal-sm"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                aria-pressed={cat.slug === "all"}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Listing Grid */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950" aria-label="Blog posts list">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
                aria-label={post.title}
              >
                {/* Visual Cover */}
                <div className={`bg-gradient-to-br ${post.color} w-full md:w-48 shrink-0 flex items-center justify-center p-8 text-center text-5xl relative min-h-[160px] md:min-h-full`}>
                  <span role="img" aria-label={post.title}>{post.emoji}</span>
                  <Badge className="absolute top-4 left-4 bg-navy-950/80 text-white border-0 text-xs">
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-2 line-clamp-2 hover:text-teal-500 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center" aria-hidden="true">
                        <User className="w-3.5 h-3.5 text-teal-500" />
                      </div>
                      <span className="font-semibold text-foreground">{post.author}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" size="sm" className="font-semibold text-xs gap-1">
                        Read Article
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
