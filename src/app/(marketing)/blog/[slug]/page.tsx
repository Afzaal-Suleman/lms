import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react";

interface Post {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  emoji: string;
  color: string;
}

const posts: Record<string, Post> = {
  "how-to-get-a-star-a-level-maths": {
    title: "How to Secure an A* in A Level Mathematics 9709",
    excerpt: "Discover the ultimate study strategy, key topics, and past paper practices required to ace your Cambridge A Level Maths exam.",
    category: "A Level Guides",
    date: "May 28, 2026",
    readTime: "6 min read",
    author: "Mr. Ahmed Khan",
    emoji: "📐",
    color: "from-blue-500 to-indigo-600",
    content: `
A Level Mathematics (9709) is widely regarded as one of the most demanding subjects, but with a structured approach, securing an A* is highly achievable. Let's break down the essential steps to master this subject.

## 1. Understand the Syllabus Structure
The Cambridge International A Level Mathematics syllabus is split into different components. Usually, students take:
- **Pure Mathematics 1 (Paper 1)**: Core algebra, quadratics, functions, coordinate geometry, trigonometry, vectors, series, differentiation, and integration.
- **Pure Mathematics 3 (Paper 3)**: Advanced algebra, complex numbers, logarithmic/exponential functions, trigonometry, differentiation, integration, numerical solutions, and differential equations.
- **Mechanics (Paper 4)** or **Probability & Statistics 1 (Paper 5)**.
- **Probability & Statistics 2 (Paper 6)**.

## 2. Shift from Memorization to Understanding
Maths is not a spectator sport. You cannot study it by reading a textbook. Every formula has a derivation, and understanding *why* a formula works will help you apply it when examiners twist the question in unexpected ways.

## 3. Topical Past Paper Practice
Once you finish a topic (e.g., Integration), immediately practice questions from past papers specifically on that topic. Do not wait until the end of the year to start past papers.
- Aim to complete at least 10 years of topical past papers for each unit.
- Highlight questions that you struggled with so you can return to them during revision week.

## 4. Master the Mark Scheme
Cambridge examiners look for specific steps. Sometimes, the final answer is only worth 1 mark, while the method gets 4 marks. Show your working clearly. Understand notations and common pitfalls that examiners point out in Examiner Reports.

## 5. Timed Full Papers
In the final 2 months before your exam, start doing full yearly papers under strict exam conditions:
- Limit your time strictly (e.g., 1 hour 45 minutes for Paper 1).
- Avoid checking the mark scheme mid-way.
- Grade your paper honestly, identify your weak areas, and revise those concepts.
    `,
  },
  "5-proven-study-tips-for-exam-revision": {
    title: "5 Proven Study Tips for Effective Exam Revision",
    excerpt: "Active recall, spaced repetition, and the Pomodoro technique. Learn how to optimize your study sessions for maximum retention.",
    category: "Study Tips",
    date: "May 15, 2026",
    readTime: "4 min read",
    author: "Ms. Sarah Ali",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    content: `
Studying long hours doesn't guarantee top grades. It's about *how* you study. Here are five scientifically proven study tips to help you retain information and excel in your exams.

## 1. Active Recall
Passive reading (highlighting textbooks or re-reading notes) is the least effective way to study. Instead, practice **Active Recall**:
- Close the book and write down everything you remember.
- Use flashcards (like Anki) to test yourself.
- Teach a concept to a classmate or even an empty room. If you can explain it simply, you understand it.

## 2. Spaced Repetition
Our brains naturally forget information over time (the forgetting curve). To combat this, space out your revision sessions:
- Review a topic 1 day after learning it.
- Review it again after 3 days, then 1 week, then 2 weeks, then a month.
- This shifts information from short-term memory to long-term memory.

## 3. The Pomodoro Technique
Maintain high focus without burning out by breaking your study time into intervals:
- Study intensely for 25 minutes (no phone, no distractions).
- Take a 5-minute break (stretch, get water).
- Repeat 4 times, then take a longer 20-30 minute break.

## 4. Solve Past Papers
Past papers are the absolute gold standard of exam preparation. They familiarize you with the exam format, question styles, and time constraints.
- Make sure to review the examiner reports to see common mistakes students make.

## 5. Prioritize Sleep and Nutrition
Your brain consolidates memory while you sleep. Pulling all-nighters before an exam ruins cognitive function:
- Aim for 7-8 hours of sleep.
- Stay hydrated and eat balanced meals to maintain steady energy levels.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — LMS OWAIS PK`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    publishedAt: new Date(post.date).toISOString(),
    author: post.author,
  });

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-28 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-8 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Container */}
          <article className="bg-white dark:bg-navy-900/50 rounded-3xl border border-border overflow-hidden shadow-card">
            {/* Cover Banner */}
            <div className={`bg-gradient-to-br ${post.color} p-12 text-center text-6xl relative min-h-[240px] flex items-center justify-center`}>
              <span role="img" aria-label={post.title}>{post.emoji}</span>
              <Badge className="absolute bottom-6 left-6 bg-navy-950/80 text-white border-0 text-xs">
                {post.category}
              </Badge>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-500" />
                  By {post.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-500" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-500" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Body Content */}
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                {post.content.split("\n\n").map((para, i) => {
                  const trimmed = para.trim();
                  if (trimmed.startsWith("##")) {
                    return (
                      <h2 key={i} className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 border-b border-border pb-2">
                        {trimmed.replace("##", "").trim()}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("-")) {
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                        {trimmed.split("\n").map((li, j) => (
                          <li key={j}>{li.replace("-", "").trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
              </div>

              {/* Share & CTAs */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-semibold">Share Article:</span>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                    <Share2 className="w-3.5 h-3.5" />
                  </Button>
                </div>

                <Link href="/contact">
                  <Button variant="teal" size="sm" className="gap-2">
                    Book free Demo class
                    <BookOpen className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
