import { motion } from "motion/react"
import {
  FaInstagram,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Mail, Phone, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FaX = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="w-full bg-[#030303] pt-32 pb-12 px-4 relative overflow-hidden border-t border-white/5">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand & Social Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-10">
            <div className="space-y-6 text-center md:text-left">
              <Link to="/" className="inline-block">
                <h3 className="text-4xl font-black text-white tracking-tighter group">
                  Blockdot<span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Academy</span>
                  <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-primary to-accent transition-all duration-500 rounded-full" />
                </h3>
              </Link>
              <p className="text-lg text-white/40 leading-relaxed font-medium max-w-sm">
                The world's leading destination for digital economy education. Build. Scale. Secure.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: <FaTelegram />, href: "#" },
                { icon: <FaX />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaYoutube />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent! hover:text-primary! hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 backdrop-blur-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with staggered animations */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full shadow-[0_0_15px_rgba(41,98,255,0.6)]" />
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Quick Links</h4>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              {[
                { name: "Syllabus", path: "/#about" },
                { name: "Programs", path: "/#courses" },
                { name: "Jobs Board", path: "/jobs" },
                { name: "Insights", path: "/blog" },
                { name: "Community", path: "#" },
                { name: "Security", path: "/#cybersecurity" },
                { name: "Careers", path: "/jobs" },
                { name: "Support", path: "#" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-2 text-sm font-bold text-white! hover:text-accent! transition-all"
                >
                  <ArrowRight className="h-3 w-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Details with Hover Interaction */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-accent rounded-full shadow-[0_0_15px_rgba(147,51,234,0.6)]" />
              <h4 className="text-xl font-black text-white uppercase tracking-tight text-white">Contact Info</h4>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "hello@blockdotacademy.com", href: "mailto:hello@blockdot.com" },
                { icon: <Phone />, label: "+234 812 345 6789", href: "tel:+2348123456789" },
                { icon: <Phone />, label: "+234 811 000 0000", href: "tel:+2348110000000" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-5 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-white/50 group-hover:text-accent group-hover:bg-accent/10 transition-all border border-white/5">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Footer Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-sm md:text-base font-black uppercase text-white/60">
              &copy; {year} BLOCKDOT ACADEMY. ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="hidden md:block order-1 md:order-2">
            <button
              onClick={scrollToTop}
              className="group relative w-14 h-14 rounded-full bg-linear-to-r from-primary to-accent p-px overflow-hidden shadow-lg hover:shadow-primary/40 transition-all active:scale-95"
            >
              <div className="relative flex items-center justify-center text-white">
                <ChevronUp className="h-6 w-6 group-hover:scale-125 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;