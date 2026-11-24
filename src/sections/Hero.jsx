import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo, useEffect, useState, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLaptopCode, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi2";

import img from "../assets/image.png";

const SocialIcon = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="text-slate-400 hover:text-emerald-400 transition-colors"
  >
    {children}
  </motion.a>
);

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: "#34d399" },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { value: 45 },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  );

  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-slate-100 min-h-screen overflow-hidden pt-24 pb-16 md:py-0"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Right Column - Profile Image (Mobile First) */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-full overflow-hidden shadow-lg animate-bounce-slow">
                  <img
                    src={img}
                    alt="Ismail Khan Refat"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left Column - Intro & CTAs */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-slate-100 font-sans">
            Hi, I&apos;m <span className="text-emerald-400">Ismail Khan Refat</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 min-h-[40px] md:min-h-[48px] mb-5">
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer.",
                2000,
                "React, Next.js & TypeScript.",
                2000,
                "Node.js, FastAPI & PostgreSQL.",
                2000,
                "Medical Imaging AI Researcher.",
                2000,
                "Crafting Clean UI/UX in Figma.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            <span className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full-Stack Developer &amp; AI Researcher
            </span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            I build scalable full-stack web applications with modern JavaScript, TypeScript, and Python—and develop deep learning models for clinical medical imaging.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8">
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg shadow-emerald-400/20 hover:bg-emerald-300 transition-all"
            >
              <FaLaptopCode className="text-xl" />
              <span>Browse Projects</span>
            </motion.a>

            <motion.a
              href="/resume_of_Ismail_Khan_Refat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-slate-600 text-slate-200 font-medium px-6 py-3 rounded-md hover:border-emerald-400 hover:bg-slate-800/70 hover:text-white transition-all"
            >
              <FaDownload className="text-lg" />
              <span>View Resume</span>
            </motion.a>
          </div>

          <div className="flex items-center space-x-6">
            <SocialIcon href="https://github.com/refatkhan" label="GitHub Profile">
              <FaGithub className="w-7 h-7" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/refatkhan/" label="LinkedIn Profile">
              <FaLinkedinIn className="w-7 h-7" />
            </SocialIcon>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      {showScroll && (
        <motion.a
          href="#projects"
          onClick={scrollToProjects}
          aria-label="Scroll down to projects"
          className="hidden sm:flex absolute bottom-8 flex-col items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiOutlineChevronDown className="w-8 h-8" />
          <span className="text-sm mt-1">Scroll Down</span>
        </motion.a>
      )}
    </section>
  );
};

export default Hero;