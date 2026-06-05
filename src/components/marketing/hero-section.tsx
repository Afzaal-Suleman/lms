"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, Star, Globe, Users, Award, BookOpen,
  CheckCircle, TrendingUp, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "2,500+", label: "Students Worldwide", icon: Users },
  { value: "92%", label: "A*-A Grades", icon: TrendingUp },
  { value: "20+", label: "Countries", icon: Globe },
  { value: "4.9/5", label: "Teacher Rating", icon: Star },
];

const highlights = [
  "Live Interactive Classes",
  "Recorded Lecture Library",
  "Expert Cambridge Teachers",
  "Mock Exams & Past Papers",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-mesh overflow-hidden"
      aria-label="Hero section"
      id="hero"
    >
      {/* Animated background elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow top-1/4 -left-32" />
        <div className="hero-glow bottom-1/4 right-0" style={{ opacity: 0.6 }} />
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-72 h-72 rounded-full border border-teal-500/10"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full border border-white/5"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-400 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
                🎓 Enrolments Open for 2024-25
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Master Cambridge
              <br />
              <span className="gradient-text-hero">O & A Levels</span>
              <br />
              Online
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Live classes, expert teachers, recorded lessons, and
              exam-focused learning for students worldwide.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              aria-label="Platform highlights"
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button
                  variant="teal"
                  size="lg"
                  className="w-full sm:w-auto gap-2 shadow-teal text-base"
                  id="hero-demo-cta"
                >
                  Book Free Demo Class
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/subjects">
                <Button
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-base"
                  id="hero-subjects-cta"
                >
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                  View Subjects & Fees
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2" aria-label="Student avatars">
                {["🧑‍🎓", "👩‍🎓", "🧑‍🎓", "👩‍🎓", "🧑‍🎓"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 border-2 border-teal-500/30 flex items-center justify-center text-sm"
                    aria-hidden="true"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/60">
                <span className="text-white font-semibold">2,500+</span>{" "}
                students already enrolled
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
            aria-label="Academy statistics"
          >
            {/* Main card */}
            <div className="relative">
              {/* Floating stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-card p-6 rounded-2xl text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5 text-teal-400" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white px-4 py-2.5 rounded-2xl shadow-teal text-sm font-semibold"
                aria-hidden="true"
              >
                🏆 Top Rated Academy
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2.5 rounded-2xl text-sm font-medium"
                aria-hidden="true"
              >
                ✅ Cambridge Certified Teachers
              </motion.div>

              {/* Live class indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/2 -translate-y-1/2 -right-10 glass p-3 rounded-2xl border border-white/15"
                aria-hidden="true"
              >
                {/* <div className="flex items-center gap-2 text-sm text-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  Live Now
                </div>
                <div className="text-xs text-white/50 mt-0.5">A Level Maths</div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          aria-label="Academy statistics"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-1 h-2 bg-teal-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
