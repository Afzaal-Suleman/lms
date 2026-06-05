"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="section-padding bg-white dark:bg-navy-950"
      aria-label="Academy introduction video"
      id="video"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            See How We Teach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Experience the LMS OWAIS PK Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how our expert teachers deliver Cambridge and Edexcel curriculum
            in an engaging, results-driven online environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Thumbnail */}
          {!playing && (
            <div className="relative aspect-video bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex items-center justify-center cursor-pointer group">
              {/* Abstract visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
                <div className="w-96 h-96 rounded-full border-2 border-teal-500/30" />
                <div className="absolute w-64 h-64 rounded-full border border-teal-500/20" />
                <div className="absolute w-32 h-32 rounded-full border border-teal-500/20" />
              </div>

              {/* Academy branding overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20" aria-hidden="true" />

              <div className="relative text-center z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-teal-500 hover:bg-teal-400 flex items-center justify-center shadow-teal mb-4 mx-auto transition-colors"
                  aria-label="Play academy introduction video"
                >
                  <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
                </motion.button>
                <div className="text-white font-semibold text-lg mb-1">
                  Academy Introduction
                </div>
                <div className="text-white/60 text-sm">60 seconds · HD Quality</div>
              </div>

              {/* Duration badge */}
              <div
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 rounded"
                aria-hidden="true"
              >
                1:00
              </div>
            </div>
          )}

          {/* Video iframe (YouTube embed placeholder) */}
          {playing && (
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="LMS OWAIS PK Academy Introduction"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
                aria-label="Stop video"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Feature bullets below video */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            "🎯 Exam-focused curriculum",
            "👨‍🏫 Cambridge-certified teachers",
            "📱 Learn on any device",
            "🌍 Students from 20+ countries",
          ].map((item) => (
            <span
              key={item}
              className="text-sm text-muted-foreground font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
