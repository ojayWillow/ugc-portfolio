"use client";
import React from "react";
import { useLanguage } from "@/lib/language-context";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-brand-300/30 bg-brand-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-600 text-sm">
          © {new Date().getFullYear()} Samanta Kopce. {t.footer.rights}
        </p>
        <p className="text-brand-500 text-xs">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
};
