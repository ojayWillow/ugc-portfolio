"use client";
import React from "react";
import { motion } from "framer-motion";

const proofItems: ProofItem[] = [];

type ProofItem = {
  type: "stat" | "comment" | "dm" | "screenshot";
  image: string;
  label: string;
  size: "small" | "medium" | "large";
};

export const SocialProof = () => {
  const hasRealProof = proofItems.length > 0;

  return (
    <section id="proof" className="relative py-24 px-4 bg-brand-100 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">
            The Receipts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900">
            Real Results
          </h2>
          <p className="mt-4 text-brand-700 max-w-lg mx-auto">
            Numbers don&apos;t lie. Here&apos;s what happens when authentic
            content meets the right audience.
          </p>
        </motion.div>

        {hasRealProof ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {proofItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative break-inside-avoid rounded-xl overflow-hidden border border-brand-300/30 hover:border-sage-400/40 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-brand-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-brand-900 text-xs font-medium">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative rounded-2xl border border-brand-300/30 bg-brand-50 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] rounded-full bg-brand-400/30 blur-[80px]" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[300px] h-[300px] rounded-full bg-sage-300/30 blur-[80px]" />
              </div>

              <div className="relative z-10">
                <div className="text-5xl mb-6">🧾</div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">
                  Every brand story starts somewhere.
                </h3>
                <p className="text-brand-700 leading-relaxed mb-8">
                  Let&apos;s make your project the next success story on this
                  wall. The first step? A simple conversation.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sage-600 hover:bg-sage-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/25"
                >
                  Be the First Story
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
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
