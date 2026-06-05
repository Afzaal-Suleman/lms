"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Award, CheckCircle } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "Cambridge International Partner",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: CheckCircle,
    label: "Edexcel Approved Center",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Globe,
    label: "Students from 20+ Countries",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    icon: Shield,
    label: "Certified & Vetted Teachers",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export function TrustBar() {
  return (
    <section
      className="bg-navy-900/80 border-y border-white/10 py-6"
      aria-label="Trust indicators"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <div
                className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}
                aria-hidden="true"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="text-white/70 text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
