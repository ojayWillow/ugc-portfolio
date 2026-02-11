"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const CLOUD = "https://res.cloudinary.com/dykocdlgk";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 bg-brand-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Profile photo */}
          <div className="relative max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-300/30">
              <img
                src={`${CLOUD}/image/upload/samanta_lf4zez.jpg`}
                alt="Samanta Kopce"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-sage-400/20 -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">{t.about.subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 md:mb-6">{t.about.title}</h2>
            <div className="space-y-3 md:space-y-4 text-brand-700 leading-relaxed text-sm md:text-base">
              <p>{t.about.bio[0]}</p>
              <p>{t.about.bio[1]}</p>
              <p className="hidden md:block">{t.about.bio[2]}</p>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
              {t.about.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-2.5 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium bg-sage-100 text-sage-700 border border-sage-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
