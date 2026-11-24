import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const certificatesData = [
  {
    title: "Complete Web Development (Level-1)",
    issuer: "Programming Hero",
    status: "Completed",
    credentialUrl: "https://www.programming-hero.com/",
    ctaText: "View Program",
  },
  {
    title: "Next Level Web Development (Level-2)",
    issuer: "Programming Hero",
    status: "In Progress",
    credentialUrl: "https://www.programming-hero.com/",
    ctaText: "View Program",
  },
  {
    // Tomar Credly badge-er exact naam-ta eikhane likho (e.g., AWS / Cisco / IBM)
    title: "Verified Digital Credential Badge",
    issuer: "Credly",
    status: "Verified",
    credentialUrl:
      "https://www.credly.com/badges/915559da-9e1c-43ce-b38f-25c83b370d0a/linked_in_profile",
    ctaText: "Verify Badge",
  },
  {
    // 10 Minute School-er prothom certificate-er exact course naam-ta eikhane likho
    title: "Professional Skill Certificate",
    issuer: "10 Minute School",
    status: "Verified",
    credentialUrl: "https://10minuteschool.com/certificate/6901d64852de3/",
    ctaText: "Verify Certificate",
  },
  {
    // 10 Minute School-er ditiyo certificate-er exact course naam-ta eikhane likho
    title: "Skill Development Certificate",
    issuer: "10 Minute School",
    status: "Verified",
    credentialUrl: "https://10minuteschool.com/certificate/6901056b9f30d/",
    ctaText: "Verify Certificate",
  },
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaAward className="text-emerald-400" size={20} />
            <p className="text-slate-400 font-medium tracking-wider">
              CREDENTIALS &amp; TRAINING
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Courses &amp;{" "}
            <span className="text-emerald-400">Certifications</span>
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certificatesData.map((cert, index) => {
            const isRunning = cert.status === "In Progress";

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-lg text-emerald-400">
                      <FaAward size={20} />
                    </div>

                    {isRunning ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-950/70 border border-amber-700/50 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        {cert.status}
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-700/40 px-3 py-1 rounded-full">
                        {cert.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">
                    {cert.issuer}
                  </p>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-auto pt-3 border-t border-slate-800/80"
                  >
                    <span>{cert.ctaText || "Verify Credential"}</span>
                    <FiExternalLink size={15} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
