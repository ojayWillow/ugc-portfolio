"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
  }[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  // Column 1 moves up, Column 2 moves down, Column 3 moves up
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(items.length / 3);
  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div ref={gridRef} className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-6 px-4">
        {/* Column 1 — scrolls UP */}
        <div className="grid gap-6">
          {firstPart.map((item) => (
            <motion.div
              key={item.id}
              style={{ y: translateFirst }}
            >
              <VideoCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Column 2 — scrolls DOWN */}
        <div className="grid gap-6">
          {secondPart.map((item) => (
            <motion.div
              key={item.id}
              style={{ y: translateSecond }}
            >
              <VideoCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Column 3 — scrolls UP */}
        <div className="grid gap-6">
          {thirdPart.map((item) => (
            <motion.div
              key={item.id}
              style={{ y: translateThird }}
            >
              <VideoCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({
  item,
}: {
  item: { id: number; title: string; category: string; thumbnail: string };
}) => {
  return (
    <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer hover:border-brand-500/50 transition-all duration-300 hover:scale-[1.02]">
      {/* Thumbnail — replace with real image/video later */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-600/10 via-neutral-900 to-neutral-800 transition-all duration-500 group-hover:from-brand-600/20"
        style={{
          backgroundImage: `url(${item.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-brand-500/30 backdrop-blur-md flex items-center justify-center border border-brand-400/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <svg
            className="w-7 h-7 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Category pill — top */}
      <div className="absolute top-3 left-3 z-20">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 backdrop-blur-sm border border-brand-500/20">
          {item.category}
        </span>
      </div>

      {/* Title — bottom */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-white font-semibold text-lg leading-tight">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-brand-400 text-xs font-medium">Watch now</span>
          <svg
            className="w-3 h-3 text-brand-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Shimmer line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
    </div>
  );
};
