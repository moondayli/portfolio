'use client';

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => setIsSplashActive(false), 500);
    return () => clearTimeout(hideTimeout);
  }, []);

  return (
    // Outer wrapper set to the background color of your choice
    <div className="relative bg-[#F2F2F2] min-h-screen">
      <div
        className={`transition-opacity duration-700 ease-out ${
          isSplashActive ? "opacity-0" : "opacity-100 delay-200"
        }`}
      >
        <Navbar />
        
        {/* Max-Width Wrapper for Content */}
        <main className="max-w-[1600px] mx-auto overflow-hidden">
          <Hero />
          <Gallery />
          <About />
          <Reviews />
          <Pricing />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}