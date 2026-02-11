"use client";
import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type LanguageContextType = {
  locale: Locale;
  t: Record<string, any>;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("lv");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "lv" ? "en" : "lv"));
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
