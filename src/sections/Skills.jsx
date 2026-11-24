import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiFirebase,
  SiPython,
  SiPytorch,
  SiGit,
  SiFigma,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { Pencil } from "lucide-react";

const Skills = () => {
  const skills = [
    // Frontend
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500" size={20} />,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-500" size={20} />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" size={20} />,
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500" size={20} />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={20} />,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" size={20} />,
      category: "Frontend",
    },
    {
      name: "React.js",
      icon: <SiReact className="text-cyan-400" size={20} />,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" size={20} />,
      category: "Frontend",
    },

    // Backend & Databases
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" size={20} />,
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white" size={20} />,
      category: "Backend",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="text-teal-400" size={20} />,
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-sky-400" size={20} />,
      category: "Backend",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-slate-200" size={20} />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={20} />,
      category: "Backend",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-red-500" size={20} />,
      category: "Backend",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-sky-500" size={20} />,
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" size={20} />,
      category: "Backend",
    },

    // AI & Languages
    {
      name: "Python",
      icon: <SiPython className="text-yellow-300" size={20} />,
      category: "AI & Languages",
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="text-orange-500" size={20} />,
      category: "AI & Languages",
    },
    {
      name: "C",
      icon: <SiC className="text-blue-500" size={20} />,
      category: "AI & Languages",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-600" size={20} />,
      category: "AI & Languages",
    },

    // Tools
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" size={20} />,
      category: "Tools",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-pink-500" size={20} />,
      category: "Tools",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "AI & Languages", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section
      id="skills"
      className="w-full flex items-center justify-center font-sans relative overflow-hidden py-20 md:py-32"
    >
      <div className="w-full max-w-6xl px-6 mx-auto z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-slate-800/80 border border-slate-700 rounded-md p-1.5 inline-flex">
              <Pencil size={16} className="text-emerald-400" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider">
              SKILLS &amp; TECH STACK
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-8">
            My <span className="text-emerald-400">Skills</span>
          </h2>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ease-in-out font-medium cursor-pointer ${
                activeCategory === category
                  ? "bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                  : "bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-700/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="flex items-center justify-center sm:justify-start gap-3 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-2.5 cursor-pointer hover:bg-slate-700/80 hover:border-emerald-400 transition-colors duration-300"
              >
                {skill.icon}
                <span className="text-slate-200 text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
