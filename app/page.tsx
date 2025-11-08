'use client';

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  const [isSplashActive, setIsSplashActive] = useState(true);
  const [isSplashRendered, setIsSplashRendered] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => setIsSplashActive(false), 500);
    return () => clearTimeout(hideTimeout);
  }, []);

  useEffect(() => {
    if (!isSplashActive) {
      const removeTimeout = setTimeout(() => setIsSplashRendered(false), 700);
      return () => clearTimeout(removeTimeout);
    }
    setIsSplashRendered(true);
  }, [isSplashActive]);

  return (
    <div className="relative">
      {isSplashRendered && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-red-600 text-black transform transition-transform duration-700 ${
            isSplashActive ? "translate-y-0" : "-translate-y-full rounded-b-[56px]"
          }`}
          style={{ borderBottomLeftRadius: isSplashActive ? 0 : "56px", borderBottomRightRadius: isSplashActive ? 0 : "56px" }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-6xl md:text-8xl font-bold tracking-[0.4em]">八八八八</span>
            <span className="font-mono text-sm uppercase tracking-[0.35em]">code czar</span>
          </div>
        </div>
      )}
      <div
        className={`transition-opacity duration-700 ease-out ${
          isSplashActive ? "opacity-0" : "opacity-100 delay-200"
        }`}
      >
        <Hero />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
