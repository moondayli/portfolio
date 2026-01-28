import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mailoo',
    desc: 'User friendly email marketing platform built on whop.',
    img: '/mailoo.png',
    link: 'https://whop.com/dashboard/biz_2T7tC1fnFVo6d4/app-store/apps/app_XCFYaoUWi5GRaG/', // Add your actual link here
    techStack: [
      { name: 'Next.js', color: 'blue' },
      { name: 'Node.js', color: 'green' },
      { name: 'Whop API', color: 'purple' }
    ]
  },
  {
    id: 2,
    title: 'Predica',
    desc: 'A platform for predicting the future built on solana.',
    img: '/predica.png',
    link: 'https://predica.fun', // Add your actual link here
    techStack: [
      { name: 'Next.js', color: 'gray' },
      { name: 'Solana', color: 'purple' },
      { name: 'Web3.js', color: 'orange' }
    ]
  },
  {
    id: 3,
    title: 'pintree',
    desc: 'A linktree alternative built on vercel.',
    img: '/pintree.png',
    link: 'https://pintree.me', // Add your actual link here
    techStack: [
      { name: 'Next.js', color: 'gray' },
      { name: 'Vercel', color: 'blue' },
      { name: 'Tailwind CSS', color: 'cyan' }
    ]
  },
  {
    id: 4,
    title: 'Time',
    desc: 'A simple productivity app that helps you by turning your time into a progressbar.',
    img: '/time.png',
    techStack: [
      { name: 'React Native', color: 'blue' },
      { name: 'TypeScript', color: 'indigo' },
      { name: 'Swift', color: 'orange' }
    ]
    // No link - VIEW PROJECT button will not appear for this project
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);

  // Color variants for tech stack tags
  const colorVariants = {
    blue: 'bg-blue-500/90 text-white border-blue-400',
    green: 'bg-green-500/90 text-white border-green-400',
    purple: 'bg-purple-500/90 text-white border-purple-400',
    orange: 'bg-orange-500/90 text-white border-orange-400',
    cyan: 'bg-cyan-500/90 text-white border-cyan-400',
    pink: 'bg-pink-500/90 text-white border-pink-400',
    indigo: 'bg-indigo-500/90 text-white border-indigo-400',
    gray: 'bg-gray-700/90 text-white border-gray-600',
    red: 'bg-red-500/90 text-white border-red-400',
    yellow: 'bg-yellow-500/90 text-gray-900 border-yellow-400',
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 450;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mb-24" id="projects">
      {/* 1. Header Section */}
      <div className="py-12 px-4 md:px-12 w-full max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
          <div>
          <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em] mb-1">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight uppercase">
            PROJECTS Gallery
          </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Wide Overlay Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10 mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex-shrink-0 w-[400px] h-[250px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Image Background */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Darker Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-3 font-mono">{project.desc}</p>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-bold rounded-full border ${
                        colorVariants[tech.color] || colorVariants.gray
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Conditionally render VIEW PROJECT button only if link exists */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all w-fit"
                >
                  VIEW PROJECT
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;