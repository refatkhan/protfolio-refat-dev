import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { TypeAnimation } from "react-type-animation";
import img from '../assets/image.png'; // Make sure this path is correct
import "./Hero.css"; // We will use the updated CSS

// Reusable SocialIcon component
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

    return (
        <section className="relative h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden text-slate-100">
            <Helmet>
                <title>Refat Khan | Portfolio</title>
                <meta name="description" content="Frontend Developer | React | MERN Stack | Passionate about building clean, interactive UI." />
            </Helmet>

            <Particles id="tsparticles" init={loadFull} options={particlesOptions} className="absolute inset-0 -z-10" />

            {/* Main container for layout */}
            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

                {/* Image Container (Left Column) */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex-shrink-0 w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg shadow-emerald-400/30 flex items-center justify-center bg-gray-800">
                        <img src={img} alt="Refat Khan" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Text Content Container (Right Column) */}
                <motion.div
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Responsive Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 min-h-[120px] md:min-h-[140px] w-full">
                        <TypeAnimation
                            sequence={[
                                "Hi, I’m Ismail Khan Refat", 2000,
                                "I build things for the web.", 2000,
                                "I'm a MERN Stack Developer.", 2000,
                                "I'm a MERN Stack Developer.", 2000,

                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-emerald-400"
                            repeat={Infinity}
                        />
                    </h1>

                    {/* Animated Gradient Subtitle */}
                    <p className="p-hero-subtitle text-lg md:text-xl font-medium mb-6 max-w-md">
                        Frontend Developer | MERN Stack Developer | JavaScript Developer
                    </p>
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg shadow-emerald-400/20 hover:bg-emerald-500 transition-all">
                            View My Works
                        </motion.a>
                        <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-md hover:bg-slate-800 hover:text-white transition-all">
                            Resume
                        </motion.a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-6 mt-8">
                        <SocialIcon href="https://github.com/refatkhan">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/refatkhan">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                        </SocialIcon>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

