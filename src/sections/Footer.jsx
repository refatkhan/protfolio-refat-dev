import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const FOOTER_LINKS = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/refatkhan", label: "GitHub" },
    { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/in/refatkhan/", label: "LinkedIn" },
  ];

  const handleFooterNav = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="relative border-t border-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="container relative mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Name and Nav */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100">
              Ismail Khan Refat
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.id}`}
                  onClick={(e) => handleFooterNav(e, link.id)}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Socials and Back to Top */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="bg-slate-800/70 border border-slate-700 p-3 rounded-full text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ismail Khan Refat. All Rights Reserved.{" "}
            <span className="text-emerald-400">💚</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;