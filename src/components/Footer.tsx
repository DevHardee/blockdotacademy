import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center lg:flex lg:mx-2 lg:items-center lg:justify-between text-accent text-sm md:text-lg py-6">
      <p>&copy; {new Date().getFullYear()} Blockdot Academy. All rights reserved.</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 text-xl">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary! hover:text-accent transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary! hover:text-accent transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="/https://x.com/blockdotacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary! hover:text-accent transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
