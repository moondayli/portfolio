import React from 'react';

const Hero = () => {
  return (
    // Moved pt-20 to pull it closer to the floating navbar
    <section className="relative w-full pt-24 pb-10 px-2 md:px-6 flex items-center justify-center">
      
      {/* Height Control: 
          - Mobile: 50vh
          - Tablet/Desktop: 65vh 
          - Large Screens: capped at 750px (max-h-[750px])
          Width Control:
          - Almost edge-to-edge but capped at 1550px for ultra-wide
      */}
      <div className="relative w-full max-w-[98%] 2xl:max-w-[1550px] h-[55vh] md:h-[70vh] 2xl:max-h-[750px] overflow-hidden rounded-[2rem]">
        
        {/* 1. The Big Image */}
        <img 
          src="/hero.png" 
          alt="Portfolio Hero" 
          className="w-full h-full object-cover"
        />

        {/* 2. Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* 3. Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl 2xl:text-7xl font-bold font-mono leading-[0.9] tracking-tighter">
              CRAFTING <br /> 
              DIGITAL EXPERIENCES
            </h1>
            <p className="mt-4 text-gray-300 font-mono text-sm md:text-lg max-w-xl opacity-90">
              Full-stack developer specializing in minimalist interfaces and robust backend systems.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-100 transition-all font-mono active:scale-95">
                View Work
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;