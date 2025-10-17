import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import "./Hero.css"; // We'll create this CSS file for the scrolling gradient text
import img from '../assets/image.png'
const Hero = () => {
    // Memoize the particles configuration
    const particlesOptions = useMemo(() => ({
        background: { color: { value: "#0c0c0c" } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 120,
                enable: true,
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                outModes: { default: "bounce" }
            },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
        },
    }), []);

    return (
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 overflow-hidden text-slate-100">
            <Helmet>
                <title>Refat Khan | Portfolio</title>
                <meta
                    name="description"
                    content="Frontend Developer | React | MERN Stack | Passionate about building clean, interactive UI."
                />
            </Helmet>

            <Particles
                id="tsparticles"
                init={loadFull}
                options={particlesOptions}
                className="absolute inset-0 -z-10"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Image Placeholder on the left */}
                <motion.div
                    className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg shadow-emerald-400/30 flex items-center justify-center bg-gray-800"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Replace this with your actual image */}
                    <img
                        src={img} // IMPORTANT: Update this path to your image
                        alt="Refat Khan"
                        className="w-full h-full object-cover"
                    />
                    {/* Fallback if image not loaded */}
                    {/* <span className="text-white text-xl font-semibold">RK</span> */}
                </motion.div>

                <motion.div
                    className="relative z-10 max-w-3xl md:text-left text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Hi, I’m <span className="text-emerald-400">Refat Khan</span>
                    </h1>
                    {/* Continuously scrolling linear gradient text */}
                    <div className="p-hero-subtitle-container mb-8 md:mb-10 w-full overflow-hidden whitespace-nowrap">
                        <p className="p-hero-subtitle text-lg md:text-xl font-medium">
                            Frontend Developer | MERN Stack Developer | JavaScript Instructor | UI/UX Enthusiast | Problem Solver | React.js Expert
                            Frontend Developer | MERN Stack Developer | JavaScript Instructor | UI/UX Enthusiast | Problem Solver | React.js Expert
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start items-center space-x-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg shadow-emerald-400/20 hover:bg-emerald-500 transition-all"
                        >
                            View My Works
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-md hover:bg-slate-800 hover:text-white transition-all"
                        >
                            Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
