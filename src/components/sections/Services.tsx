"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export const Services = () => {
  const { t } = useLanguage();
  const services = t.services.items;

  return (
    <section id="services" className="relative py-16 md:py-24 px-4 bg-brand-100">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sage-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">
            {t.services.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900">
            {t.services.title}
          </h2>
          <p className="mt-3 md:mt-4 text-brand-700 max-w-lg mx-auto text-sm md:text-base">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service: any, idx: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-xl md:rounded-2xl border border-brand-300/30 bg-brand-50 p-4 md:p-6 hover:border-sage-400/40 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-b from-sage-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-2xl md:text-3xl">{service.icon}</span>
                <h3 className="mt-2 md:mt-4 text-sm md:text-xl font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-1 md:mt-2 text-brand-700 text-xs md:text-sm leading-relaxed hidden md:block">
                  {service.description}
                </p>
                <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
                  {service.formats.map((format: string) => (
                    <span
                      key={format}
                      className="px-1.5 md:px-2.5 py-0.5 rounded-full text-[8px] md:text-[10px] font-medium uppercase tracking-wider bg-brand-200/50 text-brand-700 border border-brand-300/30"
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
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-brand-600 text-xs md:text-sm mb-4">
            {t.services.cta}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-sage-600 hover:bg-sage-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/25 text-sm md:text-base"
          >
            {t.services.ctaButton}
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
