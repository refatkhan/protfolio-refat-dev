import { projects } from "../utils/projects";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section className="min-h-screen bg-primary text-white py-20 px-6 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="border border-gray-700 p-6 rounded-xl transition-all duration-300 relative group"
                    >
                        {/* Hover Accent */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-xl pointer-events-none"></div>

                        <div className="flex items-center gap-2 text-cyan-400 mb-2 text-lg">
                            <span>{project.icon}</span>
                            <span>{project.category}</span>
                        </div>

                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center text-gray-400">
                <div className="text-3xl text-cyan-400 mb-2">{`</>`}</div>
                <h4 className="text-xl font-semibold mb-2">More Projects Coming Soon</h4>
                <p>Currently working on exciting new projects. Stay tuned for updates!</p>
            </div>
        </section>
    );
};

export default Projects;
