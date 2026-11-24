import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiEye,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaGithub,
  FaPlus,
  FaMinus,
  FaTelegramPlane,
  FaMicrosoft,
} from "react-icons/fa";

// Replace this with your free Access Key from https://web3forms.com (enter refatkhan.dev@gmail.com)
const WEB3FORMS_ACCESS_KEY = "8f9729b7-f0a3-44a7-90b5-d76bf8ecdac4";

const Section = ({ children, className = "" }) => (
  <motion.div
    className={`mb-16 ${className}`}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);

const InfoCard = ({ icon, title, text, link, cta, download = false }) => (
  <motion.a
    href={link}
    target={download ? undefined : "_blank"}
    rel={download ? undefined : "noopener noreferrer"}
    download={download}
    className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="flex-shrink-0 text-emerald-400 mt-1">{icon}</div>
    <div className="min-w-0">
      <h4 className="font-bold text-slate-100 mb-1">{title}</h4>
      <p className="text-slate-400 text-sm break-words">{text}</p>
      {cta && (
        <span className="text-emerald-400 text-sm font-semibold mt-2 inline-block">
          {cta} &rarr;
        </span>
      )}
    </div>
  </motion.a>
);

const PhoneCard = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex-shrink-0 text-emerald-400 mt-1">
        <FiPhone size={22} />
      </div>
      <div>
        <h4 className="font-bold text-slate-100 mb-1">Phone / WhatsApp</h4>
        {revealed ? (
          <>
            <p className="text-slate-300 text-sm font-medium">
              +880 1904-773224
            </p>
            <a
              href="tel:+8801904773224"
              className="text-emerald-400 text-sm font-semibold mt-2 inline-block hover:text-emerald-300"
            >
              Call Now &rarr;
            </a>
          </>
        ) : (
          <>
            <p className="text-slate-400 text-sm">+880 1904-XXXXXX</p>
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-semibold mt-2 cursor-pointer"
            >
              <FiEye size={14} />
              <span>Click to reveal</span>
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-slate-800"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <button
        type="button"
        className="w-full flex justify-between items-center py-5 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="font-semibold text-slate-100 pr-4">{question}</h5>
        <div className="text-emerald-400 flex-shrink-0">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-slate-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error");
      setStatusMessage(
        "Contact form key is not configured yet. Please email me directly at refatkhan.dev@gmail.com.",
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject:
            formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: "DevRefat Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage(
          "Thanks for reaching out! Your message has been sent and I will get back to you within 24–48 hours.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          result.message ||
            "Something went wrong. Please try again or email me directly.",
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network error. Please check your connection or email me directly at refatkhan.dev@gmail.com.",
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Let&apos;s <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a software project, internship opportunity, or AI research
            collaboration in mind? Send a message below or reach out through any
            of my channels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top Grid: Message Form (Left) + Direct Contact Cards (Right) */}
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Direct Message Form */}
              <div className="lg:col-span-7 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Fill out the form and it will land straight in my inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-spam honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full-Stack Project / SWE Role / Research Inquiry"
                      className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or opportunity..."
                      className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  {status === "success" && (
                    <div className="flex items-start gap-2.5 rounded-lg bg-emerald-950/70 border border-emerald-700/50 p-3.5 text-sm text-emerald-300">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-start gap-2.5 rounded-lg bg-red-950/70 border border-red-700/50 p-3.5 text-sm text-red-300">
                      <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-400 text-black font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-emerald-400/20 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    <FiSend className="w-4 h-4" />
                    <span>
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </form>
              </div>

              {/* Direct Contact Channels */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  Direct Channels
                </h3>

                <InfoCard
                  icon={<FiMail size={22} />}
                  title="Email"
                  text="refatkhan.dev@gmail.com"
                  link="mailto:refatkhan.dev@gmail.com"
                  cta="Send an Email"
                />

                <PhoneCard />

                <InfoCard
                  icon={<FaTelegramPlane size={22} />}
                  title="Telegram"
                  text="@refatkhan0"
                  link="https://t.me/refatkhan0"
                  cta="Message on Telegram"
                />

                <InfoCard
                  icon={<FaMicrosoft size={22} />}
                  title="Microsoft Teams"
                  text="refatkhan807@gmail.com"
                  link="https://teams.microsoft.com/l/chat/0/0?users=refatkhan807@gmail.com"
                  cta="Chat on Teams"
                />

                <InfoCard
                  icon={<FiMapPin size={22} />}
                  title="Location"
                  text="Dhaka, Bangladesh"
                  link="https://maps.app.goo.gl/DoauaYiEKAnq2aCn7"
                  cta="View on Map"
                />
              </div>
            </div>
          </Section>

          {/* Profiles & Resume */}
          <Section>
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Profiles &amp; Resume
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                icon={<FiFileText size={22} />}
                title="Resume / CV"
                text="View or download my latest full-stack & research CV."
                link="/resume_of_Ismail_Khan_Refat.pdf"
                cta="Open Resume PDF"
              />
              <InfoCard
                icon={<FaLinkedinIn size={22} />}
                title="LinkedIn"
                text="Ismail Khan Refat"
                link="https://www.linkedin.com/in/refatkhan/"
                cta="Connect on LinkedIn"
              />
              <InfoCard
                icon={<FaGithub size={22} />}
                title="GitHub"
                text="github.com/refatkhan"
                link="https://github.com/refatkhan"
                cta="Explore Repositories"
              />
            </div>
          </Section>

          {/* Quick Response */}
          <Section className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
            <div className="flex items-start gap-4">
              <FiMessageSquare
                size={28}
                className="text-emerald-400 flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  Quick Response &amp; Focus Areas
                </h3>
                <p className="text-slate-400 mb-4">
                  I typically respond within 24–48 hours. Feel free to reach out
                  for roles, freelance builds, or technical collaborations in:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    Full-Stack Development
                  </span>
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    React &amp; Next.js
                  </span>
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    TypeScript
                  </span>
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    Node.js &amp; FastAPI
                  </span>
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    PostgreSQL
                  </span>
                  <span className="bg-emerald-700/30 text-emerald-300 text-sm font-medium px-3.5 py-1 rounded-full">
                    AI / Medical Imaging
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className="mb-0">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Frequently Asked Questions
            </h3>
            <FaqItem
              question="What is your current availability for freelance or engineering roles?"
              answer="I am open to software engineering internships, part-time/full-time full-stack opportunities, and select freelance projects. Share your timeline and requirements, and I will respond promptly."
            />
            <FaqItem
              question="Which technologies do you specialize in right now?"
              answer="On the web engineering side, I build with React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, and MongoDB. On the AI side, I work with PyTorch and hybrid CNN-Transformer architectures for clinical chest X-ray analysis."
            />
            <FaqItem
              question="Are you open to research or open-source collaboration?"
              answer="Yes—I enjoy collaborating on open-source developer tools, full-stack web platforms, and deep learning research papers. Connect with me on LinkedIn or GitHub to discuss ideas."
            />
          </Section>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
