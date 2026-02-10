"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🎬",
    title: "UGC Videos",
    description:
      "Unboxings, reviews, tutorials, GRWM, and day-in-my-life content that feels authentic and drives engagement.",
    formats: ["TikTok", "Reels", "Shorts"],
  },
  {
    icon: "📸",
    title: "Product Photography",
    description:
      "Lifestyle shots, flat lays, and aesthetic product photos that make your brand look irresistible.",
    formats: ["Instagram", "Website", "Ads"],
  },
  {
    icon: "🎙️",
    title: "Voiceovers",
    description:
      "Warm, authentic narration for brand videos, ads, and social content that connects with your audience.",
    formats: ["Ads", "Reels", "Promos"],
  },
  {
    icon: "✂️",
    title: "Short-Form Content",
    description:
      "Scroll-stopping vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts.",
    formats: ["9:16", "15-60s", "Trending"],
  },
  {
    icon: "💡",
    title: "Creative Strategy",
    description:
      "Content concepts, scripting, and creative direction tailored to your brand voice and target audience.",
    formats: ["Concepts", "Scripts", "Moodboards"],
  },
  {
    icon: "📦",
    title: "Unboxing & Reviews",
    description:
      "Genuine first-impression unboxings and honest product reviews that build trust with real consumers.",
    formats: ["Organic", "Authentic", "Relatable"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 bg-brand-100">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sage-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900">
            Services
          </h2>
          <p className="mt-4 text-brand-700 max-w-lg mx-auto">
            From concept to delivery — everything your brand needs to shine on
            social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-brand-300/30 bg-brand-50 p-6 hover:border-sage-400/40 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sage-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-brand-700 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.formats.map((format) => (
                    <span
                      key={format}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-brand-200/50 text-brand-700 border border-brand-300/30"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-brand-600 text-sm mb-4">
            Every project is unique — let&apos;s find the perfect package for
            your brand.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sage-600 hover:bg-sage-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/25"
          >
            Let&apos;s Discuss Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
