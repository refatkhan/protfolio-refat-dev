import React, { useState } from 'react';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMongoose,
    SiFirebase, SiGit, SiC, SiCplusplus, SiPostgresql, SiRedux
} from 'react-icons/si';
import { Pencil } from 'lucide-react';

// Main App Component
const Skills = () => {
    // Data for skills, including name, icon, and category
    const skills = [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" size={20} />, category: 'Frontend' },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" size={20} />, category: 'Frontend' },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={20} />, category: 'Frontend' },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" size={20} />, category: 'Frontend' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={20} />, category: 'Frontend' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={20} />, category: 'Frontend' },
        { name: 'React.js', icon: <SiReact className="text-cyan-400" size={20} />, category: 'Frontend' },
        { name: 'Next.js', icon: <SiNextdotjs size={20} />, category: 'Frontend' },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" size={20} />, category: 'Frontend' },
        { name: 'Express', icon: <SiExpress size={20} />, category: 'Backend' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={20} />, category: 'Backend' },
        { name: 'Mongoose', icon: <SiMongoose className="text-red-700" size={20} />, category: 'Backend' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" size={20} />, category: 'Backend' },
        { name: 'Postgresql', icon: <SiPostgresql className="text-blue-700" size={20} />, category: 'Backend' },
        { name: 'Git', icon: <SiGit className="text-orange-600" size={20} />, category: 'Tools' },
        { name: 'C', icon: <SiC className="text-blue-600" size={20} />, category: 'Tools' },
        { name: 'C++', icon: <SiCplusplus className="text-blue-700" size={20} />, category: 'Tools' },
    ];

    // Categories for filtering
    const categories = ['All', 'Frontend', 'Backend', 'Tools'];

    // State to keep track of the active category
    const [activeCategory, setActiveCategory] = useState('All');

    // Filter skills based on the active category
    const filteredSkills = skills.filter(skill =>
        activeCategory === 'All' || skill.category === activeCategory
    );

    return (
        <div className="bg-[#0c0c0c] min-h-screen w-full flex items-center justify-center font-sans p-4 relative overflow-hidden">
            {/* Background dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

            <div className="w-full max-w-4xl mx-auto z-10">
                {/* Top skills tag */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-gray-800 border border-gray-700 rounded-md p-1.5 inline-flex">
                        <Pencil size={16} className="text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-sm font-medium tracking-wider">SKILLS</p>
                </div>

                {/* Main title */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    My <span className="text-emerald-400">Skills</span>
                </h1>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ease-in-out font-medium
                ${activeCategory === category
                                    ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.6)]'
                                    : 'bg-gray-800/60 border border-gray-700 text-gray-300 hover:bg-gray-700/80'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredSkills.map(skill => (
                        <div
                            key={skill.name}
                            className="flex items-center justify-center sm:justify-start gap-3 bg-gray-800/60 border border-gray-700 rounded-full px-4 py-2.5 cursor-pointer
                         hover:bg-gray-700/80 transition-colors duration-300"
                        >
                            {skill.icon}
                            <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

