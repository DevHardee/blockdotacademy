import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:text-base">
        {/* Copyright */}
        <p className="text-center md:text-left">
          &copy; {year} <span className="text-primary font-semibold">Blockdot Academy</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-lg">
          <a
            href="https://linkedin.com/company/blockdotacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors text-primary-foreground! hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/blockdotacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors text-primary-foreground! hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/blockdotacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-colors text-primary-foreground! hover:text-primary"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
