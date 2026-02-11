"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export const Navbar = () => {
  const { locale, t, toggleLocale } = useLanguage();
  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.videos, href: "#videos" },
    { name: t.nav.photos, href: "#photos" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.brands, href: "#brands" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const [active, setActive] = useState<string>(t.nav.home);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update active label when language changes
  useEffect(() => {
    setActive(t.nav.home);
  }, [locale, t.nav.home]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center space-x-4 rounded-full border border-brand-300/40 bg-brand-50/80 backdrop-blur-md px-6 py-3 shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={cn(
                "text-sm transition-colors hover:text-sage-600",
                active === item.name ? "text-sage-600" : "text-brand-800/70"
              )}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            className="ml-2 px-2.5 py-1 rounded-full text-xs font-medium border border-brand-300/40 hover:border-sage-400/60 bg-brand-100/60 hover:bg-sage-100/60 text-brand-800 transition-all duration-300"
            aria-label="Toggle language"
          >
            {locale === "lv" ? "EN" : "LV"}
          </button>
        </motion.div>
      </nav>

      {/* Mobile hamburger button */}
      <div className="fixed top-4 right-4 z-[60] md:hidden flex items-center gap-2">
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={toggleLocale}
          className="w-11 h-11 rounded-full border border-brand-300/40 bg-brand-50/80 backdrop-blur-md shadow-lg flex items-center justify-center text-xs font-medium text-brand-800"
          aria-label="Toggle language"
        >
          {locale === "lv" ? "EN" : "LV"}
        </motion.button>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-11 h-11 rounded-full border border-brand-300/40 bg-brand-50/80 backdrop-blur-md shadow-lg flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 relative">
            <span
              className={cn(
                "block w-5 h-[2px] bg-brand-800 rounded-full transition-all duration-300 absolute",
                menuOpen ? "rotate-45 top-[9px]" : "top-[3px]"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-brand-800 rounded-full transition-all duration-300 absolute top-[9px]",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-brand-800 rounded-full transition-all duration-300 absolute",
                menuOpen ? "-rotate-45 top-[9px]" : "top-[15px]"
              )}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-brand-50/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => {
                    setActive(item.name);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    active === item.name ? "text-sage-600" : "text-brand-800"
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
