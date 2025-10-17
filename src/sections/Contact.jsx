import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaPlus, FaMinus, FaTelegramPlane, FaMicrosoft } from 'react-icons/fa';

// --- Reusable Components ---

// Section component for consistent styling and animation
const Section = ({ children, className = "" }) => (
    <motion.div
        className={`mb-16 ${className}`}
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
        }}
    >
        {children}
    </motion.div>
);

// Card for contact and social links
const InfoCard = ({ icon, title, text, link, cta }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900/60 p-6 rounded-lg border border-slate-800 flex items-start gap-4 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300"
        variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <div className="flex-shrink-0 text-emerald-400 mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-slate-100 mb-1">{title}</h4>
            <p className="text-slate-400 text-sm">{text}</p>
            {cta && <span className="text-emerald-400 text-sm font-semibold mt-2 inline-block">{cta} &rarr;</span>}
        </div>
    </motion.a>
);

// FAQ Item component with accordion logic
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            className="border-b border-slate-800"
            variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <button
                className="w-full flex justify-between items-center py-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h5 className="font-semibold text-slate-100">{question}</h5>
                <div className="text-emerald-400">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-5 text-slate-400 leading-relaxed">{answer}</p>
            </motion.div>
        </motion.div>
    );
};


// --- Main Contact Component ---
const Contact = () => {
    // Stagger animation for containers
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Let's <span className="text-emerald-400">Connect</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Here’s how you can reach me.
                    </p>
                </motion.div>

                {/* Main container with staggered animations */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Direct Contact */}
                    <Section>
                        <h3 className="text-2xl font-bold text-slate-100 mb-8">Direct Contact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoCard icon={<FiMail size={22} />} title="Email" text="refatkhan.dev@gmail.com" link="mailto:refatkhan.dev@gmail.com" cta="Send an Email" />
                            <InfoCard icon={<FiPhone size={22} />} title="Phone" text="+880 1904-773224" link="tel:+8801904773224" cta="Call Me" />
                            <InfoCard icon={<FaTelegramPlane size={22} />} title="Telegram" text="@refatkhan0" link="https://t.me/refatkhan0" cta="Message on Telegram" />
                            <InfoCard icon={<FaMicrosoft size={22} />} title="Microsoft Teams" text="refatkhan807@gmail.com" link="#" cta="Connect on Teams" />
                            <InfoCard icon={<FiMapPin size={22} />} title="Location" text="Dhaka, Bangladesh" link="https://maps.app.goo.gl/DoauaYiEKAnq2aCn7" cta="View on Map" />
                        </div>
                    </Section>

                    {/* Social Profiles */}
                    <Section>
                        <h3 className="text-2xl font-bold text-slate-100 mb-8">Social Profiles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <InfoCard icon={<FiExternalLink size={22} />} title="All Profiles Hub" text="Central link to all my profiles." link="#" cta="Visit Hub" />
                            <InfoCard icon={<FaLinkedinIn size={22} />} title="LinkedIn" text="Ismail Khan Refat" link="https://www.linkedin.com/in/refatkhan/" cta="View Profile" />
                            <InfoCard icon={<FaGithub size={22} />} title="GitHub" text="refatkhan" link="https://github.com/refatkhan" cta="View Profile" />
                        </div>
                    </Section>

                    {/* Quick Response */}
                    <Section className="bg-slate-900/60 p-8 rounded-lg border border-slate-800">
                        <div className="flex items-start gap-4">
                            <FiMessageSquare size={28} className="text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-100 mb-2">Quick Response</h3>
                                <p className="text-slate-400 mb-4">I typically respond within 24-48 hours. For urgent matters, please use email or phone. My primary areas of interest include:</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3 py-1 rounded-full">Frontend Developer</span>
                                    <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3 py-1 rounded-full">React</span>
                                    <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3 py-1 rounded-full">MERN Projects</span>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* FAQ Section */}
                    <Section>
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h3>
                        <FaqItem
                            question="What is your current availability for freelance projects?"
                            answer="I am currently open to discussing new freelance opportunities. My availability can vary, so please reach out with your project details, and I'll get back to you with my current schedule."
                        />
                        <FaqItem
                            question="Which technologies are you most excited about right now?"
                            answer="I'm particularly excited about the advancements in TypeScript, Node.js, and Go — especially how they enable building fast, scalable, and modern web applications."
                        />

                        <FaqItem
                            question="Do you offer mentorship or tutoring?"
                            answer="While I don't have a formal mentorship program, I'm passionate about helping others grow. Feel free to connect with me on LinkedIn or GitHub. I occasionally participate in community discussions and am happy to offer advice when I can."
                        />
                    </Section>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

