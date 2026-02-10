"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Placeholder photo data — replace with real photos later
const photos = [
  { image: "/photos/photo-1.jpg", title: "Lifestyle Shoot" },
  { image: "/photos/photo-2.jpg", title: "Product Flat Lay" },
  { image: "/photos/photo-3.jpg", title: "Brand Campaign" },
  { image: "/photos/photo-4.jpg", title: "Outdoor Session" },
  { image: "/photos/photo-5.jpg", title: "Studio Portrait" },
  { image: "/photos/photo-6.jpg", title: "Food & Beverage" },
  { image: "/photos/photo-7.jpg", title: "Fashion Editorial" },
  { image: "/photos/photo-8.jpg", title: "Street Style" },
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
        <InfiniteMovingCards items={photos.slice(0, 4)} direction="left" speed="slow" />
        <InfiniteMovingCards items={photos.slice(4)} direction="right" speed="slow" />
      </div>
    </section>
  );
};
