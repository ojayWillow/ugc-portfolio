"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card";
import { useLanguage } from "@/lib/language-context";

const brands = [
  {
    name: "TavoHudis",
    icon: "🧥",
    url: "https://tavohudis.lv",
    description: {
      lv: "UGC satura kampaņa mājīgām kapšonām",
      en: "UGC content campaign for cozy wearable hoodies",
    },
  },
  {
    name: "Aroma Gold",
    icon: "☕",
    url: "https://aromagold.eu",
    description: {
      lv: "Kafijas zīmola satura veidošana",
      en: "Coffee brand content creation",
    },
  },
  {
    name: "Mara Naturals",
    icon: "🌿",
    url: "#",
    description: {
      lv: "Dabiskās kosmētikas produktu apskati",
      en: "Natural cosmetics product reviews",
    },
  },
  {
    name: "Graci Muesli",
    icon: "🌾",
    url: "https://muesligraci.com",
    description: {
      lv: "Veselīga dzīvesstila satura sērija",
      en: "Healthy lifestyle content series",
    },
  },
  {
    name: "Mayeri",
    icon: "🌟",
    url: "https://mayeri.lv",
    description: {
      lv: "Ekoloģisko tīrīšanas līdzekļu saturs",
      en: "Eco-friendly cleaning products content",
    },
  },
  {
    name: "Linda Erika Beauté",
    icon: "💁\u200d\u2640\ufe0f",
    url: "#",
    description: {
      lv: "Skaistumkopšanas produktu UGC kampaņa",
      en: "Beauty products UGC campaign",
    },
  },
  {
    name: "Valenta",
    icon: "✨",
    url: "https://valenta.lv",
    description: {
      lv: "Kosmetoļoģijas klīnikas satura veidošana",
      en: "Cosmetology clinic content creation",
    },
  },
  {
    name: "Ask",
    icon: "💎",
    url: "#",
    description: {
      lv: "Zīmola satura un reklāmas kampaņa",
      en: "Brand content & advertising campaign",
    },
  },
];

export const BrandCollaborations = () => {
  const { locale, t } = useLanguage();

  return (
    <section id="brands" className="relative py-16 md:py-24 px-4 bg-brand-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">
            {t.brandCollaborations.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900">
            {t.brandCollaborations.title}
          </h2>
          <p className="mt-3 md:mt-4 text-brand-700 max-w-lg mx-auto text-sm md:text-base">
            {t.brandCollaborations.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <GlowingCard>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 py-2 md:py-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sage-100 flex items-center justify-center">
                    <span className="text-xl md:text-2xl">{brand.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-brand-900 font-semibold text-sm md:text-base">
                      {brand.name}
                    </h3>
                    <p className="text-brand-600 text-[10px] md:text-xs mt-0.5 md:mt-1 leading-relaxed hidden md:block">
                      {brand.description[locale]}
                    </p>
                  </div>
                  {brand.url !== "#" && (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-500 text-[9px] md:text-[10px] uppercase tracking-wider font-medium transition-colors hidden md:inline-block"
                    >
                      {brand.url.replace("https://", "").replace(/\/$/, "")}
                    </a>
                  )}
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
