"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("left"); break;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  const getDirection = (ev: React.MouseEvent, obj: HTMLElement) => {
    const { width, height, top, left } = obj.getBoundingClientRect();
    const x = ev.clientX - left - width / 2;
    const y = ev.clientY - top - height / 2;
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      ref={ref}
      className={cn("w-60 h-60 md:w-72 md:h-72 bg-transparent rounded-lg overflow-hidden group/card relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div className="relative h-full w-full" initial="initial" whileHover={direction} exit="exit">
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            className={cn("h-full w-full relative bg-gray-50 dark:bg-neutral-900", imageClassName)}
            style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <motion.div
            className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
            variants={{
              initial: { opacity: 0, x: direction === "left" ? -20 : direction === "right" ? 20 : 0, y: direction === "top" ? -20 : direction === "bottom" ? 20 : 0 },
              top: { opacity: 1, y: 0, x: 0 },
              bottom: { opacity: 1, y: 0, x: 0 },
              left: { opacity: 1, x: 0, y: 0 },
              right: { opacity: 1, x: 0, y: 0 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {isHovered && children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
