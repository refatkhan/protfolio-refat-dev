import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      let currentSection = "";
      navLinks.forEach(link => {
        const sectionId = link.path.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = link.path;
          }
        }
      });
      if (window.scrollY < 200) {
        currentSection = "";
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = navLinks[navLinks.length - 1].path;
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}
    >
      {/* THIS IS THE UPDATED LINE */}
      <div className="container mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-emerald-400">
          Dev<span className="text-slate-100">Refat</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`px-4 py-2 rounded-md transition-all duration-300 font-medium
                                ${activeSection === link.path
                  ? 'bg-emerald-400 text-black' // Active style
                  : 'text-slate-300 hover:text-emerald-400' // Inactive style
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-400 text-3xl cursor-pointer z-50"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl px-6 py-3 rounded-md transition-all duration-300
                                    ${activeSection === link.path
                    ? 'bg-emerald-400 text-black font-semibold'
                    : 'text-slate-200 hover:text-emerald-400'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

