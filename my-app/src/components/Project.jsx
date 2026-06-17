import React from "react";
import { motion } from "framer-motion";
import { Monitor, Palette, Zap } from "lucide-react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Cab Booking System",
    description:
      "A Java-based cab booking system that allows users to book cabs, track rides, and manage bookings efficiently.",
    icon: <Monitor size={32} strokeWidth={2.5} />,
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
    delay: 0.1,
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
  },
  {
    id: 2,
    title: "Prepgenie",
    description:
      "PrepGenie is a platform that helps you prepare for interviews step by step. You can create your own practice sessions, choose different topics like algorithms or system design, and get questions in a clean and easy-to-use interface.",
    icon: <Palette size={32} strokeWidth={2.5} />,
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
    delay: 0.2,
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
  },
  {
    id: 3,
    title: "QuickChat",
    description:
      "Built a secure, real-time chat platform using Socket.IO with authentication and instant messaging. Developed RESTful APIs with Node.js/Express.js and integrated MongoDB for message storage.",
    icon: <Zap size={32} strokeWidth={2.5} />,
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
    delay: 0.3,
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
  },
];

const FeatureCard = ({ title, description, icon, gradient, delay, liveLink, githubLink }) => {
  return (
    <motion.div
      className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 w-full h-[260px] md:h-[300px] opacity-60 rounded-[40px] pointer-events-none"
        style={{
          background: gradient,
          filter: "blur(45px)",
        }}
      />
      {/* Foreground Card with Gradient Border */}
      <div
        className="relative self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden border-[8px] border-transparent"
        style={{
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-7 flex flex-col justify-between">
          <div className="flex flex-col items-start text-left">
            <div className="text-white/90 mb-4">{icon}</div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
          
          {/* Project Links */}
          <div className="flex gap-4 mt-2 z-20">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
            >
              🔗 Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <section
      className="projects-section min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden"
      id="projects"
    >
      <div className="projects-header mb-12 text-center z-10">
        <h1 className="text-white font-medium text-3xl md:text-4xl mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-gray-400 text-base max-w-lg mx-auto">
          Explore some of my recent works showcasing diverse technologies and designs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px] z-10">
        {projects.map((project) => (
          <FeatureCard
            key={project.id}
            title={project.title}
            description={project.description}
            icon={project.icon}
            gradient={project.gradient}
            delay={project.delay}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
