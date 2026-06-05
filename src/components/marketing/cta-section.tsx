"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      className="section-padding bg-navy-900 relative overflow-hidden"
      aria-label="Call to action"
      id="cta"
    >
      {/* Animated background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Start Your Journey Today
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Ready to Achieve Your
            <span className="block gradient-text-hero">Cambridge Dream Grades?</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Join 2,500+ students from 20+ countries who are already excelling in
            Cambridge and Edexcel exams with LMS OWAIS PK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="teal"
                size="xl"
                className="gap-2 shadow-teal"
                id="cta-demo-button"
              >
                Book Free Demo Class
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "92300000000"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-white"
                size="xl"
                className="gap-2"
                id="cta-whatsapp-button"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-white/40 text-sm mt-8">
            No credit card required · Free demo class · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
