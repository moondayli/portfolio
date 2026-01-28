import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS/JS', level: '100%' },
    { name: 'Next.js', level: '90%' },
    { name: 'React', level: '90%' },
    { name: 'Solidity', level: '70%' },
    { name: 'PHP', level: '60%' },
    { name: 'Rust', level: '20%' },
  ];

  return (
    <section className="w-full h-screen max-h-[1000px] flex flex-col md:flex-row overflow-hidden border-t border-gray-100 relative" id="about">
      
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/czar.png" 
          alt="Developer Portrait"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 1. Left Side: Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6 py-12 md:p-20 relative z-10">
        <div className="max-w-xl">
          <p className="text-gray-300 md:text-gray-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            BIOGRAPHY
          </p>
          
          <h2 className="text-4xl md:text-7xl font-bold font-mono tracking-tighter mb-6 md:mb-8 uppercase leading-[0.9] md:leading-[0.85] text-white md:text-black">
            7 YEARS OF <br />
            BUILDING THE <br />
            FUTURE.
          </h2>
          
          <p className="text-gray-200 md:text-gray-600 font-mono text-sm md:text-base leading-relaxed mb-8 md:mb-12">
            I am a full-stack developer specializing in minimalist interfaces and robust backend systems. 
            With over 7 years of experience, I bridge the gap between complex code and clean design.
          </p>

          {/* Skill Tags */}
          <div className="space-y-6">
            <p className="text-white md:text-black font-mono text-xs font-bold uppercase tracking-widest">Technical Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 py-2 bg-white md:bg-black text-black md:text-white rounded-full flex items-center gap-3 transition-transform hover:-translate-y-1 cursor-default"
                >
                  <span className="font-mono text-[10px] uppercase font-bold">{skill.name}</span>
                  <span className="w-px h-3 bg-black/30 md:bg-white/30" />
                  <span className="font-mono text-[10px] text-gray-600 md:text-gray-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Side: Full Height Image - Desktop Only */}
      <div className="hidden md:block md:w-1/2 h-full max-h-[1000px] relative group">
        <img 
          src="/czar.png" 
          alt="Developer Portrait"
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 rounded-l-4xl"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
      </div>

    </section>
  );
};

export default About;