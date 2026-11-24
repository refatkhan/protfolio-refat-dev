import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      let currentSection = "";
      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = link.id;
          }
        }
      }

      if (window.scrollY < 200) {
        currentSection = "";
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        currentSection = NAV_LINKS[NAV_LINKS.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            if (location.pathname !== "/") {
              navigate("/");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tight text-slate-100"
        >
          Refat<span className="text-emerald-400">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                activeSection === link.id
                  ? "bg-emerald-400 text-black"
                  : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-2xl px-6 py-3 rounded-md transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-emerald-400 text-black font-semibold"
                    : "text-slate-200 hover:text-emerald-400"
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
