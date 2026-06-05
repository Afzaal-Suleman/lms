import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { CheckCircle, Clock, Users, Star, BookOpen, Video, FileText, Award } from "lucide-react";

const courses: Record<string, {
  name: string; code: string; board: string; level: string; teacher: string;
  teacherBio: string; timing: string; duration: string; feeUSD: number; feeGBP: number;
  feeAED: number; feePKR: number; emoji: string; color: string; students: number;
  rating: number; description: string; outcomes: string[]; curriculum: { title: string; lessons: string[] }[];
  faqs: { q: string; a: string }[];
}> = {
  mathematics: {
    name: "Mathematics", code: "9709", board: "Cambridge", level: "A Level",
    teacher: "Mr. Ahmed Khan", teacherBio: "M.Sc. Mathematics, 10+ years Cambridge teaching experience. Ex-examiner for CIE.",
    timing: "Mon/Wed/Fri · 6:00 PM PKT", duration: "10 Months", feeUSD: 80, feeGBP: 63, feeAED: 294, feePKR: 22000,
    emoji: "📐", color: "from-blue-500 to-indigo-600", students: 45, rating: 4.9,
    description: "Comprehensive A Level Mathematics covering Pure Mathematics, Statistics, and Mechanics. Fully aligned with Cambridge 9709 syllabus with past paper practice every week.",
    outcomes: ["Master Pure Math 1 & 2", "Statistics & Probability", "Mechanics", "Past Paper Mastery", "Exam Technique"],
    curriculum: [
      { title: "Pure Mathematics 1", lessons: ["Quadratics & Functions", "Coordinate Geometry", "Circular Measure", "Trigonometry", "Differentiation", "Integration"] },
      { title: "Pure Mathematics 2 & 3", lessons: ["Algebra", "Logarithms", "Trigonometry", "Differentiation", "Integration", "Complex Numbers", "Differential Equations"] },
      { title: "Statistics 1", lessons: ["Data Representation", "Permutations", "Probability", "Distributions", "Hypothesis Testing"] },
      { title: "Mechanics 1", lessons: ["Kinematics", "Forces", "Newton's Laws", "Energy & Work", "Momentum"] },
    ],
    faqs: [
      { q: "Do I need Further Mathematics?", a: "No, this course covers the standard A Level Mathematics 9709 syllabus only." },
      { q: "How many past papers do we practice?", a: "We practice at least 2 full papers per month, with detailed mark scheme review." },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.name} ${course.code} ${course.level} Online | LMS OWAIS PK`,
    description: course.description,
    openGraph: { title: `${course.name} ${course.level} — LMS OWAIS PK`, description: course.description },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) notFound();

  const courseSchema = generateCourseSchema({ name: course.name, description: course.description, provider: course.teacher, url: `/subjects/${slug}`, price: course.feeUSD });
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: course.name, url: `/subjects/${slug}` }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="min-h-screen">
        {/* Hero */}
        <div className="bg-mesh pt-28 pb-16">
          <div className="container mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/subjects" className="hover:text-white">Subjects</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{course.name}</li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="cambridge">{course.board}</Badge>
                  <Badge variant="teal">{course.level}</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {course.emoji} {course.name}
                </h1>
                <p className="text-lg text-white/70 mb-6">Syllabus Code: <strong className="text-teal-400">{course.code}</strong></p>
                <p className="text-white/60 leading-relaxed mb-8">{course.description}</p>
                <div className="flex items-center gap-6 mb-8 text-sm text-white/60">
                  <span className="flex items-center gap-2"><Users className="w-4 h-4 text-teal-400" aria-hidden="true" />{course.students} enrolled</span>
                  <span className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />{course.rating}/5</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-400" aria-hidden="true" />{course.duration}</span>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact"><Button variant="teal" size="lg" id="enroll-now-btn">Enroll Now</Button></Link>
                  <Link href="/contact"><Button variant="outline-white" size="lg" id="free-demo-btn">Free Demo</Button></Link>
                </div>
              </div>
              {/* Price card */}
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-white font-bold text-xl mb-6">Course Fees</h2>
                <div className="space-y-3 mb-6">
                  {[["USD", `$${course.feeUSD}`], ["GBP", `£${course.feeGBP}`], ["AED", `AED ${course.feeAED}`], ["PKR", `₨${course.feePKR.toLocaleString()}`]].map(([cur, val]) => (
                    <div key={cur} className="flex justify-between text-sm">
                      <span className="text-white/60">{cur}</span>
                      <span className="text-white font-semibold">{val}<span className="text-white/40">/mo</span></span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-6 border-t border-white/10 pt-6">
                  {[["Live Classes", Video], ["Recorded Lectures", Video], ["PDF Notes", FileText], ["Mock Exams", BookOpen], ["Certificate", Award]].map(([label, Icon]) => (
                    <div key={label as string} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="block"><Button variant="teal" size="lg" className="w-full" id="card-enroll-btn">Enroll Now → ${course.feeUSD}/mo</Button></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="bg-slate-50 dark:bg-navy-950 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-navy-900 dark:text-white">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((mod, i) => (
                <div key={i} className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-foreground mb-4">{mod.title}</h3>
                  <ul className="space-y-2">
                    {mod.lessons.map((lesson, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" aria-hidden="true" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
