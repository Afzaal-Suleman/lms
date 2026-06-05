"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UserPlus, MonitorPlay, BookOpen,
  ClipboardList, GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Enroll Online",
    description:
      "Choose your subject, select a plan, and complete secure payment. Get instant access to your student portal.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Attend Live Classes",
    description:
      "Join interactive Zoom classes with your expert teacher. Ask questions in real-time and collaborate with peers.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Access Recordings & Notes",
    description:
      "All sessions are recorded. Access lectures, PDF notes, and resources anytime from your dashboard.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Practice with Mock Exams",
    description:
      "Take past papers, timed mock exams, and quizzes. Get detailed feedback to identify weak areas.",
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Ace Your Exams",
    description:
      "Walk into your Cambridge or Edexcel exam with confidence. 92% of our students achieve A*-A grades.",
    color: "from-emerald-500 to-teal-500",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding bg-navy-900 relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
      id="how-it-works"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Simple Process
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            How It Works
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From enrollment to exam success in five simple steps.
            Join thousands of students already achieving top grades.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-[2.375rem] top-12 bottom-12 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent hidden md:block"
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="How it works steps">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex gap-6 group"
              >
                {/* Icon circle */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-6 rounded-2xl group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                    <span
                      className="text-4xl font-black text-white/8 leading-none select-none"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
