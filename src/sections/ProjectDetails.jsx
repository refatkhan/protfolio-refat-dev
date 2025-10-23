import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import projectsData from '../assets/projects.json';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [currentImageSrc, setCurrentImageSrc] = useState('');

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === projectId);
        setProject(foundProject);
        if (foundProject) {
            setCurrentImageSrc(foundProject.imageSrc);
        }
        window.scrollTo(0, 0);
    }, [projectId]);

    const handleImageError = () => {
        setCurrentImageSrc(
            project?.fallbackImage ||
            "https://placehold.co/1200x600/1e293b/475569?text=Image+Not+Available"
        );
    };

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 px-6">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <p className="text-slate-400 mb-8">
                    Sorry, we couldn't find the details for this project.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-emerald-500 transition-all"
                >
                    <FiArrowLeft /> Back to Home
                </Link>
            </div>
        );
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
    };

    return (
        <section className="text-slate-100 py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                    >
                        <FiArrowLeft /> Back to Projects
                    </Link>
                </motion.div>

                {/* Project Title */}
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {project.name}
                </motion.h1>

                {/* Project Image */}
                <motion.div
                    className="mb-12 rounded-lg overflow-hidden border border-slate-700 shadow-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <img
                        src={currentImageSrc}
                        alt={project.name}
                        className="w-full h-auto object-cover max-h-[500px]"
                        onError={handleImageError}
                    />
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Project Overview</h2>
                            <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FiCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                                        <span className="text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="space-y-8"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9 }}
                    >
                        {/* Tech Stack */}
                        <motion.div>
                            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Technology Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1 rounded-full border border-slate-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Links */}
                        <div>
                            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Links</h2>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-1 items-center justify-center gap-2 bg-emerald-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg shadow-emerald-400/20 hover:bg-emerald-500 transition-all"
                                >
                                    <FiExternalLink /> Live Site
                                </a>

                                {project.githubLink && project.githubLink !== "#" && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 border border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-md hover:bg-slate-800 hover:text-white transition-all"
                                    >
                                        <FiGithub /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
