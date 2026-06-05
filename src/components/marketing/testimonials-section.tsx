"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    country: "Pakistan 🇵🇰",
    grade: "A* in Mathematics & Physics",
    content: "LMS OWAIS PK completely transformed my approach to A Levels. The teachers explain concepts so clearly, and having recordings meant I could revise at 2am before my exam. I went from a C to A*!",
    rating: 5,
    course: "A Level Mathematics",
    avatar: "AR",
  },
  {
    id: 2,
    name: "Omar Al-Farsi",
    country: "UAE 🇦🇪",
    grade: "A in Chemistry",
    content: "Being in Dubai, I was worried about timezone differences, but they scheduled classes perfectly for Gulf students. My teacher's explanations of organic chemistry were the best I've ever seen.",
    rating: 5,
    course: "A Level Chemistry",
    avatar: "OA",
  },
  {
    id: 3,
    name: "Fatima Malik",
    country: "UK 🇬🇧",
    grade: "A* in Biology",
    content: "My daughter struggled with O Level Biology until we found LMS OWAIS PK. Within 3 months her grades jumped dramatically. The mock exams and detailed feedback made all the difference.",
    rating: 5,
    course: "O Level Biology",
    avatar: "FM",
  },
  {
    id: 4,
    name: "James Okonkwo",
    country: "Nigeria 🇳🇬",
    grade: "A in Computer Science",
    content: "The quality of teaching here rivals any UK private tutor, but at a fraction of the cost. Mr. Bilal's Computer Science classes are incredibly well-structured. Got my offer from UCL!",
    rating: 5,
    course: "A Level Computer Science",
    avatar: "JO",
  },
  {
    id: 5,
    name: "Zara Hussain",
    country: "Malaysia 🇲🇾",
    grade: "A* in Accounting",
    content: "I tried multiple online platforms before finding this one. The difference is the teachers genuinely care about your progress. The WhatsApp support and quick doubt-clearing is exceptional.",
    rating: 5,
    course: "A Level Accounting",
    avatar: "ZH",
  },
];

const colors = [
  "from-teal-500 to-cyan-600",
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-orange-500 to-amber-600",
  "from-emerald-500 to-teal-600",
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      className="section-padding bg-slate-50 dark:bg-navy-950"
      aria-labelledby="testimonials-heading"
      id="testimonials"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Student Stories
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real students across 20+ countries. Their success is our greatest achievement.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-navy-900/60 rounded-3xl p-8 md:p-12 border border-border shadow-card relative overflow-hidden"
              >
                {/* Quote icon */}
                <Quote
                  className="absolute top-8 right-8 w-16 h-16 text-teal-500/10"
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonials[current].rating} out of 5 stars`}>
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[current]} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                    aria-hidden="true"
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonials[current].name}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[current].country}</div>
                    <div className="text-teal-600 dark:text-teal-400 text-sm font-semibold mt-0.5">
                      🎓 {testimonials[current].grade}
                    </div>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <div className="text-xs text-muted-foreground mb-1">Course</div>
                    <div className="text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-lg">
                      {testimonials[current].course}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-8 h-2.5 bg-teal-500"
                        : "w-2.5 h-2.5 bg-border hover:bg-teal-500/50"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-xl border border-border bg-white dark:bg-navy-900 hover:border-teal-500 hover:text-teal-500 flex items-center justify-center transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-xl border border-border bg-white dark:bg-navy-900 hover:border-teal-500 hover:text-teal-500 flex items-center justify-center transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrent(i)}
                className={`p-3 rounded-xl border transition-all duration-200 text-left ${
                  i === current
                    ? "border-teal-500 bg-teal-500/10"
                    : "border-border bg-white dark:bg-navy-900/40 hover:border-teal-500/50"
                }`}
                aria-pressed={i === current}
                aria-label={`View ${t.name}'s testimonial`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors[i]} flex items-center justify-center text-white text-xs font-bold mb-2`} aria-hidden="true">
                  {t.avatar}
                </div>
                <div className="text-xs font-semibold text-foreground truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.country.split(" ")[1]}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
