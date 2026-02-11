"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { useLanguage } from "@/lib/language-context";

const CLOUD = "https://res.cloudinary.com/dykocdlgk";

export const Hero = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setVideoLoaded(true);
      return;
    }

    const handleLoaded = () => setVideoLoaded(true);
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("canplay", handleLoaded);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("canplay", handleLoaded);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === ANIMATED GRADIENT (always behind, acts as loading state) === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-100" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-400/40 blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-sage-300/30 blur-[120px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-[30%] right-[20%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full bg-brand-300/20 blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute inset-0 bg-dot-thick-brand-300 opacity-40" />
      </div>

      {/* === VIDEO BACKGROUND === */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={`${CLOUD}/video/upload/showreel_yfivfz.mp4`} type="video/mp4" />
      </video>

      {/* === OVERLAY === */}
      <div className="absolute inset-0 bg-brand-100/60 z-[2]" />

      {/* === GRADIENT OVERLAYS === */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-100 via-transparent to-brand-100/40 z-[3]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-100/30 via-transparent to-brand-100/30 z-[3]" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-[4]"
        fill="#7da87a"
      />

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-sage-500/30 bg-sage-500/10 backdrop-blur-sm mb-4 md:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
            <span className="text-sage-700 text-[10px] md:text-xs font-medium uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-brand-900 via-brand-800 to-brand-600">
              {t.hero.name}
            </span>
          </h1>

          <p className="mt-3 md:mt-4 text-lg md:text-xl lg:text-2xl text-brand-700 font-light">
            {t.hero.role}
          </p>

          <p className="mt-2 md:mt-3 text-xs md:text-sm text-brand-600 max-w-md mx-auto leading-relaxed px-4 md:px-0">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="#videos"
            className="group relative px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-sage-600 hover:bg-sage-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/25 text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.viewWork}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="px-6 md:px-8 py-3 md:py-3.5 rounded-full border border-brand-700/20 hover:border-brand-700/40 text-brand-800 hover:text-brand-900 font-medium transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
          >
            {t.hero.collaborate}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 md:mt-20 grid grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-md mx-auto"
        >
          {t.hero.stats.map((stat: { value: string; label: string }) => (
            <div key={stat.label} className="group">
              <p className="text-2xl md:text-3xl font-bold text-brand-900 group-hover:text-sage-600 transition-colors">
                {stat.value}
              </p>
              <p className="text-[9px] md:text-[11px] text-brand-600 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* === SCROLL INDICATOR === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-brand-500 text-[10px] uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-brand-400 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-sage-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
