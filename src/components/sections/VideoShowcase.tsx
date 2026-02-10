"use client";
import React from "react";
import { motion } from "framer-motion";

// Real video files from public/videos/ (converted to .mp4 for browser compatibility)
const videos = [
  {
    id: 1,
    title: "Lāzerepilācijas Noslēpumi",
    category: "Beauty",
    thumbnail: "/photos/613531F5-0672-4099-9CFD-BBD0839F1379.jpeg",
    videoSrc: "/videos/L%C4%81zerepil%C4%81cijas%20Nosl%C4%93pumi%20-%20VEED%20Export.mp4",
  },
  {
    id: 2,
    title: "Content Piece #1",
    category: "Lifestyle",
    thumbnail: "/photos/IMG_2522.jpeg",
    videoSrc: "/videos/content-piece-1.mp4",
  },
  {
    id: 3,
    title: "Content Piece #2",
    category: "Lifestyle",
    thumbnail: "/photos/613531F5-0672-4099-9CFD-BBD0839F1379.jpeg",
    videoSrc: "/videos/content-piece-2.mp4",
  },
  {
    id: 4,
    title: "Behind the Scenes",
    category: "BTS",
    thumbnail: "/photos/IMG_2522.jpeg",
    videoSrc: "/videos/behind-the-scenes.mp4",
  },
];

export const VideoShowcase = () => {
  return (
    <section id="videos" className="relative py-24 bg-black overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <p className="text-brand-400 text-sm uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Video Content
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            Scroll-stopping UGC videos crafted for engagement and conversion.
            <br />
            <span className="text-neutral-600 text-sm italic mt-1 inline-block">
              ↕ Scroll to explore
            </span>
          </p>
        </motion.div>

        {/* Video cards with playable previews */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer hover:border-brand-500/50 transition-all duration-300"
              >
                {/* Video element — plays on hover */}
                <video
                  src={video.videoSrc}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 backdrop-blur-md flex items-center justify-center border border-brand-400/30">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* "Playing" indicator on hover */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/80 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-[10px] font-medium">PLAYING</span>
                  </div>
                </div>

                {/* Category pill */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 backdrop-blur-sm border border-brand-500/20">
                    {video.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
