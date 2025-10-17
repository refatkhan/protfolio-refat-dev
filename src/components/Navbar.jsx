import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
  const body = document.body;
  if (darkMode) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
  }
}, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="mx-auto w-[95%] flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 dark:text-cyan-400"
        >
          Refat<span className="text-lightText dark:text-white">.Dev</span>
        </Link>

        {/* Desktop Menu + Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }}>
              <Link
                to={link.path}
                className="text-lightText dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-8 text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-3xl cursor-pointer"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 py-6 transition-colors"
          style={{ backgroundColor: darkMode ? "#1e293b" : "#f8f8f8" }}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-lg text-lightText dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
