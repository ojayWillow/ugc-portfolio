"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const GlowingCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative group rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 overflow-hidden",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500 blur-sm" />
      </div>
      <div className="relative z-10 rounded-xl bg-black/90 p-6">{children}</div>
    </div>
  );
};
