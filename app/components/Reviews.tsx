import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ray",
    role: "co-founder Mailoo",
    img: "/client1.png",
    text: "The UI looks solid and provides a great foundation for future builds. The updates were implemented efficiently, and the overall design is strong.",
  },
  {
    id: 2,
    name: "JB",
    role: "Retainer Client",
    img: "/client2.png",
    text: "Solid work once again. I continue to return because I trust the quality and consistency of your work.",
  },
  {
    id: 3,
    name: "Trendz",
    role: "Returning Client",
    img: "/client3.png",
    text: "That was fast, I didn't expect the project to be completed this quickly, and it was delivered right on time.",
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 w-full max-w-[1600px] mx-auto" id="reviews">
      {/* 1. Header Section */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em] mb-1">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight uppercase">
            CLIENT REVIEWS
          </h2>
        </div>
        
        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all bg-white">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all bg-white">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. Black Review Cards Slider */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="relative min-w-[320px] md:min-w-[450px] bg-black border border-white/10 p-8 md:p-12 rounded-[2.5rem] snap-start flex flex-col justify-between group hover:border-white/30 transition-all duration-500"
          >
            {/* Subtle Dark Quote Icon */}
            <Quote className="text-white/5 group-hover:text-white/10 transition-colors duration-500 absolute top-8 right-8" size={80} />
            
            <div className="relative z-10">
              <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed mb-10 italic">
                "{review.text}"
              </p>
            </div>

            {/* Client Info Section */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-500 bg-gray-800">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold font-mono text-sm tracking-tighter uppercase">{review.name}</h3>
                <p className="text-gray-500 font-mono text-[9px] uppercase tracking-widest mt-0.5">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;