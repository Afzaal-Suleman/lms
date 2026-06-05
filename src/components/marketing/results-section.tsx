"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Users, BookOpen } from "lucide-react";

const stats = [
  { value: 92, suffix: "%", label: "A*-A Grade Rate", icon: TrendingUp, color: "text-teal-500" },
  { value: 2500, suffix: "+", label: "Students Worldwide", icon: Users, color: "text-blue-500" },
  { value: 98, suffix: "%", label: "Pass Rate", icon: Award, color: "text-emerald-500" },
  { value: 8, suffix: "+", label: "Subjects Offered", icon: BookOpen, color: "text-purple-500" },
];

const gradeData = [
  { grade: "A*", percentage: 42, color: "bg-teal-500" },
  { grade: "A", percentage: 50, color: "bg-blue-500" },
  { grade: "B", percentage: 6, color: "bg-purple-500" },
  { grade: "C+", percentage: 2, color: "bg-amber-500" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function ResultsSection() {
  return (
    <section
      className="section-padding bg-navy-900 relative overflow-hidden"
      aria-labelledby="results-heading"
      id="results"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Proven Track Record
          </span>
          <h2 id="results-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Students Achieve
            <span className="block gradient-text-hero">Extraordinary Results</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Consistently delivering top Cambridge and Edexcel exam results for students across the globe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} aria-hidden="true" />
                </div>
                <div className={`text-4xl font-black ${stat.color} mb-1`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Grade Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-white font-bold text-xl mb-2">Grade Distribution</h3>
            <p className="text-white/50 text-sm mb-8">Cambridge & Edexcel O/A Level results — 2023/24</p>

            <div className="space-y-5" role="list" aria-label="Grade distribution">
              {gradeData.map((item, i) => (
                <div key={item.grade} role="listitem">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Grade {item.grade}</span>
                    <span className="text-teal-400 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden" role="progressbar" aria-valuenow={item.percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`Grade ${item.grade}: ${item.percentage}%`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-bold">92% A*-A Grades</div>
                  <div className="text-white/50 text-sm">Consistently above national average</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
