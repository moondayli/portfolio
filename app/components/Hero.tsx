'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate progress: 0 at top, 1 when scrolled one viewport
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 - scrollProgress * 0.1; // Scale from 1 to 0.9
  const opacity = Math.max(1 - scrollProgress, 0); // Fade from 1 to 0

  return (
    <div 
      className="sticky top-0 flex items-center justify-center min-h-screen md:p-5 transition-all duration-100"
      style={{ 
        transform: `scale(${scale})`,
        opacity: opacity
      }}
    >
      <div className="w-full h-full md:h-auto" style={{ maxWidth: "1400px" }}>
        {/* Desktop layout (unchanged) */}
        <div
          className="hidden lg:flex w-full rounded-3xl overflow-hidden relative"
          style={{ backgroundColor: "#0c0c0c", height: "min(95vh, 900px)" }}
        >
          <div className="relative flex flex-col items-center justify-center gap-12 w-[90px] bg-black/30 backdrop-blur-sm">
            <span className="absolute left-0 top-0 h-full w-[6px] bg-red-600" />
            <span
              className="text-white/70 font-semibold tracking-[0.75rem] text-sm uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.75rem" }}
            >
              CODECZAR
            </span>
            <div className="flex flex-col items-center gap-6 text-white/50 font-mono">
              <span className="text-[10px] uppercase tracking-[0.4em] rotate-90 origin-center">01/03</span>
              <div className="relative h-40 w-[2px] bg-white/10 rounded-full overflow-hidden">
                <span className="absolute top-[28%] left-1/2 -translate-x-1/2 h-14 w-[2px] bg-red-500/70 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden relative" style={{ backgroundColor: "#0c0c0c" }}>
            <span
              className="absolute top-1/2 -translate-y-1/2 leading-none text-white/6 select-none tracking-[0.35rem] display-font"
              style={{ left: "28%", fontSize: "clamp(120px, 18vw, 280px)" }}
            >
              八
            </span>
            <div className="relative z-10 flex h-full w-full flex-col px-12 py-12">
              <div className="flex flex-1 items-center justify-center">
                <p style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }} className="leading-relaxed text-white/75 font-mono max-w-[450px]">
                  I'm czar, I write code, mostly do web3 projects but sometimes other things—backed by{" "}
                  <span className="text-red-500 underline underline-offset-4">7 years of experience</span> shipping products end to end.
                </p>
              </div>
              <div className="font-mono flex gap-12 text-sm uppercase tracking-[0.35em] text-white/35">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-red-500/80">01</span>
                  <span className="text-red-500 font-semibold">Home</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs">02</span>
                  <span className="font-semibold text-white/60">Gallery</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs">03</span>
                  <span className="font-semibold text-white/60">Contact</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/czar.png"
              alt="Czar"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #0c0c0c 0%, #0c0c0c 8.5%, transparent 60%)"
              }}
            />
          </div>
        </div>

        {/* Mobile / tablet layout */}
        <div
          className="lg:hidden flex flex-col overflow-hidden relative min-h-screen"
          style={{ backgroundColor: "#0c0c0c" }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="font-semibold tracking-[0.4em] text-xs uppercase text-red-500">CODECZAR</span>
            <span className="text-white/50 font-mono text-[10px] tracking-[0.3em]">01/03</span>
          </div>
          <div className="relative flex flex-col flex-1 items-center px-6 py-12 gap-12">
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none text-white/6 select-none tracking-[0.35rem] display-font pointer-events-none"
              style={{ fontSize: "clamp(110px, 32vw, 220px)" }}
            >
              八
            </span>
            <p
              style={{ fontSize: "clamp(18px, 4vw, 24px)" }}
              className="relative z-10 leading-relaxed text-white/75 font-mono max-w-[420px] text-center"
            >
              I'm czar, I write code, mostly do web3 projects but sometimes other things—backed by{" "}
              <span className="text-red-500 underline underline-offset-4">7 years of experience</span> shipping products end to end.
            </p>
            <div className="relative z-10 font-mono flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.3em] text-white/35">
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs text-red-500/80">01</span>
                <span className="text-red-500 font-semibold">Home</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs">02</span>
                <span className="font-semibold text-white/60">Gallery</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs">03</span>
                <span className="font-semibold text-white/60">Contact</span>
              </div>
            </div>
          </div>
          <div className="relative h-[360px]">
            <Image
              src="/czar.png"
              alt="Czar"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0c0c0c] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

