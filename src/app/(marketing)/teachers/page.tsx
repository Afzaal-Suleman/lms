import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Star, Award, BookOpen } from "lucide-react";
import { CTASection } from "@/components/marketing/cta-section";

export const metadata: Metadata = generateMetadata({
  title: "Our Teachers — Cambridge & Edexcel Expert Tutors",
  description: "Meet our team of certified Cambridge and Edexcel teachers. All teachers are vetted, experienced, and student-rated 4.7+ out of 5.",
  canonical: "/teachers",
});

const teachers = [
  { name: "Mr. Ahmed Khan", subject: "Mathematics 9709", qualification: "M.Sc. Mathematics, Cambridge", experience: 10, rating: 4.9, reviews: 312, badges: ["Ex-Cambridge Examiner", "Top Rated", "8+ Years"], bio: "Former Cambridge International examiner with 10+ years of A Level teaching experience. Specialist in Pure Mathematics and Statistics.", initials: "AK", color: "from-blue-500 to-indigo-600" },
  { name: "Ms. Sarah Ali", subject: "Physics 9702", qualification: "B.Sc. Physics, Imperial College London", experience: 8, rating: 4.8, reviews: 276, badges: ["Top Rated", "UK Graduate"], bio: "Physics graduate from Imperial College London. Expert in making complex concepts simple. 98% of her students achieve A or above.", initials: "SA", color: "from-purple-500 to-pink-600" },
  { name: "Dr. Usman Raza", subject: "Chemistry 9701", qualification: "Ph.D. Chemistry, University of Karachi", experience: 12, rating: 4.9, reviews: 398, badges: ["Ex-Cambridge Examiner", "PhD", "Top Rated"], bio: "PhD chemist and former CIE examiner. Has taught Cambridge Chemistry for 12 years. Known for exceptional clarity in organic chemistry.", initials: "UR", color: "from-teal-500 to-cyan-600" },
  { name: "Ms. Nadia Hasan", subject: "Biology 9700", qualification: "M.Sc. Biology, LUMS", experience: 7, rating: 4.8, reviews: 203, badges: ["Top Rated", "7+ Years"], bio: "Specialist in Cambridge Biology with a passion for genetics and ecology. Creates detailed visual notes loved by all students.", initials: "NH", color: "from-emerald-500 to-green-600" },
  { name: "Mr. Tariq Mehmood", subject: "Accounting 9706", qualification: "ACCA, MBA Finance", experience: 9, rating: 4.7, reviews: 187, badges: ["ACCA Qualified", "Industry Expert"], bio: "Professionally qualified accountant (ACCA) who bridges academic content with real-world financial applications.", initials: "TM", color: "from-amber-500 to-orange-600" },
  { name: "Mr. Bilal Siddiqui", subject: "Computer Science 9618", qualification: "B.Sc. CS, FAST-NUCES", experience: 6, rating: 4.7, reviews: 229, badges: ["Top Rated", "Industry Experience"], bio: "Software engineer turned teacher. Makes algorithms and programming accessible. Students regularly achieve A* in Computer Science.", initials: "BS", color: "from-orange-500 to-amber-600" },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="gradient-text-hero">Expert Teachers</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            All teachers are certified, experienced, and student-rated. We only hire the best.
          </p>
        </div>
      </div>

      <section className="section-padding bg-slate-50 dark:bg-navy-950" aria-labelledby="teachers-heading">
        <div className="container mx-auto">
          <h2 id="teachers-heading" className="sr-only">Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((t) => (
              <article key={t.name} className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all" aria-label={`${t.name}, ${t.subject} teacher`}>
                {/* Header */}
                <div className={`bg-gradient-to-br ${t.color} p-8 text-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">{t.initials}</div>
                  <h3 className="text-white font-bold text-xl">{t.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{t.qualification}</p>
                </div>
                {/* Body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.badges.map((b) => (
                      <Badge key={b} variant="teal" className="text-xs">{b}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-teal-500" aria-hidden="true" />{t.subject}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1" aria-label={`Rating ${t.rating} out of 5`}>
                      {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(t.rating) ? "text-amber-400 fill-amber-400" : "text-border"}`} aria-hidden="true" />))}
                      <span className="text-sm font-bold ml-1">{t.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.reviews} reviews</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-500" aria-hidden="true" />
                    <span className="text-xs font-medium text-muted-foreground">{t.experience}+ years experience</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
