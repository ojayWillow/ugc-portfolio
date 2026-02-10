"use client";
import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5">
              <img
                src="/photos/IMG_2522.jpeg"
                alt="Samanta Kopce"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-brand-500/20 -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6">Hey, I&apos;m Samanta 👋</h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I&apos;m a UGC content creator passionate about crafting authentic,
                relatable content that resonates with real audiences. With experience
                across beauty, lifestyle, tech, and fashion niches, I bring brands
                to life through genuine storytelling.
              </p>
              <p>
                My content has generated over 2M+ views and helped 50+ brands
                increase their engagement and conversion rates. I believe in
                creating content that feels organic, not scripted.
              </p>
              <p>
                When I&apos;m not creating, you&apos;ll find me exploring new coffee
                shops, experimenting with photography, or planning my next creative
                project.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["UGC Videos", "Product Photography", "Brand Strategy", "Social Media", "Reels & TikTok", "Unboxing"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-brand-600/10 text-brand-400 border border-brand-600/20"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
