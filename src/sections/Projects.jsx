import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// Project data remains the same for easy management
const projectsData = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle></svg>,
        tags: [{ text: "Full Stack Development", color: "green" }, { text: "Role: Team Leader", color: "blue" }],
        title: "Academy.PY",
        description: "Developed a community-driven learning platform for Python and programming, featuring video lessons, documentation, Q&A, and problem-solving. Built with Remix, TypeScript, Node.js, and MongoDB.",
        techStack: ["Next.js", "React", "Stripe", "Tailwind"],
        link: "#"
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        tags: [{ text: "Web Development", color: "green" }],
        title: "Easy School Management",
        description: "Created a role-based school management system with dynamic class, fee, and exam configurations. Developed using React.js, Node.js, Express.js, and Docker for scalability and efficiency.",
        techStack: ["React", "Node.js", "TypeScript", "Multer", "Mongoose"],
        link: "#"
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
        tags: [{ text: "Web Development", color: "green" }],
        title: "Vacation Rental",
        description: "Developed a vacation rental platform where users can browse, book, and manage apartments seamlessly. Features include property listings, booking management, and secure authentication.",
        techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        link: "#"
    }
];

// Reusable Project Card Component with updated hover effect
const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="bg-slate-800/40 p-6 rounded-lg border border-slate-700 flex flex-col h-full group"
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            // The main transition for the initial "appear" animation
            transition={{ duration: 0.5 }}
            // UPDATED: New hover animation properties
            whileHover={{
                y: -8, // Lifts the card up
                boxShadow: "0px 5px 10px rgba(52, 211, 153, 0.4)" // Adds an emerald shadow/glow
            }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 border border-slate-700 rounded-md group-hover:border-emerald-500 transition-colors duration-300">
                    {project.icon}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <FiExternalLink size={24} />
                </a>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag.text} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tag.color === 'green' ? 'bg-emerald-900/70 text-emerald-300' : 'bg-sky-900/70 text-sky-300'}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                    <span key={tech} className="text-sm bg-slate-700/50 px-3 py-1 rounded-md text-slate-300">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};


const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="text-emerald-400">Projects</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

                    <motion.div
                        className="bg-slate-800/10 p-6 rounded-lg border border-slate-700 flex flex-col items-center justify-center text-center lg:col-span-2"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-3 border border-slate-700 rounded-md mb-4">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2">More Projects Coming Soon</h3>
                        <p className="text-slate-400 max-w-md">
                            I'm constantly exploring new technologies and building exciting things. Stay tuned for my latest work!
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;