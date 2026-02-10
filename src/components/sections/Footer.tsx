import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Samanta Kopce. All rights reserved.
        </p>
        <p className="text-neutral-600 text-xs">
          Built with ❤️ using Next.js & Aceternity UI
        </p>
      </div>
    </footer>
  );
};
