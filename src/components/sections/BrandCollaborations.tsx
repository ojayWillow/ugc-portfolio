"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card";

// Placeholder brand data — replace with real brands
const brands = [
  { name: "Brand A", description: "Product launch UGC campaign", logo: "/brands/brand-a.svg" },
  { name: "Brand B", description: "Social media content series", logo: "/brands/brand-b.svg" },
  { name: "Brand C", description: "Lifestyle photography & reels", logo: "/brands/brand-c.svg" },
  { name: "Brand D", description: "Unboxing & review videos", logo: "/brands/brand-d.svg" },
  { name: "Brand E", description: "Holiday campaign content", logo: "/brands/brand-e.svg" },
  { name: "Brand F", description: "Brand ambassador program", logo: "/brands/brand-f.svg" },
];

export const BrandCollaborations = () => {
  return (
    <section id="brands" className="relative py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">Trusted By</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Brand Collaborations</h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            Proud to have worked with amazing brands across multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlowingCard>
                <div className="flex items-center gap-4">
                  {/* Placeholder logo */}
                  <div className="w-12 h-12 rounded-lg bg-brand-600/20 flex items-center justify-center">
                    <span className="text-brand-400 font-bold text-lg">
                      {brand.name.charAt(brand.name.length - 1)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{brand.name}</h3>
                    <p className="text-neutral-400 text-sm">{brand.description}</p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
