"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card";
import { useLanguage } from "@/lib/language-context";

export const BrandCollaborations = () => {
  const { t } = useLanguage();
  const brands = t.brandCollaborations.brands;

  return (
    <section id="brands" className="relative py-24 px-4 bg-brand-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">{t.brandCollaborations.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900">{t.brandCollaborations.title}</h2>
          <p className="mt-4 text-brand-700 max-w-lg mx-auto">
            {t.brandCollaborations.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand: any, idx: number) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlowingCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sage-100 flex items-center justify-center">
                    <span className="text-sage-700 font-bold text-lg">
                      {brand.name.charAt(brand.name.length - 1)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-brand-900 font-semibold">{brand.name}</h3>
                    <p className="text-brand-600 text-sm">{brand.description}</p>
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
