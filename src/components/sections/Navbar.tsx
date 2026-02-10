"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Videos", href: "#videos" },
  { name: "Photos", href: "#photos" },
  { name: "Services", href: "#services" },
  { name: "Brands", href: "#brands" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState<string>("Home");

  return (
    <nav className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center space-x-4 rounded-full border border-brand-300/40 bg-brand-50/80 backdrop-blur-md px-6 py-3 shadow-lg"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
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
      </motion.div>
    </nav>
  );
};
