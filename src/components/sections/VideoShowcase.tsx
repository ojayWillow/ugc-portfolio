"use client";
import React from "react";
import { motion } from "framer-motion";

// Placeholder video data — replace with real videos later
const videos = [
  { id: 1, title: "Product Unboxing", category: "Lifestyle", thumbnail: "/videos/thumb-1.jpg" },
  { id: 2, title: "Morning Routine", category: "Beauty", thumbnail: "/videos/thumb-2.jpg" },
  { id: 3, title: "Brand Review", category: "Tech", thumbnail: "/videos/thumb-3.jpg" },
  { id: 4, title: "GRWM for Event", category: "Fashion", thumbnail: "/videos/thumb-4.jpg" },
  { id: 5, title: "Skincare Routine", category: "Beauty", thumbnail: "/videos/thumb-5.jpg" },
  { id: 6, title: "Day in My Life", category: "Lifestyle", thumbnail: "/videos/thumb-6.jpg" },
];

export const VideoShowcase = () => {
  return (
    <section id="videos" className="relative py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Video Content</h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            Scroll-stopping UGC videos crafted for engagement and conversion.
          </p>
        </motion.div>

        {/* Video grid — placeholders for now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer hover:border-brand-500/50 transition-colors"
            >
              {/* Placeholder — replace div with <video> or embed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-xs text-brand-400 font-medium">{video.category}</span>
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
