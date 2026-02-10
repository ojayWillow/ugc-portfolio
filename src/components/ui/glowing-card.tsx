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
        "relative group rounded-xl border border-brand-300/30 bg-brand-50/80 backdrop-blur-sm p-6 overflow-hidden",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-sage-400 via-brand-400 to-sage-400 blur-sm" />
      </div>
      <div className="relative z-10 rounded-xl bg-brand-50 p-6">{children}</div>
    </div>
  );
};
