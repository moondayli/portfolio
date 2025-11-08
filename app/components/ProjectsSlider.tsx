"use client";

import { useRef } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  tag: string;
  imageSrc: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  { id: "p1", title: "Civora", tag: "AI", imageSrc: "/civora.png", description: "AI News assistant", href: "https://civora.xyz/" },
  { id: "p3", title: "OneFire", tag: "NFT", imageSrc: "/onefire.png", description: "A Full Stack NFT Marketplace", href: "https://onefire.io/" },
  { id: "p4", title: "Solstake", tag: "Gamble", imageSrc: "/Solstake.png", description: "Staking telegram dashboard", href: "https://t.me/TheSolStakeBot/" },
  { id: "p2", title: "OG Finder", tag: "Web3", imageSrc: "/ogfinder.png", description: "Find og tokens on solana", href: "https://www.ogfinder.fun/" },
];

export default function ProjectsSlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 800);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto">
      <button
        aria-label="Previous"
        onClick={() => scrollBy(-1)}
        className="hidden cursor-pointer sm:flex absolute z-20 left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => scrollBy(1)}
        className="hidden cursor-pointer sm:flex absolute z-20 right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className="relative z-10 flex gap-6 sm:gap-8 md:gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-8 md:px-10 py-4 sm:py-6 scroll-smooth overscroll-x-contain"
      >
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-center relative block min-w-[85vw] sm:min-w-[520px] md:min-w-[640px] aspect-[16/10] rounded-2xl overflow-hidden border border-dashed border-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            aria-label={`${p.title} – open project`}
          >
            <Image src={p.imageSrc} alt={p.title} fill className="object-cover" priority={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5">
              <span className="text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-white/60">{p.tag}</span>
              <h3
                className="mt-1 sm:mt-2 display-font text-white/90 tracking-[0.2em]"
                style={{ fontSize: "clamp(16px, 3.5vw, 34px)" }}
              >
                {p.title}
              </h3>
              <p
                className="mt-1 text-white/70 font-mono"
                style={{ fontSize: "clamp(11px, 2.8vw, 16px)" }}
              >
                {p.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
