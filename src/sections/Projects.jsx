import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import projectsData from "../assets/projects.json";

// --- Icon Components ---
const MedicalIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const HouseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FoodIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
    <path d="M6 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z" />
    <path d="M15 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const BrainIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
  </svg>
);

const iconMap = {
  MedicalIcon: <MedicalIcon />,
  HouseIcon: <HouseIcon />,
  FoodIcon: <FoodIcon />,
  CodeIcon: <CodeIcon />,
  BrainIcon: <BrainIcon />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

// --- ChromaProjectCard ---
const ChromaProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(project.imageSrc);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleImageError = () => {
    setCurrentImageSrc(
      project.fallbackImage ||
        "https://placehold.co/600x400/1e293b/475569?text=Image+Not+Found",
    );
  };

  useEffect(() => {
    setCurrentImageSrc(project.imageSrc);
  }, [project.imageSrc]);

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm group"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.2), transparent 80%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={currentImageSrc}
            alt={project.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          {project.category && (
            <span className="absolute top-3 right-3 bg-slate-950/85 border border-slate-700 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0">
            {iconMap[project.icon] || <CodeIcon />}
          </div>
          <h3 className="text-lg font-bold text-slate-100 flex-grow">
            {project.name}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
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

// --- Main Projects Component ---
const Projects = () => {
  const categories = ["All", "Full-Stack", "AI / ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Showcasing My <span className="text-emerald-400">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of full-stack web applications and deep learning
            research projects I have built.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 font-medium cursor-pointer ${
                activeCategory === category
                  ? "bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                  : "bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-700/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ChromaProjectCard key={project.id || index} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore More on GitHub CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/refatkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900/80 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>Explore More Repositories on GitHub</span>
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
