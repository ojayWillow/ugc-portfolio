"use client";
import React from "react";
import { motion } from "framer-motion";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// Placeholder video data — replace with real videos later
const videos = [
  { id: 1, title: "Product Unboxing", category: "Lifestyle", thumbnail: "/videos/thumb-1.jpg" },
  { id: 2, title: "Morning Routine", category: "Beauty", thumbnail: "/videos/thumb-2.jpg" },
  { id: 3, title: "Brand Review", category: "Tech", thumbnail: "/videos/thumb-3.jpg" },
  { id: 4, title: "GRWM for Event", category: "Fashion", thumbnail: "/videos/thumb-4.jpg" },
  { id: 5, title: "Skincare Routine", category: "Beauty", thumbnail: "/videos/thumb-5.jpg" },
  { id: 6, title: "Day in My Life", category: "Lifestyle", thumbnail: "/videos/thumb-6.jpg" },
  { id: 7, title: "Haul & Try-On", category: "Fashion", thumbnail: "/videos/thumb-7.jpg" },
  { id: 8, title: "Apartment Tour", category: "Lifestyle", thumbnail: "/videos/thumb-8.jpg" },
  { id: 9, title: "Makeup Tutorial", category: "Beauty", thumbnail: "/videos/thumb-9.jpg" },
];

export const VideoShowcase = () => {
  return (
    <section id="videos" className="relative py-24 bg-black overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Video Content
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            Scroll-stopping UGC videos crafted for engagement and conversion.
            <br />
            <span className="text-neutral-600 text-sm italic mt-1 inline-block">
              ↕ Scroll to explore
            </span>
          </p>
        </motion.div>

        {/* Parallax grid — columns scroll in opposite directions */}
        <ParallaxScroll items={videos} className="pb-12" />
      </div>
    </section>
  );
};
