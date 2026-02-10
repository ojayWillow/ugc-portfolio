"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Showreel is now enabled — using the laser epilation video as the hero reel
  const hasShowreel = true;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === VIDEO BACKGROUND === */}
      {hasShowreel && !videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/L%C4%81zerepil%C4%81cijas%20Nosl%C4%93pumi%20-%20VEED%20Export.mp4" type="video/mp4" />
        </video>
      )}

      {/* === ANIMATED GRADIENT FALLBACK (shows while video loads) === */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-600/40 blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[120px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-brand-400/20 blur-[100px] animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="absolute inset-0 bg-dot-thick-neutral-800 opacity-40" />
        </div>
      )}

      {/* === DARK OVERLAY === */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* === GRADIENT OVERLAYS === */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-[2]" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-[3]"
        fill="#a855f7"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-300 text-xs font-medium uppercase tracking-widest">
              Available for Collaborations
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
              [Her Name]
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-neutral-400 font-light">
            UGC Content Creator
          </p>

          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Crafting authentic, scroll-stopping content that turns viewers into
            customers. Let&apos;s make your brand unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#videos"
            className="group relative px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
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
            className="px-8 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "50+", label: "Brand Collabs" },
            { value: "2M+", label: "Views Generated" },
            { value: "100+", label: "Content Pieces" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-3xl font-bold text-white group-hover:text-brand-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-600 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-neutral-700 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-brand-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
