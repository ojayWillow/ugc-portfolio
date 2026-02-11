"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const CLOUD = "https://res.cloudinary.com/dykocdlgk";

const photos = [
  { image: `${CLOUD}/image/upload/image/613531F5-0672-4099-9CFD-BBD0839F1379.jpeg`, title: "Content Shoot" },
  { image: `${CLOUD}/image/upload/image/IMG_2522.jpeg`, title: "Lifestyle" },
  { image: `${CLOUD}/image/upload/image/IMG_1303.JPG`, title: "Brand Work" },
  { image: `${CLOUD}/image/upload/image/IMG_1372.JPG`, title: "Creative" },
  { image: `${CLOUD}/image/upload/image/IMG_1389.JPG`, title: "Behind the Scenes" },
  { image: `${CLOUD}/image/upload/image/IMG_5909.JPG`, title: "Portrait" },
  { image: `${CLOUD}/image/upload/image/samanta.JPG`, title: "Samanta" },
];

export const PhotoGallery = () => {
  return (
    <section id="photos" className="relative py-24 bg-brand-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sage-600 text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900">Photo Content</h2>
          <p className="mt-4 text-brand-700 max-w-lg mx-auto">
            High-quality visuals that tell your brand&apos;s story.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <InfiniteMovingCards items={photos.slice(0, 4)} direction="left" speed="slow" />
        <InfiniteMovingCards items={photos.slice(4)} direction="right" speed="slow" />
      </div>
    </section>
  );
};
