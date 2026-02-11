"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { useLanguage } from "@/lib/language-context";

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", brand: "", details: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-brand-100 bg-dot-thick-brand-200 overflow-hidden"
    >
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#7da87a" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">{t.contact.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-brand-700 mb-12">
            {t.contact.description}
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-sage-600/10 border border-sage-500/30 rounded-xl p-8 text-center"
          >
            <div className="text-4xl mb-4">\u2728</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Message Sent!</h3>
            <p className="text-brand-700 mb-6">Thank you for reaching out. I&apos;ll get back to you soon!</p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2 rounded-lg bg-sage-600 hover:bg-sage-500 text-white font-medium transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-left"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-brand-700 mb-1 block">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-300/50 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-sage-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-brand-700 mb-1 block">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-300/50 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-sage-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-brand-700 mb-1 block">{t.contact.brandLabel}</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder={t.contact.brandPlaceholder}
                className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-300/50 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-sage-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-brand-700 mb-1 block">{t.contact.detailsLabel}</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.contact.detailsPlaceholder}
                className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-300/50 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-sage-500 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-sage-600 hover:bg-sage-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                t.contact.sendButton
              )}
            </button>
          </motion.form>
        )}

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {t.contact.socials.map((social: { name: string; href: string }) => (
            <a
              key={social.name}
              href={social.href}
              className="text-brand-600 hover:text-sage-600 text-sm transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
