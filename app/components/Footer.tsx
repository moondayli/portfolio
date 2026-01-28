import React from 'react';
import { Twitter, Mail, Send } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" }
  ];

  const socials = [
    { icon: Twitter, href: "https://twitter.com/code_czar", label: "Twitter" },
    { icon: Send, href: "https://t.me/thecodeczar", label: "Telegram" },
    { icon: Mail, href: "mailto:codeczarr@gmail.com", label: "Email" }
  ];

  return (
    <footer className="w-full md:px-6 md:py-12">
      <div className="max-w-[1500px] mx-auto">
        {/* Floating Black Card */}
        <div className="relative overflow-hidden bg-[#0A0A0A] text-white rounded-t-[2rem] md:rounded-[3rem] p-12 md:p-16 shadow-2xl">
          
          {/* Faded Logo Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <img
              src="/czar.png"
              alt="Czar Logo"
              className="w-[600px] h-auto"
            />
          </div>

          {/* Top Section */}
          <div className="relative z-10 grid grid-cols-1 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <h3 className="font-mono text-2xl font-bold uppercase tracking-tight mb-4">
                CZAR
              </h3>
              <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-[280px]">
                Building digital experiences that convert and inspire.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-gray-500 mb-6 uppercase">
                Quick Links
              </p>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-mono text-sm uppercase tracking-tight text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-gray-500 mb-6 uppercase">
                Connect
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-gray-500">
              © 2026 CZAR. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
