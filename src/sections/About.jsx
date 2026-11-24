import { motion } from "framer-motion";
import { Code2, Target, Palette } from "lucide-react";

const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-12 h-12 bg-slate-800/70 border border-slate-700 rounded-xl mb-4">
    {children}
  </div>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          A Little More About <span className="text-emerald-400">Me</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Point 1: Engineering & Research */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
            variants={itemVariants}
          >
            <IconWrapper>
              <Code2 className="w-6 h-6 text-emerald-400" />
            </IconWrapper>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Engineering &amp; Research
            </h3>
            <p className="text-slate-400 leading-relaxed">
              As a Computer Science undergraduate at Daffodil International University, I build scalable full-stack applications with React, Next.js, Node.js, and FastAPI alongside deep learning research in medical imaging.
            </p>
          </motion.div>

          {/* Point 2: Work I Enjoy */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
            variants={itemVariants}
          >
            <IconWrapper>
              <Target className="w-6 h-6 text-emerald-400" />
            </IconWrapper>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              What I Love to Build
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I focus on turning complex workflows—from automated university schedule scrapers to clinical AI diagnostic pipelines—into fast, intuitive, user-centered products designed in Figma and shipped to production.
            </p>
          </motion.div>

          {/* Point 3: Hobbies */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
            variants={itemVariants}
          >
            <IconWrapper>
              <Palette className="w-6 h-6 text-emerald-400" />
            </IconWrapper>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Beyond the Code
            </h3>
            <p className="text-slate-400 leading-relaxed">
              When I'm away from the terminal, you'll find me playing cricket or painting. Both keep my strategic thinking sharp and feed directly into my eye for clean UI/UX design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;