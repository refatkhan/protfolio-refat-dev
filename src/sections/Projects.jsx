import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // Changed icon for the button
import React, { useState, useRef, useEffect } from "react"; // Added useEffect for potential data fetching
import { Link } from 'react-router-dom'; // Import Link
// --- Import Project Data ---
import projectsData from '../assets/projects.json'; // Adjust the path as needed

// --- Define Actual Icon Components ---
// These should match the string identifiers in projects.json
const MedicalIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
const HouseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const FoodIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path><path d="M6 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z"></path><path d="M15 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z"></path></svg>;

// --- Create Icon Map ---
const iconMap = {
    MedicalIcon: <MedicalIcon />,
    HouseIcon: <HouseIcon />,
    FoodIcon: <FoodIcon />
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- ChromaProjectCard ---
// Modified to use iconMap and add image fallback
const ChromaProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    // State for image fallback
    const [currentImageSrc, setCurrentImageSrc] = useState(project.imageSrc);
    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    const handleImageError = () => {
        // Use the fallbackImage defined in the JSON
        setCurrentImageSrc(project.fallbackImage || "https://placehold.co/600x400/1e293b/475569?text=Image+Not+Found"); // Default placeholder if fallbackImage is missing
    };
    // Reset image source if project changes (important if data updates dynamically)
    useEffect(() => {
        setCurrentImageSrc(project.imageSrc);
    }, [project.imageSrc]);


    return (
        <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} variants={cardVariants} className="relative w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm group">
            <motion.div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300" style={{ background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.2), transparent 80%)` }} animate={{ opacity: isHovered ? 1 : 0 }} />
            <div className="relative z-10 flex flex-col h-full">
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        src={currentImageSrc} // Use state variable for image source
                        alt={project.name}
                        className="w-full h-48 object-cover"
                        onError={handleImageError} // Add the onError handler
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                     {/* Use the iconMap to render the correct icon */}
                     <div className="flex-shrink-0">{iconMap[project.icon] || null}</div>
                     <h3 className="text-lg font-bold text-slate-100 flex-grow">{project.name}</h3>
                </div>
                {/* Use shortDescription from JSON */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (<span key={tech} className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300">{tech}</span>))}
                </div>
               <Link
                    // Construct the URL using the project ID
                    to={`/project/${project.id}`} 
                    className="mt-auto inline-flex items-center justify-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors py-2"
                >
                    Details
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};


// --- Parallax "Coming Soon" Card (No Changes) ---
const ComingSoonCard = ({ scrollYProgress }) => {
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    return (
        <motion.div className="md:col-span-2 lg:col-span-3 mt-12 bg-slate-900/60 p-8 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center" style={{ y }}>
            <div className="p-3 border border-slate-700 rounded-md mb-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">More Projects Coming Soon</h3>
            <p className="text-slate-400 max-w-md">I'm constantly exploring new technologies and building exciting things. Stay tuned for my latest work!</p>
        </motion.div>
    );
};


// --- Main Projects Component ---
// Now uses imported projectsData
const Projects = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

    return (
        <section ref={sectionRef} id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                    Showcasing My <span className="text-emerald-400">Work</span>
                </motion.h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    {/* Map over the imported projectsData */}
                    {projectsData.map((project, index) => (
                        <ChromaProjectCard key={project.id || index} project={project} />
                    ))}
                </motion.div>
                <ComingSoonCard scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
};

export default Projects;

