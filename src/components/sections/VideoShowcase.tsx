"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CLOUD = "https://res.cloudinary.com/dykocdlgk";

const videos = [
  {
    id: 1,
    title: "L\u0101zerepil\u0101cijas Nosl\u0113pumi",
    category: "Beauty",
    videoSrc: `${CLOUD}/video/upload/showreel_yfivfz.mp4`,
  },
  {
    id: 2,
    title: "Content Piece #1",
    category: "Lifestyle",
    videoSrc: `${CLOUD}/video/upload/content-piece-1_cz8lrc.mp4`,
  },
  {
    id: 3,
    title: "Content Piece #2",
    category: "Lifestyle",
    videoSrc: `${CLOUD}/video/upload/content-piece-2_t7uutw.mp4`,
  },
  {
    id: 4,
    title: "Behind the Scenes",
    category: "BTS",
    videoSrc: `${CLOUD}/video/upload/behind-the-scenes_setjyx.mp4`,
  },
  {
    id: 5,
    title: "Content Piece #3",
    category: "Lifestyle",
    videoSrc: `${CLOUD}/video/upload/img-1654_ppz5k6.mp4`,
  },
  {
    id: 6,
    title: "Content Piece #4",
    category: "Lifestyle",
    videoSrc: `${CLOUD}/video/upload/img-2844_b5qzjs.mp4`,
  },
  {
    id: 7,
    title: "Content Piece #5",
    category: "Lifestyle",
    videoSrc: `${CLOUD}/video/upload/img-4311_xcimbv.mp4`,
  },
];

const VideoCard = ({ video, idx, size }: { video: typeof videos[0]; idx: number; size: "tall" | "medium" | "short" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const heights = {
    tall: "aspect-[9/16]",
    medium: "aspect-[9/14]",
    short: "aspect-[9/12]",
  };

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const goFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) {
      v.requestFullscreen();
    } else if ((v as any).webkitEnterFullscreen) {
      (v as any).webkitEnterFullscreen();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${heights[size]} md:${heights[size]} rounded-2xl overflow-hidden bg-brand-200 border border-brand-300/30 cursor-pointer hover:border-sage-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(125,168,122,0.1)]`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.videoSrc}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onMouseEnter={(e) => {
          if (window.innerWidth >= 768) {
            (e.target as HTMLVideoElement).play();
            setIsPlaying(true);
          }
        }}
        onMouseLeave={(e) => {
          if (window.innerWidth >= 768) {
            const v = e.target as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
            setIsPlaying(false);
          }
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-brand-900/10 z-10 pointer-events-none" />

      {/* Play/Pause icon — center */}
      <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 pointer-events-none ${
        isPlaying ? "opacity-0" : "opacity-100"
      }`}>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-50/20 backdrop-blur-md flex items-center justify-center border border-brand-50/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Playing indicator */}
      <div className={`absolute top-2 right-2 md:top-3 md:right-3 z-20 transition-opacity duration-300 pointer-events-none ${
        isPlaying ? "opacity-100" : "opacity-0"
      }`}>
        <div className="flex items-center gap-1 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-red-500/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white text-[9px] md:text-[10px] font-medium">PLAYING</span>
        </div>
      </div>

      {/* Audio toggle button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-14 right-3 z-30 w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand-900/40 backdrop-blur-sm flex items-center justify-center border border-brand-50/20 hover:bg-brand-900/60 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Fullscreen button */}
      <button
        onClick={goFullscreen}
        className="absolute bottom-14 left-3 z-30 w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand-900/40 backdrop-blur-sm flex items-center justify-center border border-brand-50/20 hover:bg-brand-900/60 transition-colors"
        aria-label="Fullscreen"
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      </button>

      {/* Category pill */}
      <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20 pointer-events-none">
        <span className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-semibold uppercase tracking-wider bg-brand-50/20 text-white/80 backdrop-blur-sm border border-brand-50/20">
          {video.category}
        </span>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-3 md:p-5 pointer-events-none">
        <div className="w-8 h-[2px] bg-sage-500 mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
};

const desktopRowSizes: ("tall" | "medium" | "short")[][] = [
  ["tall", "medium", "tall"],
  ["medium", "tall"],
  ["tall", "medium"],
];

const rows = [
  { items: videos.slice(0, 3) },
  { items: videos.slice(3, 5) },
  { items: videos.slice(5, 7) },
];

export const VideoShowcase = () => {
  return (
    <section id="videos" className="relative py-16 md:py-24 bg-brand-50 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sage-300/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20 px-4"
        >
          <p className="text-sage-600 text-sm uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900">
            Video Content
          </h2>
          <p className="mt-3 md:mt-4 text-brand-600 max-w-md mx-auto text-sm">
            Scroll-stopping UGC crafted for engagement and conversion.
          </p>
        </motion.div>

        {/* Mobile: 2-column compact grid */}
        <div className="md:hidden max-w-lg mx-auto px-3">
          <div className="grid grid-cols-2 gap-3">
            {videos.map((video, idx) => (
              <VideoCard key={video.id} video={video} idx={idx} size="tall" />
            ))}
          </div>
        </div>

        {/* Desktop: staggered layout */}
        <div className="hidden md:block max-w-6xl mx-auto px-4 space-y-6">
          <div className="grid grid-cols-3 gap-5 items-start">
            {rows[0].items.map((video, idx) => (
              <div key={video.id} className={idx === 1 ? "mt-12" : ""}>
                <VideoCard video={video} idx={idx} size={desktopRowSizes[0][idx]} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 px-16 items-start">
            {rows[1].items.map((video, idx) => (
              <div key={video.id} className={idx === 0 ? "mt-8" : "-mt-4"}>
                <VideoCard video={video} idx={idx + 3} size={desktopRowSizes[1][idx]} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 px-8 items-start">
            {rows[2].items.map((video, idx) => (
              <div key={video.id} className={idx === 1 ? "mt-16" : ""}>
                <VideoCard video={video} idx={idx + 5} size={desktopRowSizes[2][idx]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
