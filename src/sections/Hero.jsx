import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo, useEffect, useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { TypeAnimation } from "react-type-animation";
import { FaLaptopCode, FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiOutlineChevronDown } from 'react-icons/hi2';

import img from '../assets/image.png';

const SocialIcon = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="text-slate-400 hover:text-emerald-400 transition-colors"
    >
        {children}
    </motion.a>
);

const Hero = () => {
    const particlesOptions = useMemo(() => ({
        background: { color: { value: "#0c0c0c" } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
        },
    }), []);

    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="relative flex flex-col justify-center items-center text-slate-100 h-screen overflow-hidden
             pt-16 md:pt-0"
        >
            <Helmet>
                <title>Ismail Khan Refat | Portfolio</title>
                <meta name="description" content="Frontend Developer | React | MERN Stack | Passionate about building clean, interactive UI." />
            </Helmet>

            <Particles id="tsparticles" init={loadFull} options={particlesOptions} className="absolute inset-0 -z-10" />

            <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 h-full">

                {/* Right Column - Image on Mobile First */}
                <motion.div
                    className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
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

                {/* Left Column - Text */}
                <motion.div
                    className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight mb-3 text-slate-100 font-sans">
                        Hi, I'm <span className="text-emerald-400">Ismail Khan Refat</span>
                    </h1>

                    <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 min-h-[44px] md:min-h-[54px] mb-5">
                        <TypeAnimation
                            sequence={[
                                "Building modern web apps.", 2000,
                                "React & MERN Stack Developer.", 2000,
                                "Crafting clean UI/UX.", 2000,
                                "Passionate about JavaScript.", 2000,
                                "Turning ideas into code.", 2000,
                                "Frontend Enthusiast & Problem Solver.", 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="flex mb-6">
                        <span className="inline-block bg-slate-800 border border-slate-700 text-emerald-400 text-sm font-medium px-4 py-1 rounded-full">
                            MERN Stack Developer
                        </span>
                    </div>

                    <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                        I build dynamic and responsive web apps, turning complex ideas into seamless and beautiful user experiences.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg shadow-emerald-400/20 hover:bg-emerald-500 transition-all"
                        >
                            <FaLaptopCode className="text-xl" />
                            <span>Browse Projects</span>
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 border border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-md hover:bg-slate-800 hover:text-white transition-all"
                        >
                            <FaDownload className="text-xl" />
                            <span>Download CV</span>
                        </motion.a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <SocialIcon href="https://github.com/refatkhan">
                            <FaGithub className="w-7 h-7" />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/refatkhan">
                            <FaLinkedinIn className="w-7 h-7" />
                        </SocialIcon>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Button */}
            {showScroll && (
                <motion.a
                    href="#projects"
                    className="absolute bottom-8 flex flex-col items-center text-emerald-400 hover:text-emerald-500 transition-colors"
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
