import React from 'react';
import { Mail, Twitter, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: "EMAIL",
      label: "codeczarr@gmail.com",
      icon: Mail,
      link: "mailto:codeczarr@gmail.com",
      dark: true
    },
    {
      name: "X / TWITTER",
      label: "@code_czar",
      icon: Twitter,
      link: "https://twitter.com/code_czar",
      dark: false
    },
    {
      name: "TELEGRAM",
      label: "@thecodeczar",
      icon: Send,
      link: "https://t.me/thecodeczar",
      dark: true
    }
  ];

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1500px] mx-auto" id="contact">
      {/* Title Section */}
      <div className="mb-12 text-center">
        <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.4em] mb-2">
          CONTACT
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight uppercase">
          LET'S WORK TOGETHER
        </h2>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[2.5rem] p-12 transition-all duration-500 border ${
                contact.dark 
                  ? 'bg-[#0A0A0A] border-black hover:border-white' 
                  : 'bg-[#FAFAFA] border-gray-100 hover:border-black'
              }`}
            >
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className={`font-mono text-xs tracking-[0.3em] mb-3 ${
                    contact.dark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {contact.name}
                  </p>
                  <h3 className={`font-mono text-2xl font-bold uppercase tracking-tight ${
                    contact.dark ? 'text-white' : 'text-black'
                  }`}>
                    {contact.label}
                  </h3>
                </div>
                <div className={`p-3 rounded-full transition-all duration-500 ${
                  contact.dark 
                    ? 'bg-white/10 group-hover:bg-white' 
                    : 'bg-black/10 group-hover:bg-black'
                }`}>
                  <ArrowUpRight 
                    size={20} 
                    className={`transition-all duration-500 ${
                      contact.dark 
                        ? 'text-white group-hover:text-black' 
                        : 'text-black group-hover:text-white'
                    }`} 
                  />
                </div>
              </div>
              
              {/* Icon Background */}
              <div className="absolute bottom-4 right-4 opacity-5">
                <Icon size={80} className={contact.dark ? 'text-white' : 'text-black'} />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;