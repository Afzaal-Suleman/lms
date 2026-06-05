"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const subjects = [
  {
    name: "Mathematics",
    code: "9709",
    board: "Cambridge",
    level: "A Level",
    teacher: "Mr. Ahmed Khan",
    timing: "Mon/Wed/Fri · 6PM PKT",
    duration: "10 Months",
    feeUSD: 80,
    students: 45,
    rating: 4.9,
    color: "from-blue-500 to-indigo-600",
    emoji: "📐",
    slug: "mathematics",
  },
  {
    name: "Physics",
    code: "9702",
    board: "Cambridge",
    level: "A Level",
    teacher: "Ms. Sarah Ali",
    timing: "Tue/Thu/Sat · 5PM PKT",
    duration: "10 Months",
    feeUSD: 80,
    students: 38,
    rating: 4.8,
    color: "from-purple-500 to-pink-600",
    emoji: "⚛️",
    slug: "physics",
  },
  {
    name: "Chemistry",
    code: "9701",
    board: "Cambridge",
    level: "O Level",
    teacher: "Dr. Usman Raza",
    timing: "Mon/Wed · 7PM PKT",
    duration: "8 Months",
    feeUSD: 75,
    students: 52,
    rating: 4.9,
    color: "from-teal-500 to-cyan-600",
    emoji: "🧪",
    slug: "chemistry",
  },
  {
    name: "Computer Science",
    code: "9618",
    board: "Cambridge",
    level: "A Level",
    teacher: "Mr. Bilal Siddiqui",
    timing: "Tue/Thu · 6PM PKT",
    duration: "10 Months",
    feeUSD: 80,
    students: 41,
    rating: 4.7,
    color: "from-orange-500 to-amber-600",
    emoji: "💻",
    slug: "computer-science",
  },
];

export function FeaturedSubjects() {
  return (
    <section
      className="section-padding bg-slate-50 dark:bg-navy-950"
      aria-labelledby="subjects-heading"
      id="subjects"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Subjects
          </span>
          <h2
            id="subjects-heading"
            className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4"
          >
            Popular Cambridge Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert-taught, exam-focused courses for O Level and A Level students.
            All classes recorded for flexible learning.
          </p>
        </motion.div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {subjects.map((subject, index) => (
            <motion.article
              key={subject.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              aria-label={`${subject.name} course`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${subject.color} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl" role="img" aria-label={subject.name}>
                    {subject.emoji}
                  </span>
                  <div className="flex flex-col gap-1 items-end">
                    <Badge variant={subject.board === "Cambridge" ? "cambridge" : "edexcel"}>
                      {subject.board}
                    </Badge>
                    <Badge className="bg-white/20 text-white border-0 text-xs">
                      {subject.level}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl">{subject.name}</h3>
                <p className="text-white/70 text-sm">Syllabus {subject.code}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="space-y-2.5 mb-5 flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" aria-hidden="true" />
                    <span className="font-medium text-foreground">{subject.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-teal-500 shrink-0" aria-hidden="true" />
                    {subject.timing}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-3.5 h-3.5 text-teal-500 shrink-0" aria-hidden="true" />
                    {subject.students} students enrolled
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5" aria-label={`Rating: ${subject.rating} out of 5`}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < Math.floor(subject.rating) ? "text-amber-400 fill-amber-400" : "text-border"}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {subject.rating}
                    </span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <div className="text-2xl font-bold text-navy-900 dark:text-white">
                        ${subject.feeUSD}
                        <span className="text-sm font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{subject.duration}</span>
                  </div>
                  <Link href={`/subjects/${subject.slug}`}>
                    <Button
                      variant="teal"
                      size="sm"
                      className="w-full"
                      id={`enroll-${subject.slug}`}
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/subjects">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              id="view-all-subjects"
            >
              View All 8 Subjects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
