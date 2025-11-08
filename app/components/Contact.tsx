import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen flex items-center justify-center md:py-5 overflow-hidden"
    >
      <div
        className="bg-[#0a0a0a] relative w-full h-full md:h-auto mx-auto md:rounded-3xl overflow-hidden"
        style={{ maxWidth: "1400px", height: "min(95vh, 900px)" }}
      >
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6">
          <h2
            className="display-font text-red-500 tracking-[0.5em] text-center"
            style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}
          >
            REACH OUT
          </h2>
          <p
            className="font-mono text-white/70 text-center max-w-[520px]"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          >
            Pick your preferred platform below — I typically reply within a day.
          </p>
          <div className="mt-2 w-full max-w-[720px] flex flex-col gap-4">
            <a
              href="https://t.me/thecodeczar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 rounded-lg bg-red-500 text-black font-mono uppercase tracking-[0.25em] hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-base flex items-center justify-center gap-3"
            >
              <FaTelegramPlane className="text-black" size={18} /> <span>Telegram</span>
            </a>
            <a
              href="https://x.com/code_czar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 rounded-lg bg-red-500 text-black font-mono uppercase tracking-[0.25em] hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-base flex items-center justify-center gap-3"
            >
              <FaXTwitter className="text-black" size={18} /> <span>X/Twitter</span>
            </a>
            <a
              href="mailto:codeczarr@gmail.com"
              className="w-full px-6 py-4 rounded-lg bg-red-500 text-black font-mono uppercase tracking-[0.25em] hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-base flex items-center justify-center gap-3"
            >
              <MdEmail className="text-black" size={18} /> <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
