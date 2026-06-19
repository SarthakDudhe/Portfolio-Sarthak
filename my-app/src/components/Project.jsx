import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cbs from "../assets/CBSJAVA.png";
import prepgenie from "../assets/Prepgenie.png";
import chat from "../assets/Quickchat.png";
import "./Project.css";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Spark — AI Workspace",
    category: "Full-Stack AI Platform",
    description: "An AI-powered career workspace for resume management, resume-to-job matching, automated PDF feedback reports, and customized LinkedIn/outreach templates.",
    image: prepgenie, // using prepgenie as a sleek AI dashboard visual fallback
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Gemini AI"],
    liveLink: "https://spark-ai-beige.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/Spark--AI-Powered-Career-Workspace",
  },
  {
    id: 2,
    num: "02",
    title: "PrepGenie",
    category: "Interview Practice System",
    description: "An interactive web portal that helps candidates prepare for technical interviews step-by-step with dynamic question sets and real-time evaluation reports.",
    image: prepgenie,
    tags: ["React.js", "Express", "Node.js", "MongoDB", "Gemini API"],
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
  },
  {
    id: 3,
    num: "03",
    title: "QuickChat App",
    category: "Real-time Messaging Service",
    description: "A secure instant messaging platform featuring real-time communication via Socket.IO, JWT user authorization, and persistent chat archives.",
    image: chat,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
  },
  {
    id: 4,
    num: "04",
    title: "Feasto Platform",
    category: "Food Ordering System",
    description: "A full-stack food delivery application with user authentication, secure payment gateway processing via Stripe, and clean checkout states.",
    image: chat, // using chat as dashboard visual fallback
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://github.com/SarthakDudhe/Feasto-Food-Delivery-Platform",
    githubLink: "https://github.com/SarthakDudhe/Feasto-Food-Delivery-Platform",
  },
  {
    id: 5,
    num: "05",
    title: "Cab Booking System",
    category: "Desktop Application",
    description: "A robust Java-based booking system designed with Swing GUI, implementing database architectures for passenger dispatching and ride logs.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
  },
];

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header-minimal">
          <div className="mask-wrapper">
            <motion.span 
              className="section-label"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Works
            </motion.span>
          </div>
          <div className="mask-wrapper" style={{ marginBottom: "20px" }}>
            <motion.h1 
              className="projects-title"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              Featured Projects
            </motion.h1>
          </div>
          <motion.p 
            className="projects-desc"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            A showcase of web applications and software systems, emphasizing clean code, performance, and responsive UI design.
          </motion.p>
        </div>

        {/* Desktop Typographic Rows */}
        <div className="projects-desktop-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-row-item ${hoveredProject === project.id ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
            >
              <div className="project-row-content">
                <span className="project-row-num">{project.num}</span>
                <div className="project-row-info">
                  <h2 className="project-row-title">{project.title}</h2>
                  <span className="project-row-cat">{project.category}</span>
                </div>
                
                <div className="project-row-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="project-row-tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-row-tag-more">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="project-row-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-row-link"
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-row-link highlight"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Expandable description drawer on hover */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div 
                    className="project-row-drawer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="project-row-description">{project.description}</p>
                    <div className="project-row-drawer-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout (Sleek Borderless Cards) */}
        <div className="projects-mobile-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-mobile-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-mobile-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-mobile-body">
                <span className="project-mobile-cat">{project.category}</span>
                <h2 className="project-mobile-title">{project.title}</h2>
                <p className="project-mobile-desc">{project.description}</p>
                
                <div className="project-mobile-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-mobile-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-mobile-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-mobile-link-btn"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-mobile-link-btn primary"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
