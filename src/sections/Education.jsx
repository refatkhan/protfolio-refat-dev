import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

// Data remains the same
const educationData = [
    {
        title: "B.Sc in CSE",
        institution: "Daffodil International University",
        subject: "Computer Science & Engineering",
        duration: "2023 - Running"
    },
    {
        title: "Diploma in Engineering",
        institution: "Sherpur Polytechnic Institute",
        subject: "Computer Technology",
        duration: "2017 - 2021"
    }
];

// Reusable Timeline Item Component with new animation props
const TimelineItem = ({ data }) => {
    // Variants for the content to slide in from the right
    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
    };

    // Simpler fade-in for the timeline visuals
    const visualVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
    };

    return (
        <div className="flex gap-6 relative">
            {/* The vertical timeline bar and circle with a simple fade-in */}
            <motion.div
                className="flex flex-col items-center"
                variants={visualVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-emerald-400 flex-shrink-0"></div>
                <div className="w-0.5 flex-grow bg-slate-700 mt-2"></div>
            </motion.div>

            {/* Content area with the new slide-from-right animation */}
            <motion.div
                className="flex-1 pb-16"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="inline-block bg-emerald-900/80 text-emerald-300 text-md font-bold px-4 py-1.5 rounded-md mb-4">
                    {data.title}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-1">{data.institution}</h3>
                <p className="text-slate-400 font-medium mb-3">{data.subject}</p>
                <p className="text-sm text-emerald-400">{data.duration}</p>
            </motion.div>
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header animation remains the same */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaUniversity className="text-emerald-400" size={20} />
                        <p className="text-slate-400 font-medium tracking-wider">ACADEMIC BACKGROUND</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100">
                        Experience & <span className="text-emerald-400">Education</span>
                    </h2>
                </motion.div>

                <div>
                    {educationData.map((edu, index) => (
                        <TimelineItem key={index} data={edu} />
                    ))}

                    {/* The new, final circle at the end of the timeline */}
                    <motion.div
                        className="flex gap-6 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.9, delay: 0.7 }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-emerald-400 flex-shrink-0"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

