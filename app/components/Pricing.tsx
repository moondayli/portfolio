import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "CUSTOM",
      price: "Let’s Talk",
      period: "",
      desc: "Tailored solutions for unique projects.",
      features: [
        "Custom scope",
        "Flexible timelines",
        "Design & development",
        "Strategy included"
      ],
      dark: false,
      cta: "Book a Call",
      type: "call"
    },
    {
      name: "RETAINER",
      price: "$2,000",
      period: "month",
      desc: "Ongoing design & development support.",
      features: [
        "2 Active requests",
        "Fast turnaround",
        "Unlimited revisions",
        "Direct communication"
      ],
      dark: true,
      cta: "Get Started",
      type: "start"
    },
    {
      name: "LANDING",
      price: "$800",
      period: "once",
      desc: "High-converting landing pages.",
      features: [
        "Custom design",
        "Next.js build",
        "Mobile responsive",
        "SEO optimized"
      ],
      dark: false,
      cta: "Start Project",
      type: "start"
    }
  ];

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1500px] mx-auto" id="pricing">
      {/* Title */}
      <div className="mb-12">
        <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.4em] mb-2">
          PRICING
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight uppercase">
          Choose Your Plan
        </h2>
      </div>

      {/* Cards */}
      <div className="md:flex md:justify-center md:gap-8 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[85vw] md:flex-1 md:max-w-[450px] snap-center rounded-[2.5rem] p-12 border transition-all duration-500 ${
              plan.dark
                ? "bg-[#0A0A0A] border-black text-white"
                : "bg-[#FAFAFA] border-gray-100 text-black"
            }`}
          >
            {/* Header */}
            <div className="mb-12">
              <p className={`font-mono text-xs tracking-[0.3em] mb-2 ${
                plan.dark ? "text-gray-400" : "text-gray-500"
              }`}>
                {plan.name}
              </p>

              <h3 className="text-[2.75rem] font-bold font-mono tracking-tighter uppercase leading-none">
                {plan.price}
                {plan.period && (
                  <span className="text-sm font-normal lowercase ml-1 opacity-50">
                    /{plan.period}
                  </span>
                )}
              </h3>

              <p className="mt-4 font-mono text-sm opacity-70 leading-relaxed">
                {plan.desc}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-14">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-tight"
                >
                  <Check
                    size={15}
                    className={plan.dark ? "text-green-400" : "text-black"}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {plan.type === "call" ? (
              <a
                href="https://cal.com/codeczar/15min?overlayCalendar=true" // Replace with your external link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 bg-black text-white hover:bg-zinc-800 transition-all"
              >
                {plan.cta} <ArrowUpRight size={13} />
              </a>
            ) : (
              <a
                href="#contact"
                className={`w-full py-4 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center ${
                  plan.dark
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </a>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
