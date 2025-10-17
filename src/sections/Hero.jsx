import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const Hero = () => {
    const particlesOptions = useMemo(() => ({
        background: { color: "#0f172a" },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: "#22d3ee" },
            links: { color: "#22d3ee", distance: 120, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
        },
    }), []);

    return (
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 overflow-hidden">
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

            <motion.div
                className="relative z-10 max-w-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-7xl font-bold mb-4">
                    Hi, I’m <span className="text-accent">Refat Khan</span>
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                    Frontend Developer | MERN Stack | JavaScript Instructor
                </p>
                <div className="space-x-8">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition-all"
                    >
                        View My Works
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition-all"
                    >
                        Resume
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
