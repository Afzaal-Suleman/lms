import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { CTASection } from "@/components/marketing/cta-section";
import { Monitor, BookOpen, ClipboardCheck, Award, Users, Calendar } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "How It Works — LMS OWAIS PK",
  description: "Learn how our online Cambridge and Edexcel tutoring works — from enrollment to exam success in 5 simple steps.",
  canonical: "/how-it-works",
});

const portalFeatures = [
  { icon: Monitor, title: "Live Classes via Zoom", desc: "Interactive sessions with your teacher in a virtual classroom. Ask questions in real-time." },
  { icon: BookOpen, title: "Recorded Lecture Library", desc: "Every class recorded in HD. Watch anytime, pause, rewind, and rewatch as many times as you need." },
  { icon: ClipboardCheck, title: "Assignments & Feedback", desc: "Submit assignments through the portal. Receive detailed written feedback from your teacher." },
  { icon: Award, title: "Mock Exams & Results", desc: "Timed mock exams under exam conditions. Receive detailed performance analytics." },
  { icon: Users, title: "Attendance Tracking", desc: "Your attendance is automatically tracked. Never lose track of sessions attended." },
  { icon: Calendar, title: "Class Calendar & Reminders", desc: "Upcoming class schedule synced to your calendar. Email & WhatsApp reminders." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="gradient-text-hero">LMS OWAIS PK</span> Works
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Simple enrollment. Expert teaching. Proven results. Here is everything you get when you join us.
          </p>
        </div>
      </div>

      <HowItWorks />

      {/* Portal Features */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950" aria-labelledby="portal-heading">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 id="portal-heading" className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Your Student Portal</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to learn effectively, all in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalFeatures.map((feat, i) => (
              <div key={i} className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-teal-500" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
