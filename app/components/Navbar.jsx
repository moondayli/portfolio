import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <nav className="bg-[#F2F2F2]/80 backdrop-blur-md flex items-center justify-between w-full max-w-6xl px-3 py-3 rounded-2xl">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/czar.png"
            alt="Logo"
            className="h-9 w-auto object-contain cursor-pointer rounded-lg"
          />
        </a>

        {/* Middle Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-mono text-sm">
          <li>
            <a
              href="#"
              className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black"
            >
              Reviews
            </a>
          </li>
        </ul>

        {/* Book a Call */}
        <a
          href="#pricing"
          className="px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:shadow-md transition-all duration-200 active:scale-95 font-mono"
        >
          Book a Call
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
