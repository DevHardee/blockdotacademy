import {  
  FaEnvelope, 
  FaTiktok, 
  FaInstagram, 
  FaYoutube, 
  FaTelegram,
}  from "react-icons/fa";
import Xlogo from "@public/assets/x-twitter.svg"
import XlogoWhite from "@public/assets/x-twitter-white.svg"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Blockdot Academy</h3>
            <p className="text-sm text-muted-foreground">
              Empowering developers with cutting-edge blockchain education and hands-on learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-primary dark:text-secondary">Quick Links</h4>
            <nav className="flex flex-col space-y-2 w-fit">
              <a href="/" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Home</span>
              </a>
              <a href="/courses" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Courses</span>
              </a>
              <a href="/about" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">About Us</span>
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-primary dark:text-secondary">Support</h4>
            <nav className="flex flex-col space-y-2 w-fit">
              <a href="/help" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Help Center</span>
              </a>
              <a href="/faq" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">FAQ</span>
              </a>
              
              <a href="/support" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Support</span>
              </a>
              <a href="/privacy" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Privacy Policy</span>
              </a>
              <a href="/terms" className="text-sm text-foreground! hover:translate-x-3 transition-all duration-300">
                <span className="hover:text-primary-foreground!">Terms of Service</span>
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-primary dark:text-secondary">Connect With Us</h4>

            {/* Contact Info and Social Links */}
            <div className="space-y-2 text-sm text-muted-foreground">
              
              <div className="hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
              <a
                href="https://x.com/blockdotacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center gap-2 text-foreground!"
              >
                <img src={Xlogo} alt="X-logo" className="h-5 w-5 dark:hidden" />
                <img src={XlogoWhite} alt="X-logo" className="h-5 w-5 hidden dark:block" />
                <p className="hover:text-primary-foreground">X</p>
              </a>
             </div>

             <div className="hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
              <a
                href="https://linkedin.com/company/blockdotacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="flex items-center gap-2 text-foreground!"
              >
                <FaTiktok className="h-5 w-5" />
                <p className="hover:text-primary-foreground">Tiktok</p>
              </a>
             </div>
             <div className="hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
              <a
                href="https://github.com/blockdotacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-foreground!"
              >
                <FaInstagram className="h-5 w-5" />
                <p className="hover:text-primary-foreground">Instagram</p>
              </a>
             </div>
             <div className="hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
              <a
                href="https://x.com/blockdotacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center gap-2 text-foreground!"
              >
                <FaTelegram className="h-5 w-5" />
                <p className="hover:text-primary-foreground">Telegram</p>
              </a>
             </div>
             <div className="hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
              <a
                href="https://x.com/blockdotacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-2 text-foreground!"
              >
                <FaYoutube className="h-5 w-5" />
                <p className="hover:text-primary-foreground">YouTube</p>
              </a>
             </div>

             <div className="flex items-center gap-2 hover:translate-x-3 transition-all duration-300 w-fit cursor-pointer">
                <FaEnvelope href="mailto:support@blockdotacademy.com" className="h-4 w-4" />
                <p className="hover:text-primary-foreground">Email</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {year} <span className="text-primary font-semibold">Blockdot Academy</span>. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with ❤️ for the blockchain community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
