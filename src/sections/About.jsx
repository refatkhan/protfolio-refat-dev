// src/sections/About.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <section className="py-20 bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h1>

                {/* Content */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/profile.jpg" // replace with your image path
                            alt="Refat Khan"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* About Text */}
                    <div className="text-center md:text-left max-w-xl">
                        <p className="text-lg md:text-xl mb-6 leading-relaxed">
                            Hi! I’m <span className="text-accent font-semibold">Refat Khan</span>, a Frontend Developer
                            passionate about building beautiful, responsive, and interactive web applications.
                        </p>
                        <p className="text-lg md:text-xl mb-6 leading-relaxed">
                            I specialize in React, MERN stack development, and creating seamless user experiences.
                            I enjoy learning new technologies and turning ideas into real-world applications.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center md:justify-start gap-6 mt-4">
                            <a href="https://github.com/refatkhan" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl hover:text-accent transition-colors" />
                            </a>
                            <a href="https://linkedin.com/in/refatkhan" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-2xl hover:text-accent transition-colors" />
                            </a>
                            <a href="https://twitter.com/refatkhan" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-accent transition-colors" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
