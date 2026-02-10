"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/[0.96] bg-dot-thick-neutral-800"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-4">
            UGC Content Creator
          </p>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Creating Content
            <br />
            That Converts
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-xl mx-auto">
            Authentic, scroll-stopping content for brands that want to stand out.
            Videos, photos, and creative strategies that drive results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#videos"
            className="px-8 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-medium transition-colors"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "50+", label: "Brand Collabs" },
            { value: "2M+", label: "Views Generated" },
            { value: "100+", label: "Content Pieces" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
