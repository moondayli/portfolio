"use client";

import { useEffect, useRef, useState } from "react";
import ProjectsSlider from "./ProjectsSlider";

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Progress increases from 0 to 1 as the next section approaches by one viewport
      const p = Math.min(Math.max(-rect.top / vh, 0), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scale = 1 - progress * 0.1; // 1 -> 0.9
  const opacity = 1 - progress * 0.5; // 1 -> 0.5

  return (
    <section
      ref={sectionRef as any}
      id="gallery"
      className="relative w-full min-h-screen flex items-center justify-center md:py-5"
      style={{ zIndex: 0 }}
    >
      <div
        className="bg-[#0a0a0a] sticky top-0 flex items-center justify-center w-full h-screen mx-auto md:rounded-3xl overflow-hidden"
        style={{ maxWidth: "1400px", transform: `scale(${scale})`, opacity }}
      >
        <span className="absolute left-0 top-0 h-full w-[6px] bg-red-600" />

        {/* Slider center layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-6 sm:px-10 md:px-16">
            <ProjectsSlider />
          </div>
        </div>

        {/* Title */}
        <div className="absolute left-6 top-6 sm:left-12 sm:top-12 z-10">
          <h2
            className="display-font text-red-500 tracking-[0.5em]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}
          >
            GALLERY
          </h2>
          <p
            className="mt-2 font-mono text-white/60 tracking-[0.3em]"
            style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}
          >
            Past Projects
          </p>
        </div>

        {/* Bottom-left nav */}
        <div className="absolute left-6 bottom-6 sm:left-12 sm:bottom-12 z-10">
          <div className="font-mono flex gap-12 text-sm uppercase tracking-[0.35em] text-white/35">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-white/60">01</span>
              <span className="font-semibold text-white/60">Home</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-red-500/80">02</span>
              <span className="text-red-500 font-semibold">Gallery</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs">03</span>
              <span className="font-semibold text-white/60">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

