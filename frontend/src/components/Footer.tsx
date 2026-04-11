import { motion } from "motion/react"
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030303] pt-32 pb-12 px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-black text-white tracking-tighter">
              Blockdot<span className="text-primary">.</span>
            </h3>
            <p className="text-lg text-white/40 leading-relaxed font-medium max-w-md">
              Master the digital economy through cutting-edge education, real-world simulations, and a global community of forward-thinkers.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaTelegram />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaGithub />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Academy</h4>
            <nav className="flex flex-col space-y-4">
              {["Paths", "Courses", "Syllabus", "Mentors"].map((link) => (
                <a key={link} href="#" className="text-base text-white/40 hover:text-primary transition-all duration-300 font-bold hover:translate-x-1 inline-block">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Company</h4>
            <nav className="flex flex-col space-y-4">
              {["About", "Ambassadors", "Impact", "Careers"].map((link) => (
                <a key={link} href="#" className="text-base text-white/40 hover:text-primary transition-all duration-300 font-bold hover:translate-x-1 inline-block">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Update Feed</h4>
            <p className="text-sm text-white/40 font-medium leading-relaxed">
              Stay synchronized with the latest course drops and platform updates.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-bold transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <p className="text-xs text-white/20 font-bold uppercase tracking-widest leading-none">
              &copy; {year} Blockdot Academy
            </p>
            <a href="#" className="text-xs text-white/20 hover:text-white font-bold uppercase tracking-widest transition-colors leading-none">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white font-bold uppercase tracking-widest transition-colors leading-none">Terms</a>
            <a href="#" className="text-xs text-white/20 hover:text-white font-bold uppercase tracking-widest transition-colors leading-none">Security</a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Operational: Mainnet Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
