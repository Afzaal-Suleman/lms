import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/lib/seo";
import { Clock, Users, Star } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Cambridge & Edexcel O/A Level Subjects",
  description: "Explore all 8 subjects — Mathematics, Physics, Chemistry, Biology, Accounting, Business, Computer Science, and English. Cambridge and Edexcel online courses.",
  keywords: ["Cambridge subjects online", "O level courses", "A level classes online"],
  canonical: "/subjects",
});

const allSubjects = [
  { name: "Mathematics", code: "9709", board: "Cambridge", level: "A Level", slug: "mathematics", teacher: "Mr. Ahmed Khan", timing: "Mon/Wed/Fri · 6PM PKT", feeUSD: 80, students: 45, rating: 4.9, emoji: "📐", color: "from-blue-500 to-indigo-600" },
  { name: "Physics", code: "9702", board: "Cambridge", level: "A Level", slug: "physics", teacher: "Ms. Sarah Ali", timing: "Tue/Thu/Sat · 5PM PKT", feeUSD: 80, students: 38, rating: 4.8, emoji: "⚛️", color: "from-purple-500 to-pink-600" },
  { name: "Chemistry", code: "9701", board: "Cambridge", level: "O Level", slug: "chemistry", teacher: "Dr. Usman Raza", timing: "Mon/Wed · 7PM PKT", feeUSD: 75, students: 52, rating: 4.9, emoji: "🧪", color: "from-teal-500 to-cyan-600" },
  { name: "Biology", code: "9700", board: "Cambridge", level: "O Level", slug: "biology", teacher: "Ms. Nadia Hasan", timing: "Tue/Thu · 7PM PKT", feeUSD: 75, students: 33, rating: 4.8, emoji: "🧬", color: "from-emerald-500 to-green-600" },
  { name: "Accounting", code: "9706", board: "Cambridge", level: "A Level", slug: "accounting", teacher: "Mr. Tariq Mehmood", timing: "Sat/Sun · 4PM PKT", feeUSD: 70, students: 28, rating: 4.7, emoji: "📊", color: "from-amber-500 to-orange-600" },
  { name: "Business Studies", code: "9609", board: "Cambridge", level: "A Level", slug: "business", teacher: "Ms. Amina Chaudhry", timing: "Mon/Wed · 5PM PKT", feeUSD: 70, students: 31, rating: 4.8, emoji: "💼", color: "from-rose-500 to-pink-600" },
  { name: "Computer Science", code: "9618", board: "Cambridge", level: "A Level", slug: "computer-science", teacher: "Mr. Bilal Siddiqui", timing: "Tue/Thu · 6PM PKT", feeUSD: 80, students: 41, rating: 4.7, emoji: "💻", color: "from-orange-500 to-amber-600" },
  { name: "English Language", code: "9093", board: "Cambridge", level: "O Level", slug: "english", teacher: "Ms. Zara Khan", timing: "Mon/Wed/Fri · 4PM PKT", feeUSD: 65, students: 56, rating: 4.9, emoji: "✍️", color: "from-sky-500 to-blue-600" },
];

export default function SubjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cambridge & Edexcel <span className="gradient-text-hero">Online Courses</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Expert-taught subjects for O Level, AS Level, and A Level students worldwide. All classes recorded.
          </p>
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter subjects">
            {["All", "O Level", "AS Level", "A Level", "Cambridge", "Edexcel"].map((f) => (
              <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${f === "All" ? "bg-teal-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-navy-950 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSubjects.map((subject) => (
              <article key={subject.slug} className="bg-white dark:bg-navy-900/60 rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col" aria-label={`${subject.name} ${subject.level}`}>
                <div className={`bg-gradient-to-br ${subject.color} p-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl" role="img" aria-label={subject.name}>{subject.emoji}</span>
                    <Badge variant="cambridge" className="shrink-0">{subject.board}</Badge>
                  </div>
                  <h2 className="text-white font-bold text-xl">{subject.name}</h2>
                  <p className="text-white/70 text-sm">Syllabus {subject.code} · {subject.level}</p>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="text-sm font-medium">{subject.teacher}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5 text-teal-500" aria-hidden="true" />{subject.timing}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Users className="w-3.5 h-3.5 text-teal-500" aria-hidden="true" />{subject.students} students</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (<Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(subject.rating) ? "text-amber-400 fill-amber-400" : "text-border"}`} aria-hidden="true" />))}
                    <span className="text-xs font-semibold ml-1">{subject.rating}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="text-2xl font-bold mb-3">${subject.feeUSD}<span className="text-xs font-normal text-muted-foreground">/mo</span></div>
                    <div className="flex gap-2">
                      <Link href={`/subjects/${subject.slug}`} className="flex-1"><Button variant="teal" size="sm" className="w-full" id={`enroll-${subject.slug}`}>Enroll Now</Button></Link>
                      <Link href={`/subjects/${subject.slug}`}><Button variant="outline" size="sm" id={`details-${subject.slug}`}>Info</Button></Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
