import type { Metadata } from "next";
import { HeroSection } from "@/components/marketing/hero-section";
import { TrustBar } from "@/components/marketing/trust-bar";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { FeaturedSubjects } from "@/components/marketing/featured-subjects";
import { ResultsSection } from "@/components/marketing/results-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { VideoSection } from "@/components/marketing/video-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { generateFAQSchema, generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "LMS OWAIS PK — Cambridge & Edexcel O/A Level Online Academy",
  description:
    "Master Cambridge O & A Levels Online. Live classes, expert teachers, recorded lessons, and exam-focused learning for students in UK, GCC, Pakistan, Malaysia, Africa, and Europe.",
  openGraph: {
    title: "LMS OWAIS PK — Cambridge & Edexcel O/A Level Online Academy",
    description:
      "Live classes, expert teachers, recorded lessons, and exam-focused learning for students worldwide.",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630 }],
  },
};

const homeFAQs = [
  {
    question: "Which timezone are the live classes held in?",
    answer:
      "Our live classes are scheduled to accommodate students across multiple timezones including UK (GMT/BST), UAE (GST), Pakistan (PKT), and Malaysia (MYT). Class timings are displayed in your local timezone on the portal.",
  },
  {
    question: "Are recorded lectures available if I miss a class?",
    answer:
      "Yes! All live classes are recorded and made available in your student portal within 24 hours. You can watch them anytime, as many times as you need.",
  },
  {
    question: "Do you help with exam registration?",
    answer:
      "We provide full guidance on Cambridge International and Pearson Edexcel exam registration, including locating exam centers in your country and assisting with the registration process.",
  },
  {
    question: "What technical requirements do I need?",
    answer:
      "You need a stable internet connection (at least 5 Mbps), a device with a webcam and microphone (laptop or tablet recommended), and Zoom installed for live classes.",
  },
];

export default function HomePage() {
  const faqSchema = generateFAQSchema(homeFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <VideoSection />
      <HowItWorks />
      <FeaturedSubjects />
      <ResultsSection />
      <TestimonialsSection />
      <FAQSection faqs={homeFAQs} />
      <CTASection />
    </>
  );
}
