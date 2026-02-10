"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Real photos from public/photos/
const photos = [
  { image: "/photos/613531F5-0672-4099-9CFD-BBD0839F1379.jpeg", title: "Content Shoot" },
  { image: "/photos/IMG_2522.jpeg", title: "Lifestyle" },
  { image: "/photos/613531F5-0672-4099-9CFD-BBD0839F1379.jpeg", title: "Brand Work" },
  { image: "/photos/IMG_2522.jpeg", title: "Creative" },
];

export const PhotoGallery = () => {
  return (
    <section id="photos" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Photo Content</h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            High-quality visuals that tell your brand&apos;s story.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling photo rows */}
      <div className="space-y-4">
        <InfiniteMovingCards items={photos.slice(0, 2)} direction="left" speed="slow" />
        <InfiniteMovingCards items={photos.slice(2)} direction="right" speed="slow" />
      </div>
    </section>
  );
};
