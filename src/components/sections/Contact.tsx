"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-black/[0.96] bg-dot-thick-neutral-800 overflow-hidden"
    >
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#a855f7" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Create Together
          </h2>
          <p className="text-neutral-400 mb-12">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message
            and let&apos;s make some amazing content.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-left"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-neutral-400 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-neutral-400 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-neutral-400 mb-1 block">Brand / Company</label>
            <input
              type="text"
              placeholder="Your brand name"
              className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-neutral-400 mb-1 block">Project Details</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project, budget, and timeline..."
              className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors"
          >
            Send Message ✨
          </button>
        </motion.form>

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {[
            { name: "TikTok", href: "#" },
            { name: "Instagram", href: "#" },
            { name: "YouTube", href: "#" },
            { name: "Email", href: "mailto:hello@example.com" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-neutral-500 hover:text-brand-400 text-sm transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
