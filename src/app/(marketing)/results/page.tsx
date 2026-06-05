import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { ResultsSection } from "@/components/marketing/results-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { CTASection } from "@/components/marketing/cta-section";

export const metadata: Metadata = generateMetadata({
  title: "Student Results & Testimonials",
  description: "92% A*-A grade rate. Real student results from Cambridge and Edexcel O/A Level exams. Read success stories from students across 20+ countries.",
  canonical: "/results",
});

export default function ResultsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Students&apos; <span className="gradient-text-hero">Exam Results</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            92% A*-A grade rate. Consistently outperforming the national average in Cambridge and Edexcel exams.
          </p>
        </div>
      </div>
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
