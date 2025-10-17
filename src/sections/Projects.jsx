import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import React, { useState, useRef } from "react";

// --- Project Data and Icons (No Changes) ---
const MedicalIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
const HouseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const FoodIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path><path d="M6 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z"></path><path d="M15 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z"></path></svg>;

const projectsData = [
    {
        name: "Medical Camp Management",
        imageSrc: "https://i.ibb.co.com/8gHtsBWM/medical-camp.png",
        icon: <MedicalIcon />,
        description: "A Role based platform for managing medical camps, handling patient registration, scheduling, and inventory.",
        techStack: ["React", "Node.js", "MongoDB", "JWT", "Firebase", "Express"],
        link: "https://medical-camp-37f24.web.app/"
    },
    {
        name: "Roommate Finder (ShareNest)",
        //imageSrc: "https://placehold.co/600x400/0f172a/34d399?text=ShareNest",
        imageSrc: "https://i.ibb.co.com/mVq6fs1S/roommate-finder.png",
        icon: <HouseIcon />,
        description: "Connecting users to find compatible roommates based on lifestyle, preferences, and location.",
        techStack: ["React", "Firebase", "Express", "MongoDB", "Node js"
        ],
        link: "https://roommate-finder0.web.app/"
    },
    {
        name: "FoodSharing Platform",
        imageSrc: "https://i.ibb.co.com/7xJFDD87/foodshare.png",
        //imageSrc: "https://placehold.co/600x400/0f172a/34d399?text=FoodSharing",
        icon: <FoodIcon />,
        description: "A community platform to reduce food waste by connecting surplus food to local charities.",
        techStack: ["React", "Firebase", "Express", "MongoDB", "Node js"],
        link: "https://food-sharing-2fa12.web.app/"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- ChromaProjectCard (No Changes) ---
const ChromaProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };
    return (
        <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} variants={cardVariants} className="relative w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300" style={{ background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.2), transparent 80%)` }} animate={{ opacity: isHovered ? 1 : 0 }} />
            <div className="relative z-10 flex flex-col h-full">
                <div className="relative overflow-hidden rounded-lg mb-4"><img src={project.imageSrc} alt={project.name} className="w-full h-48 object-cover" /><div className="absolute inset-0 bg-black/20"></div></div>
                <div className="flex justify-between items-start mb-3"><div className="flex items-center gap-3"><div className="flex-shrink-0">{project.icon}</div><h3 className="text-lg font-bold text-slate-100">{project.name}</h3></div><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors flex-shrink-0 ml-4"><FiExternalLink size={20} /></a></div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">{project.techStack.map(tech => (<span key={tech} className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300">{tech}</span>))}</div>
            </div>
        </motion.div>
    );
};


// --- NEW: Parallax "Coming Soon" Card ---
const ComingSoonCard = ({ scrollYProgress }) => {
    // Map the scroll progress (0 to 1) to a vertical movement (-50px to 50px)
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div
            className="md:col-span-2 lg:col-span-3 mt-12 bg-slate-900/60 p-8 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center"
            style={{ y }} // Apply the parallax effect here
        >
            <div className="p-3 border border-slate-700 rounded-md mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">More Projects Coming Soon</h3>
            <p className="text-slate-400 max-w-md">
                I'm constantly exploring new technologies and building exciting things. Stay tuned for my latest work!
            </p>
        </motion.div>
    );
};


// --- Main Projects Component ---
const Projects = () => {
    const sectionRef = useRef(null);
    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"] // Track from when the top of the section enters to when the bottom leaves
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        // Add the ref to the section to track its scroll progress
        <section ref={sectionRef} id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Showcasing My <span className="text-emerald-400">Work</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projectsData.map((project, index) => (
                        <ChromaProjectCard key={index} project={project} />
                    ))}
                </motion.div>

                {/* Render the new parallax card, passing the scroll progress to it */}
                <ComingSoonCard scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
};

export default Projects;
